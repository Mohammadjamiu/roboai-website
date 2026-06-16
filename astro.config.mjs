import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roboaix.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
});
