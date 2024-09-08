import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CareerInsightBox } from "./CareerInsightBox";

const meta = {
  component: CareerInsightBox,
} satisfies Meta<typeof CareerInsightBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    thumbnailUrl: "http://localhost:6006/test/thumbnail.svg",
    title:
      "How to Find an English-speaking Babysitter in Tokyo: Our Recommendations",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    onClick: fn(),
  },
};
