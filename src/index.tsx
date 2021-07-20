import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./headerComponent";

ReactDOM.render(
  <>
    <Header level={1} text={"Заголовок первого уровня"} />
    <Header level={2} text={"Заголовок второго уровня"} />
  </>,
  document.getElementById("root")
);
