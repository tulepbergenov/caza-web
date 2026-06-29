import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const PORT = 8000;

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    tailwindcss(),
    tanstackRouter({
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
      target: "react",
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    createHtmlPlugin({ minify: true }),
  ],
  preview: {
    host: true,
    port: PORT,
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    open: true,
    port: PORT,
  },
});
