(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{867:function(e,s,n){"use strict";n.r(s);var a=n(3),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"利用-commit-理解镜像构成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用-commit-理解镜像构成"}},[e._v("#")]),e._v(" 利用 commit 理解镜像构成")]),e._v(" "),n("p",[e._v("注意： "),n("code",[e._v("docker commit")]),e._v(" 命令除了学习之外，还有一些特殊的应用场合，比如被入侵后保存现场等。但是，不要使用 "),n("code",[e._v("docker commit")]),e._v(" 定制镜像，定制镜像应该使用 "),n("code",[e._v("Dockerfile")]),e._v(" 来完成。如果你想要定制镜像请查看下一小节。")]),e._v(" "),n("p",[e._v("镜像是容器的基础，每次执行 "),n("code",[e._v("docker run")]),e._v(" 的时候都会指定哪个镜像作为容器运行的基础。在之前的例子中，我们所使用的都是来自于 Docker Hub 的镜像。直接使用这些镜像是可以满足一定的需求，而当这些镜像无法直接满足需求时，我们就需要定制这些镜像。接下来的几节就将讲解如何定制镜像。")]),e._v(" "),n("p",[e._v("回顾一下之前我们学到的知识，镜像是多层存储，每一层是在前一层的基础上进行的修改；而容器同样也是多层存储，是在以镜像为基础层，在其基础上加一层作为容器运行时的存储层。")]),e._v(" "),n("p",[e._v("现在让我们以定制一个 Web 服务器为例子，来讲解镜像是如何构建的。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker run --name webserver -d -p 80:80 nginx\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("这条命令会用 "),n("code",[e._v("nginx")]),e._v(" 镜像启动一个容器，命名为 "),n("code",[e._v("webserver")]),e._v("，并且映射了 80 端口，这样我们可以用浏览器去访问这个 "),n("code",[e._v("nginx")]),e._v(" 服务器。")]),e._v(" "),n("p",[e._v("如果是在 Linux 本机运行的 Docker，或者如果使用的是 Docker for Mac、Docker for Windows，那么可以直接访问："),n("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost"),n("OutboundLink")],1),e._v(" ；如果使用的是 Docker Toolbox，或者是在虚拟机、云服务器上安装的 Docker，则需要将 "),n("code",[e._v("localhost")]),e._v(" 换为虚拟机地址或者实际云服务器地址。")]),e._v(" "),n("p",[e._v("直接用浏览器访问的话，我们会看到默认的 Nginx 欢迎页面。")]),e._v(" "),n("p",[n("img",{attrs:{src:"/img/images-mac-example-nginx.png",alt:""}})]),e._v(" "),n("p",[e._v("现在，假设我们非常不喜欢这个欢迎页面，我们希望改成欢迎 Docker 的文字，我们可以使用 "),n("code",[e._v("docker exec")]),e._v(" 命令进入容器，修改其内容。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker exec -it webserver bash\n    root@3729b97e8226:/# echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html\n    root@3729b97e8226:/# exit\n    exit\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("我们以交互式终端方式进入 "),n("code",[e._v("webserver")]),e._v(" 容器，并执行了 "),n("code",[e._v("bash")]),e._v(" 命令，也就是获得一个可操作的 Shell。")]),e._v(" "),n("p",[e._v("然后，我们用 "),n("code",[e._v("<h1>Hello, Docker!</h1>")]),e._v(" 覆盖了 "),n("code",[e._v("/usr/share/nginx/html/index.html")]),e._v(" 的内容。")]),e._v(" "),n("p",[e._v("现在我们再刷新浏览器的话，会发现内容被改变了。")]),e._v(" "),n("p",[n("img",{attrs:{src:"/img/images-create-nginx-docker.png",alt:""}})]),e._v(" "),n("p",[e._v("我们修改了容器的文件，也就是改动了容器的存储层。我们可以通过 "),n("code",[e._v("docker diff")]),e._v(" 命令看到具体的改动。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker diff webserver\n    C /root\n    A /root/.bash_history\n    C /run\n    C /usr\n    C /usr/share\n    C /usr/share/nginx\n    C /usr/share/nginx/html\n    C /usr/share/nginx/html/index.html\n    C /var\n    C /var/cache\n    C /var/cache/nginx\n    A /var/cache/nginx/client_temp\n    A /var/cache/nginx/fastcgi_temp\n    A /var/cache/nginx/proxy_temp\n    A /var/cache/nginx/scgi_temp\n    A /var/cache/nginx/uwsgi_temp\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[e._v("现在我们定制好了变化，我们希望能将其保存下来形成镜像。")]),e._v(" "),n("p",[e._v("要知道，当我们运行一个容器的时候（如果不使用卷的话），我们做的任何文件修改都会被记录于容器存储层里。而 Docker 提供了一个 "),n("code",[e._v("docker commit")]),e._v(" 命令，可以将容器的存储层保存下来成为镜像。换句话说，就是在原有镜像的基础上，再叠加上容器的存储层，并构成新的镜像。以后我们运行这个新镜像的时候，就会拥有原有容器最后的文件变化。")]),e._v(" "),n("p",[n("code",[e._v("docker commit")]),e._v(" 的语法格式为：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("我们可以用下面的命令将容器保存为镜像：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    $ docker commit \\\n        --author "Tao Wang <twang2218@gmail.com>" \\\n        --message "修改了默认网页" \\\n        webserver \\\n        nginx:v2\n    sha256:07e33465974800ce65751acc279adc6ed2dc5ed4e0838f8b86f0c87aa1795214\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("其中 "),n("code",[e._v("--author")]),e._v(" 是指定修改的作者，而 "),n("code",[e._v("--message")]),e._v(" 则是记录本次修改的内容。这点和 "),n("code",[e._v("git")]),e._v(" 版本控制相似，不过这里这些信息可以省略留空。")]),e._v(" "),n("p",[e._v("我们可以在 "),n("code",[e._v("docker image ls")]),e._v(" 中看到这个新定制的镜像：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    $ docker image ls nginx\n    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n    nginx               v2                  07e334659748        9 seconds ago       181.5 MB\n    nginx               1.11                05a60462f8ba        12 days ago         181.5 MB\n    nginx               latest              e43d811ce2f4        4 weeks ago         181.5 MB```\n    \n    我们还可以用 `docker history` 具体查看镜像内的历史记录，如果比较 `nginx:latest` 的历史记录，我们会发现新增了我们刚刚提交的这一层。\n    \n    ```bash\n    $ docker history nginx:v2\n    IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT\n    07e334659748        54 seconds ago      nginx -g daemon off;                            95 B                修改了默认网页\n    e43d811ce2f4        4 weeks ago         /bin/sh -c #(nop)  CMD ["nginx" "-g" "daemon    0 B\n    <missing>           4 weeks ago         /bin/sh -c #(nop)  EXPOSE 443/tcp 80/tcp        0 B\n    <missing>           4 weeks ago         /bin/sh -c ln -sf /dev/stdout /var/log/nginx/   22 B\n    <missing>           4 weeks ago         /bin/sh -c apt-key adv --keyserver hkp://pgp.   58.46 MB\n    <missing>           4 weeks ago         /bin/sh -c #(nop)  ENV NGINX_VERSION=1.11.5-1   0 B\n    <missing>           4 weeks ago         /bin/sh -c #(nop)  MAINTAINER NGINX Docker Ma   0 B\n    <missing>           4 weeks ago         /bin/sh -c #(nop)  CMD ["/bin/bash"]            0 B\n    <missing>           4 weeks ago         /bin/sh -c #(nop) ADD file:23aa4f893e3288698c   123 MB\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("p",[e._v("新的镜像定制好后，我们可以来运行这个镜像。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    docker run --name web2 -d -p 81:80 nginx:v2\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("这里我们命名为新的服务为 "),n("code",[e._v("web2")]),e._v("，并且映射到 "),n("code",[e._v("81")]),e._v(" 端口。如果是 Docker for Mac/Windows 或 Linux 桌面的话，我们就可以直接访问 "),n("a",{attrs:{href:"http://localhost:81",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:81"),n("OutboundLink")],1),e._v(" 看到结果，其内容应该和之前修改后的 "),n("code",[e._v("webserver")]),e._v(" 一样。")]),e._v(" "),n("p",[e._v("至此，我们第一次完成了定制镜像，使用的是 "),n("code",[e._v("docker commit")]),e._v(" 命令，手动操作给旧的镜像添加了新的一层，形成新的镜像，对镜像多层存储应该有了更直观的感觉。")]),e._v(" "),n("h2",{attrs:{id:"慎用-docker-commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#慎用-docker-commit"}},[e._v("#")]),e._v(" 慎用 "),n("code",[e._v("docker commit")])]),e._v(" "),n("p",[e._v("使用 "),n("code",[e._v("docker commit")]),e._v(" 命令虽然可以比较直观的帮助理解镜像分层存储的概念，但是实际环境中并不会这样使用。")]),e._v(" "),n("p",[e._v("首先，如果仔细观察之前的 "),n("code",[e._v("docker diff webserver")]),e._v(" 的结果，你会发现除了真正想要修改的 "),n("code",[e._v("/usr/share/nginx/html/index.html")]),e._v(" 文件外，由于命令的执行，还有很多文件被改动或添加了。这还仅仅是最简单的操作，如果是安装软件包、编译构建，那会有大量的无关内容被添加进来，如果不小心清理，将会导致镜像极为臃肿。")]),e._v(" "),n("p",[e._v("此外，使用 "),n("code",[e._v("docker commit")]),e._v(" 意味着所有对镜像的操作都是黑箱操作，生成的镜像也被称为"),n("strong",[e._v("黑箱镜像")]),e._v("，换句话说，就是除了制作镜像的人知道执行过什么命令、怎么生成的镜像，别人根本无从得知。而且，即使是这个制作镜像的人，过一段时间后也无法记清具体在操作的。虽然 "),n("code",[e._v("docker diff")]),e._v(" 或许可以告诉得到一些线索，但是远远不到可以确保生成一致镜像的地步。这种黑箱镜像的维护工作是非常痛苦的。")]),e._v(" "),n("p",[e._v("而且，回顾之前提及的镜像所使用的分层存储的概念，除当前层外，之前的每一层都是不会发生改变的，换句话说，任何修改的结果仅仅是在当前层进行标记、添加、修改，而不会改动上一层。如果使用 "),n("code",[e._v("docker commit")]),e._v(" 制作镜像，以及后期修改的话，每一次修改都会让镜像更加臃肿一次，所删除的上一层的东西并不会丢失，会一直如影随形的跟着这个镜像，即使根本无法访问到。这会让镜像更加臃肿。")])])}),[],!1,null,null,null);s.default=r.exports}}]);