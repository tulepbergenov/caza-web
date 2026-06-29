import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
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

const JS_FILES = "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}";

export default defineConfig([
  {
    ignores: ["build", "node_modules", "src/routeTree.gen.ts"],
  },
  {
    extends: ["js/recommended"],
    files: [JS_FILES],
    languageOptions: { globals: globals.browser },
    plugins: { js },
  },
  tseslint.configs.recommended,
  {
    files: [JS_FILES],
    ...reactHooks.configs.flat.recommended,
  },
  {
    files: [JS_FILES],
    ...reactRefresh.configs.vite,
  },
  {
    files: [JS_FILES],
    ...perfectionist.configs["recommended-natural"],
  },
  {
    files: [JS_FILES],
    ...unicorn.configs.recommended,
  },
  {
    files: [JS_FILES],
    ...reactCompiler.configs.recommended,
  },
  {
    files: [JS_FILES],
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    files: [JS_FILES],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(sonarjs.configs!.recommended as any),
  },
  {
    files: [JS_FILES],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(pluginPromise.configs["flat/recommended"] as any),
  },
  {
    files: ["src/routes/**"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: [JS_FILES],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
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
  {
    files: [JS_FILES],
    plugins: { boundaries },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          rules: [
            { allow: ["app", "features", "routes", "shared"], from: "app" },
            { allow: ["app", "features", "shared"], from: "routes" },
            { allow: ["shared", "features"], from: "features" },
            { allow: ["shared"], from: "shared" },
          ],
        },
      ],
      "boundaries/no-private": "error",
    },
    settings: {
      "boundaries/elements": [
        { pattern: "src/app/**", type: "app" },
        { pattern: "src/features/*", type: "features" },
        { pattern: "src/routes/**", type: "routes" },
        { pattern: "src/shared/**", type: "shared" },
      ],
    },
  },
]);
