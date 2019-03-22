(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{229:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("ul",[i("li",[t._v("在 MySQL 中只有使用了 "),i("code",[t._v("Innodb")]),t._v(" 数据库引擎的数据库或表才支持事务。"),i("Badge",{attrs:{text:"innodb"}})],1),t._v(" "),i("li",[t._v("事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。")]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),i("p",[t._v("BEGIN或START TRANSACTION；显式地开启一个事务；")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),i("p",[t._v("COMMIT 和 COMMIT WORK，不过二者是等价的。COMMIT会提交事务，并使已对数据库进行的所有修改成为永久性的；")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),i("p",[t._v("ROLLBACK；有可以使用ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("SAVEPOINT允许在事务中创建一个保存点，一个事务中可以有多个SAVEPOINT；")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),i("p",[t._v("删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),i("p",[t._v("把事务回滚到标记点；")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[this._v("#")]),this._v(" 事务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("事务用来管理 "),e("code",[this._v("insert")]),this._v(", "),e("code",[this._v("update")]),this._v(", "),e("code",[this._v("delete")]),this._v(" 语句")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("MySQL 默认使用 "),e("code",[this._v("autocommit")]),this._v(" 模式运行")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("原子性 "),i("code",[t._v("Atomicity")])]),t._v(" "),i("li",[t._v("一致性 "),i("code",[t._v("Consistency")])]),t._v(" "),i("li",[t._v("隔离性 "),i("code",[t._v("Isolation")])]),t._v(" "),i("li",[t._v("持久性 "),i("code",[t._v("Durability")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"原子性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原子性","aria-hidden":"true"}},[this._v("#")]),this._v(" 原子性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。")]),this._v(" "),e("li",[this._v("事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("具体实现")]),this._v(" "),e("ul",[e("li",[this._v("MySQL通过Redo Log重做日志实现了原子性，在将执行SQL语句时，会先写入redo log buffer，再执行SQL语句。")]),this._v(" "),e("li",[this._v("若SQL语句执行出错就会根据redo log buffer中的记录来执行回滚操作，由此拥有原子性。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一致性","aria-hidden":"true"}},[this._v("#")]),this._v(" 一致性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("具体实现")]),this._v(" "),e("ul",[e("li",[e("p",[this._v("MySQL通过undo Log实现一致性，执行SQL语句时，会先写入undo log 再写入 redo log buffer。")])]),this._v(" "),e("li",[e("p",[this._v("undo是逻辑日志，会根据之前的SQL语句进行相应回滚，比如之前是insert那么回滚时会执行一个delete，一个update会执行 一个相反的update。")])]),this._v(" "),e("li",[e("p",[this._v("并且除了回滚，undo log还有一个作用是MVCC，当用户读取一行记录时，若该记录已经被其他事务占用，当前事务可通过undo读取之前的行版本信息，实现非锁定读取。并且undo log也会产生redo log，因为undo log也需要持久性的保护。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"隔离性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隔离性","aria-hidden":"true"}},[this._v("#")]),this._v(" 隔离性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("读未提交（Read Uncommitted）")]),this._v(" "),e("li",[this._v("读提交（Read Committed）")]),this._v(" "),e("li",[this._v("可重复读（Repeatable Read）")]),this._v(" "),e("li",[this._v("和串行化（Serializable）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"持久性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久性","aria-hidden":"true"}},[this._v("#")]),this._v(" 持久性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("具体实现")]),this._v(" "),e("p",[this._v("具体实现原理就是在事务commit之前，会将redo log buffer中的数据持久化到硬盘中的redo log file，这样在commit的时候，硬盘中已经有了我们修改或新增的数据，由此做到持久化。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"控制语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制语句","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制语句")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("开启事务")]),t._v(" "),i("li",[t._v("提交事务")]),t._v(" "),i("li",[t._v("创建保存点")]),t._v(" "),i("li",[t._v("删除保存点")]),t._v(" "),i("li",[t._v("回滚标记点")]),t._v(" "),i("li",[t._v("设置隔离级别")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"开启事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启事务","aria-hidden":"true"}},[this._v("#")]),this._v(" 开启事务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("start transaction;\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"提交事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交事务","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交事务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("commit\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"回滚事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚事务","aria-hidden":"true"}},[this._v("#")]),this._v(" 回滚事务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("rollback\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建事务保存点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建事务保存点","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建事务保存点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("SAVEPOINT identifier\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"删除事务保存点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除事务保存点","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除事务保存点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("RELEASE SAVEPOINT identifier\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"回滚到事务保存点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚到事务保存点","aria-hidden":"true"}},[this._v("#")]),this._v(" 回滚到事务保存点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("ROLLBACK TO identifier\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"设置隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置隔离级别","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置隔离级别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("SET TRANSACTION\n")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("全局修改")]),t._v(" "),i("p",[t._v("my.cnf")]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("[mysqld]\nransaction-isolation = REPEATABLE-READ\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br")])])]),t._v(" "),i("li",[i("p",[t._v("当前用户修改")]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("set session transaction isolation level read uncommitted;\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])])])])}],!1,null,null,null);r.options.__file="transaction.md";e.default=r.exports}}]);