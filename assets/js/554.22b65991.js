(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{655:function(s,n,a){"use strict";a.r(n);var e=a(3),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建服务提供者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者"}},[s._v("#")]),s._v(" 创建服务提供者")]),s._v(" "),a("h2",{attrs:{id:"创建案例工程项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建案例工程项目"}},[s._v("#")]),s._v(" 创建案例工程项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-examples")]),s._v(" 的工程项目")]),s._v(" "),a("h3",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n        <groupId>com.cmcc</groupId>\n        <artifactId>spring-cloud-alibaba-dubbo-examples</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>pom</packaging>\n    \n        <url>http://www.cmcc.com</url>\n    \n        <modules>\n            <module>spring-cloud-alibaba-dubbo-provider</module>\n            <module>spring-cloud-alibaba-dubbo-consumer</module>\n        </modules>\n    \n        <properties>\n            <java.version>1.8</java.version>\n            <maven.compiler.source>${java.version}</maven.compiler.source>\n            <maven.compiler.target>${java.version}</maven.compiler.target>\n            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n    \n            <spring-boot.version>2.1.1.RELEASE</spring-boot.version>\n            <spring-cloud.version>Greenwich.RELEASE</spring-cloud.version>\n        </properties>\n    \n        <dependencyManagement>\n            <dependencies>\n                \x3c!-- Spring --\x3e\n                <dependency>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-dependencies</artifactId>\n                    <version>${spring-boot.version}</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-dependencies</artifactId>\n                    <version>${spring-cloud.version}</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n    \n                \x3c!-- Projects --\x3e\n                <dependency>\n                    <groupId>com.cmcc</groupId>\n                    <artifactId>spring-cloud-alibaba-dubbo-starter</artifactId>\n                    <version>${project.version}</version>\n                </dependency>\n            </dependencies>\n        </dependencyManagement>\n    \n        <profiles>\n            <profile>\n                <id>release</id> \x3c!-- 部署要用到 --\x3e\n                <build>\n                    <plugins>\n                        <plugin>\n                            <artifactId>maven-compiler-plugin</artifactId>\n                        </plugin>\n                        \x3c!-- Source --\x3e\n                        <plugin>\n                            <groupId>org.apache.maven.plugins</groupId>\n                            <artifactId>maven-source-plugin</artifactId>\n                            <version>3.0.1</version>\n                            <executions>\n                                <execution>\n                                    <phase>package</phase>\n                                    <goals>\n                                        <goal>jar-no-fork</goal>\n                                    </goals>\n                                </execution>\n                            </executions>\n                        </plugin>\n                        \x3c!-- Javadoc --\x3e\n                        <plugin>\n                            <groupId>org.apache.maven.plugins</groupId>\n                            <artifactId>maven-javadoc-plugin</artifactId>\n                            <version>2.9.1</version>\n                            <executions>\n                                <execution>\n                                    <phase>package</phase>\n                                    <goals>\n                                        <goal>jar</goal>\n                                    </goals>\n                                </execution>\n                            </executions>\n                        </plugin>\n                        \x3c!-- GPG --\x3e\n                        <plugin> \x3c!-- 进行延签 --\x3e\n                            <groupId>org.apache.maven.plugins</groupId>\n                            <artifactId>maven-gpg-plugin</artifactId>\n                            <version>1.6</version>\n                            <executions>\n                                <execution>\n                                    <phase>verify</phase>\n                                    <goals>\n                                        <goal>sign</goal>\n                                    </goals>\n                                </execution>\n                            </executions>\n                        </plugin>\n                    </plugins>\n                </build>\n                <distributionManagement>\n                    <snapshotRepository>\n                        <id>oss</id>\n                        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>\n                    </snapshotRepository>\n                    <repository>\n                        <id>oss</id>\n                        <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>\n                    </repository>\n                </distributionManagement>\n            </profile>\n        </profiles>\n    \n        <licenses>\n            <license>\n                <name>The Apache Software License, Version 2.0</name>\n                <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>\n                <comments>A business-friendly OSS license</comments>\n            </license>\n        </licenses>\n    \n        <scm>\n            <url>https://github.com/github1013/spring-cloud-alibaba-dubbo</url>\n            <connection>scm:githttps://github.com/github1013/spring-cloud-alibaba-dubbo.git</connection>\n            <developerConnection>scm:git:https://github.com/github1013/spring-cloud-alibaba-dubbo.git</developerConnection>\n        </scm>\n    \n        <developers>\n            <developer>\n                <name>cmcc</name>\n                <email>136913633167@163.com</email>\n                <url>http://www.cmcc.com</url>\n            </developer>\n        </developers>\n        <repositories>\n            <repository>\n                <id>spring-milestones</id>\n                <name>Spring Milestones</name>\n                <url>https://repo.spring.io/libs-milestone</url>\n                <snapshots>\n                    <enabled>false</enabled>\n                </snapshots>\n            </repository>\n        </repositories>\n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br")])]),a("h2",{attrs:{id:"创建服务提供者-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者-2"}},[s._v("#")]),s._v(" 创建服务提供者")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-provider")]),s._v(" 的模块，其父工程为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-examples")])]),s._v(" "),a("h3",{attrs:{id:"pom-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom-2"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>spring-cloud-alibaba-dubbo-examples</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n        </parent>\n    \n        <artifactId>spring-cloud-alibaba-dubbo-provider</artifactId>\n        <packaging>pom</packaging>\n        <url>http://www.cmcc.com</url>\n    \n        <modules>\n            <module>spring-cloud-alibaba-dubbo-provider-api</module>\n            <module>spring-cloud-alibaba-dubbo-provider-service</module>\n        </modules>\n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"创建服务提供者接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者接口"}},[s._v("#")]),s._v(" 创建服务提供者接口")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-provider-api")]),s._v(" 的模块，其父工程为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-provider")])]),s._v(" "),a("h3",{attrs:{id:"pom-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom-3"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>spring-cloud-alibaba-dubbo-provider</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n        </parent>\n    \n        <artifactId>spring-cloud-alibaba-dubbo-provider-api</artifactId>\n        <url>http://www.cmcc.com</url>\n    \n        <dependencies>\n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>spring-cloud-alibaba-dubbo-starter</artifactId>\n                <scope>provided</scope>\n            </dependency>\n        </dependencies>\n    \n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"定义接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义接口"}},[s._v("#")]),s._v(" 定义接口")]),s._v(" "),a("h4",{attrs:{id:"providerservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providerservice"}},[s._v("#")]),s._v(" ProviderService")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.alibaba.dubbo.provider.service;\n    \n    import org.springframework.cloud.openfeign.FeignClient;\n    import org.springframework.web.bind.annotation.GetMapping;\n    \n    @FeignClient("provider")\n    public interface ProviderService {\n        @GetMapping("/hi")\n        String hi();\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"fooservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fooservice"}},[s._v("#")]),s._v(" FooService")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.alibaba.dubbo.provider.service;\n    \n    import org.springframework.cloud.openfeign.FeignClient;\n    import org.springframework.web.bind.annotation.GetMapping;\n    \n    @FeignClient("provider")\n    public interface FooService {\n        @GetMapping("/foo")\n        String foo();\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"创建服务提供者实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者实现"}},[s._v("#")]),s._v(" 创建服务提供者实现")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-provider-service")]),s._v(" 的模块，其父工程为 "),a("code",[s._v("spring-cloud-alibaba-dubbo-provider")])]),s._v(" "),a("h3",{attrs:{id:"pom-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom-4"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>spring-cloud-alibaba-dubbo-provider</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n        </parent>\n    \n        <artifactId>spring-cloud-alibaba-dubbo-provider-service</artifactId>\n        <url>http://www.cmcc.com</url>\n    \n        <dependencies>\n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>spring-cloud-alibaba-dubbo-starter</artifactId>\n            </dependency>\n    \n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>spring-cloud-alibaba-dubbo-provider-api</artifactId>\n                <version>${project.parent.version}</version>\n            </dependency>\n        </dependencies>\n    \n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"实现接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现接口"}},[s._v("#")]),s._v(" 实现接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.alibaba.dubbo.provider.service.impl;\n    \n    import com.cmcc.alibaba.dubbo.provider.service.ProviderService;\n    import org.springframework.web.bind.annotation.RestController;\n    \n    @RestController\n    public class ProviderServiceImpl implements ProviderService {\n        @Override\n        public String hi() {\n            return "Hi Spring Cloud Alibaba Dubbo";\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.alibaba.dubbo.provider.service.impl;\n    \n    import com.cmcc.alibaba.dubbo.provider.service.FooService;\n    import org.springframework.web.bind.annotation.RestController;\n    \n    @RestController\n    public class FooServiceImpl implements FooService {\n        @Override\n        public String foo() {\n            return "Foo Spring Cloud Alibaba Dubbo";\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[s._v("#")]),s._v(" Application")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.alibaba.dubbo.provider;\n    \n    import com.alibaba.dubbo.config.ProtocolConfig;\n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n    import org.springframework.context.annotation.Bean;\n    \n    @EnableDiscoveryClient\n    @SpringBootApplication\n    public class ProviderApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(ProviderApplication.class, args);\n        }\n    \n        @Bean\n        public ProtocolConfig protocolConfig() {\n            ProtocolConfig protocolConfig = new ProtocolConfig();\n            protocolConfig.setPort(20880);\n            protocolConfig.setName("dubbo");\n            return protocolConfig;\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[s._v("#")]),s._v(" application.yml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    spring:\n      main:\n        allow-bean-definition-overriding: true\n      application:\n        name: provider\n      cloud:\n        nacos:\n          discovery:\n            server-addr: 192.168.10.146:8848\n    \n    server:\n      port: 10101\n    \n    dubbo:\n      application:\n        name: provider\n      registry:\n        address: nacos://192.168.10.146:8848\n      scan:\n        basePackages: com.cmcc.alibaba.dubbo.provider.service\n    \n    management:\n      endpoints:\n        web:\n          exposure:\n            include: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"运行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行测试"}},[s._v("#")]),s._v(" 运行测试")]),s._v(" "),a("p",[s._v("访问 Nacos 可以看到同时注册了 Dubbo 和 Http 服务")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190315165710.png",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);