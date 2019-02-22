# 事务
    
## 简介
* 在 MySQL 中只有使用了 `Innodb` 数据库引擎的数据库或表才支持事务。<Badge text="innodb"/>
* 事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。
* 事务用来管理 `insert`, `update`, `delete` 语句
* MySQL 默认使用 `autocommit` 模式运行

## 特性

* 原子性 `Atomicity`
* 一致性 `Consistency`
* 隔离性 `Isolation`
* 持久性 `Durability`

### 原子性
* 一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。
* 事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。

::: tip 具体实现
* MySQL通过Redo Log重做日志实现了原子性，在将执行SQL语句时，会先写入redo log buffer，再执行SQL语句。
* 若SQL语句执行出错就会根据redo log buffer中的记录来执行回滚操作，由此拥有原子性。
:::

### 一致性
在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。

::: tip 具体实现
* MySQL通过undo Log实现一致性，执行SQL语句时，会先写入undo log 再写入 redo log buffer。

* undo是逻辑日志，会根据之前的SQL语句进行相应回滚，比如之前是insert那么回滚时会执行一个delete，一个update会执行 一个相反的update。

* 并且除了回滚，undo log还有一个作用是MVCC，当用户读取一行记录时，若该记录已经被其他事务占用，当前事务可通过undo读取之前的行版本信息，实现非锁定读取。并且undo log也会产生redo log，因为undo log也需要持久性的保护。
:::


### 隔离性
数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别。
* 读未提交（Read Uncommitted）
* 读提交（Read Committed）
* 可重复读（Repeatable Read）
* 和串行化（Serializable）

### 持久性
事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。

::: tip 具体实现
具体实现原理就是在事务commit之前，会将redo log buffer中的数据持久化到硬盘中的redo log file，这样在commit的时候，硬盘中已经有了我们修改或新增的数据，由此做到持久化。
:::


## 控制语句
* 开启事务
* 提交事务
* 创建保存点
* 删除保存点
* 回滚标记点
* 设置隔离级别

### 开启事务
BEGIN或START TRANSACTION；显式地开启一个事务；

    start transaction;

### 提交事务
COMMIT 和 COMMIT WORK，不过二者是等价的。COMMIT会提交事务，并使已对数据库进行的所有修改成为永久性的；

    commit

### 回滚事务
ROLLBACK；有可以使用ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；

    rollback

### 创建事务保存点
SAVEPOINT允许在事务中创建一个保存点，一个事务中可以有多个SAVEPOINT；

    SAVEPOINT identifier

### 删除事务保存点
删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；

    RELEASE SAVEPOINT identifier

### 回滚到事务保存点
把事务回滚到标记点；

    ROLLBACK TO identifier

### 设置隔离级别

    SET TRANSACTION

* 全局修改

    my.cnf
    ```
    [mysqld]
    ransaction-isolation = REPEATABLE-READ
    ```
* 当前用户修改

    ```
    set session transaction isolation level read uncommitted;
    ```