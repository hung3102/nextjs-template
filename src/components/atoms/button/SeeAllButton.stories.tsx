import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SeeAllButton } from "./SeeAllButton";

const meta = {
  component: SeeAllButton,
} satisfies Meta<typeof SeeAllButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "See all jobs",
    onClick: fn(),
  },
};
