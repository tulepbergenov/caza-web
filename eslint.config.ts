import css from "@eslint/css";
import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import perfectionist from "eslint-plugin-perfectionist";
import pluginPromise from "eslint-plugin-promise";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["build", "node_modules", "src/routeTree.gen.ts"],
  },
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
  },
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  perfectionist.configs["recommended-natural"],
  unicorn.configs.recommended,
  reactCompiler.configs.recommended,
  jsxA11y.flatConfigs.recommended,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sonarjs.configs!.recommended as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pluginPromise.configs["flat/recommended"] as any,
  {
    extends: ["css/recommended"],
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
  },
  {
    files: ["src/routes/**"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [],
          environment: "node",
          fallbackSort: { type: "unsorted" },
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "unknown",
          ],
          ignoreCase: true,
          internalPattern: ["^~/.+", "^@/.+"],
          maxLineLength: undefined,
          newlinesBetween: 1,
          newlinesInside: 0,
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: [],
          fallbackSort: { type: "unsorted" },
          groups: [],
          ignoreCase: true,
          newlinesBetween: "ignore",
          newlinesInside: "ignore",
          order: "asc",
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "unicorn/name-replacements": "off",
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          message: "JSX is not allowed in .ts files. Use .tsx instead.",
          selector: "JSXElement",
        },
      ],
    },
  },
]);
