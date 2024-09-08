import type { Meta, StoryObj } from "@storybook/react";
import { NormalText } from "./NormalText";

const meta = {
  component: NormalText,
} satisfies Meta<typeof NormalText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "146 jobs available. Ready to make an impact?",
    fontSize: 16,
  },
};
