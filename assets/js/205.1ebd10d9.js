(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{954:function(e,s,a){"use strict";a.r(s);var r=a(3),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"树莓派卡片电脑安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树莓派卡片电脑安装-docker"}},[e._v("#")]),e._v(" 树莓派卡片电脑安装 Docker")]),e._v(" "),a("blockquote",[a("p",[e._v("警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.")])]),e._v(" "),a("h2",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[e._v("#")]),e._v(" 系统要求")]),e._v(" "),a("p",[e._v("Docker CE 不仅支持 "),a("code",[e._v("x86_64")]),e._v(" 架构的计算机，同时也支持 "),a("code",[e._v("ARM")]),e._v(" 架构的计算机，本小节内容以树莓派单片电脑为例讲解 "),a("code",[e._v("ARM")]),e._v(" 架构安装 Docker CE。")]),e._v(" "),a("p",[e._v("Docker CE 支持以下版本的 "),a("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspbian"),a("OutboundLink")],1),e._v(" 操作系统：")]),e._v(" "),a("ul",[a("li",[e._v("Raspbian Stretch")]),e._v(" "),a("li",[e._v("Raspbian Jessie")])]),e._v(" "),a("p",[a("em",[e._v("注：")]),e._v(" "),a("code",[e._v("Raspbian")]),e._v(" 是树莓派的开发与维护机构 "),a("a",{attrs:{href:"http://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("树莓派基金会"),a("OutboundLink")],1),e._v(" 推荐用于树莓派的首选系统，其基于 "),a("code",[e._v("Debian")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"使用-apt-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[e._v("#")]),e._v(" 使用 APT 安装")]),e._v(" "),a("p",[e._v("由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo apt-get update\n    \n    $ sudo apt-get install \\\n         apt-transport-https \\\n         ca-certificates \\\n         curl \\\n         gnupg2 \\\n         lsb-release \\\n         software-properties-common\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),e._v(" "),a("p",[e._v("为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/raspbian/gpg | sudo apt-key add -\n    \n    \n    # 官方源\n    # $ curl -fsSL https://download.docker.com/linux/raspbian/gpg | sudo apt-key add -\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("然后，我们需要向 "),a("code",[e._v("source.list")]),e._v(" 中添加 Docker CE 软件源：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    $ sudo add-apt-repository \\\n        "deb [arch=armhf] https://mirrors.ustc.edu.cn/docker-ce/linux/raspbian \\\n        $(lsb_release -cs) \\\n        stable"\n   \n    \n    # 官方源\n    # $ sudo add-apt-repository \\\n    #    "deb [arch=armhf] https://download.docker.com/linux/raspbian \\\n    #    $(lsb_release -cs) \\\n    #    stable"    \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("blockquote",[a("p",[e._v("以上命令会添加稳定版本的 Docker CE APT 源，如果需要最新版本的 Docker CE 请将 stable 改为 edge 或者 test。从 Docker 17.06 开始，edge test 版本的 APT 源也会包含稳定版本的 Docker CE。")])]),e._v(" "),a("h3",{attrs:{id:"安装-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[e._v("#")]),e._v(" 安装 Docker CE")]),e._v(" "),a("p",[e._v("更新 apt 软件包缓存，并安装 "),a("code",[e._v("docker-ce")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo apt-get update\n    \n    $ sudo apt-get install docker-ce\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"使用脚本自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[e._v("#")]),e._v(" 使用脚本自动安装")]),e._v(" "),a("p",[e._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Raspbian 系统上可以使用这套脚本安装：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ curl -fsSL get.docker.com -o get-docker.sh\n    $ sudo sh get-docker.sh --mirror Aliyun\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的 Edge 版本安装在系统中。")]),e._v(" "),a("h2",{attrs:{id:"启动-docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[e._v("#")]),e._v(" 启动 Docker CE")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo systemctl enable docker\n    $ sudo systemctl start docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"建立-docker-用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[e._v("#")]),e._v(" 建立 docker 用户组")]),e._v(" "),a("p",[e._v("默认情况下，"),a("code",[e._v("docker")]),e._v(" 命令会使用 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unix socket"),a("OutboundLink")],1),e._v(" 与 Docker 引擎通讯。而只有 "),a("code",[e._v("root")]),e._v(" 用户和 "),a("code",[e._v("docker")]),e._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),a("code",[e._v("root")]),e._v(" 用户。因此，更好地做法是将需要使用 "),a("code",[e._v("docker")]),e._v(" 的用户加入 "),a("code",[e._v("docker")]),e._v(" 用户组。")]),e._v(" "),a("p",[e._v("建立 "),a("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo groupadd docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("将当前用户加入 "),a("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo usermod -aG docker $USER\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("退出当前终端并重新登录，进行如下测试。")]),e._v(" "),a("h2",{attrs:{id:"测试-docker-是否安装正确"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[e._v("#")]),e._v(" 测试 Docker 是否安装正确")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ docker run arm32v7/hello-world\n    \n    Unable to find image 'hello-world:latest' locally\n    latest: Pulling from library/hello-world\n    ca4f61b1923c: Pull complete\n    Digest: sha256:be0cd392e45be79ffeffa6b05338b98ebb16c87b255f48e297ec7f98e123905c\n    Status: Downloaded newer image for hello-world:latest\n    \n    Hello from Docker!\n    This message shows that your installation appears to be working correctly.\n    \n    To generate this message, Docker took the following steps:\n     1. The Docker client contacted the Docker daemon.\n     2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n        (amd64)\n     3. The Docker daemon created a new container from that image which runs the\n        executable that produces the output you are currently reading.\n     4. The Docker daemon streamed that output to the Docker client, which sent it\n        to your terminal.\n    \n    To try something more ambitious, you can run an Ubuntu container with:\n     $ docker run -it ubuntu bash\n    \n    Share images, automate workflows, and more with a free Docker ID:\n     https://cloud.docker.com/\n    \n    For more examples and ideas, visit:\n     https://docs.docker.com/engine/userguide/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("若能正常输出以上信息，则说明安装成功。")]),e._v(" "),a("p",[a("em",[e._v("注意：")]),e._v(" ARM 平台不能使用 "),a("code",[e._v("x86")]),e._v(" 镜像，查看 Raspbian 可使用镜像请访问 "),a("a",{attrs:{href:"https://hub.docker.com/u/arm32v7/",target:"_blank",rel:"noopener noreferrer"}},[e._v("arm32v7"),a("OutboundLink")],1),e._v(" 。")]),e._v(" "),a("h2",{attrs:{id:"镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[e._v("#")]),e._v(" 镜像加速")]),e._v(" "),a("p",[e._v("鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，强烈建议安装 Docker 之后配置 "),a("code",[e._v("国内镜像加速")]),e._v("。")])])}),[],!1,null,null,null);s.default=t.exports}}]);