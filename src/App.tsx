// import { useLocalStorage } from "./hooks/useLocalStorage";
import { FC,  } from "react";
import useLocalStorage from "react-use-localstorage";

interface DemoProps {
  x: string;
}

const Demo: FC<DemoProps> = () => {
  const [state, ] = useLocalStorage("person", JSON.stringify({ name: "张三", age: 18 }));

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

const App: FC = () => {
  const [state, setState] = useLocalStorage("person", JSON.stringify({ name: "张三", age: 18 }));


  return (
    <>
      <hr />
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => setState(JSON.stringify({ name: "李四", age: 19 }))}>按钮</button>
      <Demo x="3"></Demo>
    </>
  );
};

export default App;
