import React from "react";
import { Story } from "@storybook/react";
import { SpaceBlock } from "./spaceBlockComponent";

export default {
  component: SpaceBlock,
  title: "SpaceBlock",
};

const Template: Story<SpaceBlockProps> = (args) => <SpaceBlock {...args} />;

export const spaceBlock = Template.bind({});

spaceBlock.args = {
  height: 30,
  border: "solid 1px",
};
