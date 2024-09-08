import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SignUpForFree } from "./SignUpForFree";

const meta = {
  component: SignUpForFree,
} satisfies Meta<typeof SignUpForFree>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
  },
};
