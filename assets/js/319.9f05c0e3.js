(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1091:function(t,n,r){"use strict";r.r(n);var e=r(3),o=Object(e.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"spring-aop-实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-实现原理"}},[t._v("#")]),t._v(" Spring AOP 实现原理")]),t._v(" "),r("p",[t._v("Spring AOP 中的动态代理主要有两种方式，"),r("strong",[t._v("JDK 动态代理")]),t._v(" 和 "),r("strong",[t._v("CGLIB 动态代理")]),t._v("。JDK 动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK 动态代理的核心是 "),r("code",[t._v("InvocationHandler")]),t._v(" 接口和 "),r("code",[t._v("Proxy")]),t._v(" 类。")]),t._v(" "),r("p",[t._v("如果目标类没有实现接口，那么 Spring AOP 会选择使用 CGLIB 来动态代理目标类。CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态的生成某个类的子类，注意，CGLIB 是通过继承的方式做的动态代理，因此如果某个类被标记为 final，那么它是无法使用 CGLIB 做动态代理的。")])])}),[],!1,null,null,null);n.default=o.exports}}]);