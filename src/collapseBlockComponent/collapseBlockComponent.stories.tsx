import React from "react";
import { Story } from "@storybook/react";
import {
  CollapseComponent,
  CollapseComponentProps,
} from "./collapseBlockComponent";

export default {
  component: CollapseComponent,
  title: "CollapseComponent",
};

const Template: Story<CollapseComponentProps> = (args) => (
  <CollapseComponent {...args} />
);

export const collapseBlockStory = Template.bind({});

collapseBlockStory.args = {
  header: "Так выглядить заголовок первого уровня",
  content: "Посмотрите на прекрасный storybook",
  isCollapse: false,
};
