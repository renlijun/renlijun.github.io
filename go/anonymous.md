# 匿名函数

::: tip
go的匿名函数写法
:::

# 种类
[[toc]]

## 第一种
Some nice text

``` go
func main(){
  func(a int, b int) {
		fmt.Println(a+b)
	}(1,2)   //打印3
}
```

## 第二种
Some nice text

``` go
func main(){
  fn := func(){
    fmt.Println("hello")
  }
  //调用
  fn()

  //打印函数结构体
  fmt.Printf("%T\n",fn)
}
```