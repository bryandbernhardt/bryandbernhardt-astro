// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const siteUrl =
  process.env.PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://bryandbernhardt.com');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});