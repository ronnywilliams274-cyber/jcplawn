import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import ButtonLabel from '../components/ButtonLabel';
import { Link } from '../lib/router';
import { company, services, serviceAreas } from '../data/content';
import { routes } from '../data/routes';

// Every public page, in navigation order. Hidden routes (this page itself) are left out.
const pages = routes.filter((r) => !r.hidden);

/** Human-readable sitemap: one place that links to every page and service, with a short description of each. */
export default function SitemapPage() {
  return (
    <>
      <PageHero
        crumb="Sitemap"
        title="Find your way around."
        intro="Every page on the JCP Lawn Service website in one place: lawn care services, residential and commercial grounds maintenance, our work, the lawn guide, service area, reviews and contact."
      >
        <Link to="/contact" className="btn btn--gold">
          <ButtonLabel>Get a quote</ButtonLabel>
        </Link>
        <a className="btn btn--line" href={company.phoneHref}>
          <ButtonLabel>{`Call ${company.phoneDisplay}`}</ButtonLabel>
        </a>
      </PageHero>

      <section className="sitemap section" aria-label="Site map">
        <div className="container sitemap__grid">
          <nav className="sitemap__block" aria-labelledby="sitemap-pages">
            <h2 className="sitemap__h" id="sitemap-pages">
              Pages
            </h2>
            <ul className="sitemap__list">
              {pages.map((r) => (
                <li key={r.path}>
                  <Link to={r.path} className="sitemap__link">
                    {r.name}
                  </Link>
                  <span className="sitemap__note">{r.description}</span>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="sitemap__block" aria-labelledby="sitemap-services">
            <h2 className="sitemap__h" id="sitemap-services">
              Lawn care services
            </h2>
            <ul className="sitemap__list">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="sitemap__link">
                    {s.title}
                  </Link>
                  <span className="sitemap__note">{s.summary}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sitemap__block">
            <h2 className="sitemap__h">Service area</h2>
            <p className="sitemap__text">
              Based in {company.address.city}, {company.address.region}, serving homes and commercial properties across
              Greater Sacramento.
            </p>
            <ul className="sitemap__areas">
              {serviceAreas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="sitemap__text">
              <Link to="/service-area#zip" className="sitemap__link">
                Check your ZIP code
              </Link>
            </p>
          </div>

          <div className="sitemap__block">
            <h2 className="sitemap__h">Contact</h2>
            <address className="sitemap__contact">
              <a href={company.phoneHref} className="sitemap__link">
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="sitemap__link">
                {company.email}
              </a>
              <span>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.region} {company.address.postal}
              </span>
              <a href={company.mapsLink} className="sitemap__link" target="_blank" rel="noopener noreferrer">
                Google reviews and directions
              </a>
            </address>
          </div>
        </div>
      </section>

      <CTABand title="Can't find what you need? Just ask." text="Call or send a quick message and we will point you the right way." />
    </>
  );
}
