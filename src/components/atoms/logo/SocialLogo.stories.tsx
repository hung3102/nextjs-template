import type { Meta, StoryObj } from "@storybook/react";
import { SocialLogo } from "./SocialLogo";
import SvgX from "@/assets/images/X";
import { fn } from "@storybook/test";

const meta = {
  component: SocialLogo,
} satisfies Meta<typeof SocialLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logoComponent: <SvgX></SvgX>,
    onClick: fn(),
  },
};
