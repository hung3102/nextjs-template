"use client";

import { fetchTests } from "@/api";
import { GetTestQuery } from "@/gql/gen/graphql";
import { useQuery } from "@tanstack/react-query";

export const TopContainer = () => {
  const { data } = useQuery<GetTestQuery>({
    queryKey: ["test"],
    queryFn: fetchTests,
  });

  console.log(data?.test.name);

  return <div>Test</div>;
};
