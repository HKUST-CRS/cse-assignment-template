// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";
import remarkAlerts from "remark-alerts";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// https://astro.build/config
export default defineConfig({
  outDir: "./dist/astro",

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkGfm, remarkAlerts, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
