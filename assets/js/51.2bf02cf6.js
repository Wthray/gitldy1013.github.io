(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{751:function(n,t,a){"use strict";a.r(t);var s=a(3),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"dubbo-admin-管理控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-admin-管理控制台"}},[n._v("#")]),n._v(" Dubbo Admin 管理控制台")]),n._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" 概述")]),n._v(" "),a("p",[n._v("管理控制台为内部裁剪版本，开源部分主要包含：路由规则，动态配置，服务降级，访问控制，权重调整，负载均衡，等管理功能。")]),n._v(" "),a("p",[n._v("GitHub：https://github.com/apache/incubator-dubbo-ops")]),n._v(" "),a("p",[a("img",{attrs:{src:"/img/20181019141753.png",alt:""}})]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    # 打包\n    mvn clean package\n    \n    # 运行\n    mvn --projects dubbo-admin-backend spring-boot:run\n    \n    # 浏览\n    http://localhost:8080\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("h2",{attrs:{id:"遇到的问题处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题处理"}},[n._v("#")]),n._v(" 遇到的问题处理")]),n._v(" "),a("h3",{attrs:{id:"nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[n._v("#")]),n._v(" NodeJS")]),n._v(" "),a("ul",[a("li",[n._v("现象：使用 "),a("code",[n._v("mvn clean package")]),n._v(" 构建 DubboAdmin 控制台时会出现 "),a("code",[n._v("npm install")]),n._v(" 操作")]),n._v(" "),a("li",[n._v("解决：新版控制台已改为前后分离模式，前端采用 Vue.js 开发，故需要 NodeJS 支持，请自行安装（运行到此处时会自动下载安装）。官网地址：http://nodejs.cn/")]),n._v(" "),a("li",[n._v("其他：配置淘宝镜像加速。官网地址：http://npm.taobao.org/")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    # 安装 cnpm 命令行工具\n    npm install -g cnpm --registry=https://registry.npm.taobao.org\n    \n    # 安装模块\n    cnpm install [name]\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h3",{attrs:{id:"will-not-attempt-to-authenticate-using-sasl-unknown-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#will-not-attempt-to-authenticate-using-sasl-unknown-error"}},[n._v("#")]),n._v(" Will not attempt to authenticate using SASL (unknown error)")]),n._v(" "),a("ul",[a("li",[n._v("现象：使用 "),a("code",[n._v("mvn --projects dubbo-admin-backend spring-boot:run")]),n._v(" 启动 DubboAdmin 控制台时，控制台日志中出现 "),a("code",[n._v("Will not attempt to authenticate using SASL (unknown error)")]),n._v(" 提示")]),n._v(" "),a("li",[n._v("解决：修改 "),a("code",[n._v("C:\\Windows\\System32\\drivers\\etc\\hosts")]),n._v(" 文件，增加 "),a("code",[n._v("192.168.10.131 ubuntu16")]),n._v(" 即可解决")])]),n._v(" "),a("p",[a("strong",[n._v("注意：")]),n._v(" 此处的 "),a("code",[n._v("192.168.10.131")]),n._v(" 为 Zookeeper 地址")]),n._v(" "),a("h3",{attrs:{id:"两处-npm-warn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两处-npm-warn"}},[n._v("#")]),n._v(" 两处 npm WARN")]),n._v(" "),a("ul",[a("li",[n._v("现象：使用 "),a("code",[n._v("mvn clean package")]),n._v(" 构建 DubboAdmin 控制台时会出现 "),a("code",[n._v("npm install")]),n._v(" 操作，此时还会出现两处警告，分别为\n"),a("ul",[a("li",[a("code",[n._v("npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\\fsevents)")])]),n._v(" "),a("li",[a("code",[n._v('npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})')])])])]),n._v(" "),a("li",[n._v("解决：从警告说明中可以看出，"),a("code",[n._v("fsevents")]),n._v(" 模块用于 "),a("code",[n._v('{"os":"darwin","arch":"any"}')]),n._v(" Mac 系统，当前系统为 "),a("code",[n._v('(current: {"os":"win32","arch":"x64"})')]),n._v(" Windows 系统，不予理会即可")])])])}),[],!1,null,null,null);t.default=e.exports}}]);