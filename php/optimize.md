# 性能优化

## PHP-FPM

### 进程管理

::: tip pm
这个参数用来控制php-fpm进程创建是动态创建还是在php-fpm启动时就创建好
:::

* value:

    * pm = `static`
        启动时，就创建好进程

        static在启动时创建，能节省动态创建php-fpm进程的开销

    * pm = `dynamic`
        动态的创建进程

    * pm = `ondemand`
        有需求时创建


#### pm = `dynamic` 

    相关参数

    * pm.max_children           子进程最大数

    * pm.start_servers          启动时的进程数

    * pm.min_spare_servers      保证空闲进程数最小值，如果空闲进程小于此值，则创建新的子进程

    * pm.max_spare_servers      保证空闲进程数最大值，如果空闲进程大于此值，此进行清理

* 注意：`pm.min_spare_servers 和 pm.max_spare_servers 不能大于 pm.max_children`


#### pm = `static` 相关参数


    * pm.max_children           子进程最大数


#### 实际配置

::: warning 注意事项
一个php-fpm进程，大约可以计算程30M内存。

计算公式 ：内存 / 30 = 实际可以配置的进程数
:::

```
pm=dynamic
pm.max_children=24
pm.start_servers=16 
pm.min_spare_servers=12
pm.max_spare_servers=24
```

## PHP.INI

### 页面内存大小

::: tip memory_limit
最大单线程的独立内存使用量。也就是一个web请求，给予线程最大的内存使用量的定义。
:::

::: tip 配置
默认配置 128M
:::

* 一旦独立的线程超过了128M，那PHP会报错：