import React from "react";
import { Story } from "@storybook/react";
import { CatalogComponent } from "./catalogComponent";

export default {
  component: CatalogComponent,
  title: "CatalogComponent",
};

const Template: Story = (args) => <CatalogComponent {...args} />;

export const catalogTest = Template.bind({});

catalogTest.args = {};
