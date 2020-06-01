(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1006:function(n,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"创建服务提供者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者"}},[n._v("#")]),n._v(" 创建服务提供者")]),n._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" 概述")]),n._v(" "),a("p",[n._v("当 Client 向 Server 注册时，它会提供一些元数据，例如主机和端口，URL，主页等。Eureka Server 从每个 Client 实例接收心跳消息。 如果心跳超时，则通常将该实例从注册 Server 中删除。")]),n._v(" "),a("h2",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[n._v("#")]),n._v(" POM")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>hello-spring-cloud-dependencies</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n            <relativePath>../hello-spring-cloud-dependencies/pom.xml</relativePath>\n        </parent>\n    \n        <artifactId>hello-spring-cloud-service-admin</artifactId>\n        <packaging>jar</packaging>\n    \n        <name>hello-spring-cloud-service-admin</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <dependencies>\n            \x3c!-- Spring Boot Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n            \x3c!-- Spring Boot End --\x3e\n    \n            \x3c!-- Spring Cloud Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n            </dependency>\n            \x3c!-- Spring Cloud End --\x3e\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.hello.spring.cloud.service.admin.ServiceAdminApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    </project>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br")])]),a("h2",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[n._v("#")]),n._v(" Application")]),n._v(" "),a("p",[n._v("通过注解 "),a("code",[n._v("@EnableEurekaClient")]),n._v(" 表明自己是一个 Eureka Client.")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    package com.cmcc.hello.spring.cloud.service.admin;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.netflix.eureka.EnableEurekaClient;\n    \n    @SpringBootApplication\n    @EnableEurekaClient\n    public class ServiceAdminApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(ServiceAdminApplication.class, args);\n        }\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("h2",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[n._v("#")]),n._v(" application.yml")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    spring:\n      application:\n        name: hello-spring-cloud-service-admin\n    \n    server:\n      port: 8762\n    \n    eureka:\n      client:\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[a("strong",[n._v("注意：")]),n._v(" 需要指明 "),a("code",[n._v("spring.application.name")]),n._v("，这个很重要，这在以后的服务与服务之间相互调用一般都是根据这个 "),a("code",[n._v("name")])]),n._v(" "),a("h2",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[n._v("#")]),n._v(" Controller")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    package com.cmcc.hello.spring.cloud.service.admin.controller;\n    \n    import org.springframework.beans.factory.annotation.Value;\n    import org.springframework.web.bind.annotation.RequestMapping;\n    import org.springframework.web.bind.annotation.RequestMethod;\n    import org.springframework.web.bind.annotation.RequestParam;\n    import org.springframework.web.bind.annotation.RestController;\n    \n    @RestController\n    public class AdminController {\n    \n        @Value("${server.port}")\n        private String port;\n    \n        @RequestMapping(value = "hi", method = RequestMethod.GET)\n        public String sayHi(@RequestParam(value = "message") String message) {\n            return String.format("Hi，your message is : %s i am from port : %s", message, port);\n        }\n    }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br")])]),a("p",[n._v("启动工程，打开 http://localhost:8761 ，即 Eureka Server 的网址：")]),n._v(" "),a("p",[a("img",{attrs:{src:"/img/201805292246002.png",alt:""}})]),n._v(" "),a("p",[n._v("你会发现一个服务已经注册在服务中了，服务名为 "),a("code",[n._v("HELLO-SPRING-CLOUD-SERVICE-ADMIN")]),n._v(" ,端口为 "),a("code",[n._v("8762")])]),n._v(" "),a("p",[n._v("这时打开 http://localhost:8762/hi?message=HelloSpring ，你会在浏览器上看到 :")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    Hi，your message is :"HelloSpring" i am from port：8762\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);