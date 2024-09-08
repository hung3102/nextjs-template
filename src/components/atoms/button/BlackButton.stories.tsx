import type { Meta, StoryObj } from "@storybook/react";
import { BlackButton } from "./BlackButton";
import { fn } from "@storybook/test";

const meta = {
  component: BlackButton,
} satisfies Meta<typeof BlackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Sign in",
    onClick: fn(),
  },
};
