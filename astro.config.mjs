import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import node from '@astrojs/node';

const defaultLocale = "sk";
const locales = {
  sk: "sk-SK",
  en: "en-US",
};
const redirectDefaultLocale = false;

export default defineConfig({
  site: 'https://jurajkulich.github.io', // todo change
  base: '/sabsro',

  trailingSlash: "never",
  build: {
    format: "file",
  },

  integrations: [
    tailwind(),
    mdx(),

    i18n({
      locales,
      defaultLocale,
      redirectDefaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
        redirectDefaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],

  output: 'static'
});
