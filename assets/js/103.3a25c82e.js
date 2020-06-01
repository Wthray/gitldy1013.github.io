(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{810:function(e,s,n){"use strict";n.r(s);var a=n(3),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"守护态运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#守护态运行"}},[e._v("#")]),e._v(" 守护态运行")]),e._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("更多的时候，需要让 Docker 在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 "),n("code",[e._v("-d")]),e._v(" 参数来实现。")]),e._v(" "),n("p",[e._v("下面举两个例子来说明一下。")]),e._v(" "),n("p",[e._v("如果不使用 "),n("code",[e._v("-d")]),e._v(" 参数运行容器。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    $ docker run ubuntu:17.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"\n    hello world\n    hello world\n    hello world\n    hello world\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("容器会把输出的结果 (STDOUT) 打印到宿主机上面")]),e._v(" "),n("p",[e._v("如果使用了 "),n("code",[e._v("-d")]),e._v(" 参数运行容器。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    $ docker run -d ubuntu:17.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"\n    77b2dc01fe0f3f1265df143181e7b9af5e05279a884f4776ee75350ea9d8017a\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("此时容器会在后台运行并不会把输出的结果 (STDOUT) 打印到宿主机上面(输出结果可以用 "),n("code",[e._v("docker logs")]),e._v(" 查看)。")]),e._v(" "),n("p",[n("strong",[e._v("注：")]),e._v(" 容器是否会长久运行，是和 "),n("code",[e._v("docker run")]),e._v(" 指定的命令有关，和 "),n("code",[e._v("-d")]),e._v(" 参数无关。")]),e._v(" "),n("p",[e._v("使用 "),n("code",[e._v("-d")]),e._v(" 参数启动后会返回一个唯一的 id，也可以通过 "),n("code",[e._v("docker container ls")]),e._v(" 命令来查看容器信息。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker container ls\n    CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES\n    77b2dc01fe0f  ubuntu:17.10  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        agitated_wright\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("要获取容器的输出信息，可以通过 "),n("code",[e._v("docker container logs")]),e._v(" 命令。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker container logs [container ID or NAMES]\n    hello world\n    hello world\n    hello world\n    . . .\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);