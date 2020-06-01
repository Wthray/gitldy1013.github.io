(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{862:function(e,a,s){"use strict";s.r(a);var t=s(3),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"其它制作镜像的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它制作镜像的方式"}},[e._v("#")]),e._v(" 其它制作镜像的方式")]),e._v(" "),s("p",[e._v("除了标准的使用 "),s("code",[e._v("Dockerfile")]),e._v(" 生成镜像的方法外，由于各种特殊需求和历史原因，还提供了一些其它方法用以生成镜像。")]),e._v(" "),s("h2",{attrs:{id:"从-rootfs-压缩包导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-rootfs-压缩包导入"}},[e._v("#")]),e._v(" 从 rootfs 压缩包导入")]),e._v(" "),s("p",[e._v("格式："),s("code",[e._v("docker import [选项] <文件>|<URL>|- [<仓库名>[:<标签>]]")])]),e._v(" "),s("p",[e._v("压缩包可以是本地文件、远程 Web 文件，甚至是从标准输入中得到。压缩包将会在镜像 "),s("code",[e._v("/")]),e._v(" 目录展开，并直接作为镜像第一层提交。")]),e._v(" "),s("p",[e._v("比如我们想要创建一个 "),s("a",{attrs:{href:"https://openvz.org/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVZ"),s("OutboundLink")],1),e._v(" 的 Ubuntu 14.04 "),s("a",{attrs:{href:"https://openvz.org/Download/template/precreated",target:"_blank",rel:"noopener noreferrer"}},[e._v("模板"),s("OutboundLink")],1),e._v(" 的镜像：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker import \\\n        http://download.openvz.org/template/precreated/ubuntu-14.04-x86_64-minimal.tar.gz \\\n        openvz/ubuntu:14.04\n    Downloading from http://download.openvz.org/template/precreated/ubuntu-14.04-x86_64-minimal.tar.gz\n    sha256:f477a6e18e989839d25223f301ef738b69621c4877600ae6467c4e5289822a79B/78.42 MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("这条命令自动下载了 "),s("code",[e._v("ubuntu-14.04-x86_64-minimal.tar.gz")]),e._v(" 文件，并且作为根文件系统展开导入，并保存为镜像 "),s("code",[e._v("openvz/ubuntu:14.04")]),e._v("。")]),e._v(" "),s("p",[e._v("导入成功后，我们可以用 "),s("code",[e._v("docker image ls")]),e._v(" 看到这个导入的镜像：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker image ls openvz/ubuntu\n    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n    openvz/ubuntu       14.04               f477a6e18e98        55 seconds ago      214.9 MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("如果我们查看其历史的话，会看到描述中有导入的文件链接：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker history openvz/ubuntu:14.04\n    IMAGE               CREATED              CREATED BY          SIZE                COMMENT\n    f477a6e18e98        About a minute ago                       214.9 MB            Imported from http://download.openvz.org/template/precreated/ubuntu-14.04-x86_64-minimal.tar.gz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"docker-save-和-docker-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-save-和-docker-load"}},[e._v("#")]),e._v(" "),s("code",[e._v("docker save")]),e._v(" 和 "),s("code",[e._v("docker load")])]),e._v(" "),s("p",[e._v("Docker 还提供了 "),s("code",[e._v("docker load")]),e._v(" 和 "),s("code",[e._v("docker save")]),e._v(" 命令，用以将镜像保存为一个 "),s("code",[e._v("tar")]),e._v(" 文件，然后传输到另一个位置上，再加载进来。这是在没有 Docker Registry 时的做法，现在已经不推荐，镜像迁移应该直接使用 Docker Registry，无论是直接使用 Docker Hub 还是使用内网私有 Registry 都可以。")]),e._v(" "),s("h3",{attrs:{id:"保存镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存镜像"}},[e._v("#")]),e._v(" 保存镜像")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("docker save")]),e._v(" 命令可以将镜像保存为归档文件。")]),e._v(" "),s("p",[e._v("比如我们希望保存这个 "),s("code",[e._v("alpine")]),e._v(" 镜像。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker image ls alpine\n    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n    alpine              latest              baa5d63471ea        5 weeks ago         4.803 MB\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("保存镜像的命令为：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker save alpine | gzip > alpine-latest.tar.gz\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("然后我们将 "),s("code",[e._v("alpine-latest.tar.gz")]),e._v(" 文件复制到了到了另一个机器上，可以用下面这个命令加载镜像：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker load -i alpine-latest.tar.gz\n    Loaded image: alpine:latest\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("如果我们结合这两个命令以及 "),s("code",[e._v("ssh")]),e._v(" 甚至 "),s("code",[e._v("pv")]),e._v(" 的话，利用 Linux 强大的管道，我们可以写一个命令完成从一个机器将镜像迁移到另一个机器，并且带进度条的功能：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    docker save <镜像名> | bzip2 | pv | ssh <用户名>@<主机名> 'cat | docker load'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);