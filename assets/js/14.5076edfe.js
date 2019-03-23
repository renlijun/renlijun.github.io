(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{182:function(t,e,s){t.exports=s.p+"assets/img/WechatIMG1342.09acbb94.png"},234:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mmm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mmm","aria-hidden":"true"}},[this._v("#")]),this._v(" MMM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"功能："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能：","aria-hidden":"true"}},[this._v("#")]),this._v(" 功能：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("h4",[t._v("MMM监控Mysql主从复制的健康情况，链路是否正常，主从是否存在延迟。")])]),t._v(" "),s("li",[s("h4",[t._v("当出现主从延迟时，或者主从复制链路中断时，会对主服务进行故障转移，并且将虚拟IP迁移到新的主上。自动配置其他从对新主的复制。")])]),t._v(" "),s("li",[s("h4",[t._v("提供了主，写虚拟IP，在主从服务器出现问题时，可以自动迁移虚拟IP。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对每一个服务器，都会提供一个虚拟IP，其中包括一个写的虚IP和多个读的虚IP。")])]),t._v(" "),s("li",[s("p",[t._v("写的虚IP只能在两个主服务器之间，进行切换")])]),t._v(" "),s("li",[s("p",[t._v("读的虚IP则可以在集群所有机器上进行切换")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点","aria-hidden":"true"}},[this._v("#")]),this._v(" 优缺点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优","aria-hidden":"true"}},[this._v("#")]),this._v(" 优")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("h4",[t._v("使用Perl脚本语言开发及完全开源")])]),t._v(" "),s("li",[s("h4",[t._v("提供来读写VIP（虚拟IP），使服务器角色的变更对前端应用透明")]),t._v(" "),s("ul",[s("li",[t._v("解决问题：当主数据库出现故障变更IP后，如何通知应用对新的主DB重新建立链接。")])])]),t._v(" "),s("li",[s("h4",[t._v("MMM提供了从服务器的延迟监控")])]),t._v(" "),s("li",[s("h4",[t._v("提供了主数据库故障转移后，从服务器对新主重新同步功能")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[this._v("#")]),this._v(" 缺点")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("h4",[t._v("发布时间比较早，不支持MySQL新的功能 ")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("比如MySQL 5.6的GTID复制、多线程复制，都不支持")])]),t._v(" "),s("li",[s("p",[t._v("最新版本距离现在已经有好几年的时间，存在一些Bug，需要DBA手工修复。")])])])]),t._v(" "),s("li",[s("h4",[t._v("没有读负载均衡的功能")]),t._v(" "),s("ul",[s("li",[t._v("需要单配使用Lvs、F5等配合使用，才可以实现负载均衡，增加管理负担")])])]),t._v(" "),s("li",[s("h4",[t._v("在进行主从切换时，容易造成数据丢失")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("MMM对这快的处理并不安全，只是简单粗暴的找到新的主库的日志点，然后使所有的从库对这个日志点来进行同步。在繁忙的系统中，可能会造成数据丢失的情况。")])]),t._v(" "),s("li",[s("p",[t._v("主备的数据，不一定是最新，存在一步复制的数据差异性。 强制让从库复制主备的数据，导致数据丢失")])]),t._v(" "),s("li",[s("p",[t._v("主备的数据不一定比从服务器的数据新。")])])])]),t._v(" "),s("li",[s("p",[t._v("监控服务存在单点故障")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" Faq")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("h4",[t._v("出现故障自动故障转移，并且配置其他从对新主的复制时，要解决的问题")]),t._v(" "),s("ul",[s("li",[s("h5",[t._v("如何找到从库对应的新的主库日志点的日志同步点")])]),t._v(" "),s("li",[s("h5",[t._v("如果存在多个从库出现数据不一致的情况如何处理")])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("结论")]),t._v(" "),s("p",[t._v("MMM对这快的处理并不安全，只是简单粗暴的找到新的主库的日志点，然后使所有的从库对这个日志点来进行同步。在繁忙的系统中，可能会造成数据丢失的情况。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h4",[this._v("出现故障时，3M自动转移故障的操作步骤")]),this._v(" "),e("ul",[e("li",[this._v("当监控服务器发现主服务无法访问时，MMM监控服务 就会把写VIP切换到主备服务器。")]),this._v(" "),e("li",[this._v("同时设置原来的主为 "),e("code",[this._v("read-only")]),this._v(" 模式")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"工作模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 工作模式")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("h4",[t._v("拓扑图")]),t._v(" "),a("img",{staticStyle:{width:"500px"},attrs:{src:s(182)}})]),t._v(" "),a("li",[a("h4",[t._v("主动被动模式的主主复制")]),t._v(" "),a("ul",[a("li",[t._v("只有一个主，对外提供服务")]),t._v(" "),a("li",[t._v("另外一个主处于备用状态，只能用于查询，并且设置为"),a("code",[t._v("Read-only模式")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"部署资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署资源")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("资源名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("数量")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("主DB服务器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于主备模式的主主复制配置")])]),t._v(" "),s("tr",[s("td",[t._v("从DB服务器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0-N")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以配置0台或多台从服务器")])]),t._v(" "),s("tr",[s("td",[t._v("监控服务器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于监控MySQL复制集群")])]),t._v(" "),s("tr",[s("td",[t._v("IP地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("2 * (n-1)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("n为MySQL服务器的数量,每台一个物理IP，一个虚拟IP")])]),t._v(" "),s("tr",[s("td",[t._v("监控用户")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于监控数据库状态的MySQL用户 (replication client)")])]),t._v(" "),s("tr",[s("td",[t._v("代理用户")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用于MMM代理的MySQL用户 (super、replication，process)")])]),t._v(" "),s("tr",[s("td",[t._v("复制用户")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户配置MySQL复制的用户 (replication slave)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"开始部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置yum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置yum","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置yum")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\nrpm -ivh epel-release-latest-7.noarch.rpm --force --nodeps\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装mmm代理服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mmm代理服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装MMM代理服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("每台集群中的机器都要安装。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yum search mmm*\nyum install mysql-mmm-agent.noarch\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装mmm监控服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mmm监控服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装MMM监控服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("只需在监控服务器上安装")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-linux line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("yum install mysql-mmm*\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建监控服务账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建监控服务账号","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建监控服务账号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在主服务器上创建，会同步到其他从服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("grant replication client on *.* to 'mmm_monitor'@'172.17.183.%' identified by 'demo@123456';\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建代理服务账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建代理服务账号","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建代理服务账号")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("在主服务器上创建，会同步到其他从服务")]),t._v(" "),s("li",[t._v("这个账号主要用于故障转移，主从切换。\n"),s("ul",[s("li",[t._v("改变 "),s("code",[t._v("read-only")]),t._v("的模式")]),t._v(" "),s("li",[t._v("改变 从服务器对应的主。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("grant SUPER,REPLICATION CLIENT,PROCESS on *.* to 'mmm_agent'@'172.17.183.%' identified by 'demo@123456';\nFLUSH PRIVILEGES;\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置代理服务参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置代理服务参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置代理服务参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("下面的配置参数在所有代理服务器上必须保持一致")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("vim /etc/mysql-mmm/mmm_common.conf\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("active_master_role  writer //主服务只能用来写\n\n<host default>\n    cluster_interface       eth0\n    pid_path                /run/mysql-mmm-agent.pid\n    bin_path                /usr/libexec/mysql-mmm/\n    replication_user        slave           //复制账号\n    replication_password    demo@123456     //复制账号密码\n    agent_user              mmm_agent       //代理账号\n    agent_password          demo@123456     //代理账号密码\n</host>\n\n<host db1>\n    ip      172.17.183.121\n    mode    master\n    peer    db2\n</host>\n\n<host db2>\n    ip      172.17.183.122\n    mode    master\n    peer    db1\n</host>\n\n<host db3>\n    ip      172.17.183.123\n    mode    slave\n</host>\n\n//写服务，db1和db2，为两个主。IP为虚拟\n<role writer>\n    hosts   db1, db2\n    ips     172.17.183.140\n    mode    exclusive\n</role>\n\n//读服务，db1, db2, db3都可以读\n<role reader>\n    hosts   db1, db2, db3\n    ips     172.17.183.141, 172.17.183.142, 172.17.183.143\n    mode    balanced\n</role>\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可以把该配置直接拷贝至其他服务器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("scp mmm_common.conf root@xxx.xx:/etc/mysql-mmm/\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置监控服务参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置监控服务参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置监控服务参数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("vim /etc/mysql-mmm/mmm_mon.conf\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<monitor>\n    ping_ips 172.17.183.121, 172.17.183.122, 172.17.183.123\n     \n</monitor>\n\n<host default>\n    monitor_user       mmm_monitor   //监控账号\n    monitor_password   demo@123456   //监控账号密码\n</host>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("启动代理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/ect/init.d/mysql-mmm-agent start\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("启动监控")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/ect/init.d/mysql-mmm-monitor start\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("注意")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("启动成功后，查看一下虚拟IP是否配置上。在每一台机器上都可以看一下")]),this._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ip addr\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"相关服务命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关服务命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关服务命令")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("监控服务命令：")]),t._v(" "),s("ul",[s("li",[t._v("启动")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/etc/init.d/mmm_control start\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("查看集群状态")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mmm_control show\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])])}],n=s(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("ul",[t._m(9),t._v(" "),t._m(10),t._v(" "),s("li",[s("h4",[t._v("从服务器出现故障时，mmm会把有故障的从剔除吗？"),s("Badge",{attrs:{text:"重点",type:"warn"}})],1)])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("部署MMM之前，必须先配置好，主主复制，外加一个从。")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/mysql_master_slave/binlog.html"}},[t._v("日志点主从复制")])],1),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._m(38),t._m(39),t._v(" "),s("p",[t._v("启动服务顺序：先启动代理，后启动监控")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),s("br"),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47)])},a,!1,null,null,null);i.options.__file="mmm.md";e.default=i.exports}}]);