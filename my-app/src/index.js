import React from "react";
import ReactDOM from "react-dom";
import NbPlus from "./NbPlus";
import ButtonCounter from "./ButtonCounter";

let app = (
  <div>
    <NbPlus />
    <ButtonCounter init={10} />
    <ButtonCounter init={5} />
    <ButtonCounter init={100} />
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
