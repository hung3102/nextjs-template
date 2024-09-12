import { getTest } from "@/gql/documents/test";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import request from "graphql-request";
import { TopContainer } from "./TopContainer";

export const TopRoute = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["test"],
    queryFn: () => request("http://localhost:8000/graphql", getTest),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopContainer />
    </HydrationBoundary>
  );
};
