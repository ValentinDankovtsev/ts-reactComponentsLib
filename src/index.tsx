import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./headerComponent/headerComponent";
import { Paraghraph } from "./paragraphComponent/paraghraphComponent";
import { SpaceBlock } from "./spaceBlockComponent/spaceBlockComponent";
import { CollapseComponent } from "./collapseBlockComponent/collapseBlockComponent";
import { ImageComponent } from "./ImageComponent/imageComponent";
import { ColumnsComponent } from "./columnComponent/columnComponent";
import { UserComponent } from "./userComponent/userComponent";

ReactDOM.render(
  <>
    <ColumnsComponent
      columnCount={4}
      text={
        "Как и во всех универсальных свойствах, любое персональное значение, которое не указанно, устанавливается в начальное значение. Обратите внимание, border не может быть использован для указания пользовательского значения border-image (en-US), но вместо этого устанавливает его в начальное значение, т.е. none."
      }
    />
    <Header level={1} text={"Заголовок первого уровня"} />
    <Header level={2} text={"Заголовок второго уровня"} />
    <Paraghraph style={"quote"} text={"наклонный текст"} />
    <SpaceBlock height={100} border={"solid 3px"} />
    <CollapseComponent
      header={"Проверочный header"}
      content={"Жили у бабуси два веселых гуся"}
      isCollapse={false}
    />
    <ImageComponent
      source={"https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg"}
      float={"right"}
    />
    <UserComponent />
  </>,

  document.getElementById("root")
);
