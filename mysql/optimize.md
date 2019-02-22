# 性能优化
    
## 配置参数
* `max_connections`   
    连接数
* `max_user_connections`

    每个数据库用户的最大连接

* `back_log`

    MySQL暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中

* `wait_timeout`

    MySQL客户端的数据库连接闲置最大时间值。

* `thread_concurrency`

    让MySQL充分利用多核，`MySQL 5.7已经移除`
* `skip-name-resolve`

* 

## max_connections
* max_connections是指MySql的最大连接数
* 默认配置默认是151
* MySQL服务器允许最大的连接数是16384
* 查看系统当前的最大连接数
``` sql
show variables like 'max_connections';
```

## max_user_connections

* 是指每个数据库用户的最大连接
* 设置为0，表示不限制，`默认是0`
``` sql
show variables like 'max_user_connections';
```


## back_log
* MySQL暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中
* 也就是说，如果MySql的连接数据达到max_connections时，新来的请求将会被存在堆栈中以等待某一连接释放资源，该堆栈的数量即back_log，
* 如果等待连接的数量超过back_log，将不被授予连接资源。将会报错。unauthenticated user | xxx.xxx.xxx.xxx | NULL | Connect | NULL | login | NULL 的待连接进程时.
* back_log值不能超过TCP/IP连接的侦听队列的大小。若超过则无效。查看当前系统的TCP/IP连接的侦听队列的大小命令：cat /proc/sys/net/ipv4/tcp_max_syn_backlog目前系统为1024。对于Linux系统推荐设置为小于512的整数。

``` sql
show variables like 'back_log';
```

## wait_timeout
* MySQL客户端的数据库连接闲置最大时间值。
* 当你的MySQL连接闲置超过一定时间后将会被强行关闭
* MySQL默认的wait-timeout  值为8个小时
* 设置这个值是非常有意义的，比如你的网站有大量的MySQL链接请求（每个MySQL连接都是要内存资源开销的 ），由于你的程序的原因有大量的连接请求空闲啥事也不干，白白占用内存资源，或者导致MySQL超过最大连接数从来无法新建连接导致“Too many connections”的错误。
* 在设置之前你可以查看一下你的MYSQL的状态（可用`show processlist`)，如果经常发现MYSQL中有大量的`Sleep`进程，则需要 修改`wait-timeout`值了。
* interactive_timeout：服务器关闭交互式连接前等待活动的秒数。交互式客户端定义为在mysql_real_connect()中使用CLIENT_INTERACTIVE选项的客户端。
* wait_timeout:服务器关闭非交互连接之前等待活动的秒数。在线程启动时，根据全局wait_timeout值或全局 interactive_timeout值初始化会话wait_timeout值，取决于客户端类型(由mysql_real_connect()的连接选项CLIENT_INTERACTIVE定义).
* 这两个参数必须配合使用。否则单独设置wait_timeout无效

``` sql
show variables like 'wait_timeout';
```

## thread_concurrency
* MySQL 5.7已经废除该参数
* thread_concurrency的值的正确与否, 对mysql的性能影响很大, 在多个cpu(或多核)的情况下，错误设置了thread_concurrency的值, 会导致mysql不能充分利用多cpu(或多核), 出现同一时刻只能一个cpu(或核)在工作的情况。
* thread_concurrency应设为CPU核数的2倍. 比如有一个双核的CPU, 那thread_concurrency  的应该为4; 2个双核的cpu, thread_concurrency的值应为8。
* 比如：根据上面介绍我们目前系统的配置，可知道为4个CPU,每个CPU为8核，按照上面的计算规则，这儿应为:4*8*2=64

``` sql
show variables like 'thread_concurrency';;
```

