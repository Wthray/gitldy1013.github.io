(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1301:function(s,n,a){"use strict";a.r(n);var e=a(3),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置-kubeadm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubeadm"}},[s._v("#")]),s._v(" 配置 kubeadm")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("安装 kubernetes 主要是安装它的各个镜像，而 kubeadm 已经为我们集成好了运行 kubernetes 所需的基本镜像。但由于国内的网络原因，在搭建环境时，无法拉取到这些镜像。此时我们只需要修改为阿里云提供的镜像服务即可解决该问题。")]),s._v(" "),a("h2",{attrs:{id:"创建并修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建并修改配置"}},[s._v("#")]),s._v(" 创建并修改配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    # 导出配置文件\n    kubeadm config print init-defaults --kubeconfig ClusterConfiguration > kubeadm.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    # 修改配置为如下内容\n    apiVersion: kubeadm.k8s.io/v1beta1\n    bootstrapTokens:\n    - groups:\n      - system:bootstrappers:kubeadm:default-node-token\n      token: abcdef.0123456789abcdef\n      ttl: 24h0m0s\n      usages:\n      - signing\n      - authentication\n    kind: InitConfiguration\n    localAPIEndpoint:\n      # 修改为主节点 IP\n      advertiseAddress: 192.168.141.130\n      bindPort: 6443\n    nodeRegistration:\n      criSocket: /var/run/dockershim.sock\n      name: kubernetes-master\n      taints:\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n    ---\n    apiServer:\n      timeoutForControlPlane: 4m0s\n    apiVersion: kubeadm.k8s.io/v1beta1\n    certificatesDir: /etc/kubernetes/pki\n    clusterName: kubernetes\n    controlPlaneEndpoint: ""\n    controllerManager: {}\n    dns:\n      type: CoreDNS\n    etcd:\n      local:\n        dataDir: /var/lib/etcd\n    # 国内不能访问 Google，修改为阿里云\n    imageRepository: registry.aliyuncs.com/google_containers\n    kind: ClusterConfiguration\n    # 修改版本号\n    kubernetesVersion: v1.14.1\n    networking:\n      dnsDomain: cluster.local\n      # 配置成 Calico 的默认网段\n      podSubnet: "192.168.0.0/16"\n      serviceSubnet: 10.96.0.0/12\n    scheduler: {}\n    ---\n    # 开启 IPVS 模式\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    kind: KubeProxyConfiguration\n    featureGates:\n      SupportIPVSProxyMode: true\n    mode: ipvs\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h2",{attrs:{id:"查看和拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看和拉取镜像"}},[s._v("#")]),s._v(" 查看和拉取镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    # 查看所需镜像列表\n    kubeadm config images list --config kubeadm.yml\n    # 拉取镜像\n    kubeadm config images pull --config kubeadm.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/20190510144633.png",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);