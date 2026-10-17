import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPages from './scripts/static-pages.js';
import { routes, SITE_URL } from './src/data/routes.js';

// Set SITE_URL in src/data/routes.js, or as a SITE_URL environment variable on the host (e.g. Vercel),
// to turn on absolute canonical tags, social-image URLs and sitemap.xml at build time.
const siteUrl = (process.env.SITE_URL || SITE_URL).replace(/\/+$/, '');

export default defineConfig({
  plugins: [react(), staticPages(routes, siteUrl)],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Three.js loads lazily with the home page hero, so it gets its own chunk.
        manualChunks: { gsap: ['gsap', 'lenis'] },
      },
    },
  },
});
