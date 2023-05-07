import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});