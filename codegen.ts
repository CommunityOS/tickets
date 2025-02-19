import type { CodegenConfig } from "@graphql-codegen/cli";

import defaultConfig from "./graphql.config";

const noTypeCheckingPlugin = {
  add: {
    content: [
      "/* eslint-disable @typescript-eslint/ban-ts-comment */",
      "// @ts-nocheck",
      "/* eslint-disable */",
      "/* prettier-ignore */",
      "/* This file is automatically generated. Please do not modify it manually. */",
    ],
  },
};
const config = {
  ...defaultConfig,
  ignoreNoDocuments: true,
  generates: {
    "src/api/gql/": {
      preset: "client",
      plugins: [noTypeCheckingPlugin],
      config: {
        useTypeImports: true,
        skipTypename: true,
        avoidOptionals: true,
        nonOptionalTypename: false,
        // Lamentablemente, code-gen establece "any" como predeterminado, cuando no tiene un
        // tipo para un "scalar". Esta opción nos obliga a definir un tipo cada vez que
        // queremos usar un escalar sin tipo.
        defaultScalarType: "unknown",
        scalars: {
          Date: "string",
          DateTime: "string",
        },
      },
    },
    "./src/api/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "api/gql/graphql.ts",
      },
      plugins: [
        "typescript-operations",
        "typescript-react-apollo",
        noTypeCheckingPlugin,
      ],
    },
  },
} satisfies CodegenConfig;

export default config;
