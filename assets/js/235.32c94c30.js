(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{687:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"fmt标准库是我们在学习go语言过程中接触最早最频繁的一个了，本文介绍了fmtb包的一些常用函数。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fmt标准库是我们在学习go语言过程中接触最早最频繁的一个了，本文介绍了fmtb包的一些常用函数。"}},[s._v("#")]),s._v(" fmt标准库是我们在学习Go语言过程中接触最早最频繁的一个了，本文介绍了fmtb包的一些常用函数。")]),s._v(" "),n("h2",{attrs:{id:"fmt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fmt"}},[s._v("#")]),s._v(" fmt")]),s._v(" "),n("p",[s._v("fmt包实现了类似C语言printf和scanf的格式化I/O。主要分为向外输出内容和获取输入内容两大部分。")]),s._v(" "),n("h3",{attrs:{id:"向外输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#向外输出"}},[s._v("#")]),s._v(" 向外输出")]),s._v(" "),n("p",[s._v("标准库"),n("code",[s._v("fmt")]),s._v("提供了以下几种输出相关函数。")]),s._v(" "),n("h4",{attrs:{id:"print"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#print"}},[s._v("#")]),s._v(" Print")]),s._v(" "),n("p",[n("code",[s._v("Print")]),s._v("系列函数会将内容输出到系统的标准输出，区别在于"),n("code",[s._v("Print")]),s._v("函数直接输出内容，"),n("code",[s._v("Printf")]),s._v("函数支持格式化输出字符串，"),n("code",[s._v("Println")]),s._v("函数会在输出内容的结尾添加一个换行符。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Print(a ...interface{}) (n int, err error)\n    func Printf(format string, a ...interface{}) (n int, err error)\n    func Println(a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("举个简单的例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tfmt.Print("在终端打印该信息。")\n    \tname := "沙河小王子"\n    \tfmt.Printf("我是：%s\\n", name)\n    \tfmt.Println("在终端打印单独一行显示")\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("执行上面的代码输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    在终端打印该信息。我是：沙河小王子\n    在终端打印单独一行显示\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"fprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fprint"}},[s._v("#")]),s._v(" Fprint")]),s._v(" "),n("p",[n("code",[s._v("Fprint")]),s._v("系列函数会将内容输出到一个"),n("code",[s._v("io.Writer")]),s._v("接口类型的变量"),n("code",[s._v("w")]),s._v("中，我们通常用这个函数往文件中写入内容。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Fprint(w io.Writer, a ...interface{}) (n int, err error)\n    func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error)\n    func Fprintln(w io.Writer, a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    // 向标准输出写入内容\n    fmt.Fprintln(os.Stdout, "向标准输出写入内容")\n    fileObj, err := os.OpenFile("./xx.txt", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)\n    if err != nil {\n    \tfmt.Println("打开文件出错，err:", err)\n    \treturn\n    }\n    name := "沙河小王子"\n    // 向打开的文件句柄中写入内容\n    fmt.Fprintf(fileObj, "往文件中写如信息：%s", name)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("注意，只要满足"),n("code",[s._v("io.Writer")]),s._v("接口的类型都支持写入。")]),s._v(" "),n("h4",{attrs:{id:"sprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sprint"}},[s._v("#")]),s._v(" Sprint")]),s._v(" "),n("p",[n("code",[s._v("Sprint")]),s._v("系列函数会把传入的数据生成并返回一个字符串。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Sprint(a ...interface{}) string\n    func Sprintf(format string, a ...interface{}) string\n    func Sprintln(a ...interface{}) string\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("简单的示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    s1 := fmt.Sprint("沙河小王子")\n    name := "沙河小王子"\n    age := 18\n    s2 := fmt.Sprintf("name:%s,age:%d", name, age)\n    s3 := fmt.Sprintln("沙河小王子")\n    fmt.Println(s1, s2, s3)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"errorf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errorf"}},[s._v("#")]),s._v(" Errorf")]),s._v(" "),n("p",[n("code",[s._v("Errorf")]),s._v("函数根据format参数生成格式化字符串并返回一个包含该字符串的错误。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Errorf(format string, a ...interface{}) error\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("通常使用这种方式来自定义错误类型，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    err := fmt.Errorf("这是一个错误")\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Go1.13版本为"),n("code",[s._v("fmt.Errorf")]),s._v("函数新加了一个"),n("code",[s._v("%w")]),s._v("占位符用来生成一个可以包裹Error的Wrapping Error。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    e := errors.New("原始错误e")\n    w := fmt.Errorf("Wrap了一个错误%w", e)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"格式化占位符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化占位符"}},[s._v("#")]),s._v(" 格式化占位符")]),s._v(" "),n("p",[n("code",[s._v("*printf")]),s._v("系列函数都支持format格式化参数，在这里我们按照占位符将被替换的变量类型划分，方便查询和记忆。")]),s._v(" "),n("h4",{attrs:{id:"通用占位符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通用占位符"}},[s._v("#")]),s._v(" 通用占位符")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%v")]),s._v(" "),n("td",[s._v("值的默认格式表示")])]),s._v(" "),n("tr",[n("td",[s._v("%+v")]),s._v(" "),n("td",[s._v("类似%v，但输出结构体时会添加字段名")])]),s._v(" "),n("tr",[n("td",[s._v("%#v")]),s._v(" "),n("td",[s._v("值的Go语法表示")])]),s._v(" "),n("tr",[n("td",[s._v("%T")]),s._v(" "),n("td",[s._v("打印值的类型")])]),s._v(" "),n("tr",[n("td",[s._v("%%")]),s._v(" "),n("td",[s._v("百分号")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    fmt.Printf("%v\\n", 100)\n    fmt.Printf("%v\\n", false)\n    o := struct{ name string }{"小王子"}\n    fmt.Printf("%v\\n", o)\n    fmt.Printf("%#v\\n", o)\n    fmt.Printf("%T\\n", o)\n    fmt.Printf("100%%\\n")\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    100\n    false\n    {小王子}\n    struct { name string }{name:"小王子"}\n    struct { name string }\n    100%\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"布尔型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布尔型"}},[s._v("#")]),s._v(" 布尔型")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%t")]),s._v(" "),n("td",[s._v("true或false")])])])]),s._v(" "),n("h4",{attrs:{id:"整型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[s._v("#")]),s._v(" 整型")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%b")]),s._v(" "),n("td",[s._v("表示为二进制")])]),s._v(" "),n("tr",[n("td",[s._v("%c")]),s._v(" "),n("td",[s._v("该值对应的unicode码值")])]),s._v(" "),n("tr",[n("td",[s._v("%d")]),s._v(" "),n("td",[s._v("表示为十进制")])]),s._v(" "),n("tr",[n("td",[s._v("%o")]),s._v(" "),n("td",[s._v("表示为八进制")])]),s._v(" "),n("tr",[n("td",[s._v("%x")]),s._v(" "),n("td",[s._v("表示为十六进制，使用a-f")])]),s._v(" "),n("tr",[n("td",[s._v("%X")]),s._v(" "),n("td",[s._v("表示为十六进制，使用A-F")])]),s._v(" "),n("tr",[n("td",[s._v("%U")]),s._v(" "),n("td",[s._v("表示为Unicode格式：U+1234，等价于”U+%04X”")])]),s._v(" "),n("tr",[n("td",[s._v("%q")]),s._v(" "),n("td",[s._v("该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    n := 65\n    fmt.Printf("%b\\n", n)\n    fmt.Printf("%c\\n", n)\n    fmt.Printf("%d\\n", n)\n    fmt.Printf("%o\\n", n)\n    fmt.Printf("%x\\n", n)\n    fmt.Printf("%X\\n", n)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    1000001\n    A\n    65\n    101\n    41\n    41\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"浮点数与复数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮点数与复数"}},[s._v("#")]),s._v(" 浮点数与复数")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%b")]),s._v(" "),n("td",[s._v("无小数部分、二进制指数的科学计数法，如-123456p-78")])]),s._v(" "),n("tr",[n("td",[s._v("%e")]),s._v(" "),n("td",[s._v("科学计数法，如-1234.456e+78")])]),s._v(" "),n("tr",[n("td",[s._v("%E")]),s._v(" "),n("td",[s._v("科学计数法，如-1234.456E+78")])]),s._v(" "),n("tr",[n("td",[s._v("%f")]),s._v(" "),n("td",[s._v("有小数部分但无指数部分，如123.456")])]),s._v(" "),n("tr",[n("td",[s._v("%F")]),s._v(" "),n("td",[s._v("等价于%f")])]),s._v(" "),n("tr",[n("td",[s._v("%g")]),s._v(" "),n("td",[s._v("根据实际情况采用%e或%f格式（以获得更简洁、准确的输出）")])]),s._v(" "),n("tr",[n("td",[s._v("%G")]),s._v(" "),n("td",[s._v("根据实际情况采用%E或%F格式（以获得更简洁、准确的输出）")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    f := 12.34\n    fmt.Printf("%b\\n", f)\n    fmt.Printf("%e\\n", f)\n    fmt.Printf("%E\\n", f)\n    fmt.Printf("%f\\n", f)\n    fmt.Printf("%g\\n", f)\n    fmt.Printf("%G\\n", f)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    6946802425218990p-49\n    1.234000e+01\n    1.234000E+01\n    12.340000\n    12.34\n    12.34\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"字符串和-byte"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串和-byte"}},[s._v("#")]),s._v(" 字符串和[]byte")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%s")]),s._v(" "),n("td",[s._v("直接输出字符串或者[]byte")])]),s._v(" "),n("tr",[n("td",[s._v("%q")]),s._v(" "),n("td",[s._v("该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示")])]),s._v(" "),n("tr",[n("td",[s._v("%x")]),s._v(" "),n("td",[s._v("每个字节用两字符十六进制数表示（使用a-f")])]),s._v(" "),n("tr",[n("td",[s._v("%X")]),s._v(" "),n("td",[s._v("每个字节用两字符十六进制数表示（使用A-F）")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    s := "小王子"\n    fmt.Printf("%s\\n", s)\n    fmt.Printf("%q\\n", s)\n    fmt.Printf("%x\\n", s)\n    fmt.Printf("%X\\n", s)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    小王子\n    "小王子"\n    e5b08fe78e8be5ad90\n    E5B08FE78E8BE5AD90\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[s._v("#")]),s._v(" 指针")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%p")]),s._v(" "),n("td",[s._v("表示为十六进制，并加上前导的0x")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    a := 10\n    fmt.Printf("%p\\n", &a)\n    fmt.Printf("%#p\\n", &a)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    0xc000094000\n    c000094000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"宽度标识符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宽度标识符"}},[s._v("#")]),s._v(" 宽度标识符")]),s._v(" "),n("p",[s._v("宽度通过一个紧跟在百分号后面的十进制数指定，如果未指定宽度，则表示值时除必需之外不作填充。精度通过（可选的）宽度后跟点号后跟的十进制数指定。如果未指定精度，会使用默认精度；如果点号后没有跟数字，表示精度为0。举例如下：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("%f")]),s._v(" "),n("td",[s._v("默认宽度，默认精度")])]),s._v(" "),n("tr",[n("td",[s._v("%9f")]),s._v(" "),n("td",[s._v("宽度9，默认精度")])]),s._v(" "),n("tr",[n("td",[s._v("%.2f")]),s._v(" "),n("td",[s._v("默认宽度，精度2")])]),s._v(" "),n("tr",[n("td",[s._v("%9.2f")]),s._v(" "),n("td",[s._v("宽度9，精度2")])]),s._v(" "),n("tr",[n("td",[s._v("%9.f")]),s._v(" "),n("td",[s._v("宽度9，精度0")])])])]),s._v(" "),n("p",[s._v("示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    n := 12.34\n    fmt.Printf("%f\\n", n)\n    fmt.Printf("%9f\\n", n)\n    fmt.Printf("%.2f\\n", n)\n    fmt.Printf("%9.2f\\n", n)\n    fmt.Printf("%9.f\\n", n)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    12.340000\n    12.340000\n    12.34\n        12.34\n           12\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"其他falg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他falg"}},[s._v("#")]),s._v(" 其他falg")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("占位符")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("’+’")]),s._v(" "),n("td",[s._v("总是输出数值的正负号；对%q（%+q）会生成全部是ASCII字符的输出（通过转义）；")])]),s._v(" "),n("tr",[n("td",[s._v("’ ‘")]),s._v(" "),n("td",[s._v("对数值，正数前加空格而负数前加负号；对字符串采用%x或%X时（% x或% X）会给各打印的字节之间加空格")])]),s._v(" "),n("tr",[n("td",[s._v("’-’")]),s._v(" "),n("td",[s._v("在输出右边填充空白而不是默认的左边（即从默认的右对齐切换为左对齐）；")])]),s._v(" "),n("tr",[n("td",[s._v("’#’")]),s._v(" "),n("td",[s._v("八进制数前加0（%#o），十六进制数前加0x（%#x）或0X（%#X），指针去掉前面的0x（%#p）对%q（%#q），对%U（%#U）会输出空格和单引号括起来的go字面值；")])]),s._v(" "),n("tr",[n("td",[s._v("‘0’")]),s._v(" "),n("td",[s._v("使用0而不是空格填充，对于数值类型会把填充的0放在正负号后面；")])])])]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    s := "小王子"\n    fmt.Printf("%s\\n", s)\n    fmt.Printf("%5s\\n", s)\n    fmt.Printf("%-5s\\n", s)\n    fmt.Printf("%5.7s\\n", s)\n    fmt.Printf("%-5.7s\\n", s)\n    fmt.Printf("%5.2s\\n", s)\n    fmt.Printf("%05s\\n", s)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    小王子\n      小王子\n    小王子  \n      小王子\n    小王子  \n       小王\n    00小王子\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"获取输入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取输入"}},[s._v("#")]),s._v(" 获取输入")]),s._v(" "),n("p",[s._v("Go语言"),n("code",[s._v("fmt")]),s._v("包下有"),n("code",[s._v("fmt.Scan")]),s._v("、"),n("code",[s._v("fmt.Scanf")]),s._v("、"),n("code",[s._v("fmt.Scanln")]),s._v("三个函数，可以在程序运行过程中从标准输入获取用户的输入。")]),s._v(" "),n("h3",{attrs:{id:"fmt-scan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fmt-scan"}},[s._v("#")]),s._v(" fmt.Scan")]),s._v(" "),n("p",[s._v("函数定签名如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Scan(a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("Scan从标准输入扫描文本，读取由空白符分隔的值保存到传递给本函数的参数中，换行符视为空白符。")]),s._v(" "),n("li",[s._v("本函数返回成功扫描的数据个数和遇到的任何错误。如果读取的数据个数比提供的参数少，会返回一个错误报告原因。")])]),s._v(" "),n("p",[s._v("具体代码示例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tvar (\n    \t\tname    string\n    \t\tage     int\n    \t\tmarried bool\n    \t)\n    \tfmt.Scan(&name, &age, &married)\n    \tfmt.Printf("扫描结果 name:%s age:%d married:%t \\n", name, age, married)\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("将上面的代码编译后在终端执行，在终端依次输入"),n("code",[s._v("小王子")]),s._v("、"),n("code",[s._v("28")]),s._v("和"),n("code",[s._v("false")]),s._v("使用空格分隔。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ ./scan_demo \n    小王子 28 false\n    扫描结果 name:小王子 age:28 married:false \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("fmt.Scan")]),s._v("从标准输入中扫描用户输入的数据，将以空白符分隔的数据分别存入指定的参数。")]),s._v(" "),n("h4",{attrs:{id:"fmt-scanf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fmt-scanf"}},[s._v("#")]),s._v(" fmt.Scanf")]),s._v(" "),n("p",[s._v("函数签名如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Scanf(format string, a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("Scanf从标准输入扫描文本，根据format参数指定的格式去读取由空白符分隔的值保存到传递给本函数的参数中。")]),s._v(" "),n("li",[s._v("本函数返回成功扫描的数据个数和遇到的任何错误。")])]),s._v(" "),n("p",[s._v("代码示例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tvar (\n    \t\tname    string\n    \t\tage     int\n    \t\tmarried bool\n    \t)\n    \tfmt.Scanf("1:%s 2:%d 3:%t", &name, &age, &married)\n    \tfmt.Printf("扫描结果 name:%s age:%d married:%t \\n", name, age, married)\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("将上面的代码编译后在终端执行，在终端按照指定的格式依次输入"),n("code",[s._v("小王子")]),s._v("、"),n("code",[s._v("28")]),s._v("和"),n("code",[s._v("false")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ ./scan_demo \n    1:小王子 2:28 3:false\n    扫描结果 name:小王子 age:28 married:false \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("fmt.Scanf")]),s._v("不同于"),n("code",[s._v("fmt.Scan")]),s._v("简单的以空格作为输入数据的分隔符，"),n("code",[s._v("fmt.Scanf")]),s._v("为输入数据指定了具体的输入内容格式，只有按照格式输入数据才会被扫描并存入对应变量。")]),s._v(" "),n("p",[s._v("例如，我们还是按照上个示例中以空格分隔的方式输入，"),n("code",[s._v("fmt.Scanf")]),s._v("就不能正确扫描到输入的数据。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ ./scan_demo \n    小王子 28 false\n    扫描结果 name: age:0 married:false \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"fmt-scanln"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fmt-scanln"}},[s._v("#")]),s._v(" fmt.Scanln")]),s._v(" "),n("p",[s._v("函数签名如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Scanln(a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("Scanln类似Scan，它在遇到换行时才停止扫描。最后一个数据后面必须有换行或者到达结束位置。")]),s._v(" "),n("li",[s._v("本函数返回成功扫描的数据个数和遇到的任何错误。")])]),s._v(" "),n("p",[s._v("具体代码示例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tvar (\n    \t\tname    string\n    \t\tage     int\n    \t\tmarried bool\n    \t)\n    \tfmt.Scanln(&name, &age, &married)\n    \tfmt.Printf("扫描结果 name:%s age:%d married:%t \\n", name, age, married)\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("将上面的代码编译后在终端执行，在终端依次输入"),n("code",[s._v("小王子")]),s._v("、"),n("code",[s._v("28")]),s._v("和"),n("code",[s._v("false")]),s._v("使用空格分隔。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    $ ./scan_demo \n    小王子 28 false\n    扫描结果 name:小王子 age:28 married:false \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("fmt.Scanln")]),s._v("遇到回车就结束扫描了，这个比较常用。")]),s._v(" "),n("h4",{attrs:{id:"bufio-newreader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bufio-newreader"}},[s._v("#")]),s._v(" bufio.NewReader")]),s._v(" "),n("p",[s._v("有时候我们想完整获取输入的内容，而输入的内容可能包含空格，这种情况下可以使用"),n("code",[s._v("bufio")]),s._v("包来实现。示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func bufioDemo() {\n    \treader := bufio.NewReader(os.Stdin) // 从标准输入生成读对象\n    \tfmt.Print("请输入内容：")\n    \ttext, _ := reader.ReadString(\'\\n\') // 读到换行\n    \ttext = strings.TrimSpace(text)\n    \tfmt.Printf("%#v\\n", text)\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"fscan系列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fscan系列"}},[s._v("#")]),s._v(" Fscan系列")]),s._v(" "),n("p",[s._v("这几个函数功能分别类似于"),n("code",[s._v("fmt.Scan")]),s._v("、"),n("code",[s._v("fmt.Scanf")]),s._v("、"),n("code",[s._v("fmt.Scanln")]),s._v("三个函数，只不过它们不是从标准输入中读取数据而是从"),n("code",[s._v("io.Reader")]),s._v("中读取数据。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Fscan(r io.Reader, a ...interface{}) (n int, err error)\n    func Fscanln(r io.Reader, a ...interface{}) (n int, err error)\n    func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"sscan系列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sscan系列"}},[s._v("#")]),s._v(" Sscan系列")]),s._v(" "),n("p",[s._v("这几个函数功能分别类似于"),n("code",[s._v("fmt.Scan")]),s._v("、"),n("code",[s._v("fmt.Scanf")]),s._v("、"),n("code",[s._v("fmt.Scanln")]),s._v("三个函数，只不过它们不是从标准输入中读取数据而是从指定字符串中读取数据。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func Sscan(str string, a ...interface{}) (n int, err error)\n    func Sscanln(str string, a ...interface{}) (n int, err error)\n    func Sscanf(str string, format string, a ...interface{}) (n int, err error)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);