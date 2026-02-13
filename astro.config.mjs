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
const redirectDefaultLocale = false;
const site = process.env.SITE_URL || "https://jurajkulich.github.io";
const configuredBase = process.env.BASE_PATH || "/sabsro";
const base = configuredBase.startsWith("/")
  ? configuredBase.replace(/\/+$/, "") || "/"
  : `/${configuredBase.replace(/\/+$/, "")}`;

export default defineConfig({
  site,
  base,
  redirects: {
    "/sk": "/",
    "/sk/about": "/about",
    "/sk/contact": "/contact",
    "/sk/machines": "/machines",
  },

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

  output: "static",
});
