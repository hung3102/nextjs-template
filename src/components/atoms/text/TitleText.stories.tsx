import type { Meta, StoryObj } from "@storybook/react";
import { TitleText } from "./TitleText";

const meta = {
  component: TitleText,
} satisfies Meta<typeof TitleText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Full-stack Engineer",
    fontSize: 24,
  },
};
