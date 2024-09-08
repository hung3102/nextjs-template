import type { Meta, StoryObj } from "@storybook/react";
import { LinkText } from "./LinkText";
import { fn } from "@storybook/test";

const meta = {
  component: LinkText,
} satisfies Meta<typeof LinkText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "See all 10 job postings",
    onClick: fn(),
  },
};
