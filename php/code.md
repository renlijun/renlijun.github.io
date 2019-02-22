# 开发思想的案例、解决

::: tip 为什么要写这篇帖

软件架构已经有前辈提出了：设计模式、MVC等数不清的优秀思想的

优秀思想的本质是离不开代码的：阅读性、维护性、扩展性、健壮性几个方面

我在这里分享一些这些年，学习到的实际开发过程中的小技巧

希望能够对大家有一些帮助

代码的演示用的Laravel 框架

如果大家有好的开发思想，欢迎来搞

:::


## 单一职责状态类

### 案例说明
* 在开发过程中，有很多状态，很多人喜欢数字来表示
* 有时候还需要展示，状态值对应的文字说明，或许有很多地方都要展示，比如订单状态
* 日积月累，很多业务需要做重复的操作和判断，数字状态也变得难以阅读和理解

``` php
if ($userPayState == 1) {
    //未支付
}

if ($userPayState == 1) {
    $message = '未支付'
}
```

### 解决方案

::: tip 解决思路

按照业务划分，做成不同的单一职责状态类。
每个状态类里，用常量表示值，每个值对应一个文字说明
:::

* 业务状态类

``` php
<?php 

namespace App\Helper\Enums;

class PayEnum
{   
    /*
	|----------------------------------------
	| 支付状态
	|----------------------------------------
	*/
    const USER_PAY_NOT   = 1; //未支付
    const USER_PAY_ERROR = 2; //支付失败

    /**
     * 根据状态获取对应的文字信息
     * @param int $stateCode
     * @return string
     */
    public function getMsgByState(int $stateCode)
    {
        switch ($stateCode) {
            case self::USER_PAY_NOT:
                $message = '未支付';
                break;
            case self::USER_PAY_ERROR:
                $message = '支付失败';
                break;
            default:
                $message = '状态异常';
                break;
        }

        return $message;
    }
}

?>
```

* 业务方：

``` php

//判断时，采用常量
if ($userPayState == PayEnum::USER_PAY_NOT) {
    //未支付
}

//需要显示状态时
$userPayState = 1;
$userPayStateMsg = PayEnum::getMsgByState($userPayState)

```

## 单一职责验证类

### 案例说明
* 每个对外提供的API，都要提供验证表单, 一般我们会在控制器来做这些验证
* 但是，这些验证的完善程度，取决于程序员的水平
* 而且，验证过程有可能会很长，会影响 Controller 的阅读体验

``` php
$account  = $_POST['account'];
$password = $_POST['password'];

//大部分人的验证表单方式
if (!$account || !$password) {
    //
}
```

### 解决思路

::: tip 拆分、解偶、单一职责
* 案例代码采用 `Laravel` 框架的FormRequest
* 我们应该提供一个单独的验证类，一个方法用来验证规则，一个用来输出规则描述
* 把这个验证类，注入到控制类
* 这些验证父类 包括 类型、长度、范围、过滤 等，强大而健壮
* 这相对来说是低成本的
:::


* 验证类

``` php Laravel
<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * 验证规则
     *
     * @return array
     */
    public function rules()
    {
        return [
            'account'   => 'required|email',
            'password'  => 'required|string|min:6|max:20',
        ];
    }

    /**
     * 验证规则对应的错误信息
     *
     * @return array
     */
    public  function  messages()
    {
        return[
            'account.required'   => '形态名称必填',
            'account.email'      => '账号格式必须为邮箱',
            'password.required'  => '状态值必填',
            'password.min'       => '密码最少为6位',
            'password.max'       => '密码最长为20位',
        ];
    }

}
?>
```

* 控制器

``` php
<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\LoginRequest; 
use Illuminate\Http\JsonResponse;

class LoginController
{
    /**
     * 用户登陆
     * @param App\Http\Requests\User\LoginRequest
     */
    public function login(LoginRequest $request)
    {

    }
}
?>
```

## 服务类

### 案例说明

::: tip 请求路径
Controller -> Service -> Model
:::

* 我们不再控制器去实现具体的业务
* 具体的实现业务交给service
* service 达到最大化的复用
* 调用service者，不关心具体点实现过程，根据接口来调用

### 解决思路

``` php
namespace App\Services\Demo;

interface DemoService
{
    /**
     * case 
     * @return array
     */
    public function case();
}
```


## 错误类

### 案例说明

* 大多数情况下，我们的错误码都是只定义了公用的
* 或者说，只在业务里，随意的撰写的数字
* 久而久之，状态码不是唯一，排查起来困难

### 解决思路

::: tip
* 错误码统一管理
* 每个业务的错误码需要在BaseError中定义才生效
:::

* BaseError.php

``` php
namespace App\Helper\Errors;

class BaseError{

	/**
	 * 业务错误码的定义
	 * --------------------------
	 * key   业务错误文件的路径
	 * value 业务错误码的区间
	 * --------------------------
	 * 每个业务的错误码区间不要重复
	 */
	private static $bizErrorCodeSection = [
		CommonError::class		 		=> [1000, 2000],
		UserError::class   				=> [2001, 2500],
		MQError::class					=> [2501, 2510]
    ];
}
``` 

* 业务错误码的定义

``` php
namespace App\Helper\Errors;

class CommonError extends BaseError
{
    const COMMON_SUCCESS   			= 2000;
    const COMMON_VALIDATION_ERROR   = 1001;
    const COMMON_SERVICE_UNDEFINED  = 1002;
    const COMMON_UNKNOWN            = 1003;
    const COMMON_NOT_FOUND          = 1004;
    const COMMON_PARAMS_MISSING     = 1005;
    const COMMON_OPERATION_FAILED   = 1006;
    const UPLOAD_FILE_EMPTY         = 1007;
    const FILE_CONTENT_EMPTY        = 1008;
    const FILE_TEMPLATE_WRONG       = 1009;
    const FILE_NOT_EXCEL            = 1010;
    const COMMON_UNKNOWN_WAREHOUSE  = 1011;
    const EXPORT_DATA_EMPTY         = 1012;
    const SQL_EXCEPTION             = 1013; 
    const VERIFY_FAIL               = 1014;
    const STATUS_CANNOT_UPDATE      = 1015;
    const TOKEN_EXCEPTION           = 1016;
    const TOKEN_REQUEST_EXCEPTION   = 1017;
    const TOKEN_USER_EXCEPTION      = 1018;
    const REQUEST_JAVA_EXCEPTION    = 1019;
    const REQUEST_OTHER_EXCEPTION   = 1020;

    public static $message = [
        self::COMMON_SUCCESS 		    => '处理成功',
        self::COMMON_VALIDATION_ERROR   => '数据验证错误,:attribute',
        self::COMMON_SERVICE_UNDEFINED  => 'Service 未设置错误信息',
        self::COMMON_UNKNOWN            => '服务器繁忙，请稍候在试',
        self::COMMON_NOT_FOUND          => '没有找到对应的信息',
        self::COMMON_PARAMS_MISSING     => '缺少参数 :attribute',
        self::COMMON_OPERATION_FAILED   => '操作失败',
        self::UPLOAD_FILE_EMPTY         => '请上传文件',
        self::FILE_CONTENT_EMPTY        => '文件内容为空',
        self::FILE_TEMPLATE_WRONG       => '上传模版文件格式不正确',
        self::FILE_NOT_EXCEL            => '文件不是EXCEL，重新上传',
        self::COMMON_UNKNOWN_WAREHOUSE  => '缺少仓库ID',
        self::EXPORT_DATA_EMPTY         => '导出数据为空',
        self::VERIFY_FAIL               => '审核操作失败 :attribute',
        self::SQL_EXCEPTION             => 'SQL异常',
        self::STATUS_CANNOT_UPDATE      => '当前状态不可进行此操作',
        self::TOKEN_EXCEPTION           => 'TOKEN 异常',
        self::TOKEN_REQUEST_EXCEPTION   => 'TOKEN 请求异常 :attribute',
        self::TOKEN_USER_EXCEPTION      => '获取用户信息时，异常',
        self::REQUEST_JAVA_EXCEPTION    => '请求用户系统异常。错误信息: :attribute',
        self::REQUEST_OTHER_EXCEPTION   => '请求其他系统异常 :attribute'
    ];
}
```