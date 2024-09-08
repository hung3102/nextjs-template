import type { Meta, StoryObj } from "@storybook/react";
import { Top } from "./Top";
import { opportunityArgs } from "../organisms/opportunity/Opportunity.stories";
import { latestJobContainerArgs } from "../organisms/job/LatestJobContainer.stories";
import { careerInsightContainerArgs } from "../organisms/insight/CareerInsightContainer.stories";

const meta = {
  component: Top,
} satisfies Meta<typeof Top>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    opportunityData: opportunityArgs,
    latestJobData: latestJobContainerArgs,
    careerInsightData: careerInsightContainerArgs,
  },
};
