// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: el sitio se sirve en https://Nata174410.github.io/cv
// Si conectas un dominio propio, cambia `site` y pon `base: '/'`.
export default defineConfig({
  site: 'https://Nata174410.github.io',
  base: '/cv',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});
