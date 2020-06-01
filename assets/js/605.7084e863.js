(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{1129:function(e,t,r){"use strict";r.r(t);var v=r(3),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"消息队列的流派"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的流派"}},[e._v("#")]),e._v(" 消息队列的流派")]),e._v(" "),r("h2",{attrs:{id:"什么是-mq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mq"}},[e._v("#")]),e._v(" 什么是 MQ")]),e._v(" "),r("p",[e._v("Message Queue（MQ），消息队列中间件。很多人都说：MQ 通过将消息的发送和接收分离来实现应用程序的异步和解偶，这个给人的直觉是——MQ 是异步的，用来解耦的，但是这个只是 MQ 的效果而不是目的。MQ 真正的目的是为了通讯，屏蔽底层复杂的通讯协议，定义了一套应用层的、更加简单的通讯协议。一个分布式系统中两个模块之间通讯要么是 HTTP，要么是自己开发的 TCP，但是这两种协议其实都是原始的协议。HTTP 协议很难实现两端通讯——模块 A 可以调用 B，B 也可以主动调用 A，如果要做到这个两端都要背上 WebServer，而且还不支持长连接（HTTP 2.0 的库根本找不到）。TCP 就更加原始了，粘包、心跳、私有的协议，想一想头皮就发麻。MQ 所要做的就是在这些协议之上构建一个简单的“协议”——生产者/消费者模型。MQ 带给我的“协议”不是具体的通讯协议，而是更高层次通讯模型。它定义了两个对象——发送数据的叫生产者；接收数据的叫消费者， 提供一个 SDK 让我们可以定义自己的生产者和消费者实现消息通讯而无视底层通讯协议")]),e._v(" "),r("h2",{attrs:{id:"有-broker-的-mq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有-broker-的-mq"}},[e._v("#")]),e._v(" 有 Broker 的 MQ")]),e._v(" "),r("p",[e._v("这个流派通常有一台服务器作为 Broker，所有的消息都通过它中转。生产者把消息发送给它就结束自己的任务了，Broker 则把消息主动推送给消费者（或者消费者主动轮询）")]),e._v(" "),r("h3",{attrs:{id:"重-topic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重-topic"}},[e._v("#")]),e._v(" 重 Topic")]),e._v(" "),r("p",[e._v("kafka、JMS（ActiveMQ）就属于这个流派，生产者会发送 key 和数据到 Broker，由 Broker 比较 key 之后决定给哪个消费者。这种模式是我们最常见的模式，是我们对 MQ 最多的印象。在这种模式下一个 topic 往往是一个比较大的概念，甚至一个系统中就可能只有一个 topic，topic 某种意义上就是 queue，生产者发送 key 相当于说：“hi，把数据放到 key 的队列中”")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2018042523390001.png",alt:""}})]),e._v(" "),r("p",[e._v("如上图所示，Broker 定义了三个队列，key1，key2，key3，生产者发送数据的时候会发送 key1 和 data，Broker 在推送数据的时候则推送 data（也可能把 key 带上）。")]),e._v(" "),r("p",[e._v("虽然架构一样但是 kafka 的性能要比 jms 的性能不知道高到多少倍，所以基本这种类型的 MQ 只有 kafka 一种备选方案。如果你需要一条暴力的数据流（在乎性能而非灵活性）那么 kafka 是最好的选择")]),e._v(" "),r("h3",{attrs:{id:"轻-topic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#轻-topic"}},[e._v("#")]),e._v(" 轻 Topic")]),e._v(" "),r("p",[e._v("这种的代表是 RabbitMQ（或者说是 AMQP）。生产者发送 key 和数据，消费者定义订阅的队列，Broker 收到数据之后会通过一定的逻辑计算出 key 对应的队列，然后把数据交给队列")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2018042523390002.png",alt:""}})]),e._v(" "),r("p",[e._v("这种模式下解耦了 key 和 queue，在这种架构中 queue 是非常轻量级的（在 RabbitMQ 中它的上限取决于你的内存），消费者关心的只是自己的 queue；生产者不必关心数据最终给谁只要指定 key 就行了，中间的那层映射在 AMQP 中叫 exchange（交换机）。")]),e._v(" "),r("p",[e._v("AMQP 中有四种 exchange")]),e._v(" "),r("ul",[r("li",[e._v("Direct exchange：key 就等于 queue")]),e._v(" "),r("li",[e._v("Fanout exchange：无视 key，给所有的 queue 都来一份")]),e._v(" "),r("li",[e._v("Topic exchange：key 可以用“宽字符”模糊匹配 queue")]),e._v(" "),r("li",[e._v("Headers exchange：无视 key，通过查看消息的头部元数据来决定发给那个 queue（AMQP 头部元数据非常丰富而且可以自定义）")])]),e._v(" "),r("p",[e._v("这种结构的架构给通讯带来了很大的灵活性，我们能想到的通讯方式都可以用这四种 exchange 表达出来。如果你需要一个企业数据总线（在乎灵活性）那么 RabbitMQ 绝对的值得一用")]),e._v(" "),r("h2",{attrs:{id:"无-broker-的-mq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无-broker-的-mq"}},[e._v("#")]),e._v(" 无 Broker 的 MQ")]),e._v(" "),r("p",[e._v("无 Broker 的 MQ 的代表是 ZeroMQ。该作者非常睿智，他非常敏锐的意识到——MQ 是更高级的 Socket，它是解决通讯问题的。所以 ZeroMQ 被设计成了一个“库”而不是一个中间件，这种实现也可以达到——没有 Broker 的目的")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/2018042523390003.png",alt:""}})]),e._v(" "),r("p",[e._v("节点之间通讯的消息都是发送到彼此的队列中，每个节点都既是生产者又是消费者。ZeroMQ 做的事情就是封装出一套类似于 Socket 的 API 可以完成发送数据，读取数据")]),e._v(" "),r("p",[e._v("ZeroMQ 其实就是一个跨语言的、重量级的 Actor 模型邮箱库。你可以把自己的程序想象成一个 Actor，ZeroMQ 就是提供邮箱功能的库；ZeroMQ 可以实现同一台机器的 RPC 通讯也可以实现不同机器的 TCP、UDP 通讯，如果你需要一个强大的、灵活、野蛮的通讯能力，别犹豫 ZeroMQ")]),e._v(" "),r("h2",{attrs:{id:"附：queue-和-topic-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附：queue-和-topic-的区别"}},[e._v("#")]),e._v(" 附：Queue 和 Topic 的区别")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Queue：")]),e._v(" 一个发布者发布消息，下面的接收者按队列顺序接收，比如发布了 10 个消息，两个接收者 A,B 那就是 A,B "),r("strong",[e._v("总共")]),e._v(" 会收到 10 条消息，不重复。")]),e._v(" "),r("li",[r("strong",[e._v("Topic：")]),e._v(" 一个发布者发布消息，有两个接收者 A,B 来订阅，那么发布了 10 条消息，A,B "),r("strong",[e._v("各收到")]),e._v(" 10 条消息。")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("类型")]),e._v(" "),r("th",[e._v("Topic")]),e._v(" "),r("th",[e._v("Queue")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("概要")]),e._v(" "),r("td",[e._v("Publish Subscribe Messaging 发布订阅消息")]),e._v(" "),r("td",[e._v("Point-to-Point 点对点")])]),e._v(" "),r("tr",[r("td",[e._v("有无状态")]),e._v(" "),r("td",[e._v("Topic 数据默认不落地，是无状态的。")]),e._v(" "),r("td",[e._v("Queue 数据默认会在 MQ 服务器上以文件形式保存，比如 ActiveMQ 一般保存在 $AMQ_HOME\\data\\kr-store\\data 下面。也可以配置成 DB 存储。")])]),e._v(" "),r("tr",[r("td",[e._v("完整性保障")]),e._v(" "),r("td",[e._v("并不保证 Publisher 发布的每条数据，Subscriber 都能接受到。")]),e._v(" "),r("td",[e._v("Queue 保证每条数据都能被 Receiver 接收。")])]),e._v(" "),r("tr",[r("td",[e._v("消息是否会丢失")]),e._v(" "),r("td",[e._v("一般来说 Publisher 发布消息到某一个 Topic 时，只有正在监听该 Topic 地址的 Sub 能够接收到消息；如果没有 Sub 在监听，该 Topic 就丢失了。")]),e._v(" "),r("td",[e._v("Sender 发送消息到目标 Queue，Receiver 可以异步接收这个 Queue 上的消息。Queue 上的消息如果暂时没有 Receiver 来取，也不会丢失。")])]),e._v(" "),r("tr",[r("td",[e._v("消息发布接收策略")]),e._v(" "),r("td",[e._v("一对多的消息发布接收策略，监听同一个 Topic 地址的多个 Sub 都能收到 Publisher 发送的消息。Sub 接收完通知 MQ 服务器")]),e._v(" "),r("td",[e._v("一对一的消息发布接收策略，一个 Sender 发送的消息，只能有一个 Receiver 接收。Receiver 接收完后，通知 MQ 服务器已接收，MQ 服务器对 Queue 里的消息采取删除或其他操作。")])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);