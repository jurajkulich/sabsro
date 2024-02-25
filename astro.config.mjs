import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

export default defineConfig({
  site: 'https://jurajkulich.github.io', // todo change
  base: '/sabsro',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    astroI18next(),
  ],
});
