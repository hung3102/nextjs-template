import type { Meta, StoryObj } from "@storybook/react";
import { SearchContainer } from "./SearchContainer";

const meta = {
  component: SearchContainer,
} satisfies Meta<typeof SearchContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
