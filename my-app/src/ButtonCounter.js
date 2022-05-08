import React, { useState } from "react";

export default function ButtonCounter(props) {
  const [x, setX] = useState(props.init);
  return <button onClick={() => setX(x + 1)}>你点了我 {x} 次</button>;
}
