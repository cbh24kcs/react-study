import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'

// 类组件
class ClassComponent extends React.Component {
  // constructor(props) {
  //   // console.log(this)
  //   super(props)
  //   // 在 super 之后, this才可以使用
  //   console.log(this)

  //   // this.handleClick = this.handleClick.bind(this)

  //   // 我们可以往 this 上随便挂一些状态
  //   // 但是这些状态的改变, 不会触发页面更新(重新渲染)
  //   this.m = 1

  //   // 如果想要重新渲染, 需要用 this.state 和 this.setState
  //   this.state = {
  //     m: 1
  //   }
  // }

  state = {
    m: 1
  }

  static propTypes = {
    x: PropTypes.string.isRequired,
    y: PropTypes.element
  }

  input = null
  inputRef = React.createRef()

  // handleClick () {
  //   console.log("handleClick", this)
  // }

  handleClick = () => {
    // console.log("handleClick", this)
    // this.m++
    // this.forceUpdate()
    // console.log("m", this.state.m)
    // this.setState({m: this.state.m+1}, () => {
    //   console.log("渲染完成")
    // })
    // console.log("m", this.state.m)

    // this.setState(preState => {
    //   preState.m++
    //   return preState
    // })

    // React16 之后, 传null不会更新组件
    // this.setState(null)

    // 如果遇到多个setState任务, React会进行合并
    // 所以注意: 不要依赖当前state， 计算下一个state
    // 同理: 不能依赖props计算下一个状态, 因为props的更新也是异步的
    this.setState({m: this.state.m+1})
    this.setState({m: this.state.m+1})
    this.setState({m: this.state.m+1})
    this.setState({m: this.state.m+1})
    this.setState({m: this.state.m+1})
    this.setState({m: this.state.m+1})

    // console.log(this.refs.input)
    // console.log(this.input)
    console.log(this.inputRef.current)
  }


  render() {
    console.log("props.children", this.props.children)
    return <div>
      <h1>类组件</h1>
      <h1>x = {this.props.x}</h1>
      <h1>m = {this.state.m}</h1>
      <button onClick={this.handleClick}>按钮</button>
      <hr />
      {this.props.children['head'](666)}
      {this.props.children['body']}
      {this.props.children['foot']}
      <hr />
      {/* <input ref="input" type="text" /> */}
      {/* <input ref={val => this.input=val} type="text" /> */}
      <input ref={this.inputRef} type="text" />
    </div>
  }
}

// 函数组件 + hook
function FunctionComponent() {
  return <div>
    <h1>函数组件</h1>
  </div>
}


const content = <div>
  <ClassComponent x="1" >
    {{
      head: (x) => <h1>头部 {x}</h1>,
      body: <h1>身体</h1>,
      foot: <h1>尾部</h1>
    }}
  </ClassComponent>
  {/* <FunctionComponent /> */}
</div>


/*
!旧生命周期
    初始化阶段, 由render触发, 初次渲染
        constructor - super
        constructor - 当前
        componentWillMount 即将挂载
        render
        componentDidMount 挂载完成

    更新阶段
        shouldComponentUpdate 组件是否应该更新
        componentWillUpdate
        render
        componentDidUpdate

    父组件render触发
        componentWillReceiverProps 组件即将收到props
        shouldComponentUpdate
            componentWillUpdate
        render
        componentDidUpdate

    卸载组件:
        componentWillUnmount

!新的
    getDerivedStateFromProps
    getSnapshotBeforeUpdate
    getDerivedStateFromError
    componentDidCatch

!学一个 useEffect 几乎顶上面全部  

*/


const rootDOM = document.getElementById('root')
const root = ReactDOM.createRoot(rootDOM)
root.render(content)
