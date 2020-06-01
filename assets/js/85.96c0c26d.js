(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{790:function(a,v,e){"use strict";e.r(v);var t=e(3),_=Object(t.a)({},(function(){var a=this,v=a.$createElement,e=a._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"媒体查询的用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询的用法"}},[a._v("#")]),a._v(" 媒体查询的用法")]),a._v(" "),e("h2",{attrs:{id:"media-媒体查询的用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#media-媒体查询的用法"}},[a._v("#")]),a._v(" "),e("code",[a._v("@media")]),a._v(" 媒体查询的用法")]),a._v(" "),e("p",[a._v("媒体查询能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果。")]),a._v(" "),e("h2",{attrs:{id:"浏览器支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[a._v("#")]),a._v(" 浏览器支持")]),a._v(" "),e("p",[a._v("表格中的数字表示支持 "),e("code",[a._v("@media")]),a._v(" 规则的第一个浏览器的版本号")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Chrome")]),a._v(" "),e("th",[a._v("IE")]),a._v(" "),e("th",[a._v("Firefox")]),a._v(" "),e("th",[a._v("Safari")]),a._v(" "),e("th",[a._v("Opera")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("21")]),a._v(" "),e("td",[a._v("9")]),a._v(" "),e("td",[a._v("3.5")]),a._v(" "),e("td",[a._v("4.0")]),a._v(" "),e("td",[a._v("9")])])])]),a._v(" "),e("h2",{attrs:{id:"媒体类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[a._v("#")]),a._v(" 媒体类型")]),a._v(" "),e("p",[a._v("媒体类型在 CSS2 中是一个常见属性，可以通过媒体类型对不同设备指定不同样式。")]),a._v(" "),e("ul",[e("li",[a._v("ALL：所有设备")]),a._v(" "),e("li",[a._v("Braille：盲人用点子法触觉回馈设备")]),a._v(" "),e("li",[a._v("Embossed：盲文打印机")]),a._v(" "),e("li",[a._v("Handheld：便携设备")]),a._v(" "),e("li",[a._v("Print：打印用纸或打印预览视图")]),a._v(" "),e("li",[a._v("Projection：各种投影设备")]),a._v(" "),e("li",[a._v("Screen：电脑显示器")]),a._v(" "),e("li",[a._v("Speech：语音或音频合成器")]),a._v(" "),e("li",[a._v("Tv：电视机类型设备")]),a._v(" "),e("li",[a._v("Tty：使用固定密度字母栅格的媒介，比如电传打字机和终端")])]),a._v(" "),e("p",[e("strong",[a._v("Screen")]),a._v("、"),e("strong",[a._v("All")]),a._v("、"),e("strong",[a._v("Print")]),a._v(" 为最常见的三种媒体类型。")]),a._v(" "),e("h2",{attrs:{id:"媒体特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体特性"}},[a._v("#")]),a._v(" 媒体特性")]),a._v(" "),e("p",[a._v("媒体查询中的大部分接受 "),e("code",[a._v("min/max")]),a._v(" 前缀，用来表达其逻辑关系，表示应用大于等于或小于等于某个值的情况。没有特殊说明都支持 "),e("code",[a._v("min/max")]),a._v("。")]),a._v(" "),e("ul",[e("li",[a._v("width：Length 渲染界面的宽度")]),a._v(" "),e("li",[a._v("height：Length 渲染界面的高度")]),a._v(" "),e("li",[a._v("color：整数，表示色彩的字节数")]),a._v(" "),e("li",[a._v("color-index：整数， 色彩表中的色彩数")]),a._v(" "),e("li",[a._v("device-aspct-ratio：整数/整数，宽高比例")]),a._v(" "),e("li",[a._v("device-height：Length 设备屏幕的输出高度")]),a._v(" "),e("li",[a._v("device-width：Length 设备屏幕的输出宽度")]),a._v(" "),e("li",[a._v("grid（不支持 "),e("code",[a._v("min/max")]),a._v(" 前缀）：整数，是否基于栅格的设备")]),a._v(" "),e("li",[a._v("monochrome：整数，单色帧缓冲器中每像素字节数")]),a._v(" "),e("li",[a._v("resolution：分辨率（dpi/dpcm）分辨率")]),a._v(" "),e("li",[a._v("scan（不支持 "),e("code",[a._v("min/max")]),a._v(" 前缀）：Progressive interlaced，Tv 媒体类型的扫描方式")]),a._v(" "),e("li",[a._v("orientation（不支持 "),e("code",[a._v("min/max")]),a._v(" 前缀）：Portrait//landscape 横屏或竖屏")])]),a._v(" "),e("h2",{attrs:{id:"使用媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用媒体查询"}},[a._v("#")]),a._v(" 使用媒体查询")]),a._v(" "),e("p",[a._v("语法："),e("code",[a._v("@media 媒体类型 and (媒体特性) {你的样式}")])]),a._v(" "),e("h3",{attrs:{id:"最大宽度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最大宽度"}},[a._v("#")]),a._v(" 最大宽度")]),a._v(" "),e("p",[e("code",[a._v("max-width")]),a._v(" 是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。如：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    @media screen and (max-width:480px) {\n     .ads {\n       display:none;\n      }\n    }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("上面表示的是：当屏幕小于或等于 480px 时，页面中包含类样式 "),e("code",[a._v(".ads")]),a._v(" 的元素都将被隐藏。")]),a._v(" "),e("h3",{attrs:{id:"最小宽度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最小宽度"}},[a._v("#")]),a._v(" 最小宽度")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`min-width` 与 `max-width` 相反，指的是媒体类型大于或等于指定宽度时，样式生效。\n\n    @media screen and (min-width: 900px) {\n        .wrapper {width: 980px;}\n    }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("上面表示的是：当屏幕大于或等于 900px 时，页面中包含类样式 "),e("code",[a._v(".wrapper")]),a._v(" 元素的宽度为 980px。")]),a._v(" "),e("h3",{attrs:{id:"多个媒体特性的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个媒体特性的使用"}},[a._v("#")]),a._v(" 多个媒体特性的使用")]),a._v(" "),e("p",[a._v("媒体查询可以使用关键词 "),e("code",[a._v("and")]),a._v(" 将多个媒体特性结合在一起。也就是说，一个媒体查询中可以包含 0 到多个表达式，表达式又可以包含 0 到多个关键字，以及一种媒体类型。")]),a._v(" "),e("p",[a._v("当屏幕在 600px~900px 之间时，"),e("code",[a._v("body")]),a._v(" 的背景色渲染为 "),e("code",[a._v("#F5F5F5")]),a._v(" ，如下所示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    @media screen and (min-width:600px) and (max-width:900px) {\n      body {background-color:#F5F5F5;}\n    }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);v.default=_.exports}}]);