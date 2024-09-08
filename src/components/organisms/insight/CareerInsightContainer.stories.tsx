import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CareerInsightContainer } from "./CareerInsightContainer";

const meta = {
  component: CareerInsightContainer,
} satisfies Meta<typeof CareerInsightContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

const posts = [1, 2, 3, 4, 5, 6].map(() => ({
  thumbnailUrl: "http://localhost:6006/test/thumbnail.svg",
  title:
    "How to Find an English-speaking Babysitter in Tokyo: Our Recommendations",
  description:
    "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  onClick: fn(),
}));

export const Primary: Story = {
  args: {
    posts,
    lastUpdatedText: "7 hours ago",
  },
};
