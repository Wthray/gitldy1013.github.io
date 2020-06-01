(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{999:function(a,n,s){"use strict";s.r(n);var t=s(3),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"区别于c-c-中的指针，go语言中的指针不能进行偏移和运算，是安全指针。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别于c-c-中的指针，go语言中的指针不能进行偏移和运算，是安全指针。"}},[a._v("#")]),a._v(" 区别于C/C++中的指针，Go语言中的指针不能进行偏移和运算，是安全指针。")]),a._v(" "),s("blockquote",[s("p",[a._v("要搞明白Go语言中的指针需要先知道3个概念：指针地址、指针类型和指针取值。")])]),a._v(" "),s("h2",{attrs:{id:"go语言中的指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go语言中的指针"}},[a._v("#")]),a._v(" Go语言中的指针")]),a._v(" "),s("p",[a._v("任何程序数据载入内存后，在内存都有他们的地址，这就是指针。而为了保存一个数据在内存中的地址，我们就需要指针变量。")]),a._v(" "),s("p",[a._v("比如，“永远不要高估自己”这句话是我的座右铭，我想把它写入程序中，程序一启动这句话是要加载到内存（假设内存地址0x123456），我在程序中把这段话赋值给变量"),s("code",[a._v("A")]),a._v("，把内存地址赋值给变量"),s("code",[a._v("B")]),a._v("。这时候变量"),s("code",[a._v("B")]),a._v("就是一个指针变量。通过变量"),s("code",[a._v("A")]),a._v("和变量"),s("code",[a._v("B")]),a._v("都能找到我的座右铭。")]),a._v(" "),s("p",[a._v("Go语言中的指针不能进行偏移和运算，因此Go语言中的指针操作非常简单，我们只需要记住两个符号："),s("code",[a._v("&")]),a._v("（取地址）和"),s("code",[a._v("*")]),a._v("（根据地址取值）。")]),a._v(" "),s("h2",{attrs:{id:"指针地址和指针类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针地址和指针类型"}},[a._v("#")]),a._v(" 指针地址和指针类型")]),a._v(" "),s("p",[a._v("每个变量在运行时都拥有一个地址，这个地址代表变量在内存中的位置。Go语言中使用"),s("code",[a._v("&")]),a._v("字符放在变量前面对变量进行“取地址”操作。 Go语言中的值类型（int、float、bool、string、array、struct）都有对应的指针类型，如："),s("code",[a._v("*int")]),a._v("、"),s("code",[a._v("*int64")]),a._v("、"),s("code",[a._v("*string")]),a._v("等。")]),a._v(" "),s("p",[a._v("取变量指针的语法如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    ptr := &v    // v的类型为T\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("其中：")]),a._v(" "),s("ul",[s("li",[a._v("v:代表被取地址的变量，类型为"),s("code",[a._v("T")])]),a._v(" "),s("li",[a._v("ptr:用于接收地址的变量，ptr的类型就为"),s("code",[a._v("*T")]),a._v("，称做T的指针类型。*代表指针。")])]),a._v(" "),s("p",[a._v("举个例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    func main() {\n    \ta := 10\n    \tb := &a\n    \tfmt.Printf("a:%d ptr:%p\\n", a, &a) // a:10 ptr:0xc00001a078\n    \tfmt.Printf("b:%p type:%T\\n", b, b) // b:0xc00001a078 type:*int\n    \tfmt.Println(&b)                    // 0xc00000e018\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("我们来看一下"),s("code",[a._v("b := &a")]),a._v("的图示： "),s("img",{attrs:{src:"/go_img/ptr.png",alt:"取变量地址图示"}})]),a._v(" "),s("h2",{attrs:{id:"指针取值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指针取值"}},[a._v("#")]),a._v(" 指针取值")]),a._v(" "),s("p",[a._v("在对普通变量使用&操作符取地址后会获得这个变量的指针，然后可以对指针使用*操作，也就是指针取值，代码如下。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    func main() {\n    \t//指针取值\n    \ta := 10\n    \tb := &a // 取变量a的地址，将指针保存到b中\n    \tfmt.Printf("type of b:%T\\n", b)\n    \tc := *b // 指针取值（根据指针去内存取值）\n    \tfmt.Printf("type of c:%T\\n", c)\n    \tfmt.Printf("value of c:%v\\n", c)\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    type of b:*int\n    type of c:int\n    value of c:10\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("总结：")]),a._v(" 取地址操作符"),s("code",[a._v("&")]),a._v("和取值操作符"),s("code",[a._v("*")]),a._v("是一对互补操作符，"),s("code",[a._v("&")]),a._v("取出地址，"),s("code",[a._v("*")]),a._v("根据地址取出地址指向的值。")]),a._v(" "),s("p",[a._v("变量、指针地址、指针变量、取地址、取值的相互关系和特性如下：")]),a._v(" "),s("ul",[s("li",[a._v("对变量进行取地址（&）操作，可以获得这个变量的指针变量。")]),a._v(" "),s("li",[a._v("指针变量的值是指针地址。")]),a._v(" "),s("li",[a._v("对指针变量进行取值（*）操作，可以获得指针变量指向的原变量的值。")])]),a._v(" "),s("p",[s("strong",[a._v("指针传值示例：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func modify1(x int) {\n    \tx = 100\n    }\n    \n    func modify2(x *int) {\n    \t*x = 100\n    }\n    \n    func main() {\n    \ta := 10\n    \tmodify1(a)\n    \tfmt.Println(a) // 10\n    \tmodify2(&a)\n    \tfmt.Println(a) // 100\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h2",{attrs:{id:"new和make"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new和make"}},[a._v("#")]),a._v(" new和make")]),a._v(" "),s("p",[a._v("我们先来看一个例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    func main() {\n    \tvar a *int\n    \t*a = 100\n    \tfmt.Println(*a)\n    \n    \tvar b map[string]int\n    \tb["沙河娜扎"] = 100\n    \tfmt.Println(b)\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("执行上面的代码会引发panic，为什么呢？ 在Go语言中对于引用类型的变量，我们在使用的时候不仅要声明它，还要为它分配内存空间，否则我们的值就没办法存储。而对于值类型的声明不需要分配内存空间，是因为它们在声明的时候已经默认分配好了内存空间。要分配内存，就引出来今天的new和make。 Go语言中new和make是内建的两个函数，主要用来分配内存。")]),a._v(" "),s("h3",{attrs:{id:"new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new"}},[a._v("#")]),a._v(" new")]),a._v(" "),s("p",[a._v("new是一个内置的函数，它的函数签名如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func new(Type) *Type\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("其中，")]),a._v(" "),s("ul",[s("li",[a._v("Type表示类型，new函数只接受一个参数，这个参数是一个类型")]),a._v(" "),s("li",[a._v("*Type表示类型指针，new函数返回一个指向该类型内存地址的指针。")])]),a._v(" "),s("p",[a._v("new函数不太常用，使用new函数得到的是一个类型的指针，并且该指针对应的值为该类型的零值。举个例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    func main() {\n    \ta := new(int)\n    \tb := new(bool)\n    \tfmt.Printf("%T\\n", a) // *int\n    \tfmt.Printf("%T\\n", b) // *bool\n    \tfmt.Println(*a)       // 0\n    \tfmt.Println(*b)       // false\n    }\t\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("本节开始的示例代码中"),s("code",[a._v("var a *int")]),a._v("只是声明了一个指针变量a但是没有初始化，指针作为引用类型需要初始化后才会拥有内存空间，才可以给它赋值。应该按照如下方式使用内置的new函数对a进行初始化之后就可以正常对其赋值了：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func main() {\n    \tvar a *int\n    \ta = new(int)\n    \t*a = 10\n    \tfmt.Println(*a)\n    }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"make"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make"}},[a._v("#")]),a._v(" make")]),a._v(" "),s("p",[a._v("make也是用于内存分配的，区别于new，它只用于slice、map以及chan的内存创建，而且它返回的类型就是这三个类型本身，而不是他们的指针类型，因为这三种类型就是引用类型，所以就没有必要返回他们的指针了。make函数的函数签名如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func make(t Type, size ...IntegerType) Type\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("make函数是无可替代的，我们在使用slice、map以及channel的时候，都需要使用make进行初始化，然后才可以对它们进行操作。这个我们在上一章中都有说明，关于channel我们会在后续的章节详细说明。")]),a._v(" "),s("p",[a._v("本节开始的示例中"),s("code",[a._v("var b map[string]int")]),a._v("只是声明变量b是一个map类型的变量，需要像下面的示例代码一样使用make函数进行初始化操作之后，才能对其进行键值对赋值：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    func main() {\n    \tvar b map[string]int\n    \tb = make(map[string]int, 10)\n    \tb["沙河娜扎"] = 100\n    \tfmt.Println(b)\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"new与make的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new与make的区别"}},[a._v("#")]),a._v(" new与make的区别")]),a._v(" "),s("ol",[s("li",[a._v("二者都是用来做内存分配的。")]),a._v(" "),s("li",[a._v("make只用于slice、map以及channel的初始化，返回的还是这三个引用类型本身；")]),a._v(" "),s("li",[a._v("而new用于类型的内存分配，并且内存对应的值为类型零值，返回的是指向类型的指针。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);