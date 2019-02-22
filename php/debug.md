# 调试

:::tip 说明

一个程序在运行中，会出现很多错误

没有按预期运行

那我们应该用方式来排查

:::

## 错误信息 / 日志

* 通常我们可以在PHP.ini中设置
* 或者在代码中，ini_set设置

[PHP官方手册](http://php.net/manual/zh/errorfunc.configuration.php#ini.display-errors)

:::tip log_errors
* 错误日志 `log_errors`
:::

::: tip error_reporting 
error_reporting 设置错误报告的级别。
:::

::: tip display_errors / display_startup_errors
display_errors 该选项设置是否将错误信息作为输出的一部分显示到屏幕，或者对用户隐藏而不显示。
:::

``` php
error_reporting(E_ALL);
ini_set('display_errors','On');
ini_set('log_errors', 'On');
```

## 断点

* var_dump / die 惯用多简单粗暴有效多解决问题方法。
* xdebug + 浏览器 + IDE

## Strace

strace可以用来查看系统调用的执行，使用strace php test.php，或者strace -p 进程ID。strace就可以帮助你透过现象看本质，掌握程序执行的过程。

## Trace

phptrace 是一个追踪（trace）PHP执行流程的工具，你如果用过strace的话，则可能很容易想到phptrace到底实现了什么样的功能。其实，phptrace是类strace的一个实现，不同的是，strace用来追踪系统调用，而phptrace用来追踪PHP函数调用。

[PHP Trace](https://mp.weixin.qq.com/s?__biz=MzAxNzMwOTQ0NA%3D%3D&mid=2653354782&idx=2&sn=9b63f6655230bec82d37a97968a55926&chksm=8035d175b74258632c3fecb6f18ed4f961afb5cf69bd2b6f547b44a3f73d9c98bf0f27720a99)


## Tcpdump

* tcpdump可以抓到网卡的数据通信过程，甚至数据内容也可以抓到。

* 使用tcpdump可以看到网络通信过程是什么样的，如何时发起了TCP SYN3次握手，何时发送FIN包，何时发送RST包。

## 查看函数调用的指标

* 可以使用第三方工具来检查每个API运行的耗时、成功率、内存、IO等情况

* 这样也更透明的去理解

## gdb

* gdb是C/C++调试程序的利器，需要具备一定C/C++功底的程序员才会能熟练使用gdb。

* 上面说的strace无法跟踪php程序CPU100%，而gdb是可以跟踪的。另外gdb也可以解决php程序core dump的问题。

## PHP内核和扩展源码

* 配合gdb工具和对PHP源码的熟悉，可以查看opcode的信息，execute_data的内存，全局变量的状态等。
