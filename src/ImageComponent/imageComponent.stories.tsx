import React from "react";
import { Story } from "@storybook/react";
import { ImageComponent } from "./imageComponent";

export default {
  component: ImageComponent,
  title: "Image",
};

const Template: Story<ImageComponentProps> = (args) => (
  <ImageComponent {...args} />
);

export const imageComp = Template.bind({});

imageComp.args = {
  source: "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg",
  float: "left",
};
