import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion, scrollToTarget } from '../lib/motion';
import { company, credit, services, serviceAreas, slogan } from '../data/content';
import { routes } from '../data/routes';
import { Link } from '../lib/router';
import Logo from '../components/Logo';

// Hidden routes (the HTML sitemap) are linked from the footer's bottom bar instead.
const footerPages = routes.filter((r) => !r.hidden);

export default function Footer() {
  const ref = useRef(null);
  const year = new Date().getFullYear();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer__mark-svg',
        { yPercent: 55 },
        { yPercent: 0, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom bottom', scrub: 0.6 } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={ref}>
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p className="footer__slogan">{slogan.slogan}</p>
          <p className="footer__verse">— {slogan.verseRef}</p>
          <p>Residential and commercial lawn care in Rancho Cordova and Greater Sacramento.</p>
          <Link to="/contact" className="btn btn--gold btn--sm">
            Get a quote
          </Link>
        </div>

        <div className="footer__col">
          <h2 className="footer__h">Contact</h2>
          <a href={company.phoneHref}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <address>
            {company.address.street}
            <br />
            {company.address.city}, {company.address.region} {company.address.postal}
          </address>
          <a href={company.mapsLink} target="_blank" rel="noopener noreferrer">
            Google reviews and directions
          </a>
        </div>

        <nav className="footer__col" aria-label="Pages">
          <h2 className="footer__h">Pages</h2>
          {footerPages.map((r) => (
            <Link key={r.path} to={r.path}>
              {r.name}
            </Link>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h2 className="footer__h">Services</h2>
          {services.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`}>
              {s.title}
            </Link>
          ))}
        </nav>

        <div className="footer__col">
          <h2 className="footer__h">Service area</h2>
          <p className="footer__areas">{serviceAreas.join(', ')}.</p>
          <Link to="/service-area#zip">Check your ZIP code</Link>
        </div>
      </div>

      <div className="footer__mark" aria-hidden="true">
        <svg className="footer__mark-svg" viewBox="0 0 1000 160" preserveAspectRatio="xMidYMax meet">
          <defs>
            <pattern id="footer-stripes" width="56" height="160" patternUnits="userSpaceOnUse">
              <rect width="28" height="160" fill="#2f6b3a" />
              <rect x="28" width="28" height="160" fill="#245631" />
            </pattern>
          </defs>
          <text x="0" y="150" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="url(#footer-stripes)">
            JCP Lawn Service
          </text>
        </svg>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">
          © {year} {company.name}. All rights reserved.
        </p>
        <p className="footer__credit">
          {credit.prefix}{' '}
          <a href={credit.url} target="_blank" rel="noopener" title={credit.title}>
            {credit.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <div className="footer__utility">
          <Link to="/sitemap">Sitemap</Link>
          <button type="button" className="text-btn text-btn--light" onClick={() => scrollToTarget(0)}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
