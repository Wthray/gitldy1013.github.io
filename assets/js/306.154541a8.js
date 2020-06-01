(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1071:function(v,_,e){"use strict";e.r(_);var o=e(3),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-索引使用的注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引使用的注意事项"}},[v._v("#")]),v._v(" MySQL 索引使用的注意事项")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("索引不会包含有 "),e("code",[v._v("NULL")]),v._v(" 的列 只要列中包含有 "),e("code",[v._v("NULL")]),v._v(" 值，都将不会被包含在索引中，复合索引中只要有一列含有 "),e("code",[v._v("NULL")]),v._v(" 值，那么这一列对于此符合索引就是无效的。")])]),v._v(" "),e("li",[e("p",[v._v("使用短索引 对串列进行索引，如果可以就应该指定一个前缀长度。例如，如果有一个 "),e("code",[v._v("char（255）")]),v._v(" 的列，如果在前 "),e("code",[v._v("10")]),v._v(" 个或 "),e("code",[v._v("20")]),v._v(" 个字符内，多数值是唯一的，那么就不要对整个列进行索引。短索引不仅可以提高查询速度而且可以节省磁盘空间和 "),e("code",[v._v("I/O")]),v._v(" 操作。")])]),v._v(" "),e("li",[e("p",[v._v("索引列排序 MySql 查询只使用一个索引，因此如果 "),e("code",[v._v("where")]),v._v(" 子句中已经使用了索引的话，那么 "),e("code",[v._v("order by")]),v._v(" 中的列是不会使用索引的。因此数据库默认排序可以符合要求的情况下不要使用排序操作，尽量不要包含多个列的排序，如果需要最好给这些列建复合索引。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("like")]),v._v(" 语句操作 一般情况下不鼓励使用 "),e("code",[v._v("like")]),v._v(" 操作，如果非使用不可，注意正确的使用方式。"),e("code",[v._v("like ‘%aaa%’")]),v._v(" 不会使用索引，而 "),e("code",[v._v("like ‘aaa%’")]),v._v(" 可以使用索引。")])]),v._v(" "),e("li",[e("p",[v._v("不要在列上进行运算")])]),v._v(" "),e("li",[e("p",[v._v("不使用 "),e("code",[v._v("NOT IN")]),v._v(" 、"),e("code",[v._v("<>")]),v._v("、"),e("code",[v._v("！=")]),v._v("操作，但 "),e("code",[v._v("<")]),v._v(" , "),e("code",[v._v("<=")]),v._v(" ，"),e("code",[v._v("=")]),v._v(" ，"),e("code",[v._v(">")]),v._v(" , "),e("code",[v._v(">=")]),v._v(" , "),e("code",[v._v("BETWEEN")]),v._v(" , "),e("code",[v._v("IN")]),v._v(" 是可以用到索引的")])]),v._v(" "),e("li",[e("p",[v._v("索引要建立在经常进行select操作的字段上 这是因为，如果这些列很少用到，那么有无索引并不能明显改变查询速度。相反，由于增加了索引，反而降低了系统的维护速度和增大了空间需求。")])]),v._v(" "),e("li",[e("p",[v._v("索引要建立在值比较唯一的字段上")])]),v._v(" "),e("li",[e("p",[v._v("对于那些定义为 "),e("code",[v._v("text")]),v._v("、"),e("code",[v._v("image")]),v._v(" 和 "),e("code",[v._v("bit")]),v._v(" 数据类型的列不应该增加索引。因为这些列的数据量要么相当大，要么取值很少")])]),v._v(" "),e("li",[e("p",[v._v("在 "),e("code",[v._v("where")]),v._v(" 和 "),e("code",[v._v("join")]),v._v(" 中出现的列需要建立索引")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("where")]),v._v(" 的查询条件里有不等号 "),e("code",[v._v("(where column != …)")]),v._v(" , MySql 将无法使用索引")])]),v._v(" "),e("li",[e("p",[v._v("如果 "),e("code",[v._v("where")]),v._v(" 字句的查询条件里使用了函数(如："),e("code",[v._v("where DAY(column)=…)")]),v._v(", MySql 将无法使用索引")])]),v._v(" "),e("li",[e("p",[v._v("在 "),e("code",[v._v("join")]),v._v(" 操作中(需要从多个数据表提取数据时)，MySql 只有在主键和外键的数据类型相同时才能使用索引，否则及时建立了索引也不会使用")])])])])}),[],!1,null,null,null);_.default=c.exports}}]);