import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from "@astrojs/sitemap";

import CMS from 'netlify-cms'

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)


// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://machijunblog.netlify.app',
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({
    filter: page => page !== "https://machijunblog.netlify.app/about/"
  }), tailwind()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});