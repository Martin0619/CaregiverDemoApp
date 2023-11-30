import { Meta, StoryObj } from "@storybook/react";
import Button from "./button.component";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    as: "a",
    children: "Bookmarks",
  },
};
