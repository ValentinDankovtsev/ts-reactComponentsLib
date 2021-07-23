import React from "react";
import { Story } from "@storybook/react";
import { ColumnsComponent } from "./columnComponent";

export default {
  component: ColumnsComponent,
  title: "Columns",
};

const Template: Story<ColumnsProps> = (args) => <ColumnsComponent {...args} />;

export const columsComp = Template.bind({});

columsComp.args = {
  columnCount: 4,
  text: "Как и во всех универсальных свойствах, любое персональное значение, которое не указанно, устанавливается в начальное значение. Обратите внимание, border не может быть использован для указания пользовательского значения border-image (en-US), но вместо этого устанавливает его в начальное значение, т.е. none.",
};
