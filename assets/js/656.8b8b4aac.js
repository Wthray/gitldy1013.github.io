(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1009:function(n,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"分布式配置中心服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式配置中心服务端"}},[n._v("#")]),n._v(" 分布式配置中心服务端")]),n._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" 概述")]),n._v(" "),a("p",[n._v("创建一个工程名为 "),a("code",[n._v("hello-spring-cloud-config")]),n._v(" 的项目，"),a("code",[n._v("pom.xml")]),n._v(" 配置文件如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>hello-spring-cloud-dependencies</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n            <relativePath>../hello-spring-cloud-dependencies/pom.xml</relativePath>\n        </parent>\n    \n        <artifactId>hello-spring-cloud-config</artifactId>\n        <packaging>jar</packaging>\n    \n        <name>hello-spring-cloud-config</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <dependencies>\n            \x3c!-- Spring Boot Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-web</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-tomcat</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-actuator</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n            \x3c!-- Spring Boot End --\x3e\n    \n            \x3c!-- Spring Cloud Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-config-server</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n            </dependency>\n            \x3c!-- Spring Cloud End --\x3e\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.hello.spring.cloud.config.ConfigApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    </project>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br")])]),a("p",[n._v("主要增加了 "),a("code",[n._v("spring-cloud-config-server")]),n._v(" 依赖")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-config-server</artifactId>\n    </dependency>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h2",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[n._v("#")]),n._v(" Application")]),n._v(" "),a("p",[n._v("通过 "),a("code",[n._v("@EnableConfigServer")]),n._v(" 注解，开启配置服务器功能")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    package com.cmcc.hello.spring.cloud.config;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.config.server.EnableConfigServer;\n    import org.springframework.cloud.netflix.eureka.EnableEurekaClient;\n    \n    @SpringBootApplication\n    @EnableConfigServer\n    @EnableEurekaClient\n    public class ConfigApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(ConfigApplication.class, args);\n        }\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h2",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[n._v("#")]),n._v(" application.yml")]),n._v(" "),a("p",[n._v("增加 Config 相关配置，并设置端口号为："),a("code",[n._v("8888")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    spring:\n      application:\n        name: hello-spring-cloud-config\n      cloud:\n        config:\n          label: master\n          server:\n            git:\n              uri: https://github.com/topsale/spring-cloud-config\n              search-paths: respo\n              username:\n              password:\n    \n    server:\n      port: 8888\n    \n    eureka:\n      client:\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br")])]),a("p",[n._v("相关配置说明，如下：")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("spring.cloud.config.label")]),n._v("：配置仓库的分支")]),n._v(" "),a("li",[a("code",[n._v("spring.cloud.config.server.git.uri")]),n._v("：配置 Git 仓库地址（GitHub、GitLab、码云 ...）")]),n._v(" "),a("li",[a("code",[n._v("spring.cloud.config.server.git.search-paths")]),n._v("：配置仓库路径（存放配置文件的目录）")]),n._v(" "),a("li",[a("code",[n._v("spring.cloud.config.server.git.username")]),n._v("：访问 Git 仓库的账号")]),n._v(" "),a("li",[a("code",[n._v("spring.cloud.config.server.git.password")]),n._v("：访问 Git 仓库的密码")])]),n._v(" "),a("p",[n._v("注意事项：")]),n._v(" "),a("ul",[a("li",[n._v("如果使用 GitLab 作为仓库的话，"),a("code",[n._v("git.uri")]),n._v(" 需要在结尾加上 "),a("code",[n._v(".git")]),n._v("，GitHub 则不用")])]),n._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[n._v("#")]),n._v(" 测试")]),n._v(" "),a("p",[n._v("浏览器端访问：http://localhost:8888/config-client/dev/master 显示如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    <Environment> \n      <name>config-client</name>  \n      <profiles> \n        <profiles>dev</profiles> \n      </profiles>  \n      <label>master</label>  \n      <version>9646007f931753d7e96a6dcc9ae34838897a91df</version>  \n      <state/>  \n      <propertySources> \n        <propertySources> \n          <name>https://github.com/topsale/spring-cloud-config/respo/config-client-dev.yml</name>  \n          <source> \n            <foo>foo version 1</foo>  \n            <demo.message>Hello Spring Config</demo.message> \n          </source> \n        </propertySources> \n      </propertySources> \n    </Environment>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])]),a("p",[n._v("证明配置服务中心可以从远程程序获取配置信息")]),n._v(" "),a("h2",{attrs:{id:"附：http-请求地址和资源文件映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附：http-请求地址和资源文件映射"}},[n._v("#")]),n._v(" 附：HTTP 请求地址和资源文件映射")]),n._v(" "),a("ul",[a("li",[n._v("http://ip:port/{application}/{profile}[/{label}]")]),n._v(" "),a("li",[n._v("http://ip:port/{application}-{profile}.yml")]),n._v(" "),a("li",[n._v("http://ip:port/{label}/{application}-{profile}.yml")]),n._v(" "),a("li",[n._v("http://ip:port/{application}-{profile}.properties")]),n._v(" "),a("li",[n._v("http://ip:port/{label}/{application}-{profile}.properties")])])])}),[],!1,null,null,null);s.default=r.exports}}]);