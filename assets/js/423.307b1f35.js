(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1227:function(e,i,t){"use strict";t.r(i);var r=t(3),s=Object(r.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"说说你对设计原则的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说说你对设计原则的理解"}},[e._v("#")]),e._v(" 说说你对设计原则的理解")]),e._v(" "),t("h2",{attrs:{id:"口诀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#口诀"}},[e._v("#")]),e._v(" 口诀")]),e._v(" "),t("p",[e._v("为了便于记忆，我们可以使用一个口诀来记忆面向对象设计原则："),t("strong",[e._v("开口合里最单依")])]),e._v(" "),t("ul",[t("li",[e._v("开：开闭原则")]),e._v(" "),t("li",[e._v("口：接口隔离原则")]),e._v(" "),t("li",[e._v("合：组合/聚合原则")]),e._v(" "),t("li",[e._v("里：里式替换原则")]),e._v(" "),t("li",[e._v("最：最少知识原则（迪米特法则）")]),e._v(" "),t("li",[e._v("单：单一职责原则")]),e._v(" "),t("li",[e._v("依：依赖倒置原则")])]),e._v(" "),t("h2",{attrs:{id:"开闭原则-open-closed-principle-ocp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则-open-closed-principle-ocp"}},[e._v("#")]),e._v(" 开闭原则(Open-Closed Principle, OCP)")]),e._v(" "),t("p",[e._v("一个软件实体应当对扩展开发,对修改关闭.说的是,再设计一个模块的时候,应当使这个模块可以在不被修改的前提下被扩展.换言之,应当可以在不必修改源代码的情况下改变这个模块的行为，在保持系统一定稳定性的基础上，对系统进行扩展。这是面向对象设计（OOD）的基石，也是最重要的原则。")]),e._v(" "),t("h2",{attrs:{id:"接口隔离原则-interface-segregation-principle-isp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则-interface-segregation-principle-isp"}},[e._v("#")]),e._v(" 接口隔离原则(Interface Segregation Principle, ISP)")]),e._v(" "),t("ul",[t("li",[e._v("一个类对另外一个类的依赖是建立在最小的接口上。")]),e._v(" "),t("li",[e._v('使用多个专门的接口比使用单一的总接口要好.根据客户需要的不同,而为不同的客户端提供不同的服务是一种应当得到鼓励的做法.就像"看人下菜碟"一样,要看客人是谁,再提供不同档次的饭菜.')]),e._v(" "),t("li",[e._v("胖接口会导致他们的客户程序之间产生不正常的并且有害的耦合关系.当一个客户程序要求该胖接口进行一个改动时,会影响到所有其他的客户程序.因此客户程序应该仅仅依赖他们实际需要调用的方法.")])]),e._v(" "),t("h2",{attrs:{id:"组合-聚合复用原则-composite-aggregate-reuse-principle，carp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合-聚合复用原则-composite-aggregate-reuse-principle，carp"}},[e._v("#")]),e._v(" 组合/聚合复用原则(Composite/Aggregate Reuse Principle，CARP)")]),e._v(" "),t("p",[e._v("在一个新的对象里面使用一些已有的对象,使之成为新对象的一部分;新的对象通过这些向对象的委派达到复用已有功能的目的.这个设计原则有另一个简短的表述:要尽量使用合成/聚合,尽量不要使用继承.")]),e._v(" "),t("h2",{attrs:{id:"里氏代换原则-liskov-substitution-principle，lsp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#里氏代换原则-liskov-substitution-principle，lsp"}},[e._v("#")]),e._v(" 里氏代换原则(Liskov Substitution Principle，LSP)")]),e._v(" "),t("p",[e._v("由 Barbar Liskov (芭芭拉.里氏) 提出，是继承复用的基石。")]),e._v(" "),t("p",[e._v("所有引用基类的地方必须透明的使用其子类的对象。只要父类能出现的地方子类也可以出现，而且替换为子类不会产生任何错误或异常，但是反过来就不行，有子类出现的地方，父类未必就能适应。")]),e._v(" "),t("h2",{attrs:{id:"最少知识原则-least-knowledge-principle，lkp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最少知识原则-least-knowledge-principle，lkp"}},[e._v("#")]),e._v(" 最少知识原则(Least Knowledge Principle，LKP)")]),e._v(" "),t("p",[e._v("一个对象应当对其他对象有尽可能少的了解.")]),e._v(" "),t("p",[e._v("没有任何一个其他的 OO 设计原则象迪米特法则这样有如此之多的表述方式,如下几种：")]),e._v(" "),t("ul",[t("li",[e._v("只与你直接的朋友们通信(Only talk to your immediate friends)")]),e._v(" "),t("li",[e._v('不要跟"陌生人"说话(Don\'t talk to strangers)')]),e._v(" "),t("li",[e._v("每一个软件单位对其他的单位都只有最少的知识,而且局限于那些本单位密切相关的软件单位")])]),e._v(" "),t("p",[e._v("就是说,如果两个类不必彼此直接通信,那么这两个类就不应当发生直接的相互作用,如果其中的一个类需要调用另一个类的某一个方法的话,可以通过第三者转发这个调用。")]),e._v(" "),t("h2",{attrs:{id:"单一职责原则-simple-responsibility-pinciple，srp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则-simple-responsibility-pinciple，srp"}},[e._v("#")]),e._v(" 单一职责原则(Simple responsibility pinciple，SRP)")]),e._v(" "),t("p",[e._v("就一个类而言,应该仅有一个引起它变化的原因,如果你能想到多于一个的动机去改变一个类,那么这个类就具有多于一个的职责.应该把多于的指责分离出去,分别再创建一些类来完成每一个职责.")]),e._v(" "),t("h2",{attrs:{id:"依赖倒置原则-dependence-inversion-principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则-dependence-inversion-principle"}},[e._v("#")]),e._v(" 依赖倒置原则(Dependence Inversion Principle)")]),e._v(" "),t("p",[e._v("要求客户端依赖于抽象耦合.")]),e._v(" "),t("ul",[t("li",[e._v("模块间的依赖通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的。")]),e._v(" "),t("li",[e._v("接口或抽象类不依赖实现类")]),e._v(" "),t("li",[e._v("实现类依赖接口或抽象类")])]),e._v(" "),t("p",[e._v("采用依赖倒置原则可以减少类间的耦合性，提高系统的稳定，降低并行开发引起的风险，提高代码的可读性和可维护性。")])])}),[],!1,null,null,null);i.default=s.exports}}]);