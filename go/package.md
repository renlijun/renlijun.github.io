# Package

::: tip
如何定义一个package
:::

# 目录
[[toc]]

## 创建Package

``` linux
mkdir user
cd user
touch login.go
```

``` go
package user

func LoginProcess(name string, password string ) bool {
	return true
}
```

## 调用
``` go
package main

import (
    "user"
)

func main {
    user.LoginProcess("Renlj", "123455")
}

```
