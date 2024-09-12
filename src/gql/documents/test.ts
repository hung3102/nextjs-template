import { gql } from "graphql-request";

export const getTest = gql`
  query getTest {
    test(id: 1) {
      name
    }
  }
`;
