import type { Meta, StoryObj } from "@storybook/react";
import { FavoritePositionInfo } from "./FavoritePositionInfo";

const meta = {
  component: FavoritePositionInfo,
} satisfies Meta<typeof FavoritePositionInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
