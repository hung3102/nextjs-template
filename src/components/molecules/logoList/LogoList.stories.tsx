import type { Meta, StoryObj } from "@storybook/react";
import { LogoList } from "./LogoList";

const meta = {
  component: LogoList,
} satisfies Meta<typeof LogoList>;

export default meta;

type Story = StoryObj<typeof meta>;

const urls = [
  "sony",
  "paypay",
  "hitachi",
  "rakuten",
  "ntt",
  "mercari",
  "peopleai",
  "dena",
].map((name) => `http://localhost:6006/test/${name}.svg`);

export const Primary: Story = {
  args: {
    urls,
  },
};
