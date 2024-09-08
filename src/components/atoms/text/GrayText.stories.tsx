import type { Meta, StoryObj } from "@storybook/react";
import { GrayText } from "./GrayText";

const meta = {
  component: GrayText,
} satisfies Meta<typeof GrayText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Last updated 7 hours ago",
  },
};
