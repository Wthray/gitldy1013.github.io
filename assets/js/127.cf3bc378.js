(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{843:function(s,e,n){"use strict";n.r(e);var a=n(3),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-compose-安装与卸载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-安装与卸载"}},[s._v("#")]),s._v(" Docker Compose 安装与卸载")]),s._v(" "),n("p",[n("code",[s._v("Compose")]),s._v(" 支持 Linux、macOS、Windows 10 三大平台。")]),s._v(" "),n("p",[n("code",[s._v("Compose")]),s._v(" 可以通过 Python 的包管理工具 "),n("code",[s._v("pip")]),s._v(" 进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。")]),s._v(" "),n("p",[s._v("前两种方式是传统方式，适合本地环境下安装使用；最后一种方式则不破坏系统环境，更适合云计算场景。")]),s._v(" "),n("p",[n("code",[s._v("Docker for Mac")]),s._v(" 、"),n("code",[s._v("Docker for Windows")]),s._v(" 自带 "),n("code",[s._v("docker-compose")]),s._v(" 二进制文件，安装 Docker 之后可以直接使用。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ docker-compose --version\n    \n    docker-compose version 1.17.1, build 6d101fb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("Linux 系统请使用以下介绍的方法安装。")]),s._v(" "),n("h2",{attrs:{id:"二进制包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制包"}},[s._v("#")]),s._v(" 二进制包")]),s._v(" "),n("p",[s._v("在 Linux 上的也安装十分简单，从 "),n("a",{attrs:{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方 GitHub Release"),n("OutboundLink")],1),s._v(" 处直接下载编译好的二进制文件即可。")]),s._v(" "),n("p",[s._v("例如，在 Linux 64 位系统上直接下载对应的二进制包。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose\n    $ sudo chmod +x /usr/local/bin/docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"pip-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pip-安装"}},[s._v("#")]),s._v(" PIP 安装")]),s._v(" "),n("p",[n("em",[s._v("注：")]),s._v(" "),n("code",[s._v("x86_64")]),s._v(" 架构的 Linux 建议按照上边的方法下载二进制包进行安装，如果您计算机的架构是 "),n("code",[s._v("ARM")]),s._v(" (例如，树莓派)，再使用 "),n("code",[s._v("pip")]),s._v(" 安装。")]),s._v(" "),n("p",[s._v("这种方式是将 Compose 当作一个 Python 应用来从 pip 源中安装。")]),s._v(" "),n("p",[s._v("执行安装命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ sudo pip install -U docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以看到类似如下输出，说明安装成功。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    Collecting docker-compose\n      Downloading docker-compose-1.17.1.tar.gz (149kB): 149kB downloaded\n    ...\n    Successfully installed docker-compose cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"bash-补全命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bash-补全命令"}},[s._v("#")]),s._v(" bash 补全命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ curl -L https://raw.githubusercontent.com/docker/compose/1.8.0/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"容器中执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器中执行"}},[s._v("#")]),s._v(" 容器中执行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Compose 既然是一个 Python 应用，自然也可以直接用容器来执行它。\n\n    $ curl -L https://github.com/docker/compose/releases/download/1.8.0/run.sh > /usr/local/bin/docker-compose\n    $ chmod +x /usr/local/bin/docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("实际上，查看下载的 "),n("code",[s._v("run.sh")]),s._v(" 脚本内容，如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    set -e\n    \n    VERSION="1.8.0"\n    IMAGE="docker/compose:$VERSION"\n    \n    \n    # Setup options for connecting to docker host\n    if [ -z "$DOCKER_HOST" ]; then\n        DOCKER_HOST="/var/run/docker.sock"\n    fi\n    if [ -S "$DOCKER_HOST" ]; then\n        DOCKER_ADDR="-v $DOCKER_HOST:$DOCKER_HOST -e DOCKER_HOST"\n    else\n        DOCKER_ADDR="-e DOCKER_HOST -e DOCKER_TLS_VERIFY -e DOCKER_CERT_PATH"\n    fi\n    \n    \n    # Setup volume mounts for compose config and context\n    if [ "$(pwd)" != \'/\' ]; then\n        VOLUMES="-v $(pwd):$(pwd)"\n    fi\n    if [ -n "$COMPOSE_FILE" ]; then\n        compose_dir=$(dirname $COMPOSE_FILE)\n    fi\n    # TODO: also check --file argument\n    if [ -n "$compose_dir" ]; then\n        VOLUMES="$VOLUMES -v $compose_dir:$compose_dir"\n    fi\n    if [ -n "$HOME" ]; then\n        VOLUMES="$VOLUMES -v $HOME:$HOME -v $HOME:/root" # mount $HOME in /root to share docker.config\n    fi\n    \n    # Only allocate tty if we detect one\n    if [ -t 1 ]; then\n        DOCKER_RUN_OPTIONS="-t"\n    fi\n    if [ -t 0 ]; then\n        DOCKER_RUN_OPTIONS="$DOCKER_RUN_OPTIONS -i"\n    fi\n    \n    exec docker run --rm $DOCKER_RUN_OPTIONS $DOCKER_ADDR $COMPOSE_OPTIONS $VOLUMES -w "$(pwd)" $IMAGE "$@"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("可以看到，它其实是下载了 "),n("code",[s._v("docker/compose")]),s._v(" 镜像并运行。")]),s._v(" "),n("h2",{attrs:{id:"卸载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),n("p",[s._v("如果是二进制包方式安装的，删除二进制文件即可。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ sudo rm /usr/local/bin/docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果是通过 "),n("code",[s._v("pip")]),s._v(" 安装的，则执行如下命令即可删除。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ sudo pip uninstall docker-compose\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);