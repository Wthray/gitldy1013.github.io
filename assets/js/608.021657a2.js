(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1120:function(s,n,a){"use strict";a.r(n);var e=a(3),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-gitlab-runner-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-gitlab-runner-docker"}},[s._v("#")]),s._v(" 使用 GitLab Runner Docker")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("为了配置方便，我们使用 "),a("code",[s._v("docker")]),s._v(" 来部署 "),a("code",[s._v("GitLab Runner")])]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("ul",[a("li",[s._v("创建工作目录 "),a("code",[s._v("/usr/local/docker/runner")])]),s._v(" "),a("li",[s._v("创建构建目录 "),a("code",[s._v("/usr/local/docker/runner/environment")])]),s._v(" "),a("li",[s._v("下载 "),a("code",[s._v("jdk-8u152-linux-x64.tar.gz")]),s._v(" 并复制到 "),a("code",[s._v("/usr/local/docker/runner/environment")])])]),s._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner/environment")]),s._v(" 目录下创建 "),a("code",[s._v("Dockerfile")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    FROM gitlab/gitlab-runner:v11.0.2\n    MAINTAINER cmcc <136913633167@163.com>\n    \n    # 修改软件源\n    RUN echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse' > /etc/apt/sources.list && \\\n        echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse' >> /etc/apt/sources.list && \\\n        echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse' >> /etc/apt/sources.list && \\\n        echo 'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse' >> /etc/apt/sources.list && \\\n        apt-get update -y && \\\n        apt-get clean\n    \n    # 安装 Docker\n    RUN apt-get -y install apt-transport-https ca-certificates curl software-properties-common && \\\n        curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | apt-key add - && \\\n        add-apt-repository \"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable\" && \\\n        apt-get update -y && \\\n        apt-get install -y docker-ce\n    COPY daemon.json /etc/docker/daemon.json\n    \n    # 安装 Docker Compose\n    WORKDIR /usr/local/bin\n    RUN wget https://raw.githubusercontent.com/topsale/resources/master/docker/docker-compose\n    RUN chmod +x docker-compose\n    \n    # 安装 Java\n    RUN mkdir -p /usr/local/java\n    WORKDIR /usr/local/java\n    COPY jdk-8u152-linux-x64.tar.gz /usr/local/java\n    RUN tar -zxvf jdk-8u152-linux-x64.tar.gz && \\\n        rm -fr jdk-8u152-linux-x64.tar.gz\n    \n    # 安装 Maven\n    RUN mkdir -p /usr/local/maven\n    WORKDIR /usr/local/maven\n    RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz\n    # COPY apache-maven-3.5.3-bin.tar.gz /usr/local/maven\n    RUN tar -zxvf apache-maven-3.5.3-bin.tar.gz && \\\n        rm -fr apache-maven-3.5.3-bin.tar.gz\n    # COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml\n    \n    # 配置环境变量\n    ENV JAVA_HOME /usr/local/java/jdk1.8.0_152\n    ENV MAVEN_HOME /usr/local/maven/apache-maven-3.5.3\n    ENV PATH $PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin\n    \n    WORKDIR /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"daemon-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemon-json"}},[s._v("#")]),s._v(" daemon.json")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner/environment")]),s._v(" 目录下创建 "),a("code",[s._v("daemon.json")]),s._v("，用于配置加速器和仓库地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    {\n      "registry-mirrors": [\n        "https://registry.docker-cn.com"\n      ],\n      "insecure-registries": [\n        "192.168.75.131:5000"\n      ]\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/usr/local/docker/runner")]),s._v(" 目录下创建 "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: '3.1'\n    services:\n      gitlab-runner:\n        build: environment\n        restart: always\n        container_name: gitlab-runner\n        privileged: true\n        volumes:\n          - /usr/local/docker/runner/config:/etc/gitlab-runner\n          - /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"注册-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册-runner"}},[s._v("#")]),s._v(" 注册 Runner")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    docker exec -it gitlab-runner gitlab-runner register\n    \n    # 输入 GitLab 地址\n    Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):\n    http://192.168.75.146:8080/\n    \n    # 输入 GitLab Token\n    Please enter the gitlab-ci token for this runner:\n    1Lxq_f1NRfCfeNbE5WRh\n    \n    # 输入 Runner 的说明\n    Please enter the gitlab-ci description for this runner:\n    可以为空\n    \n    # 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci\n    Please enter the gitlab-ci tags for this runner (comma separated):\n    deploy\n    \n    # 这里选择 true ，可以用于代码上传后直接执行\n    Whether to run untagged builds [true/false]:\n    true\n    \n    # 这里选择 false，可以直接回车，默认为 false\n    Whether to lock Runner to current project [true/false]:\n    false\n    \n    # 选择 runner 执行器，这里我们选择的是 shell\n    Please enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:\n    shell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"附：项目配置-dockerfile-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：项目配置-dockerfile-案例"}},[s._v("#")]),s._v(" 附：项目配置 Dockerfile 案例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    FROM openjdk:8-jre\n    \n    MAINTAINER cmcc <136913633167@163.com>\n    \n    ENV APP_VERSION 1.0.0-SNAPSHOT\n    ENV DOCKERIZE_VERSION v0.6.1\n    RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n        && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\\n        && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz\n    \n    RUN mkdir /app\n    \n    COPY itoken-eureka-$APP_VERSION.jar /app/app.jar\n    ENTRYPOINT ["dockerize", "-timeout", "5m", "-wait", "tcp://192.168.75.128:8888", "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/app.jar", "--spring.profiles.active=prod"]\n    \n    EXPOSE 8761\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);