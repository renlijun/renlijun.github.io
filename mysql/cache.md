# 缓存配置
    
* 数据库属于IO密集型的应用程序，其主职责就是数据的管理及存储工作。
* 而我们知道，从内存中读取一个数据库的时间是微秒级别，而从一块普通硬盘上读取一个 IO是在毫秒级别，二者相差3个数量级。
* 所以，要优化数据库，首先第一步需要优化的就是IO，尽可能将磁盘IO转化为内存IO。
* 从MySQL数据库 IO相关参数(缓存参数)的角度来看看可以通过哪些参数进行IO优化

## 全局缓存
::: tip key_buffer_size
是用于索引块的缓冲区大小。
:::

::: tip innodb_buffer_pool_size
Innodb 缓存数据块和索引键
:::

::: tip innodb_additional_mem_pool_size
InnoDB存储引擎用来存放数据字典信息以及一些内部数据结构的内存空间大小
:::

::: tip innodb_log_buffer_size
InnoDB存储引擎的事务日志所使用的缓冲区
:::
::: tip query_cache_size
主要用来缓存MySQL中的ResultSet
:::

### key-buffer-size

::: tip key_buffer_size
是用于索引块的缓冲区大小。
:::

::: tip 推荐设置
4GB左右的服务器，可以设置为400M
:::

* 增加它可得到更好处理的索引(对所有读和多重写)，对MyISAM(MySQL表存储的一种类型，可以百度等查看详情)表性能影响最大的一个参数。
* 如果你使它太大，系统将开始换页并且真的变慢了。严格说是它决定了数据库索引处理的速度，尤其是索引读的速度。
* 对于内存在4GB左右的服务器该参数可设置为256M或384M.
* 怎么才能知道key_buffer_size的设置是否合理呢，一般可以检查状态值 `key_read_requests`和`key_reads`。
* 比例key_reads / key_read_requests应该尽可能的低，比如1:100，1:1000 ，1:10000。
* 相关命令
    ```
    show variables like 'innodb_log_buffer_size' 
    ```

    | key                  | value          | 
    | -------------        |:-------------: |
    | Key_read_requests    | 12395          |
    | Key_reads            | 127            |

    * 这张图表示，有12395请求，有127个请求在内存中没有找到直接从硬度读取



### innodb-buffer-pool-size

::: tip innodb_buffer_pool_size
Innodb 缓存数据块和索引键
:::

::: tip 推荐设置
如果是单独的MYSQL服务器，建议设置系统内存的80%左右
:::

* 默认配置 128M。 <Badge text="默认" type="warn"/> 
* 主要针对InnoDB表性能影响最大的一个参数，功能与Key_buffer_size一样
* InnoDB占用的内存，除innodb_buffer_pool_size用于存储页面缓存数据
* 另外InnoDB 和 MyISAM 存储引擎不同， MyISAM 的 key_buffer_size 只能缓存索引键。
* innodb_buffer_pool_size 可以缓存数据块和索引键。适当的增加这个参数的大小，可以有效的减少 InnoDB 类型的表的磁盘 I/O 。
* 当我们操作一个 InnoDB 表的时候，返回的所有数据或者去数据过程中用到的任何一个索引块，都会在这个内存区域中走一遭。

* 查看 Innodb_buffer_pool_read等参数 `show status like 'Innodb_buffer_pool_read%';`
    | key                  | value          | 
    | -------------        |:-------------: |
    | Innodb_buffer_pool_read_requests    | 193950         |
    | Innodb_buffer_pool_reads            | 527            |

* 命中率计算公式：
    `
    ( Innodb_buffer_pool_read_requests - Innodb_buffer_pool_read ) / 
    ( Innodb_buffer_pool_read_requests * 100% ) 
    `
* 相关命令:
    ```
    show status like 'Innodb_buffer_pool_read%';
    show variables like 'key_buffer_size';
    ```


### innodb-additional-mem-pool-size

::: tip innodb_additional_mem_pool_size
InnoDB存储引擎用来存放数据字典信息以及一些内部数据结构的内存空间大小
:::

::: tip 推荐设置
根据MySQL手册，对于2G内存的机器，推荐值是20M。

32G内存的 100M
:::

* 默认8M <Badge text="默认" type="warn"/> 
* 设置了InnoDB存储引擎用来存放数据字典信息以及一些内部数据结构的内存空间大小
* 当我们一个MySQL Instance中的数据库对象非常多的时候，是需要适当调整该参数的大小以确保所有数据都能存放在内存中提高访问效率的。
* 这个参数大小是否足够还是比较容易知道的，因为当过小的时候，MySQL会记录Warning信息到数据库的error log中，这时候你就知道该调整这个参数大小了。
* 查看当前系统mysql的error日志  cat  /var/lib/mysql/机器名.error 发现有很多waring警告。所以要调大为20M.

* 相关命令
    ```
    show variables like 'innodb_additional_mem_pool_size' 
    ```

### innodb-log-buffer-size
::: tip innodb_log_buffer_size
InnoDB存储引擎的事务日志所使用的缓冲区
:::

::: tip 推荐设置
不建议超过32MB
:::

* 默认8M <Badge text="默认" type="warn"/> 

* Innodb_log_buffer_size  这是InnoDB存储引擎的事务日志所使用的缓冲区。类似于Binlog Buffer，InnoDB在写事务日志的时候，为了提高性能，也是先将信息写入Innofb Log Buffer中，当满足`innodb_flush_log_trx_commit`参数所设置的相应条件(或者日志缓冲区写满)之后，才会将日志写到文件 (或者同步到磁盘)中。可以通过innodb_log_buffer_size 参数设置其可以使用的最大内存空间。

* InnoDB 将日志写入日志磁盘文件前的缓冲大小。理想值为 1M 至 8M。大的日志缓冲允许事务运行时不需要将日志保存入磁盘而只到事务被提交(commit)。 因此，如果有大的事务处理，设置大的日志缓冲可以减少磁盘I/O。 在 my.cnf中以数字格式设置。

* 注：`innodb_flush_log_trx_commit` 参数对`InnoDB Log`的写入性能有非常关键的影响,默认值为1。该参数可以设置为0，1，2，解释如下：
    * 0：log buffer中的数据将以每秒一次的频率写入到log file中，且同时会进行文件系统到磁盘的同步操作，但是每个事务的commit并不会触发任何log buffer 到log file的刷新或者文件系统到磁盘的刷新操作;
    * 1：在每次事务提交的时候将log buffer 中的数据都会写入到log file，同时也会触发文件系统到磁盘的同步;
    * 2：事务提交会触发log buffer到log file的刷新，但并不会触发磁盘文件系统到磁盘的同步。此外，每秒会有一次文件系统到磁盘同步操作。

* 相关命令
    ```
    show variables like 'innodb_log_buffer_size' 
    ```

### query-cache-size

::: tip query_cache_size
主要用来缓存MySQL中的ResultSet
:::

* query_cache_size: 主要用来缓存MySQL中的ResultSet，也就是一条SQL语句执行的结果集，所以仅仅只能针对select语句。

* 当我们打开了 Query Cache功能，MySQL在接受到一条select语句的请求后，如果该语句满足Query Cache的要求(未显式说明不允许使用Query Cache，或者已经显式申明需要使用Query Cache)，MySQL会直接根据预先设定好的HASH算法将接受到的select语句以字符串方式进行hash，然后到Query Cache中直接查找是否已经缓存。

* 如果已经在缓存中，该select请求就会直接将数据返回，从而省略了后面所有的步骤(如SQL语句的解析，优化器优化以及向存储引擎请求数据等)，极大的提高性能。根据MySQL用户手册，使用查询缓冲最多可以达到238%的效率。

* 相关命令
```
show global status like 'qcache%';
```

## 局部缓存
* 除了全局缓冲，MySql还会为每个连接发放连接缓冲。个连接到MySQL服务器的线程都需要有自己的缓冲。

* 大概需要立刻分配256K，甚至在线程空闲时，它们使用默认的线程堆栈，网络缓存等。

* 事务开始之后，则需要增加更多的空间。运行较小的查询可能仅给指定的线程增加少量的内存消耗，然而如果对数据表做复杂的操作例如扫描、排序或者需要临时表，则需分配大约read_buffer_size，sort_buffer_size，read_rnd_buffer_size，tmp_table_size 大小的内存空间. 

* 不过它们只是在需要的时候才分配，并且在那些操作做完之后就释放了。有的是立刻分配成单独的组块。tmp_table_size 可能高达MySQL所能分配给这个操作的最大内存空间了


::: tip read_buffer_size
是MySql读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区
:::

::: tip sort_buffer_size
是MySql执行排序使用的缓冲大小。
:::

::: tip read_rnd_buffer_size
是MySql的随机读缓冲区大小。
:::

::: tip tmp_table_size
是MySql的heap （堆积）表缓冲大小。所有联合在一个DML指令内完成，并且大多数联合甚至可以不用临时表即可以完成。大多数临时表是基于内存的(HEAP)表。
:::

::: tip record_buffer
每个进行一个顺序扫描的线程为其扫描的每张表分配这个大小的一个缓冲区
:::

::: tip table_cache
指定表高速缓存的大小。每当MySQL访问一个表时，如果在表缓冲区中还有空间，该表就被打开并放入其中
:::

### read-buffer-size
::: tip read_buffer_size
是MySql读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区
:::

::: tip 设置说明
默认为2M
:::

* read_buffer_size 是MySql读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区，MySql会为它分配一段内存缓冲区。

* read_buffer_size变量控制这一缓冲区的大小。如果对表的顺序扫描请求非常频繁，并且你认为频繁扫描进行得太慢，可以通过增加该变量值以及内存缓冲区大小提高其性能.

* 相关命令
    ```
    show variables like 'read_buffer_size'
    ```

### sort-buffer-size
::: tip sort_buffer_size
是MySql执行排序使用的缓冲大小。
:::

::: tip 设置说明
默认为2M
:::

*  sort_buffer_size是MySql执行排序使用的缓冲大小。如果想要增加ORDER BY的速度，首先看是否可以让MySQL使用索引而不是额外的排序阶段。如果不能，可以尝试增加sort_buffer_size变量的大小

* 相关命令
    ```
    show variables like 'sort_buffer_size'
    ```

### read-rnd-buffer-size
::: tip read_rnd_buffer_size
是MySql读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区
:::

::: tip 设置说明
默认 8M (8388608)
:::

* read_rnd_buffer_size 是MySql的随机读缓冲区大小。当按任意顺序读取行时(例如，按照排序顺序)，将分配一个随机读缓存区。

* 进行排序查询时，MySql会首先扫描一遍该缓冲，以避免磁盘搜索，提高查询速度，如果需要排序大量数据，可适当调高该值。但MySql会为每个客户连接发放该缓冲空间，所以应尽量适当设置该值，以避免内存开销过大。

* 相关命令
    ```
    show variables like 'read_rnd_buffer_size'
    ```

### tmp-table-size
::: tip tmp_table_size
是MySql的heap （堆积）表缓冲大小。所有联合在一个DML指令内完成，并且大多数联合甚至可以不用临时表即可以完成。大多数临时表是基于内存的(HEAP)表。
:::

*  tmp_table_size是MySql的heap （堆积）表缓冲大小。所有联合在一个DML指令内完成，并且大多数联合甚至可以不用临时表即可以完成。大多数临时表是基于内存的(HEAP)表。具有大的记录长度的临时表 (所有列的长度的和)或包含BLOB列的表存储在硬盘上。如果某个内部heap（堆积）表大小超过tmp_table_size，MySQL可以根据需要自

* 动将内存中的heap表改为基于硬盘的MyISAM表。还可以通过设置tmp_table_size选项来增加临时表的大小。也就是说，如果调高该值，MySql同时将增加heap表的大小，可达到提高联接查询速度的效果。

* 相关命令
    ```
    show variables like 'tmp_table_size'
    ```


### record-buffer

::: tip record_buffer
每个进行一个顺序扫描的线程为其扫描的每张表分配这个大小的一个缓冲区
:::

::: tip 设置说明
默认 128K
:::

* record_buffer每个进行一个顺序扫描的线程为其扫描的每张表分配这个大小的一个缓冲区。如果你做很多顺序扫描，你可能想要增加该值。

* 相关命令
    ```

    ```

### table-cache

::: tip table_cache
指定表高速缓存的大小。每当MySQL访问一个表时，如果在表缓冲区中还有空间，该表就被打开并放入其中
:::

::: tip 设置说明
2G内存默认是256 - 512

mysql手册上给的建议大小 table_cache = max_connections*n, `n表示查询语句中最大表数`
:::

* 通过检查峰值时间的状态值Open_tables和Opened_tables，可以决定是否需要增加table_cache的值。
* 如果你发现open_tables等于table_cache，并且opened_tables在不断增长，那么你就需要增加table_cache的值了
* 相关命令

    ```
    SHOW STATUS LIKE 'Open%tables';
    ```

    | key                  | value          | 
    | -------------        |:-------------: |
    | Open_tables          | 193950         |
    | Opened_tables        | 527            |

