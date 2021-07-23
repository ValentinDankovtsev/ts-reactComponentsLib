/* eslint-disable class-methods-use-this */
import React from "react";
import { Header } from "../headerComponent/headerComponent";
import { Paraghraph } from "../paragraphComponent/paraghraphComponent";
import { ImageComponent } from "../ImageComponent/imageComponent";
import { ColumnsComponent } from "../columnComponent/columnComponent";
import { CollapseComponent } from "../collapseBlockComponent/collapseBlockComponent";
import { SpaceBlock } from "../spaceBlockComponent/spaceBlockComponent";

export class UserComponent extends React.Component {
  render(): React.ReactElement {
    const components = [];
    const response = prompt(
      "Введите название компонента типа: header, paragraph, image, column, collapse, space"
    );

    switch (response) {
      case "header": {
        const levelUser = +prompt("введите уровень заголовка", "1");
        const textUser = prompt("введите текст", "testTextHeader");
        components.push(
          React.createElement(Header, {
            level: levelUser,
            text: textUser,
            key: 1,
          })
        );
        break;
      }
      case "paragraph": {
        const styleUser = prompt(
          "введите начертание параграфа типа: normal, bold, quote",
          "bold"
        );
        const textUser = prompt("введите текст", "testTextParagraph");
        components.push(
          React.createElement(Paraghraph, {
            style: styleUser,
            text: textUser,
            key: 2,
          })
        );
        break;
      }

      case "image": {
        const sourceUser = prompt(
          "Вставьте URL картинки",
          "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
        );
        const floatUser = prompt(
          "Напишите как кртинка будет обтекать текстом: left, right, none",
          "right"
        );
        components.push(
          React.createElement(ImageComponent, {
            source: sourceUser,
            float: floatUser as "left" | "right" | "none",
            key: 3,
          })
        );
        break;
      }

      case "column": {
        const coulumnCountUser = +prompt("Введите кол-во колонок", "4");
        const textUser = prompt(
          "Напишите какой-нибудь текст",
          "Здесь могла бы быть ваша реклама"
        );
        components.push(
          React.createElement(ColumnsComponent, {
            columnCount: coulumnCountUser,
            text: textUser,
            key: 4,
          })
        );
        break;
      }

      case "collapse": {
        const headerUser = prompt("Введите текст заголовка", "Заголовок");
        const textUser = prompt(
          "Введите контент который вы бы хотели скрыть",
          "Вот это точно вам не стоит видеть"
        );
        components.push(
          React.createElement(CollapseComponent, {
            header: headerUser,
            content: textUser,
            isCollapse: false,
            key: 5,
          })
        );
        break;
      }

      case "space": {
        const spaceHeightUser = +prompt(
          "Введите высоту разделительного блока",
          "20"
        );
        const borderUser = prompt(
          'Введите border типа: "solid 3px"',
          "solid 3px"
        );
        components.push(
          React.createElement(SpaceBlock, {
            height: spaceHeightUser,
            border: borderUser,
            key: 6,
          })
        );
        break;
      }
      default:
        alert("Повторите ввод,что-то пошло не так");
    }

    return <div data-testid="component-id">{components}</div>;
  }
}
