(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{1042:function(v,_,s){"use strict";s.r(_);var e=s(3),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"部署图及实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署图及实现原理"}},[v._v("#")]),v._v(" 部署图及实现原理")]),v._v(" "),s("h2",{attrs:{id:"部署图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署图"}},[v._v("#")]),v._v(" 部署图")]),v._v(" "),s("p",[v._v("单点登录涉及 "),s("code",[v._v("sso")]),v._v(" 认证中心与众子系统，子系统与 "),s("code",[v._v("sso")]),v._v(" 认证中心需要通信以交换令牌、校验令牌及发起注销请求，因而子系统必须集成 "),s("code",[v._v("sso")]),v._v(" 的客户端，"),s("code",[v._v("sso")]),v._v(" 认证中心则是 "),s("code",[v._v("sso")]),v._v(" 服务端，整个单点登录过程实质是 "),s("code",[v._v("sso")]),v._v(" 客户端与服务端通信的过程，用下图描述")]),v._v(" "),s("p",[s("img",{attrs:{src:"/img/2018042722120010.png",alt:""}})]),v._v(" "),s("p",[s("code",[v._v("sso")]),v._v(" 认证中心与 "),s("code",[v._v("sso")]),v._v(" 客户端通信方式有多种，"),s("code",[v._v("HttpClient")]),v._v("，"),s("code",[v._v("WebService")]),v._v("、"),s("code",[v._v("rpc")]),v._v("、"),s("code",[v._v("restful api")]),v._v(" 都可以")]),v._v(" "),s("h2",{attrs:{id:"实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[v._v("#")]),v._v(" 实现原理")]),v._v(" "),s("h3",{attrs:{id:"sso-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sso-client"}},[v._v("#")]),v._v(" SSO Client")]),v._v(" "),s("ul",[s("li",[v._v("拦截子系统未登录用户请求，跳转至 "),s("code",[v._v("sso")]),v._v(" 认证中心")]),v._v(" "),s("li",[v._v("接收并存储 "),s("code",[v._v("sso")]),v._v(" 认证中心发送的令牌")]),v._v(" "),s("li",[v._v("与 "),s("code",[v._v("SSO Server")]),v._v(" 通信，校验令牌的有效性")]),v._v(" "),s("li",[v._v("建立局部会话")]),v._v(" "),s("li",[v._v("拦截用户注销请求，向 "),s("code",[v._v("sso")]),v._v(" 认证中心发送注销请求")]),v._v(" "),s("li",[v._v("接收 "),s("code",[v._v("sso")]),v._v(" 认证中心发出的注销请求，销毁局部会话")])]),v._v(" "),s("h3",{attrs:{id:"sso-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sso-server"}},[v._v("#")]),v._v(" SSO Server")]),v._v(" "),s("ul",[s("li",[v._v("验证用户的登录信息")]),v._v(" "),s("li",[v._v("创建全局会话")]),v._v(" "),s("li",[v._v("创建授权令牌")]),v._v(" "),s("li",[v._v("与 "),s("code",[v._v("SSO Client")]),v._v(" 通信发送令牌")]),v._v(" "),s("li",[v._v("校验 "),s("code",[v._v("SSO Client")]),v._v(" 令牌有效性")]),v._v(" "),s("li",[v._v("系统注册")]),v._v(" "),s("li",[v._v("接收 "),s("code",[v._v("SSO Client")]),v._v(" 注销请求，注销所有会话")])])])}),[],!1,null,null,null);_.default=t.exports}}]);