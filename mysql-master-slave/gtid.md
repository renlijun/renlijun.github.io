# GTID 复制


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

### master - 开启GTID
``` mysql
show variables like '%log_bin%'
```

``` mysql
vim /etc/my.cnf

[mysqld]
gtid-mode=on
enforce-gtid-consistency=on
```

### master - 创建授权账号

``` mysql
grant replication slave on *.* to 'slave'@'xxx.xxx.xxx.%' identified by '@#f1d54mi';
FLUSH PRIVILEGES;
```

## 从配置

### 配置主信息

```
stop slave
```

```
>mysql -uroot -p

change master to
master_host='xxx.xxx.xxx.xxx',
master_user='slave',
master_password='#f1d54mi',
master_auto_position=1,
```

```
show slave status\G
```

```
start slave
```