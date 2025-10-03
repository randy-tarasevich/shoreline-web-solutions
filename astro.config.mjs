// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://shorelinewebsolutions.com", // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
