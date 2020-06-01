(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{794:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"路由模式与-404"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由模式与-404"}},[s._v("#")]),s._v(" 路由模式与 404")]),s._v(" "),n("h2",{attrs:{id:"路由模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由模式"}},[s._v("#")]),s._v(" 路由模式")]),s._v(" "),n("p",[s._v("路由模式有两种")]),s._v(" "),n("ul",[n("li",[s._v("hash：路径带 "),n("code",[s._v("#")]),s._v(" 符号，如 "),n("code",[s._v("http://localhost/#/login")])]),s._v(" "),n("li",[s._v("history：路径不带 "),n("code",[s._v("#")]),s._v(" 符号，如 "),n("code",[s._v("http://localhost/login")])])]),s._v(" "),n("p",[s._v("修改路由配置，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    export default new Router({\n      mode: 'history',\n      routes: [\n      ]\n    });\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"处理-404"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理-404"}},[s._v("#")]),s._v(" 处理 404")]),s._v(" "),n("p",[s._v("创建一个名为 "),n("code",[s._v("NotFound.vue")]),s._v(" 的视图组件，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    <template>\n        <div>\n          页面不存在，请重试！\n        </div>\n    </template>\n    \n    <script>\n        export default {\n            name: "NotFount"\n        }\n    <\/script>\n    \n    <style scoped>\n    \n    </style>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("修改路由配置，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        {\n          path: '*',\n          component: NotFound\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);