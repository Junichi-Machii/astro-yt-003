import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import rehypeExternalLinks from 'rehype-external-links';


// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});