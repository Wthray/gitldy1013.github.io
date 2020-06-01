(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{797:function(a,s,e){"use strict";e.r(s);var t=e(3),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"组件重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件重定向"}},[a._v("#")]),a._v(" 组件重定向")]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("重定向的意思大家都明白，但 Vue 中的重定向是作用在路径不同但组件相同的情况下")]),a._v(" "),e("h2",{attrs:{id:"配置重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置重定向"}},[a._v("#")]),a._v(" 配置重定向")]),a._v(" "),e("h3",{attrs:{id:"修改路由配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改路由配置"}},[a._v("#")]),a._v(" 修改路由配置")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("        {\n          path: '/main',\n          name: 'Main',\n          component: Main\n        },\n        {\n          path: '/goHome',\n          redirect: '/main'\n        }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("说明：这里定义了两个路径，一个是 "),e("code",[a._v("/main")]),a._v(" ，一个是 "),e("code",[a._v("/goHome")]),a._v("，其中 "),e("code",[a._v("/goHome")]),a._v(" 重定向到了 "),e("code",[a._v("/main")]),a._v(" 路径，由此可以看出重定向不需要定义组件；")]),a._v(" "),e("h3",{attrs:{id:"重定向到组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向到组件"}},[a._v("#")]),a._v(" 重定向到组件")]),a._v(" "),e("p",[a._v("设置对应路径即可")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    <router-link to="/goHome">回到首页</router-link>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"带参数的重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#带参数的重定向"}},[a._v("#")]),a._v(" 带参数的重定向")]),a._v(" "),e("h3",{attrs:{id:"修改路由配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改路由配置-2"}},[a._v("#")]),a._v(" 修改路由配置")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("        {\n          // 首页\n          path: '/main/:username',\n          name: 'Main',\n          component: Main\n        },\n        {\n          path: '/goHome/:username',\n          redirect: '/main/:username'\n        }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h3",{attrs:{id:"重定向到组件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向到组件-2"}},[a._v("#")]),a._v(" 重定向到组件")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    <router-link to="/goHome/cmcc">回到首页</router-link>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);