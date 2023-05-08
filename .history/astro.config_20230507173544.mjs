import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import rehypeExternalLinks from 'rehype-external-links';


// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://machijunblog-astro-test.netlify.app',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({})],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});