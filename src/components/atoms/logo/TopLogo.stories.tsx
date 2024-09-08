import type { Meta, StoryObj } from "@storybook/react";
import { TopLogo } from "./TopLogo";

const meta = {
  component: TopLogo,
} satisfies Meta<typeof TopLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
