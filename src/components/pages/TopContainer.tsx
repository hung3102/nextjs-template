"use client";

import { getTest } from "@/gql/documents/test";
import { GetTestQuery } from "@/gql/gen/graphql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

export const TopContainer = () => {
  const { data } = useQuery<GetTestQuery>({
    queryKey: ["test"],
    queryFn: () => request("http://localhost:8000/graphql", getTest),
  });

  console.log(data?.test.name);

  return <div>Test</div>;
};
