import { Meta, StoryObj } from "@storybook/react";
import ResourceCard from "./resource-card.component";

const meta: Meta<typeof ResourceCard> = {
  component: ResourceCard,
  title: "atoms/ResourceCard",
};

export default meta;
type Story = StoryObj<typeof ResourceCard>;

export const Primary: Story = {
  args: {
    image: {
      src: "https://carallel.com/wp-content/uploads/2022/08/Solo-Ager-hero.png",
      width: 1024,
      height: 720,
    },
    title: "Are You Aging Solo Too?",
    variant: "rounded",
  },
};
