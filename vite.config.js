import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import staticPages from './scripts/static-pages.js';
import { routes, SITE_URL } from './src/data/routes.js';

// The public site address, used for absolute canonical tags, social-image URLs and sitemap.xml.
// Sitemap entries must be absolute URLs, so without an address no sitemap.xml can be written.
// Order of preference:
//   1. SITE_URL environment variable (works on any host)
//   2. SITE_URL in src/data/routes.js
//   3. On Vercel, the project's production domain (custom domain if one is attached, else *.vercel.app)
function resolveSiteUrl() {
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  let url = process.env.SITE_URL || SITE_URL || (vercelHost ? `https://${vercelHost}` : '');
  url = url.trim().replace(/\/+$/, '');
  if (url && !/^https?:\/\//i.test(url)) url = `https://${url}`; // tolerate a bare domain
  return url;
}
const siteUrl = resolveSiteUrl();

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
