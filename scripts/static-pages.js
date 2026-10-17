import fs from 'node:fs';
import path from 'node:path';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Writes one HTML file per page so each URL works on any static host and has its own SEO tags. */
export function writeStaticPages(outDir, routes, siteUrl = '') {
  const base = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
  const pageHtml = (title, description, urlPath) =>
    base
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
      .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
      .replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/, `$1${siteUrl}/og-image.png$2`)
      .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${siteUrl}${urlPath}$2`);

  const written = [];
  for (const r of routes) {
    const html = pageHtml(r.title, r.description, r.path);
    if (r.path === '/') {
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      written.push('index.html');
      continue;
    }
    const slug = r.path.slice(1);
    fs.mkdirSync(path.join(outDir, slug), { recursive: true });
    fs.writeFileSync(path.join(outDir, slug, 'index.html'), html); // /services/
    fs.writeFileSync(path.join(outDir, `${slug}.html`), html); // /services (clean URLs)
    written.push(`${slug}/index.html`, `${slug}.html`);
  }
  fs.writeFileSync(path.join(outDir, '404.html'), pageHtml('Page not found | JCP Lawn Service', 'This page does not exist.', '/404'));
  written.push('404.html');

  if (siteUrl) {
    // Hidden routes (the HTML sitemap page) are navigation aids, not landing pages, so they stay out of the XML sitemap.
    const urls = routes
      .filter((r) => !r.hidden)
      .map((r) => `  <url><loc>${siteUrl}${r.path === '/' ? '/' : r.path}</loc></url>`)
      .join('\n');
    fs.writeFileSync(
      path.join(outDir, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );
    fs.appendFileSync(path.join(outDir, 'robots.txt'), `\nSitemap: ${siteUrl}/sitemap.xml\n`);
    written.push('sitemap.xml');
  }
  return written;
}

export default function staticPages(routes, siteUrl) {
  let outDir = 'dist';
  return {
    name: 'jcp-static-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const files = writeStaticPages(outDir, routes, siteUrl);
      console.log(`\n[jcp] wrote ${files.length} static page files`);
    },
  };
}
