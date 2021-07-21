import React from "react";
import { Story } from "@storybook/react";
import { Paraghraph, ParaghraphComponentProps } from "./paraghraphComponent";

export default {
  component: Paraghraph,
  title: "Paraghraph",
};

const Template: Story<ParaghraphComponentProps> = (args) => (
  <Paraghraph {...args} />
);

export const paraghraphQuote = Template.bind({});
export const paraghraphBold = Template.bind({});
export const paraghraphNormal = Template.bind({});

paraghraphQuote.args = {
  style: "quote",
  text: "quoteStyle=TestText",
};

paraghraphBold.args = {
  style: "bold",
  text: "boldStyle=TestText",
};

paraghraphNormal.args = {
  style: "normal",
  text: "normalStyle=TestText",
};
