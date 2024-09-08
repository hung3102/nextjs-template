import type { Meta, StoryObj } from "@storybook/react";
import { LatestJobContainer } from "./LatestJobContainer";

const meta = {
  component: LatestJobContainer,
} satisfies Meta<typeof LatestJobContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

const jobs = [1, 2, 3, 4, 5, 6, 7, 8].map(() => ({
  companyLogoUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nZ8T9JARemyFkQs0xXt57pk1n3AlqwN9qA&s",
  companyName: "Rakuten",
  jobPostion: "Full-stack Engineer",
  updatedTimeString: "8 hours ago",
  tags: [
    { name: "React JS" },
    { name: "No Japanese required" },
    { name: "No Japanese required" },
  ],
}));

export const latestJobContainerArgs = {
  jobs,
  lastUpdatedText: "7 hours ago",
};

export const Primary: Story = {
  args: latestJobContainerArgs,
};
