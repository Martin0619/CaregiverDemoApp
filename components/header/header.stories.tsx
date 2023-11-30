import { Meta, StoryObj } from "@storybook/react";
import Header from "./header.component";

const meta: Meta<typeof Header> = {
  title: "atoms/Header",
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    activeTab: "Library",
  },
};
