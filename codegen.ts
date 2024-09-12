import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8000/graphql",
  documents: ["src/gql/documents/*.ts"],
  generates: {
    "./src/gql/gen/": {
      preset: "client",
    },
  },
};
export default config;
