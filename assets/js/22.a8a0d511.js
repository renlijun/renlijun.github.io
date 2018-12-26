(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{187:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能优化")]),a._v(" "),t("h2",{attrs:{id:"php-fpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm","aria-hidden":"true"}},[a._v("#")]),a._v(" PHP-FPM")]),a._v(" "),t("h3",{attrs:{id:"进程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 进程管理")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("pm")]),a._v(" "),t("p",[a._v("这个参数用来控制php-fpm进程创建是动态创建还是在php-fpm启动时就创建好")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("value:")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("pm = "),t("code",[a._v("static")]),a._v("\n启动时，就创建好进程")]),a._v(" "),t("p",[a._v("static在启动时创建，能节省动态创建php-fpm进程的开销")])]),a._v(" "),t("li",[t("p",[a._v("pm = "),t("code",[a._v("dynamic")]),a._v("\n动态的创建进程")])]),a._v(" "),t("li",[t("p",[a._v("pm = "),t("code",[a._v("ondemand")]),a._v("\n有需求时创建")])])])])]),a._v(" "),t("h4",{attrs:{id:"pm-dynamic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pm-dynamic","aria-hidden":"true"}},[a._v("#")]),a._v(" pm = "),t("code",[a._v("dynamic")])]),a._v(" "),t("pre",[t("code",[a._v("相关参数\n\n* pm.max_children           子进程最大数\n\n* pm.start_servers          启动时的进程数\n\n* pm.min_spare_servers      保证空闲进程数最小值，如果空闲进程小于此值，则创建新的子进程\n\n* pm.max_spare_servers      保证空闲进程数最大值，如果空闲进程大于此值，此进行清理\n")])]),a._v(" "),t("ul",[t("li",[a._v("注意："),t("code",[a._v("pm.min_spare_servers 和 pm.max_spare_servers 不能大于 pm.max_children")])])]),a._v(" "),t("h4",{attrs:{id:"pm-static-相关参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pm-static-相关参数","aria-hidden":"true"}},[a._v("#")]),a._v(" pm = "),t("code",[a._v("static")]),a._v(" 相关参数")]),a._v(" "),t("pre",[t("code",[a._v("* pm.max_children           子进程最大数\n")])]),a._v(" "),t("h4",{attrs:{id:"实际配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 实际配置")]),a._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("注意事项")]),a._v(" "),t("p",[a._v("一个php-fpm进程，大约可以计算程30M内存。")]),a._v(" "),t("p",[a._v("计算公式 ：内存 / 30 = 实际可以配置的进程数")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pm=dynamic\npm.max_children=24\npm.start_servers=16 \npm.min_spare_servers=12\npm.max_spare_servers=24\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"php-ini"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-ini","aria-hidden":"true"}},[a._v("#")]),a._v(" PHP.INI")]),a._v(" "),t("h3",{attrs:{id:"页面内存大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面内存大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面内存大小")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("memory_limit")]),a._v(" "),t("p",[a._v("最大单线程的独立内存使用量。也就是一个web请求，给予线程最大的内存使用量的定义。")])]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("配置")]),a._v(" "),t("p",[a._v("默认配置 128M")])]),a._v(" "),t("ul",[t("li",[a._v("一旦独立的线程超过了128M，那PHP会报错：")])])])}],!1,null,null,null);r.options.__file="optimize.md";s.default=r.exports}}]);