import type { Meta, StoryObj } from "@storybook/react";
import { TopJobAlertContainer } from "./TopJobAlertContainer";

const meta = {
  component: TopJobAlertContainer,
} satisfies Meta<typeof TopJobAlertContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
