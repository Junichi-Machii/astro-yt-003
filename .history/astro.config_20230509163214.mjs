import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://machijunblog.netlify.app',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({
    filter: page => page !== "https://machijunblog.netlify.app/about/"
  })],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  },
});