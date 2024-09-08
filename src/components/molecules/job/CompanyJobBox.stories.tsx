import type { Meta, StoryObj } from "@storybook/react";
import { CompanyJobBox } from "./CompanyJobBox";
import { fn } from "@storybook/test";

const meta = {
  component: CompanyJobBox,
} satisfies Meta<typeof CompanyJobBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    companyLogoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nZ8T9JARemyFkQs0xXt57pk1n3AlqwN9qA&s",
    companyName: "Rakuten",
    companyTypes: [
      {
        name: "E Commerce",
      },
      {
        name: "Payments",
      },
      {
        name: "Consumer Tech",
      },
    ],
    jobCount: 12,
    onClick: fn(),
  },
};
