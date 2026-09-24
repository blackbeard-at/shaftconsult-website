// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Unterseiten als impressum.html statt impressum/index.html bauen:
  // Cloudflare liefert sie dann direkt unter /impressum aus (ohne
  // Weiterleitung auf /impressum/) — passend zu Links und sitemap.xml.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
