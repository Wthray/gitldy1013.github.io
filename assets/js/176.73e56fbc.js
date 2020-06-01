(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{910:function(s,e,a){"use strict";a.r(e);var n=a(3),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-私有仓库高级配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库高级配置"}},[s._v("#")]),s._v(" Docker 私有仓库高级配置")]),s._v(" "),a("p",[s._v("上一节我们搭建了一个具有基础功能的私有仓库，本小节我们来使用 "),a("code",[s._v("Docker Compose")]),s._v(" 搭建一个拥有权限认证、TLS 的私有仓库。")]),s._v(" "),a("p",[s._v("新建一个文件夹，以下步骤均在该文件夹中进行。")]),s._v(" "),a("h2",{attrs:{id:"准备站点证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备站点证书"}},[s._v("#")]),s._v(" 准备站点证书")]),s._v(" "),a("p",[s._v("如果你拥有一个域名，国内各大云服务商均提供免费的站点证书。你也可以使用 "),a("code",[s._v("openssl")]),s._v(" 自行签发证书。")]),s._v(" "),a("p",[s._v("这里假设我们将要搭建的私有仓库地址为 "),a("code",[s._v("docker.domain.com")]),s._v("，下面我们介绍使用 "),a("code",[s._v("openssl")]),s._v(" 自行签发 "),a("code",[s._v("docker.domain.com")]),s._v(" 的站点 SSL 证书。")]),s._v(" "),a("p",[s._v("第一步创建 "),a("code",[s._v("CA")]),s._v(" 私钥。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl genrsa -out "root-ca.key" 4096\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二步利用私钥创建 "),a("code",[s._v("CA")]),s._v(" 根证书请求文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl req \\\n              -new -key "root-ca.key" \\\n              -out "root-ca.csr" -sha256 \\\n              -subj \'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=Your Company Name Docker Registry CA\'\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("以上命令中 "),a("code",[s._v("-subj")]),s._v(" 参数里的 "),a("code",[s._v("/C")]),s._v(" 表示国家，如 "),a("code",[s._v("CN")]),s._v("；"),a("code",[s._v("/ST")]),s._v(" 表示省；"),a("code",[s._v("/L")]),s._v(" 表示城市或者地区；"),a("code",[s._v("/O")]),s._v(" 表示组织名；"),a("code",[s._v("/CN")]),s._v(" 通用名称。")])]),s._v(" "),a("p",[s._v("第三步配置 "),a("code",[s._v("CA")]),s._v(" 根证书，新建 "),a("code",[s._v("root-ca.cnf")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    [root_ca]\n    basicConstraints = critical,CA:TRUE,pathlen:1\n    keyUsage = critical, nonRepudiation, cRLSign, keyCertSign\n    subjectKeyIdentifier=hash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("第四步签发根证书。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl x509 -req  -days 3650  -in "root-ca.csr" \\\n                   -signkey "root-ca.key" -sha256 -out "root-ca.crt" \\\n                   -extfile "root-ca.cnf" -extensions \\\n                   root_ca\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("第五步生成站点 "),a("code",[s._v("SSL")]),s._v(" 私钥。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl genrsa -out "docker.domain.com.key" 4096\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第六步使用私钥生成证书请求文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl req -new -key "docker.domain.com.key" -out "site.csr" -sha256 \\\n              -subj \'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=docker.domain.com\'\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第七步配置证书，新建 "),a("code",[s._v("site.cnf")]),s._v(" 文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    [server]\n    authorityKeyIdentifier=keyid,issuer\n    basicConstraints = critical,CA:FALSE\n    extendedKeyUsage=serverAuth\n    keyUsage = critical, digitalSignature, keyEncipherment\n    subjectAltName = DNS:docker.domain.com, IP:127.0.0.1\n    subjectKeyIdentifier=hash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("第八步签署站点 "),a("code",[s._v("SSL")]),s._v(" 证书。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    $ openssl x509 -req -days 750 -in "site.csr" -sha256 \\\n        -CA "root-ca.crt" -CAkey "root-ca.key"  -CAcreateserial \\\n        -out "docker.domain.com.crt" -extfile "site.cnf" -extensions server\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样已经拥有了 "),a("code",[s._v("docker.domain.com")]),s._v(" 的网站 SSL 私钥 "),a("code",[s._v("docker.domain.com.key")]),s._v(" 和 SSL 证书 "),a("code",[s._v("docker.domain.com.crt")]),s._v("。")]),s._v(" "),a("p",[s._v("新建 "),a("code",[s._v("ssl")]),s._v(" 文件夹并将 "),a("code",[s._v("docker.domain.com.key")]),s._v(" "),a("code",[s._v("docker.domain.com.crt")]),s._v(" 这两个文件移入，删除其他文件。")]),s._v(" "),a("h2",{attrs:{id:"配置私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置私有仓库"}},[s._v("#")]),s._v(" 配置私有仓库")]),s._v(" "),a("p",[s._v("私有仓库默认的配置文件位于 "),a("code",[s._v("/etc/docker/registry/config.yml")]),s._v("，我们先在本地编辑 "),a("code",[s._v("config.yml")]),s._v("，之后挂载到容器中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: 0.1\n    log:\n      accesslog:\n        disabled: true\n      level: debug\n      formatter: text\n      fields:\n        service: registry\n        environment: staging\n    storage:\n      delete:\n        enabled: true\n      cache:\n        blobdescriptor: inmemory\n      filesystem:\n        rootdirectory: /var/lib/registry\n    auth:\n      htpasswd:\n        realm: basic-realm\n        path: /etc/docker/registry/auth/nginx.htpasswd\n    http:\n      addr: :443\n      host: https://docker.domain.com\n      headers:\n        X-Content-Type-Options: [nosniff]\n      http2:\n        disabled: false\n      tls:\n        certificate: /etc/docker/registry/ssl/docker.domain.com.crt\n        key: /etc/docker/registry/ssl/docker.domain.com.key\n    health:\n      storagedriver:\n        enabled: true\n        interval: 10s\n    threshold: 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"生成-http-认证文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-http-认证文件"}},[s._v("#")]),s._v(" 生成 http 认证文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    $ mkdir auth\n    \n    $ docker run --rm \\\n        --entrypoint htpasswd \\\n        registry \\\n        -Bbn username password > auth/nginx.htpasswd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("将上面的 "),a("code",[s._v("username")]),s._v(" "),a("code",[s._v("password")]),s._v(" 替换为你自己的用户名和密码。")])]),s._v(" "),a("h2",{attrs:{id:"编辑-docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑-docker-compose-yml"}},[s._v("#")]),s._v(" 编辑 "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: '3'\n    \n    services:\n      registry:\n        image: registry\n        ports:\n          - \"443:443\"\n        volumes:\n          - ./:/etc/docker/registry\n          - registry-data:/var/lib/registry\n    \n    volumes:\n      registry-data:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"修改-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-hosts"}},[s._v("#")]),s._v(" 修改 hosts")]),s._v(" "),a("p",[s._v("编辑 "),a("code",[s._v("/etc/hosts")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    docker.domain.com 127.0.0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    $ docker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样我们就搭建好了一个具有权限认证、TLS 的私有仓库，接下来我们测试其功能是否正常。")]),s._v(" "),a("h2",{attrs:{id:"测试私有仓库功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试私有仓库功能"}},[s._v("#")]),s._v(" 测试私有仓库功能")]),s._v(" "),a("p",[s._v("登录到私有仓库。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    $ docker login docker.domain.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("尝试推送、拉取镜像。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    $ docker pull ubuntu:17.10\n    \n    $ docker tag ubuntu:17.10 docker.domain.com/username/ubuntu:17.10\n    \n    $ docker push docker.domain.com/username/ubuntu:17.10\n    \n    $ docker image rm docker.domain.com/username/ubuntu:17.10\n    \n    $ docker pull docker.domain.com/username/ubuntu:17.10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果我们退出登录，尝试推送镜像。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    $ docker logout docker.domain.com\n    \n    $ docker push docker.domain.com/username/ubuntu:17.10\n    \n    no basic auth credentials\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("发现会提示没有登录，不能将镜像推送到私有仓库中。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("如果你本机占用了 "),a("code",[s._v("443")]),s._v(" 端口，你可以配置 "),a("a",{attrs:{href:"https://docs.docker.com/registry/recipes/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 代理"),a("OutboundLink")],1),s._v(" ，这里不再赘述。")])])}),[],!1,null,null,null);e.default=t.exports}}]);