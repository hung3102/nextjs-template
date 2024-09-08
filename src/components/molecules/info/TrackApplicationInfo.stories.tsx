import type { Meta, StoryObj } from "@storybook/react";
import { TrackApplicationInfo } from "./TrackApplicationInfo";

const meta = {
  component: TrackApplicationInfo,
} satisfies Meta<typeof TrackApplicationInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
