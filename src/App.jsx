import { useEffect, useState } from 'react';
import { initSmoothScroll, startScroll, stopScroll, scrollToTarget, ScrollTrigger } from './lib/motion';
import { RouterProvider, useRouter } from './lib/router';
import { findRoute } from './data/routes';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import ScrollProgress from './components/ScrollProgress';
import MobileCTA from './components/MobileCTA';
import Footer from './sections/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ResidentialPage from './pages/ResidentialPage';
import CommercialPage from './pages/CommercialPage';
import LawnGuidePage from './pages/LawnGuidePage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import ReviewsPage from './pages/ReviewsPage';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';

const PAGES = {
  '/': Home,
  '/services': ServicesPage,
  '/residential': ResidentialPage,
  '/commercial': CommercialPage,
  '/our-work': WorkPage,
  '/lawn-guide': LawnGuidePage,
  '/service-area': ServiceAreaPage,
  '/reviews': ReviewsPage,
  '/contact': ContactPage,
  '/sitemap': SitemapPage,
};

function setMeta(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function Shell() {
  const { path, hash, key } = useRouter();
  const [ready, setReady] = useState(false);
  const Page = PAGES[path] || NotFound;
  const route = findRoute(path);

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.classList.add('is-loading');
    const destroy = initSmoothScroll();
    stopScroll();
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('load', refresh);
      destroy && destroy();
    };
  }, []);

  // Per-page title, description and scroll position
  useEffect(() => {
    document.title = route ? route.title : 'Page not found | JCP Lawn Service';
    if (route) setMeta('description', route.description);
    document.documentElement.dataset.page = path === '/' ? 'home' : path.slice(1);
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (hash && ready) setTimeout(() => scrollToTarget(`#${hash}`, { immediate: true }), 60);
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const handleLoaded = () => {
    document.documentElement.classList.remove('is-loading');
    setReady(true);
    startScroll();
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (hash) setTimeout(() => scrollToTarget(`#${hash}`), 300);
    });
  };

  return (
    <>
      <Preloader onComplete={handleLoaded} />
      <PageTransition />
      <Cursor />
      <ScrollProgress />
      <Header />
      <main id="main" key={key}>
        <Page ready={ready} />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
