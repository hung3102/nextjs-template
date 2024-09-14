"use client";

import { fetchTests } from "@/api";
import { GetTestQuery } from "@/gql/gen/graphql";
import { useQuery } from "@tanstack/react-query";
import { opportunityArgs } from "../organisms/opportunity/Opportunity.stories";
import { latestJobContainerArgs } from "../organisms/job/LatestJobContainer.stories";
import { careerInsightContainerArgs } from "../organisms/insight/CareerInsightContainer.stories";
import { Top } from "./Top";

export const TopContainer = () => {
  const { data } = useQuery<GetTestQuery>({
    queryKey: ["test"],
    queryFn: fetchTests,
  });

  console.log(data?.test.name);

  return (
    <Top
      opportunityData={opportunityArgs}
      latestJobData={latestJobContainerArgs}
      careerInsightData={careerInsightContainerArgs}
    />
  );
};
