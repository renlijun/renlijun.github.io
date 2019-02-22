# Binlog 复制


## 主配置

* 开启binlog
* 配置SERVER_ID
* 创建授权账号
* 查看主信息

### master - 开启binlog
``` mysql
show variables like '%log_bin%'
```

``` mysql
vim /etc/my.cnf

[mysqld]
log-bin=mysql-bin
```

### master - 配置 server id

* servier-id 需要唯一

```
vim /etc/my.cnf

[mysqld]
server-id = 1
```

### master - 创建授权账号

``` mysql
grant replication slave on *.* to 'slave'@'xxx.xxx.xxx.%' identified by '@#f1d54mi';
FLUSH PRIVILEGES;
```

### master - 查看主信息

```
show master status;
```

```
+------------------+----------+
| File             | Position |
+------------------+----------+
| mysql-bin.000006 |      154 | 
+------------------+----------+
```


* 记住 File 和 Position的信息，配置从时需要用到 <Badge text="重要" type="error"/>


## 从配置

* 配置SERVER_ID
* 配置主的信息
* 启动从服务
* 查看主从状态

### slave - 配置SERVER_ID

* servier-id 需要唯一，且不能和主重复

```
vim /etc/my.cnf

[mysqld]
server-id = 1
```

###slave - 配置主信息

``` mysql
>mysql -uroot -p

change master to
master_host='xxx.xxx.xxx.xxx',
master_user='slave',
master_password='#f1d54mi',
master_log_file='mysql-bin.000006',
master_log_pos=154;
```



### slave - 查看主从状态

``` mysql
show slave status\G
```

* 配置成功的两个个参数: <Badge text="重要" type="error"/>
    * Slave_IO_Running : Yes
    * Slave_SQL_Running : Yes

### slave - 启动从服务

``` mysql
start slave;
```