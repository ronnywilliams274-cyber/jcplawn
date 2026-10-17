/**
 * Page list, used by the router, the header/footer navigation, and the build step that
 * writes a static HTML file (with its own title and description) for every page.
 * Set SITE_URL once the domain is live so canonical and social-image URLs are absolute.
 */
export const SITE_URL = '';

export const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'JCP Lawn Service | Residential & Commercial Lawn Care in Rancho Cordova, CA',
    description:
      'Mowing, edging, hedge care and seasonal clean-ups for homes, HOAs and commercial properties in Rancho Cordova and Greater Sacramento. Call (916) 707-5385.',
  },
  {
    path: '/services',
    name: 'Services',
    title: 'Lawn Care Services: Mowing, Edging, Hedges, Aeration & Clean-ups | JCP Lawn Service',
    description:
      'Every JCP service explained: lawn mowing, edging, hedge and shrub care, tree trimming, clean-ups, aeration, bed care and sprinkler checks in Rancho Cordova and Sacramento.',
  },
  {
    path: '/residential',
    name: 'Residential',
    title: 'Residential Lawn Care in Rancho Cordova & Sacramento | JCP Lawn Service',
    description:
      'Weekly and every-other-week lawn service, seasonal clean-ups and one-time refreshes for homes across Greater Sacramento.',
  },
  {
    path: '/commercial',
    name: 'Commercial',
    title: 'Commercial Grounds Maintenance in Sacramento County | JCP Lawn Service',
    description:
      'Grounds maintenance for office parks, retail centers, HOAs, apartment communities and industrial sites. Written scopes, set schedules and one point of contact.',
  },
  {
    path: '/our-work',
    name: 'Our work',
    title: 'Our Work: Lawn Care & Landscaping Photos from Greater Sacramento | JCP Lawn Service',
    description:
      'Photos from real JCP Lawn Service jobs: fresh-cut lawns, new sod, bark and rock beds, hedge and tree trimming, and clean-ups across Rancho Cordova and Sacramento.',
  },
  {
    path: '/lawn-guide',
    name: 'Lawn guide',
    title: 'Sacramento Valley Lawn Care Guide: Seasons, Grass Types & Mowing Heights | JCP Lawn Service',
    description:
      'Diagnose lawn problems, learn the right mowing height for your grass, and see what a Sacramento Valley lawn needs each season.',
  },
  {
    path: '/service-area',
    name: 'Service area',
    title: 'Service Area: Rancho Cordova, Folsom, Elk Grove & Greater Sacramento | JCP Lawn Service',
    description:
      'Check your ZIP code and see the towns JCP Lawn Service covers across Greater Sacramento, from our base in Rancho Cordova.',
  },
  {
    path: '/reviews',
    name: 'Reviews',
    title: 'Customer Reviews & Testimonials | JCP Lawn Service, Rancho Cordova',
    description:
      'Read what homeowners across Greater Sacramento say about JCP Lawn Service. Real Google and Facebook reviews: 96% of Facebook reviewers recommend us.',
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Get a Lawn Care Quote | Contact JCP Lawn Service, Rancho Cordova',
    description:
      'Request a quote for residential or commercial lawn care. Call (916) 707-5385 or email juancpantoja78@gmail.com.',
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    hidden: true,
    title: 'Sitemap | JCP Lawn Service',
    description:
      'Every page on the JCP Lawn Service website: services, residential and commercial lawn care, our work, lawn guide, service area, reviews and contact.',
  },
];

export function normalizePath(p) {
  const x = (p || '/')
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
    .replace(/\/+$/, '');
  return x || '/';
}

export const findRoute = (path) => routes.find((r) => r.path === normalizePath(path));
