import type { Meta, StoryObj } from "@storybook/react";
import { JobBox } from "./JobBox";

const meta = {
  component: JobBox,
} satisfies Meta<typeof JobBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
  },
};
