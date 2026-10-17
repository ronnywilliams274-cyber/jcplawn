# JCP Lawn Service: website

Seven-page premium website for **JCP Lawn Service** (Rancho Cordova, CA), serving residential and commercial clients.

**Stack:** React 18, Vite, GSAP 3.13 (ScrollTrigger), Lenis smooth scroll, Three.js.

Research and strategy: [`RESEARCH-AND-STRATEGY.md`](./RESEARCH-AND-STRATEGY.md). Hero lawn still frames: `docs/`.

---

## Quick start

You need **Node.js 18 or newer** (https://nodejs.org).

```bash
npm install       # first time only
npm run dev       # local preview at http://localhost:5173
npm run build     # production build into /dist (one HTML file per page)
npm run preview   # preview the production build
```

## The seven pages

| Page | URL | Highlights |
|---|---|---|
| Home | `/` | 3D lawn you mow by scrolling, homes/commercial split, services track, visit checklist, tools |
| Services | `/services` | All eight services in depth with a sticky index and per-service quote buttons |
| Residential | `/residential` | Service rhythms with visit-cadence charts, visit timeline, before/after slider, homeowner FAQ |
| Commercial | `/commercial` | Property types, benefits, **scope builder**, onboarding process, manager FAQ |
| Lawn guide | `/lawn-guide` | **Lawn diagnostic**, seasons calendar, **mowing-height ruler**, lawn rules, pattern studio |
| Service area | `/service-area` | **ZIP code checker**, towns and ZIP codes, map, reviews |
| Contact | `/contact` | Quote form, what happens next, full FAQ |

There is also a branded 404 page.

**Quote buttons work site-wide.** Any quote button on any page (a plan card, a service, the scope builder, the diagnostic, the ZIP checker) opens the contact form with the property type, services and notes already filled in.

**Page changes** run through a striped "mowing" transition. Back and forward buttons work normally.

---

## Deploying

`npm run build` writes a real HTML file for every page (`services/index.html` and `services.html`), each with its own title, description and canonical tag. The URLs therefore work on any static host without server rewrites.

| Host | Setup |
|---|---|
| **Vercel** | Import the project. Preset: Vite. Output directory: `dist`. `vercel.json` (clean URLs) is included. |
| **Netlify** | Build command: `npm run build`. Publish directory: `dist`. Works as is. |
| **cPanel / Apache** | Upload the contents of `dist/`. The included `.htaccess` serves clean URLs and the 404 page. |

**When the domain is live:** set `SITE_URL` (for example `https://www.jcplawnservice.com`, no trailing slash) either in `src/data/routes.js` or as a `SITE_URL` environment variable on the host (Vercel: Project Settings, Environment Variables), then rebuild. Canonical tags and social image URLs become absolute, `sitemap.xml` is generated, and a `Sitemap:` line is added to `robots.txt`. Then submit `<your domain>/sitemap.xml` in Google Search Console.

**Sitemaps:** there are two. The visitor-facing HTML sitemap lives at `/sitemap` (linked from the footer, hidden from the main menu) and always works. The XML sitemap for search engines needs `SITE_URL`, because sitemap entries must be absolute URLs.

**Footer credit:** the developer credit (Embra Technologies) is the `credit` object in `src/data/content.js`.

---

## Editing content

All words live in two files. No component changes are needed.

| File | What's in it |
|---|---|
| `src/data/content.js` | Business details, hero, services (with details, frequency, season, FAQs), visit checklist, residential plans, visit steps, property types, scope options, lawn diagnostic, grass types, tips, seasons, towns and ZIP codes, FAQs, reviews |
| `src/data/routes.js` | Page names, page titles and meta descriptions, and the site URL |

**Reviews:** paste real reviews into `testimonials`. Review carousels then appear automatically. Until then, review sections link to the Google Business listing.

**Before launch:** confirm everything marked `VERIFY` in `content.js`. That includes the service list, the visit checklist commitments, the towns and ZIP codes, and FAQ answers about rain days, debris haul-away and scheduling. Section 12 of the strategy document has the full list.

## The quote form

By default, sending the form opens the visitor's email app with the request filled in and addressed to `juancpantoja78@gmail.com`.

To receive requests directly instead:
1. Create a free endpoint (for example at formspree.io).
2. Paste its URL into `company.formEndpoint` in `content.js`.

## Adding photos later

There is no stock photography; illustrations are drawn in code. Put real project photos in `public/images/` and reference them as `/images/name.jpg`. A "Recent work" gallery is the recommended next addition.

---

## Project structure

```
src/
  data/content.js        all copy and business details
  data/routes.js         pages, titles, descriptions, site URL
  lib/router.jsx         small history-API router with page transitions
  lib/motion.js          GSAP + ScrollTrigger + Lenis setup
  lib/quote.js           opens the pre-filled quote form from any page
  lib/lawnTextures.js    procedural lawn textures (pattern studio, before/after)
  three/                 Three.js lawn scene and GLSL shaders
  components/            header, footer pieces, page hero, CTA band, transition, cursor, buttons, drawings
  sections/              home and shared sections (hero, services track, process, seasons, FAQ, contact, ...)
  features/              interactive tools (scope builder, lawn diagnostic, grass guide, ZIP checker, ...)
  pages/                 the seven pages and the 404 page
  styles/                base.css (tokens, global), sections.css, pages.css
scripts/static-pages.js  build step that writes one HTML file per page (+ sitemap when SITE_URL is set)
public/                  favicon, social image, robots.txt, .htaccess
```

## Accessibility and motion

- **Navigation:** skip link, real links for every page, `aria-current` on the active page, and a keyboard-operable menu.
- **Interactive tools:** tabs, accordions and toggles have visible focus states. The before/after slider is a real range input, so it works with the keyboard and screen readers.
- **Forms:** fields are labeled and give specific error messages.
- **Reduced motion:** with *reduce motion* on, the site uses native scrolling, no pinning, no page transition and no scrubbed animation; content shows in its final state.

## What was tested

| Area | Result |
|---|---|
| Shaders | The 3D lawn's GLSL compiled and linked in WebGL1 and WebGL2. The lawn was rendered at several scroll positions to tune it. |
| Build | The full app bundles with no errors or warnings. |
| Pages | All seven pages load directly by URL with the correct title, heading and active navigation, with no console errors and no horizontal overflow, at 1440 px and 390 px wide. |
| Cross-page flows | The scope builder sends a draft to a pre-filled contact form; the lawn diagnostic recommends services; the grass guide switches heights; the ZIP checker accepts and declines correctly; the browser back button works. |
| Static pages | The build step writes correct per-page titles, descriptions, canonical tags and the sitemap. |

**Before launch:** check the full animated experience with `npm run dev` in Chrome, Safari and Firefox and on a real phone. The sandbox tests used stand-ins for the animation libraries, so the live GSAP, Lenis and Three.js experience should get a final look on real devices.

## Licenses

- **GSAP:** free for commercial use under its standard license.
- **Three.js, Lenis, React:** MIT.
- **Fonts:** Big Shoulders Display and Hanken Grotesk, SIL Open Font License.
