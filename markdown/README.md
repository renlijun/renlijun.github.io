# 快速上手

## 下载软件
[根据系统下载对应的软件包](https://golang.google.cn/dl/)

* MacOS

  MAC 系统下你可以使用 .pkg 结尾的安装包直接双击来完成安装。

* Windows


## 安装
该文章只使用MacOs安装
* MacOS

  MAC 系统下你可以使用 使用.pkg 结尾的安装包直接双击来完成安装，安装目录在 
  ``` linux
  /usr/local/go/
  ```

* 安装完成检查
  ``` go
  go version
  ```


## 环境变量
* 相关环境变量
  ::: tip GOROOT
  为我们开发常用的目录
  :::

  ::: tip GOPATH
  为我们开发常用的目录
  :::

  ::: tip GOBIN
  是GOPATH下的bin目录
  :::

  ::: tip PATH
  需要go-bin目录加入到path路径下，生成可执行文件就可以直接运行了。
  :::

* 加入配置文件
  
  * 当前用户 `~/.bash_profile`
  
  * 所有用户 `/ect/profile `

  * 执行
  ``` linux
  source ~/.bash_profile
  source /ect/profile
  ```

  * 查看
  ``` linux
  go env
  ```
