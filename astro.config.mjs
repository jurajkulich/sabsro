import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

const defaultLocale = "sk";
const locales = {
  sk: "sk-SK",
  en: "en-US",
};
// hreflang codes for the sitemap: plain language codes, matching the <head> alternates.
// Regional codes (en-US) would wrongly target US buyers instead of DE/AT/CZ.
const sitemapLocales = {
  sk: "sk",
  en: "en",
};
const redirectDefaultLocale = false;
const site = process.env.SITE_URL || "https://jurajkulich.github.io";
const configuredBase = process.env.BASE_PATH || "/sabsro";
const base = configuredBase.startsWith("/")
  ? configuredBase.replace(/\/+$/, "") || "/"
  : `/${configuredBase.replace(/\/+$/, "")}`;

// Redirect destinations are not base-prefixed by Astro, so prefix them here.
const basePrefix = base === "/" ? "" : base;

export default defineConfig({
  site,
  base,
  redirects: {
    "/sk": `${basePrefix}/`,
    "/sk/about": `${basePrefix}/about`,
    "/sk/contact": `${basePrefix}/contact`,
    "/sk/machines": `${basePrefix}/machines`,
  },

  trailingSlash: "never",
  build: {
    format: "file",
  },

  integrations: [
    mdx(),

    i18n({
      locales,
      defaultLocale,
      redirectDefaultLocale,
      // Non-page endpoints are not translated.
      exclude: ["pages/api/**/*", "pages/robots.txt.ts"],
    }),
    sitemap({
      i18n: {
        locales: sitemapLocales,
        defaultLocale,
        redirectDefaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],

  output: "static",

  // Astro 7 defaults to "jsx" whitespace handling; keep the previous output.
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});
