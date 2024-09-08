import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "./TabBar";

const meta = {
  component: TabBar,
} satisfies Meta<typeof TabBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
