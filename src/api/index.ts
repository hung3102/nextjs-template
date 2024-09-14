import { getTest } from "@/gql/documents/test";
import { GetTestQuery } from "@/gql/gen/graphql";
import request from "graphql-request";

const apiUrl = process.env.API_URL || "";

export const fetchTests = (): Promise<GetTestQuery> => request(apiUrl, getTest);
