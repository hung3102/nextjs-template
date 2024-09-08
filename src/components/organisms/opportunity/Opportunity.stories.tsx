import type { Meta, StoryObj } from "@storybook/react";
import { Opportunity } from "./Opportunity";
import { fn } from "@storybook/test";

const meta = {
  component: Opportunity,
} satisfies Meta<typeof Opportunity>;

export default meta;

type Story = StoryObj<typeof meta>;

const companies = [1, 2, 3, 4, 5, 6].map(() => ({
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
}));

const logoUrls = [
  "sony",
  "paypay",
  "hitachi",
  "rakuten",
  "ntt",
  "mercari",
  "peopleai",
  "dena",
].map((name) => `http://localhost:6006/test/${name}.svg`);

export const opportunityArgs = {
  logoUrls,
  companies,
};

export const Primary: Story = {
  args: opportunityArgs,
};
