// @ts-check

import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import eslintPluginSvelte from "eslint-plugin-svelte";
import * as svelteParser from "svelte-eslint-parser";
import prettier from "eslint-config-prettier";

const eslintRecommended = eslint.configs.recommended;

export default tslint.config(
  {
    files: ["**/*.ts", "**/*.svelte"],
    extends: [eslintRecommended, ...tslint.configs.recommended],
  },
  {
    files: ["**/*.svelte"],
    extends: [
      eslintRecommended,
      ...eslintPluginSvelte.configs["flat/recommended"],
      ...eslintPluginSvelte.configs["flat/prettier"],
    ],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tslint.parser,
      },
    },
  },
  prettier,
  {
    ignores: [".vscode/", "public/", "node_modules"],
  },
);
