import { defineConfig } from "i18next-cli";

export default defineConfig({
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "public/locales/{{language}}/{{namespace}}.json",
  },
  locales: ["en", "ru"],
  types: {
    enableSelector: true,
    input: ["public/locales/en/*.json"],
    output: "@types/i18next.d.ts",
    resourcesFile: "@types/resources.d.ts",
  },
});
