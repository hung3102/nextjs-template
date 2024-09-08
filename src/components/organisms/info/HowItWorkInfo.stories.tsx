import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorkInfo } from "./HowItWorkInfo";

const meta = {
  component: HowItWorkInfo,
} satisfies Meta<typeof HowItWorkInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
