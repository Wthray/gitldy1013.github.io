(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1279:function(s,e,t){"use strict";t.r(e);var a=t(3),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-远程控制管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-远程控制管理"}},[s._v("#")]),s._v(" Linux 远程控制管理")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("传统的网络服务程序，FTP、POP、telnet 本质上都是不安全的，因为它们在网络上通过明文传送口令和数据，这些数据非常容易被截获。SSH 叫做 "),t("code",[s._v("Secure Shell")]),s._v("。通过 SSH，可以把传输数据进行加密，预防攻击，传输的数据进行了压缩，可以加快传输速度。")]),s._v(" "),t("h2",{attrs:{id:"openssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openssh"}},[s._v("#")]),s._v(" OpenSSH")]),s._v(" "),t("p",[s._v("SSH 是芬兰一家公司开发。但是受到版权和加密算法限制，现在很多人都使用 OpenSSH。OpenSSH 是 SSH 的替代软件，免费。")]),s._v(" "),t("p",[s._v("OpenSSH 由客户端和服务端组成。")]),s._v(" "),t("ul",[t("li",[s._v("基于口令的安全验证：知道服务器的帐号密码即可远程登录，口令和数据在传输过程中都会被加密。")]),s._v(" "),t("li",[s._v("基于密钥的安全验证：此时需要在创建一对密钥，把公有密钥放到远程服务器上自己的宿主目录中，而私有密钥则由自己保存。")])]),s._v(" "),t("h3",{attrs:{id:"检查软件是否安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查软件是否安装"}},[s._v("#")]),s._v(" 检查软件是否安装")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    apt-cache policy openssh-client openssh-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端"}},[s._v("#")]),s._v(" 安装服务端")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    apt-get install openssh-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装客户端"}},[s._v("#")]),s._v(" 安装客户端")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    apt-get install openssh-client\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("OpenSSH 服务器的主要配置文件为 "),t("code",[s._v("/etc/ssh/sshd\\_config")]),s._v("，几乎所有的配置信息都在此文件中。")]),s._v(" "),t("h2",{attrs:{id:"xshell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xshell"}},[s._v("#")]),s._v(" XShell")]),s._v(" "),t("p",[s._v("XShell 是一个强大的安全终端模拟软件，它支持 SSH1, SSH2, 以及 Microsoft Windows 平台的 TELNET 协议。XShell 通过互联网到远程主机的安全连接以及它创新性的设计和特色帮助用户在复杂的网络环境中享受他们的工作。")]),s._v(" "),t("p",[s._v("XShell 可以在 Windows 界面下用来访问远端不同系统下的服务器，从而比较好的达到远程控制终端的目的。")]),s._v(" "),t("p",[s._v("效果图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20171102220954.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);