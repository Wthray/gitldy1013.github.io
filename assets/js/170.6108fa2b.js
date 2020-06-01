(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{901:function(_,e,v){"use strict";v.r(e);var o=v(3),c=Object(o.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"docker-快速配置指南"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker-快速配置指南"}},[_._v("#")]),_._v(" Docker 快速配置指南")]),_._v(" "),v("p",[_._v("下面是一个跟 Docker 网络相关的命令列表。")]),_._v(" "),v("p",[_._v("其中有些命令选项只有在 Docker 服务启动的时候才能配置，而且不能马上生效。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("-b BRIDGE")]),_._v(" 或 "),v("code",[_._v("--bridge=BRIDGE")]),_._v(" 指定容器挂载的网桥")]),_._v(" "),v("li",[v("code",[_._v("--bip=CIDR")]),_._v(" 定制 docker0 的掩码")]),_._v(" "),v("li",[v("code",[_._v("-H SOCKET...")]),_._v(" 或 "),v("code",[_._v("--host=SOCKET...")]),_._v(" Docker 服务端接收命令的通道")]),_._v(" "),v("li",[v("code",[_._v("--icc=true|false")]),_._v(" 是否支持容器之间进行通信")]),_._v(" "),v("li",[v("code",[_._v("--ip-forward=true|false")]),_._v(" 请看下文容器之间的通信")]),_._v(" "),v("li",[v("code",[_._v("--iptables=true|false")]),_._v(" 是否允许 Docker 添加 iptables 规则")]),_._v(" "),v("li",[v("code",[_._v("--mtu=BYTES")]),_._v(" 容器网络中的 MTU")])]),_._v(" "),v("p",[_._v("下面2个命令选项既可以在启动服务时指定，也可以在启动容器时指定。在 Docker 服务启动的时候指定则会成为默认值，后面执行 "),v("code",[_._v("docker run")]),_._v(" 时可以覆盖设置的默认值。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("--dns=IP_ADDRESS...")]),_._v(" 使用指定的DNS服务器")]),_._v(" "),v("li",[v("code",[_._v("--dns-search=DOMAIN...")]),_._v(" 指定DNS搜索域")])]),_._v(" "),v("p",[_._v("最后这些选项只有在 "),v("code",[_._v("docker run")]),_._v(" 执行时使用，因为它是针对容器的特性内容。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("-h HOSTNAME")]),_._v(" 或 "),v("code",[_._v("--hostname=HOSTNAME")]),_._v(" 配置容器主机名")]),_._v(" "),v("li",[v("code",[_._v("--link=CONTAINER_NAME:ALIAS")]),_._v(" 添加到另一个容器的连接")]),_._v(" "),v("li",[v("code",[_._v("--net=bridge|none|container:NAME_or_ID|host")]),_._v(" 配置容器的桥接模式")]),_._v(" "),v("li",[v("code",[_._v("-p SPEC")]),_._v(" 或 "),v("code",[_._v("--publish=SPEC")]),_._v(" 映射容器端口到宿主主机")]),_._v(" "),v("li",[v("code",[_._v("-P or --publish-all=true|false")]),_._v(" 映射容器所有端口到宿主主机")])])])}),[],!1,null,null,null);e.default=c.exports}}]);