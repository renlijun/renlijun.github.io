# PHP7

## PHP7快在哪里

* 减少内存分配次数
* 多使用栈内存，
* 缓存数组hash值
* 字符串解析成参数改为宏展开
* 使用大块连续内存代替小块碎片内存等等。

## 性能提升

### Opcache

::: tip Opcache
通过将 PHP 脚本预编译的字节码存储到共享内存中来提升 PHP 的性能， 存储预编译字节码的好处就是 省去了每次加载和解析 PHP 脚本的开销
:::

* 启用Opcache非常简单,在php.ini配置文件中加入:
```
zend_extension=opcache.so
opcache.enable=1
opcache.enable_cli=1"
```

### GCC
::: tip GCC
gcc是一个编译器,
:::

* 推荐GCC 4.8以上, 因为只有GCC 4.8以上PHP才会开启Global Register for opline and execute_data支持, 这个会带来5%左右的性能提升

### HugePage
::: tip HugePage
HugePage linux的大页内存
:::

* CentOS 6.5为例, 分配512预留的大页内存
```
sysctl vm.nr_hugepages=512
```

* php 开启 huge_code_pages
```
 opcache.huge_code_pages=1
```

### Opcache file cache
::: tip Opcache file cache
开启Opcache File Cache(实验性), 通过开启这个, 我们可以让Opcache把opcode缓存缓存到外部文件中, 对于一些脚本, 会有很明显的性能提升.
:::

* php.ini开启
```
opcache.file_cache=/tmp
```

* 这样PHP就会在/tmp目录下Cache一些Opcode的二进制导出文件, 可以跨PHP生命周期存在.