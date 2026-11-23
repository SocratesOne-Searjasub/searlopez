// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://searlopez.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  redirects: { "/work": "/#work", "/work/schoollock": "/work/storegate" },
  integrations: [sitemap()],
});
