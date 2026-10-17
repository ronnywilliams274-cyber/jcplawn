// Vercel serverless function that answers /sitemap.xml (see the rewrite in vercel.json).
//
// The XML is built from the host the crawler actually requested, so every URL in the sitemap matches the
// property verified in Google Search Console (www vs non-www, custom domain vs *.vercel.app), and no site
// address has to be configured anywhere. If the build already wrote a static dist/sitemap.xml (because
// SITE_URL was known at build time), Vercel serves that file instead and this function is not used.
import { routes } from '../src/data/routes.js';

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export default function handler(req, res) {
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || '')
    .split(',')[0]
    .trim()
    .toLowerCase();

  // Only accept a plain hostname (optionally with a port), never anything that could inject markup.
  if (!/^[a-z0-9.-]+(:\d+)?$/.test(host)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Bad request');
    return;
  }

  const origin = `https://${host}`;
  // Hidden routes (the HTML sitemap page) are navigation aids, not landing pages.
  const urls = routes
    .filter((r) => !r.hidden)
    .map((r) => `  <url><loc>${escapeXml(origin + r.path)}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.end(xml);
}
