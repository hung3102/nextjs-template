import type { Meta, StoryObj } from "@storybook/react";
import { CompanyLogo } from "./CompanyLogo";

const meta = {
  component: CompanyLogo,
} satisfies Meta<typeof CompanyLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nZ8T9JARemyFkQs0xXt57pk1n3AlqwN9qA&s",
    width: 80,
    height: 80,
  },
};
