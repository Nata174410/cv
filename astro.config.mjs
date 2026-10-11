// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: el sitio se sirve en https://Nata174410.github.io/cv
// Si conectas un dominio propio, cambia `site` y pon `base: '/'`.
export default defineConfig({
  site: 'https://Nata174410.github.io',
  base: '/cv',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
