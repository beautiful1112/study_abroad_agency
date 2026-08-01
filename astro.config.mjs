// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rooute-edu-immi.com',
  // Force build-time image optimization for static Cloudflare Pages.
  // Without sharp, builds can emit /_image?... URLs that only work in `astro dev`.
  image: {
    service: sharpImageService(),
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
