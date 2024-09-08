import type { Meta, StoryObj } from "@storybook/react";
import { MatchJobInfo } from "./MatchJobInfo";

const meta = {
  component: MatchJobInfo,
} satisfies Meta<typeof MatchJobInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
