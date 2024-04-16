import React, {useState, useCallback, useMemo} from 'react'
import ReactDOM from 'react-dom/client'
import { jsx } from "react/jsx-runtime"

/*
  在 React17 之前 JSX 等同于 React.createElement
  在 React17 之后 JSX 使用 react/jsx-runtime 中的 jsx
  不过官方计划将 jsx 反向移植到 React17 之前的版本，所以后续可以只考虑 jsx
*/
const x = jsx('h1', {}, '你好啊')

// useState 管理状态
// useReducer 管理复杂状态
// useEffect 管理副作用, 在所有DOM变更之后调用(异步)
// useContext 管理上下文
// useRef 管理ref
// useReducer 管理函数缓存
// useMemo 管理值缓存
// useLayoutEffect useEffect的另一个版本, 会阻塞页面更新(同步)

const MyCom = (props) => {

  const [m, setM] = useState(0)

  const handleAddM = () => {
    setM(m+1)
  }

  return <div>
    <h1>x = {props.x}</h1>
    <h1 onClick={handleAddM}>m = {m}</h1>
  </div>
}


const content = <div>
  <MyCom x="1" />
</div>

const rootDOM = document.getElementById('root')
const root = ReactDOM.createRoot(rootDOM)
root.render(content)
