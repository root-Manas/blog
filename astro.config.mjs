import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind({
    applyBaseStyles: true
  }), sitemap(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro"
    }
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});

