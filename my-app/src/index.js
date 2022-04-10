import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

function Counter() {
  // const [状态, 改变状态的函数] = useState(初始状态) 
  const [x, setX] = useState(0)

  return <div>
    <h1 style={{color: x > 5 ? 'red' : '#000'}}>{x} --- {x * x}</h1>
    <button onClick={() => setX(x+1)}>增加</button>
    <button onClick={() => setX(x-1)}>减少</button>
  </div>
}

let app = <div>
   <Counter />
</div>;

ReactDOM.render(app, document.getElementById('root'));

