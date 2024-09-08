import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tag: "No Japanese required",
  },
};

export const Checked: Story = {
  args: {
    tag: "No Japanese required",
    isChecked: true,
  },
};
