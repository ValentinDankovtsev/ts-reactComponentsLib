import React from "react";
import { Story } from "@storybook/react";
import { Header, HeaderPropsType } from "./headerComponent";

export default {
  component: Header,
  title: "Header",
};

const Template: Story<HeaderPropsType> = (args) => <Header {...args} />;

export const headerTest = Template.bind({});

headerTest.args = {
  level: 1,
  text: "😄👍😍💯",
};
