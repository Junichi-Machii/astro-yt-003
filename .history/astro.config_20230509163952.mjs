import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
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

  partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),

  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  },

});