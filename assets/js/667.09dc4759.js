(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{985:function(e,t,s){"use strict";s.r(t);var n=s(3),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"spring-mvc-拦截器的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-拦截器的使用"}},[e._v("#")]),e._v(" Spring MVC 拦截器的使用")]),e._v(" "),s("h2",{attrs:{id:"拦截器简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拦截器简介"}},[e._v("#")]),e._v(" 拦截器简介")]),e._v(" "),s("p",[e._v("Spring Web MVC 的处理器拦截器，类似于 Servlet 开发中的过滤器 Filter，用于对处理器进行预处理和后处理。")]),e._v(" "),s("h2",{attrs:{id:"常见应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见应用场景"}},[e._v("#")]),e._v(" 常见应用场景")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("日志记录：记录请求信息的日志，以便进行信息监控、信息统计、计算 PV（Page View）等")])]),e._v(" "),s("li",[s("p",[e._v("权限检查：如登录检测，进入处理器检测检测是否登录，如果没有直接返回到登录页面")])]),e._v(" "),s("li",[s("p",[e._v("性能监控：有时候系统在某段时间莫名其妙的慢，可以通过拦截器在进入处理器之前记录开始时间，在处理完后记录结束时间，从而得到该请求的处理时间")])]),e._v(" "),s("li",[s("p",[e._v("通用行为：读取 Cookie 得到用户信息并将用户对象放入请求，从而方便后续流程使用，还有如提取 Locale、Theme 信息等，只要是多个处理器都需要的即可使用拦截器实现")])])]),e._v(" "),s("h2",{attrs:{id:"第一个-spring-mvc-拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个-spring-mvc-拦截器"}},[e._v("#")]),e._v(" 第一个 Spring MVC 拦截器")]),e._v(" "),s("p",[e._v("Spring MVC 拦截器需要实现 "),s("code",[e._v("HandlerInterceptor")]),e._v(" 接口，该接口定义了 3 个方法，分别为 "),s("code",[e._v("preHandle()")]),e._v("、"),s("code",[e._v("postHandle()")]),e._v(" 和 "),s("code",[e._v("afterCompletion()")]),e._v("，咱们就是通过重写这 3 个方法来对用户的请求进行拦截处理的。")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("preHandle(HttpServletRequest request, HttpServletResponse response, Object handle)")]),e._v("：该方法在请求处理之前进行调用。Spring MVC 中的 Interceptor 是链式调用的，在一个应用中或者说是在一个请求中可以同时存在多个 Interceptor 。每个 Interceptor 的调用会依据它的声明顺序依次执行，而且最先执行的都是 Interceptor 中的 "),s("code",[e._v("preHandle")]),e._v(" 方法，所以可以在这个方法中进行一些前置初始化操作或者是对当前请求做一个预处理，也可以在这个方法中进行一些判断来决定请求是否要继续进行下去。该方法的返回值是布尔值 Boolean 类型的，当它返回为 "),s("code",[e._v("false")]),e._v(" 时，表示请求结束，后续的 Interceptor 和 Controller 都不会再执行；当返回值为 "),s("code",[e._v("true")]),e._v(" 时，就会继续调用下一个 Interceptor 的 "),s("code",[e._v("preHandle")]),e._v(" 方法，如果已经是最后一个 Interceptor 的时候，就会是调用当前请求的 Controller 中的方法。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("postHandle(HttpServletRequest request, HttpServletResponse response, Object handle, ModelAndView modelAndView)")]),e._v("：通过 "),s("code",[e._v("preHandle")]),e._v(" 方法的解释咱们知道这个方法包括后面要说到的 "),s("code",[e._v("afterCompletion")]),e._v(" 方法都只能在当前所属的 Interceptor 的 "),s("code",[e._v("preHandle")]),e._v(" 方法的返回值为 "),s("code",[e._v("true")]),e._v(" 的时候，才能被调用。"),s("code",[e._v("postHandle")]),e._v(" 方法在当前请求进行处理之后，也就是在 Controller 中的方法调用之后执行，但是它会在 "),s("code",[e._v("DispatcherServlet")]),e._v(" 进行视图返回渲染之前被调用，所以咱们可以在这个方法中对 Controller 处理之后的 "),s("code",[e._v("ModelAndView")]),e._v(" 对象进行操作。"),s("code",[e._v("postHandle")]),e._v(" 方法被调用的方向跟 "),s("code",[e._v("preHandle")]),e._v(" 是相反的，也就是说，先声明的 Interceptor 的 "),s("code",[e._v("postHandle")]),e._v(" 方法反而会后执行。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handle, Exception ex)")]),e._v("：也是需要当前对应的 Interceptor 的 "),s("code",[e._v("preHandle")]),e._v(" 方法的返回值为 "),s("code",[e._v("true")]),e._v(" 时才会执行。因此，该方法将在整个请求结束之后，也就是在 "),s("code",[e._v("DispatcherServlet")]),e._v(" 渲染了对应的视图之后执行，这个方法的主要作用是用于进行资源清理的工作。")])])]),e._v(" "),s("h3",{attrs:{id:"创建登录拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建登录拦截器"}},[e._v("#")]),e._v(" 创建登录拦截器")]),e._v(" "),s("p",[e._v("我们知道对系统的相关操作是需要登录后才可以使用的，当未登录时是无法直接访问需要登录权限的操作的，为了做到这个效果，我们使用登录拦截器来判断用户是否登录，如果用户已登录则放行让用户继续操作，否则就将其跳转到登录页。")]),e._v(" "),s("p",[e._v("定义一个名为 "),s("code",[e._v("LoginInterceptor")]),e._v(" 的拦截器，代码如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    package com.cmcc.my.shop.web.interceptor;\n    \n    import com.cmcc.my.shop.entity.User;\n    import org.springframework.web.servlet.HandlerInterceptor;\n    import org.springframework.web.servlet.ModelAndView;\n    \n    import javax.servlet.http.HttpServletRequest;\n    import javax.servlet.http.HttpServletResponse;\n    \n    /**\n     * 登录拦截器\n     * <p>Title: LoginInterceptor</p>\n     * <p>Description: </p>\n     *\n     * @author cmcc\n     * @version 1.0.0\n     * @date 2018/6/12 5:44\n     */\n    public class LoginInterceptor implements HandlerInterceptor {\n        public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {\n            User user = (User) httpServletRequest.getSession().getAttribute("user");\n    \n            // 判断用户是否登录\n            if (user == null) {\n                // 用户未登录，重定向到登录页\n                httpServletResponse.sendRedirect("/login");\n                return false;\n            }\n    \n            // 放行\n            return true;\n        }\n    \n        public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {\n            // 如果请求来自登录页\n            if (modelAndView.getViewName().endsWith("login")) {\n                // 则直接重定向到首页不再显示登录页\n                httpServletResponse.sendRedirect("/main");\n            }\n        }\n    \n        public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {\n    \n        }\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br")])]),s("h3",{attrs:{id:"在-spring-mvc-xml-中配置拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-spring-mvc-xml-中配置拦截器"}},[e._v("#")]),e._v(" 在 "),s("code",[e._v("spring-mvc.xml")]),e._v(" 中配置拦截器")]),e._v(" "),s("p",[e._v("拦截器定义后还需要在 "),s("code",[e._v("spring-mvc.xml")]),e._v(" 中配置拦截器，代码如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    \x3c!-- 拦截器配置，拦截顺序：先执行后定义的，排在第一位的最后执行。--\x3e\n    <mvc:interceptors>\n        <mvc:interceptor>\n            <mvc:mapping path="/**"/>\n            <mvc:exclude-mapping path="/static/**"/>\n            <mvc:exclude-mapping path="/login"/>\n            <bean class="com.cmcc.my.shop.web.interceptor.LoginInterceptor"/>\n        </mvc:interceptor>\n    </mvc:interceptors>\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("相关配置说明：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mvc:interceptor")]),e._v("：定义一个拦截器\n"),s("ul",[s("li",[s("code",[e._v("mvc:mapping")]),e._v("：映射路径，需要拦截的请求路径")]),e._v(" "),s("li",[s("code",[e._v("mvc:exclude-mapping")]),e._v("：需要排除的请求路径，比如登录页本身是不需要拦截的，这里还包括了静态资源路径也是不需要拦截的")]),e._v(" "),s("li",[s("code",[e._v("bean class")]),e._v("：配置指定的拦截器对象")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);