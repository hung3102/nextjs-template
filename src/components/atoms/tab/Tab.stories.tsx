import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tab";

const meta = {
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const active: Story = {
  args: {
    name: "Job Search",
    isActive: true,
  },
};

export const inactive: Story = {
  args: {
    name: "Job Search",
    isActive: false,
  },
};
