import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, startScroll, stopScroll, prefersReducedMotion } from '../lib/motion';
import { company } from '../data/content';
import { routes } from '../data/routes';
import { Link, useRouter } from '../lib/router';
import Logo from './Logo';
import ButtonLabel from './ButtonLabel';

const mainNav = routes.filter((r) => r.path !== '/' && r.path !== '/contact' && !r.hidden);
const menuRoutes = routes.filter((r) => !r.hidden);

export default function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const menuTl = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll();
        setScrolled(y > 40);
        setHidden(self.direction === 1 && y > window.innerHeight * 0.6);
      },
    });
    return () => st.kill();
  }, []);

  // Close the menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [path]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      menuTl.current = gsap
        .timeline({ paused: true })
        .set(menuRef.current, { visibility: 'visible' })
        .fromTo(
          menuRef.current,
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: prefersReducedMotion ? 0.01 : 0.8, ease: 'expo.inOut' }
        )
        .from('.menu__link-i', { yPercent: 110, duration: 0.8, ease: 'expo.out', stagger: 0.05 }, '-=0.35')
        .from('.menu__foot > *', { opacity: 0, y: 14, duration: 0.5, stagger: 0.06 }, '-=0.5');
    }, menuRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open;
    const tl = menuTl.current;
    if (!tl || (!open && !wasOpen.current)) return;
    wasOpen.current = open;
    if (open) {
      stopScroll();
      document.documentElement.classList.add('menu-open');
      tl.timeScale(1).play();
      const first = menuRef.current.querySelector('a');
      first && setTimeout(() => first.focus(), 300);
    } else {
      document.documentElement.classList.remove('menu-open');
      tl.timeScale(1.6).reverse();
      startScroll();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current && toggleRef.current.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const cls = ['header', scrolled && 'is-scrolled', hidden && !open && 'is-hidden', open && 'is-open'].filter(Boolean).join(' ');

  return (
    <>
      <header className={cls}>
        <div className="header__inner container">
          <Link to="/" className="header__brand" aria-label="JCP Lawn Service home">
            <Logo />
          </Link>

          <nav className="header__nav" aria-label="Main">
            {mainNav.map((item) => (
              <Link key={item.path} to={item.path} className="header__link">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a className="header__phone" href={company.phoneHref} data-cursor="Call">
              {company.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn--gold btn--sm header__cta">
              <ButtonLabel>Get a quote</ButtonLabel>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span className="header__toggle-line" />
              <span className="header__toggle-line" />
            </button>
          </div>
        </div>
      </header>

      <div className="menu" id="site-menu" ref={menuRef} aria-hidden={!open}>
        <div className="menu__inner container">
          <nav className="menu__nav" aria-label="Mobile">
            {menuRoutes.map((item) => (
              <Link key={item.path} to={item.path} className="menu__link" onClick={() => setOpen(false)}>
                <span className="menu__link-i">{item.path === '/contact' ? 'Get a quote' : item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={company.phoneHref} className="menu__phone">
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="menu__email">
              {company.email}
            </a>
            <p className="menu__address">
              {company.address.street}, {company.address.city}, {company.address.region} {company.address.postal}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
