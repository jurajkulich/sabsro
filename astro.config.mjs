import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

const defaultLocale = "sk";
const locales = {
  sk: "sk-SK",
  en: "en-US",
};
const redirectDefaultLocale = true;

export default defineConfig({
  site: 'https://jurajkulich.github.io', // todo change

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
});
