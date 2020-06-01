(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{791:function(s,n,e){"use strict";e.r(n);var a=e(3),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"路由钩子与异步请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由钩子与异步请求"}},[s._v("#")]),s._v(" 路由钩子与异步请求")]),s._v(" "),e("h2",{attrs:{id:"路由中的钩子函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由中的钩子函数"}},[s._v("#")]),s._v(" 路由中的钩子函数")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("beforeRouteEnter")]),s._v("：在进入路由前执行")]),s._v(" "),e("li",[e("code",[s._v("beforeRouteLeave")]),s._v("：在离开路由前执行")])]),s._v(" "),e("p",[s._v("案例代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('      export default {\n        props: [\'id\'],\n        name: "UserProfile",\n        beforeRouteEnter: (to, from, next) => {\n          console.log("准备进入个人信息页");\n          next();\n        },\n        beforeRouteLeave: (to, from, next) => {\n          console.log("准备离开个人信息页");\n          next();\n        }\n      }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("参数说明：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("to")]),s._v("：路由将要跳转的路径信息")]),s._v(" "),e("li",[e("code",[s._v("from")]),s._v("：路径跳转前的路径信息")]),s._v(" "),e("li",[e("code",[s._v("next")]),s._v("：路由的控制参数\n"),e("ul",[e("li",[e("code",[s._v("next()")]),s._v(" 跳入下一个页面")]),s._v(" "),e("li",[e("code",[s._v("next('/path')")]),s._v(" 改变路由的跳转方向，使其跳到另一个路由")]),s._v(" "),e("li",[e("code",[s._v("next(false)")]),s._v(" 返回原来的页面")]),s._v(" "),e("li",[e("code",[s._v("next((vm)=>{})")]),s._v(" "),e("strong",[s._v("仅在 beforeRouteEnter 中可用，vm 是组件实例")])])])])]),s._v(" "),e("h2",{attrs:{id:"在钩子函数中使用异步请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在钩子函数中使用异步请求"}},[s._v("#")]),s._v(" 在钩子函数中使用异步请求")]),s._v(" "),e("p",[s._v("安装 Axios")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    npm install axios -s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("引用 Axios")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    import axios from 'axios'\n    Vue.prototype.axios = axios;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在 "),e("code",[s._v("beforeRouteEnter")]),s._v(" 中进行异步请求，案例代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("      export default {\n        props: ['id'],\n        name: \"UserProfile\",\n        beforeRouteEnter: (to, from, next) => {\n          console.log(\"准备进入个人信息页\");\n          // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例\n          next(vm => {\n            vm.getData();\n          });\n        },\n        beforeRouteLeave: (to, from, next) => {\n          console.log(\"准备离开个人信息页\");\n          next();\n        },\n        methods: {\n          getData: function () {\n            this.axios({\n              method: 'get',\n              url: 'http://localhost:8080/data.json'\n            }).then(function (repos) {\n              console.log(repos);\n            }).catch(function (error) {\n              console.log(error);\n            });\n          }\n        }\n      }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);