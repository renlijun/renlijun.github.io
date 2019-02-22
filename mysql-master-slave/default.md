# 主从架构

## 主从复制文件模式

* 1 - 基于BinLog
* 2 - 基于GTID

## Binlog

## GTID

::: tip 描述

* MYSQL 5.6新特性之一

* GTID = source_id:transaction_id

* 加入了全局事务 ID (GTID) 来强化数据库的主备一致性，故障恢复，以及容错能力。

* 多线程复制

:::

