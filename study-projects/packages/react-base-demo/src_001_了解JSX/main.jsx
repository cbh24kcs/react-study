import React from 'react'
import ReactDOM from 'react-dom/client'

// 获取要操作的DOM容器
const rootDOM = document.getElementById('root')
// 根据DOM创建渲染根节点
const root = ReactDOM.createRoot(rootDOM)
// 渲染内容
root.render("你好")
root.render(123)
// true/false/null/undefined 渲染出来是空的
root.render(true)
root.render(false)
root.render(null)
root.render(undefined)
// 如果渲染的是一个数组, 会帮你把数组里的东西拼起来渲染
root.render(['a', 'b', 'c'])

// render还能渲染 ReactElement 对象
// 如何创建 ReactElement 对象: React.createElement(标签名, 属性对象, ...子节点)

const e1 = React.createElement("h1", {title: '你好'}, "hello")
root.render(e1)

// 因为 React.createElement 编写复杂, 出现了 JSX语法
const e2 = <h1 title="你好">hello</h1>
root.render(e2)

// 1. 一个JSX表达式, 只能有一个根节点; 如果不想要特定的根节点, 可以用 <></>
const e3 = <></>

// 2. 在JSX中可以混入表达式, 使用 {} 包起来即可
let a  = 3
const e4 = <div>a + 1 = {a + 1}</div>
root.render(e4)

// 3. JSX中混入一个数组, 会讲数组遍历显示
let arr = ['西游记', '红楼梦']
const e5 = <div>{arr}</div>
root.render(e5)

// 3. JSX不能插入一个普通对象, 除了 ReactElement 对象
// let obj = {}
// const e6 = <div>{obj}</div>
// root.render(e6)

// 4. 标签必须闭合

// 5. 内联样式使用嵌入对象的形式
const e6 = <div>
  {/* <h1 style="color: red;">hello</h1> */}
  <h1 style={{color: 'red'}}>hello</h1>
</div>
root.render(e6)

// 6. 标签首字母大写->解析为组件, 标签首字母小写->解析为原生标签

// 7. <xxx {...obj} > 一次性传递多个属性的值
// 虽然很像解构, 但不是, 是JSX特有语法
let params = {
  name: '张三',
  age: 19,
  sex: "男"
}
const e7 = <div>
  <h1 {...params}>hello</h1>
</div>
root.render(e7)

// 其他：JSX在某些原生标签上的行为变化, 遇到再说
// class -> className
// for -> htmlFor
// ......