(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1123:function(t,a,e){"use strict";e.r(a);var r=e(3),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"持续集成的基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成的基本概念"}},[t._v("#")]),t._v(" 持续集成的基本概念")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("互联网软件的开发和发布，已经形成了一套标准流程，最重要的组成部分就是持续集成（Continuous integration，简称CI）。")]),t._v(" "),e("h2",{attrs:{id:"持续集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[t._v("#")]),t._v(" 持续集成")]),t._v(" "),e("p",[t._v("持续集成指的是，频繁地（一天多次）将代码集成到主干。它的好处主要有两个：")]),t._v(" "),e("ul",[e("li",[t._v("快速发现错误。每完成一点更新，就集成到主干，可以快速发现错误，定位错误也比较容易。")]),t._v(" "),e("li",[t._v("防止分支大幅偏离主干。如果不是经常集成，主干又在不断更新，会导致以后集成的难度变大，甚至难以集成。")])]),t._v(" "),e("p",[t._v('Martin Fowler 说过，"持续集成并不能消除 Bug，而是让它们非常容易发现和改正。"')]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/c5c8e6f40c7c133e22402c00bb7e1a25hd.jpg",alt:""}})]),t._v(" "),e("p",[t._v("持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。")]),t._v(" "),e("p",[t._v("与持续集成相关的，还有两个概念，分别是持续交付和持续部署。")]),t._v(" "),e("h2",{attrs:{id:"持续交付"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续交付"}},[t._v("#")]),t._v(" 持续交付")]),t._v(" "),e("p",[t._v("持续交付（Continuous delivery）指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。如果评审通过，代码就进入生产阶段。")]),t._v(" "),e("p",[t._v("持续交付可以看作持续集成的下一步。它强调的是，不管怎么更新，软件是随时随地可以交付的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/db7198e3c39e4656e18efcb4bd1b20b1hd.jpg",alt:""}})]),t._v(" "),e("p",[t._v("持续交付在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境的「类生产环境」（production-like environments）中。比如，我们完成单元测试后，可以把代码部署到连接数据库的 Staging 环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境中。")]),t._v(" "),e("h2",{attrs:{id:"持续部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续部署"}},[t._v("#")]),t._v(" 持续部署")]),t._v(" "),e("p",[t._v("持续部署（continuous deployment）是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境。")]),t._v(" "),e("p",[t._v("持续部署的目标是，代码在任何时刻都是可部署的，可以进入生产阶段。")]),t._v(" "),e("p",[t._v("持续部署的前提是能自动化完成测试、构建、部署等步骤。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/f96f19e4d567aad5006d841963a86e41hd.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=s.exports}}]);