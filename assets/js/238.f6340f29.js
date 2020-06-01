(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{990:function(a,t,s){"use strict";s.r(t);var r=s(3),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"go语言中strconv包实现了基本数据类型和其字符串表示的相互转换。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go语言中strconv包实现了基本数据类型和其字符串表示的相互转换。"}},[a._v("#")]),a._v(" Go语言中"),s("code",[a._v("strconv")]),a._v("包实现了基本数据类型和其字符串表示的相互转换。")]),a._v(" "),s("h2",{attrs:{id:"strconv包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strconv包"}},[a._v("#")]),a._v(" strconv包")]),a._v(" "),s("p",[a._v("strconv包实现了基本数据类型与其字符串表示的转换，主要有以下常用函数： "),s("code",[a._v("Atoi()")]),a._v("、"),s("code",[a._v("Itia()")]),a._v("、parse系列、format系列、append系列。")]),a._v(" "),s("p",[a._v("更多函数请查看"),s("a",{attrs:{href:"https://golang.org/pkg/strconv/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"string与int类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string与int类型转换"}},[a._v("#")]),a._v(" string与int类型转换")]),a._v(" "),s("p",[a._v("这一组函数是我们平时编程中用的最多的。")]),a._v(" "),s("h4",{attrs:{id:"atoi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atoi"}},[a._v("#")]),a._v(" Atoi()")]),a._v(" "),s("p",[s("code",[a._v("Atoi()")]),a._v("函数用于将字符串类型的整数转换为int类型，函数签名如下。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func Atoi(s string) (i int, err error)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果传入的字符串参数无法转换为int类型，就会返回错误。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    s1 := "100"\n    i1, err := strconv.Atoi(s1)\n    if err != nil {\n    \tfmt.Println("can\'t convert to int")\n    } else {\n    \tfmt.Printf("type:%T value:%#v\\n", i1, i1) //type:int value:100\n    }\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"itoa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#itoa"}},[a._v("#")]),a._v(" Itoa()")]),a._v(" "),s("p",[s("code",[a._v("Itoa()")]),a._v("函数用于将int类型数据转换为对应的字符串表示，具体的函数签名如下。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func Itoa(i int) string\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("示例代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    i2 := 200\n    s2 := strconv.Itoa(i2)\n    fmt.Printf("type:%T value:%#v\\n", s2, s2) //type:string value:"200"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"a的典故"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a的典故"}},[a._v("#")]),a._v(" a的典故")]),a._v(" "),s("p",[a._v("【扩展阅读】这是C语言遗留下的典故。C语言中没有string类型而是用字符数组(array)表示字符串，所以"),s("code",[a._v("Itoa")]),a._v("对很多C系的程序员很好理解。")]),a._v(" "),s("h3",{attrs:{id:"parse系列函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parse系列函数"}},[a._v("#")]),a._v(" Parse系列函数")]),a._v(" "),s("p",[a._v("Parse类函数用于转换字符串为给定类型的值：ParseBool()、ParseFloat()、ParseInt()、ParseUint()。")]),a._v(" "),s("h4",{attrs:{id:"parsebool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsebool"}},[a._v("#")]),a._v(" ParseBool()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func ParseBool(str string) (value bool, err error)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回字符串表示的bool值。它接受1、0、t、f、T、F、true、false、True、False、TRUE、FALSE；否则返回错误。")]),a._v(" "),s("h4",{attrs:{id:"parseint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint"}},[a._v("#")]),a._v(" ParseInt()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func ParseInt(s string, base int, bitSize int) (i int64, err error)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回字符串表示的整数值，接受正负号。")]),a._v(" "),s("p",[a._v("base指定进制（2到36），如果base为0，则会从字符串前置判断，”0x”是16进制，”0”是8进制，否则是10进制；")]),a._v(" "),s("p",[a._v("bitSize指定结果必须能无溢出赋值的整数类型，0、8、16、32、64 分别代表 int、int8、int16、int32、int64；")]),a._v(" "),s("p",[a._v("返回的err是*NumErr类型的，如果语法有误，err.Error = ErrSyntax；如果结果超出类型范围err.Error = ErrRange。")]),a._v(" "),s("h4",{attrs:{id:"parseunit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseunit"}},[a._v("#")]),a._v(" ParseUnit()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func ParseUint(s string, base int, bitSize int) (n uint64, err error)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("code",[a._v("ParseUint")]),a._v("类似"),s("code",[a._v("ParseInt")]),a._v("但不接受正负号，用于无符号整型。")]),a._v(" "),s("h4",{attrs:{id:"parsefloat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat"}},[a._v("#")]),a._v(" ParseFloat()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func ParseFloat(s string, bitSize int) (f float64, err error)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("解析一个表示浮点数的字符串并返回其值。")]),a._v(" "),s("p",[a._v("如果s合乎语法规则，函数会返回最为接近s表示值的一个浮点数（使用IEEE754规范舍入）。")]),a._v(" "),s("p",[a._v("bitSize指定了期望的接收类型，32是float32（返回值可以不改变精确值的赋值给float32），64是float64；")]),a._v(" "),s("p",[a._v("返回值err是*NumErr类型的，语法有误的，err.Error=ErrSyntax；结果超出表示范围的，返回值f为±Inf，err.Error= ErrRange。")]),a._v(" "),s("h4",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[a._v("#")]),a._v(" 代码示例")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('    b, err := strconv.ParseBool("true")\n    f, err := strconv.ParseFloat("3.1415", 64)\n    i, err := strconv.ParseInt("-2", 10, 64)\n    u, err := strconv.ParseUint("2", 10, 64)\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("这些函数都有两个返回值，第一个返回值是转换后的值，第二个返回值为转化失败的错误信息。")]),a._v(" "),s("h3",{attrs:{id:"format系列函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format系列函数"}},[a._v("#")]),a._v(" Format系列函数")]),a._v(" "),s("p",[a._v("Format系列函数实现了将给定类型数据格式化为string类型数据的功能。")]),a._v(" "),s("h4",{attrs:{id:"formatbool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatbool"}},[a._v("#")]),a._v(" FormatBool()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func FormatBool(b bool) string\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("根据b的值返回”true”或”false”。")]),a._v(" "),s("h4",{attrs:{id:"formatint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatint"}},[a._v("#")]),a._v(" FormatInt()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func FormatInt(i int64, base int) string\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回i的base进制的字符串表示。base 必须在2到36之间，结果中会使用小写字母’a’到’z’表示大于10的数字。")]),a._v(" "),s("h4",{attrs:{id:"formatuint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatuint"}},[a._v("#")]),a._v(" FormatUint()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func FormatUint(i uint64, base int) string\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("是FormatInt的无符号整数版本。")]),a._v(" "),s("h4",{attrs:{id:"formatfloat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatfloat"}},[a._v("#")]),a._v(" FormatFloat()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func FormatFloat(f float64, fmt byte, prec, bitSize int) string\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("函数将浮点数表示为字符串并返回。")]),a._v(" "),s("p",[a._v("bitSize表示f的来源类型（32：float32、64：float64），会据此进行舍入。")]),a._v(" "),s("p",[a._v("fmt表示格式：’f’（-ddd.dddd）、’b’（-ddddp±ddd，指数为二进制）、’e’（-d.dddde±dd，十进制指数）、’E’（-d.ddddE±dd，十进制指数）、’g’（指数很大时用’e’格式，否则’f’格式）、’G’（指数很大时用’E’格式，否则’f’格式）。")]),a._v(" "),s("p",[a._v("prec控制精度（排除指数部分）：对’f’、’e’、’E’，它表示小数点后的数字个数；对’g’、’G’，它控制总的数字个数。如果prec 为-1，则代表使用最少数量的、但又必需的数字来表示f。")]),a._v(" "),s("h4",{attrs:{id:"代码示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例-2"}},[a._v("#")]),a._v(" 代码示例")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    s1 := strconv.FormatBool(true)\n    s2 := strconv.FormatFloat(3.1415, 'E', -1, 64)\n    s3 := strconv.FormatInt(-2, 16)\n    s4 := strconv.FormatUint(2, 16)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("h4",{attrs:{id:"isprint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isprint"}},[a._v("#")]),a._v(" isPrint()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func IsPrint(r rune) bool\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回一个字符是否是可打印的，和"),s("code",[a._v("unicode.IsPrint")]),a._v("一样，r必须是：字母（广义）、数字、标点、符号、ASCII空格。")]),a._v(" "),s("h4",{attrs:{id:"canbackquote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canbackquote"}},[a._v("#")]),a._v(" CanBackquote()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    func CanBackquote(s string) bool\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("返回字符串s是否可以不被修改的表示为一个单行的、没有空格和tab之外控制字符的反引号字符串。")]),a._v(" "),s("h4",{attrs:{id:"其他-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他-2"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("p",[a._v("除上文列出的函数外，"),s("code",[a._v("strconv")]),a._v("包中还有Append系列、Quote系列等函数。具体用法可查看"),s("a",{attrs:{href:"https://golang.org/pkg/strconv/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);