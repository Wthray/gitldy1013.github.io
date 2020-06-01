(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1180:function(n,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"rocketmq-消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-消费者"}},[n._v("#")]),n._v(" RocketMQ 消费者")]),n._v(" "),a("h2",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[n._v("#")]),n._v(" POM")]),n._v(" "),a("p",[n._v("主要增加了 "),a("code",[n._v("org.springframework.cloud:spring-cloud-starter-stream-rocketmq")]),n._v(" 依赖")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>hello-spring-cloud-alibaba-dependencies</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n            <relativePath>../hello-spring-cloud-alibaba-dependencies/pom.xml</relativePath>\n        </parent>\n    \n        <artifactId>hello-spring-cloud-alibaba-rocketmq-consumer</artifactId>\n        <packaging>jar</packaging>\n    \n        <name>hello-spring-cloud-alibaba-rocketmq-consumer</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <dependencies>\n            \x3c!-- Spring Boot Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-web</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-actuator</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n            \x3c!-- Spring Boot End --\x3e\n    \n            \x3c!-- Spring Cloud Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-stream-rocketmq</artifactId>\n            </dependency>\n            \x3c!-- Spring Cloud End --\x3e\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.hello.spring.cloud.alibaba.rocketmq.consumer.RocketMQConsumerApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    </project>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br")])]),a("h2",{attrs:{id:"消息消费者服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息消费者服务"}},[n._v("#")]),n._v(" 消息消费者服务")]),n._v(" "),a("p",[n._v("主要使用 "),a("code",[n._v('@StreamListener("input")')]),n._v(" 注解来订阅从名为 "),a("code",[n._v("input")]),n._v(" 的 Binding 中接收的消息")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    package com.cmcc.hello.spring.cloud.alibaba.rocketmq.consumer.receive;\n    \n    import org.springframework.cloud.stream.annotation.StreamListener;\n    import org.springframework.stereotype.Service;\n    \n    @Service\n    public class ConsumerReceive {\n    \n        @StreamListener("input")\n        public void receiveInput(String message) {\n            System.out.println("Receive input: " + message);\n        }\n    }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("h2",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[n._v("#")]),n._v(" Application")]),n._v(" "),a("p",[n._v("配置 Input("),a("code",[n._v("Sink.class")]),n._v(") 的 Binding 信息并配合 "),a("code",[n._v("@EnableBinding")]),n._v(" 注解使其生效")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    package com.cmcc.hello.spring.cloud.alibaba.rocketmq.consumer;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.stream.annotation.EnableBinding;\n    import org.springframework.cloud.stream.messaging.Sink;\n    \n    @SpringBootApplication\n    @EnableBinding({Sink.class})\n    public class RocketMQConsumerApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(RocketMQConsumerApplication.class, args);\n        }\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("h2",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[n._v("#")]),n._v(" application.yml")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    spring:\n      application:\n        name: rocketmq-consumer\n      cloud:\n        stream:\n          rocketmq:\n            binder:\n              namesrv-addr: 192.168.10.149:9876\n            bindings:\n              input: {consumer.orderly: true}\n          bindings:\n            input: {destination: test-topic, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}\n    \n    server:\n      port: 9094\n    \n    management:\n      endpoints:\n        web:\n          exposure:\n            include: '*'\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("p",[n._v("运行成功后即可在控制台接收到消息："),a("code",[n._v("Receive input: Hello RocketMQ")])])])}),[],!1,null,null,null);s.default=r.exports}}]);