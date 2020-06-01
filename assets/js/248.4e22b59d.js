(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{682:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"基本数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),n("blockquote",[n("p",[t._v("Go语言中有丰富的数据类型，除了基本的整型、浮点型、布尔型、字符串外，还有数组、切片、结构体、函数、map、通道（channel）等。Go 语言的基本类型和其他语言大同小异。")])]),t._v(" "),n("h2",{attrs:{id:"整型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),n("p",[t._v("整型分为以下两个大类： 按长度分为：int8、int16、int32、int64 对应的无符号整型：uint8、uint16、uint32、uint64")]),t._v(" "),n("p",[t._v("其中，"),n("code",[t._v("uint8")]),t._v("就是我们熟知的"),n("code",[t._v("byte")]),t._v("型，"),n("code",[t._v("int16")]),t._v("对应C语言中的"),n("code",[t._v("short")]),t._v("型，"),n("code",[t._v("int64")]),t._v("对应C语言中的"),n("code",[t._v("long")]),t._v("型。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("uint8")]),t._v(" "),n("td",[t._v("无符号 8位整型 (0 到 255)")])]),t._v(" "),n("tr",[n("td",[t._v("uint16")]),t._v(" "),n("td",[t._v("无符号 16位整型 (0 到 65535)")])]),t._v(" "),n("tr",[n("td",[t._v("uint32")]),t._v(" "),n("td",[t._v("无符号 32位整型 (0 到 4294967295)")])]),t._v(" "),n("tr",[n("td",[t._v("uint64")]),t._v(" "),n("td",[t._v("无符号 64位整型 (0 到 18446744073709551615)")])]),t._v(" "),n("tr",[n("td",[t._v("int8")]),t._v(" "),n("td",[t._v("有符号 8位整型 (-128 到 127)")])]),t._v(" "),n("tr",[n("td",[t._v("int16")]),t._v(" "),n("td",[t._v("有符号 16位整型 (-32768 到 32767)")])]),t._v(" "),n("tr",[n("td",[t._v("int32")]),t._v(" "),n("td",[t._v("有符号 32位整型 (-2147483648 到 2147483647)")])]),t._v(" "),n("tr",[n("td",[t._v("int64")]),t._v(" "),n("td",[t._v("有符号 64位整型 (-9223372036854775808 到 9223372036854775807)")])])])]),t._v(" "),n("h3",{attrs:{id:"特殊整型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊整型"}},[t._v("#")]),t._v(" 特殊整型")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("uint")]),t._v(" "),n("td",[t._v("32位操作系统上就是uint32，64位操作系统上就是uint64")])]),t._v(" "),n("tr",[n("td",[t._v("int")]),t._v(" "),n("td",[t._v("32位操作系统上就是int32，64位操作系统上就是int64")])]),t._v(" "),n("tr",[n("td",[t._v("uintptr")]),t._v(" "),n("td",[t._v("无符号整型，用于存放一个指针")])])])]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 在使用"),n("code",[t._v("int")]),t._v("和 "),n("code",[t._v("uint")]),t._v("类型时，不能假定它是32位或64位的整型，而是考虑"),n("code",[t._v("int")]),t._v("和"),n("code",[t._v("uint")]),t._v("可能在不同平台上的差异。")]),t._v(" "),n("p",[n("strong",[t._v("注意事项")]),t._v(" 获取对象的长度的内建"),n("code",[t._v("len()")]),t._v("函数返回的长度可以根据不同平台的字节长度进行变化。实际使用中，切片或 map 的元素数量等都可以用"),n("code",[t._v("int")]),t._v("来表示。在涉及到二进制传输、读写文件的结构描述时，为了保持文件的结构不会受到不同编译目标平台字节长度的影响，不要使用"),n("code",[t._v("int")]),t._v("和 "),n("code",[t._v("uint")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"数字字面量语法（number-literals-syntax）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数字字面量语法（number-literals-syntax）"}},[t._v("#")]),t._v(" 数字字面量语法（Number literals syntax）")]),t._v(" "),n("p",[t._v("Go1.13版本之后引入了数字字面量语法，这样便于开发者以二进制、八进制或十六进制浮点数的格式定义数字，例如：")]),t._v(" "),n("p",[t._v("v := 0b00101101， 代表二进制的 101101，相当于十进制的 45。 v := 0o377，代表八进制的 377，相当于十进制的 255。 v := 0x1p-2，代表十六进制的 1 除以 2²，也就是 0.25。 而且还允许我们用 _ 来分隔数字，比如说：")]),t._v(" "),n("p",[t._v("v := 123_456 等于 123456。")]),t._v(" "),n("p",[t._v("我们可以借助fmt函数来将一个整数以不同进制形式展示。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n     \n    import "fmt"\n     \n    func main(){\n    \t// 十进制\n    \tvar a int = 10\n    \tfmt.Printf("%d \\n", a)  // 10\n    \tfmt.Printf("%b \\n", a)  // 1010  占位符%b表示二进制\n     \n    \t// 八进制  以0开头\n    \tvar b int = 077\n    \tfmt.Printf("%o \\n", b)  // 77\n     \n    \t// 十六进制  以0x开头\n    \tvar c int = 0xff\n    \tfmt.Printf("%x \\n", c)  // ff\n    \tfmt.Printf("%X \\n", c)  // FF\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("h2",{attrs:{id:"浮点型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[t._v("#")]),t._v(" 浮点型")]),t._v(" "),n("p",[t._v("Go语言支持两种浮点型数："),n("code",[t._v("float32")]),t._v("和"),n("code",[t._v("float64")]),t._v("。这两种浮点型数据格式遵循"),n("code",[t._v("IEEE 754")]),t._v("标准： "),n("code",[t._v("float32")]),t._v(" 的浮点数的最大范围约为 "),n("code",[t._v("3.4e38")]),t._v("，可以使用常量定义："),n("code",[t._v("math.MaxFloat32")]),t._v("。 "),n("code",[t._v("float64")]),t._v(" 的浮点数的最大范围约为 "),n("code",[t._v("1.8e308")]),t._v("，可以使用一个常量定义："),n("code",[t._v("math.MaxFloat64")]),t._v("。")]),t._v(" "),n("p",[t._v("打印浮点数时，可以使用"),n("code",[t._v("fmt")]),t._v("包配合动词"),n("code",[t._v("%f")]),t._v("，代码如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n    import (\n            "fmt"\n            "math"\n    )\n    func main() {\n            fmt.Printf("%f\\n", math.Pi)\n            fmt.Printf("%.2f\\n", math.Pi)\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h3",{attrs:{id:"复数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复数"}},[t._v("#")]),t._v(" 复数")]),t._v(" "),n("p",[t._v("complex64和complex128")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    var c1 complex64\n    c1 = 1 + 2i\n    var c2 complex128\n    c2 = 2 + 3i\n    fmt.Println(c1)\n    fmt.Println(c2)\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("复数有实部和虚部，complex64的实部和虚部为32位，complex128的实部和虚部为64位。")]),t._v(" "),n("h3",{attrs:{id:"布尔值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布尔值"}},[t._v("#")]),t._v(" 布尔值")]),t._v(" "),n("p",[t._v("Go语言中以"),n("code",[t._v("bool")]),t._v("类型进行声明布尔型数据，布尔型数据只有"),n("code",[t._v("true（真）")]),t._v("和"),n("code",[t._v("false（假）")]),t._v("两个值。")]),t._v(" "),n("p",[n("strong",[t._v("注意：")])]),t._v(" "),n("ol",[n("li",[t._v("布尔类型变量的默认值为"),n("code",[t._v("false")]),t._v("。")]),t._v(" "),n("li",[t._v("Go 语言中不允许将整型强制转换为布尔型.")]),t._v(" "),n("li",[t._v("布尔型无法参与数值运算，也无法与其他类型进行转换。")])]),t._v(" "),n("h2",{attrs:{id:"字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),n("p",[t._v("Go语言中的字符串以原生数据类型出现，使用字符串就像使用其他原生数据类型（int、bool、float32、float64 等）一样。 Go 语言里的字符串的内部实现使用"),n("code",[t._v("UTF-8")]),t._v("编码。 字符串的值为"),n("code",[t._v('双引号(")')]),t._v("中的内容，可以在Go语言的源码中直接添加非ASCII码字符，例如：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    s1 := "hello"\n    s2 := "你好"\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"字符串转义符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串转义符"}},[t._v("#")]),t._v(" 字符串转义符")]),t._v(" "),n("p",[t._v("Go 语言的字符串常见转义符包含回车、换行、单双引号、制表符等，如下表所示。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("转义符")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("\\r")]),t._v(" "),n("td",[t._v("回车符（返回行首）")])]),t._v(" "),n("tr",[n("td",[t._v("\\n")]),t._v(" "),n("td",[t._v("换行符（直接跳到下一行的同列位置）")])]),t._v(" "),n("tr",[n("td",[t._v("\\t")]),t._v(" "),n("td",[t._v("制表符")])]),t._v(" "),n("tr",[n("td",[t._v("\\'")]),t._v(" "),n("td",[t._v("单引号")])]),t._v(" "),n("tr",[n("td",[t._v('\\"')]),t._v(" "),n("td",[t._v("双引号")])]),t._v(" "),n("tr",[n("td",[t._v("\\\\")]),t._v(" "),n("td",[t._v("反斜杠")])])])]),t._v(" "),n("p",[t._v("举个例子，我们要打印一个Windows平台下的一个文件路径：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n    import (\n        "fmt"\n    )\n    func main() {\n        fmt.Println("str := \\"c:\\\\Code\\\\lesson1\\\\go.exe\\"")\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h3",{attrs:{id:"多行字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多行字符串"}},[t._v("#")]),t._v(" 多行字符串")]),t._v(" "),n("p",[t._v("Go语言中要定义一个多行字符串时，就必须使用"),n("code",[t._v("反引号")]),t._v("字符：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    s1 := `第一行\n    第二行\n    第三行\n    `\n    fmt.Println(s1)\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("反引号间换行将被作为字符串中的换行，但是所有的转义字符均无效，文本将会原样输出。")]),t._v(" "),n("h3",{attrs:{id:"字符串的常用操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串的常用操作"}},[t._v("#")]),t._v(" 字符串的常用操作")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",[t._v("介绍")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("len(str)")]),t._v(" "),n("td",[t._v("求长度")])]),t._v(" "),n("tr",[n("td",[t._v("+或fmt.Sprintf")]),t._v(" "),n("td",[t._v("拼接字符串")])]),t._v(" "),n("tr",[n("td",[t._v("strings.Split")]),t._v(" "),n("td",[t._v("分割")])]),t._v(" "),n("tr",[n("td",[t._v("strings.contains")]),t._v(" "),n("td",[t._v("判断是否包含")])]),t._v(" "),n("tr",[n("td",[t._v("strings.HasPrefix,strings.HasSuffix")]),t._v(" "),n("td",[t._v("前缀/后缀判断")])]),t._v(" "),n("tr",[n("td",[t._v("strings.Index(),strings.LastIndex()")]),t._v(" "),n("td",[t._v("子串出现的位置")])]),t._v(" "),n("tr",[n("td",[t._v("strings.Join(a[]string, sep string)")]),t._v(" "),n("td",[t._v("join操作")])])])]),t._v(" "),n("h4",{attrs:{id:"byte和rune类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#byte和rune类型"}},[t._v("#")]),t._v(" byte和rune类型")]),t._v(" "),n("p",[t._v("组成每个字符串的元素叫做“字符”，可以通过遍历或者单个获取字符串元素获得字符。 字符用单引号（’）包裹起来，如：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    var a := '中'\n    var b := 'x'\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("Go 语言的字符有以下两种：")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("uint8")]),t._v("类型，或者叫 byte 型，代表了"),n("code",[t._v("ASCII码")]),t._v("的一个字符。")]),t._v(" "),n("li",[n("code",[t._v("rune")]),t._v("类型，代表一个 "),n("code",[t._v("UTF-8字符")]),t._v("。")])]),t._v(" "),n("p",[t._v("当需要处理中文、日文或者其他复合字符时，则需要用到"),n("code",[t._v("rune")]),t._v("类型。"),n("code",[t._v("rune")]),t._v("类型实际是一个"),n("code",[t._v("int32")]),t._v("。")]),t._v(" "),n("p",[t._v("Go 使用了特殊的 rune 类型来处理 Unicode，让基于 Unicode 的文本处理更为方便，也可以使用 byte 型进行默认字符串处理，性能和扩展性都有照顾。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    // 遍历字符串\n    func traversalString() {\n    \ts := "hello沙河"\n    \tfor i := 0; i < len(s); i++ { //byte\n    \t\tfmt.Printf("%v(%c) ", s[i], s[i])\n    \t}\n    \tfmt.Println()\n    \tfor _, r := range s { //rune\n    \t\tfmt.Printf("%v(%c) ", r, r)\n    \t}\n    \tfmt.Println()\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("输出：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    104(h) 101(e) 108(l) 108(l) 111(o) 230(æ) 178(²) 153() 230(æ) 178(²) 179(³) \n    104(h) 101(e) 108(l) 108(l) 111(o) 27801(沙) 27827(河) \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("因为UTF8编码下一个中文汉字由3~4个字节组成，所以我们不能简单的按照字节去遍历一个包含中文的字符串，否则就会出现上面输出中第一行的结果。")]),t._v(" "),n("p",[t._v("字符串底层是一个byte数组，所以可以和"),n("code",[t._v("[]byte")]),t._v("类型相互转换。字符串是不能修改的 字符串是由byte字节组成，所以字符串的长度是byte字节的长度。 rune类型用来表示utf8字符，一个rune字符由一个或多个byte组成。")]),t._v(" "),n("h3",{attrs:{id:"修改字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改字符串"}},[t._v("#")]),t._v(" 修改字符串")]),t._v(" "),n("p",[t._v("要修改字符串，需要先将其转换成"),n("code",[t._v("[]rune")]),t._v("或"),n("code",[t._v("[]byte")]),t._v("，完成后再转换为"),n("code",[t._v("string")]),t._v("。无论哪种转换，都会重新分配内存，并复制字节数组。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    func changeString() {\n    \ts1 := \"big\"\n    \t// 强制类型转换\n    \tbyteS1 := []byte(s1)\n    \tbyteS1[0] = 'p'\n    \tfmt.Println(string(byteS1))\n    \n    \ts2 := \"白萝卜\"\n    \truneS2 := []rune(s2)\n    \truneS2[0] = '红'\n    \tfmt.Println(string(runeS2))\n    }\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h2",{attrs:{id:"类型转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),n("p",[t._v("Go语言中只有强制类型转换，没有隐式类型转换。该语法只能在两个类型之间支持相互转换的时候使用。")]),t._v(" "),n("p",[t._v("强制类型转换的基本语法如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("T(表达式)\n")])])]),n("p",[t._v("其中，T表示要转换的类型。表达式包括变量、复杂算子和函数返回值等.")]),t._v(" "),n("p",[t._v("比如计算直角三角形的斜边长时使用math包的Sqrt()函数，该函数接收的是float64类型的参数，而变量a和b都是int类型的，这个时候就需要将a和b强制类型转换为float64类型。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    func sqrtDemo() {\n    \tvar a, b = 3, 4\n    \tvar c int\n    \t// math.Sqrt()接收的参数是float64类型，需要强制转换\n    \tc = int(math.Sqrt(float64(a*a + b*b)))\n    \tfmt.Println(c)\n    }\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h2",{attrs:{id:"练习题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[t._v("#")]),t._v(" 练习题")]),t._v(" "),n("p",[t._v("1.编写代码分别定义一个整型、浮点型、布尔型、字符串型变量，使用"),n("code",[t._v("fmt.Printf()")]),t._v("搭配"),n("code",[t._v("%T")]),t._v("分别打印出上述变量的值和类型。")]),t._v(" "),n("p",[t._v("2.编写代码统计出字符串"),n("code",[t._v('"hello小桃子"')]),t._v("中汉字的数量。")])])}),[],!1,null,null,null);s.default=e.exports}}]);