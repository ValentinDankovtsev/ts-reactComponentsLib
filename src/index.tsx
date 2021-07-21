import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./headerComponent/headerComponent";
import { Paraghraph } from "./paragraphComponent/paraghraphComponent";
import { SpaceBlock } from "./spaceBlockComponent/spaceBlockComponent";
import { CollapseComponent } from "./collapseBlockComponent/CollapseBlockComponent";

ReactDOM.render(
  <>
    <Header level={1} text={"Заголовок первого уровня"} />
    <Header level={2} text={"Заголовок второго уровня"} />
    <Paraghraph style={"quote"} text={"наклонный текст"} />
    <SpaceBlock height={100} border={"solid 3px"} />
    <CollapseComponent
      header={"Проверочный header"}
      content={"Жили у бабуси два веселых гуся"}
      isCollapse={false}
    />
  </>,
  document.getElementById("root")
);
