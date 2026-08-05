import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useSEO, useStructuredData, SITE_URL, SITE_NAME } from '../lib/seo.js';
import '../styles/gateway.css';

function CommunityMark(props) {
  return (
    <svg viewBox="0 0 42 42" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="19" r="12" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="27" cy="24" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
    </svg>
  );
}

function OrgMark(props) {
  return (
    <svg viewBox="0 0 42 42" fill="none" aria-hidden="true" {...props}>
      <path d="M6 30 L6 20 M15 30 L15 13 M24 30 L24 22 M33 30 L33 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 30 H36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function useSpotlight() {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };
  return { ref, onMouseMove };
}

export default function Gateway() {
  useSEO({
    title: 'Girlhood Collective | Cincinnati Community & Advisory',
    description: 'A monthly community and events experience for Cincinnati neighbors — and a boutique advisory for organizations building real culture and community.',
    path: '/',
  });

  useStructuredData('organization', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=512',
    description: 'Girlhood Collective is a Cincinnati-based boutique advisory specializing in organizational and community health, helping small businesses, health professionals, and mission-driven organizations build stronger leadership and lasting community.',
    email: 'hello@girlhoodcincy.com',
    areaServed: 'Cincinnati, OH',
    contactPoint: { '@type': 'ContactPoint', email: 'hello@girlhoodcincy.com', contactType: 'customer service' },
    sameAs: ['https://instagram.com/girlhood_cincy'],
    founder: { '@type': 'Person', name: 'Brittany Gruber' },
  });

  useStructuredData('website', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  });

  useStructuredData('professional-service', {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=512',
    description: 'Girlhood Collective is a Cincinnati-based boutique advisory specializing in organizational and community health, helping small businesses, health professionals, and mission-driven organizations build stronger leadership and lasting community.',
    email: 'hello@girlhoodcincy.com',
    areaServed: 'Cincinnati, OH',
    sameAs: ['https://instagram.com/girlhood_cincy'],
  });

  const glowRef = useRef(null);
  const glowTwoRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (glowRef.current) glowRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (glowTwoRef.current) glowTwoRef.current.style.transform = `translateY(${y * -0.08}px)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const panelA = useSpotlight();
  const panelB = useSpotlight();

  return (
    <div className="gw-page">
      <div className="gw-grain" />
      <div className="gw-glow" ref={glowRef} />
      <div className="gw-glow gw-glow--two" ref={glowTwoRef} />

      <header className="gw-header">
        <Link to="/" className="gw-wordmark">
          <span>Girlhood</span>
          <span>Collective</span>
        </Link>
        <div className="gw-meta">
          <MapPin aria-hidden="true" />
          Cincinnati · Est. 2025
        </div>
      </header>

      <div className="gw-ghost" aria-hidden="true">&amp;</div>

      <div className="gw-hero">
        <div className="gw-hero-inner">
          <div className="gw-eyebrow gw-reveal gw-d1">
            <span className="gw-dot" aria-hidden="true" />
            Two ways in
          </div>
          <h1 className="gw-headline gw-reveal gw-d2">
            The best of <em>both worlds.</em>
          </h1>
          <p className="gw-dek gw-reveal gw-d3">
            Everything here starts from one belief: people show up fully when they feel like they
            belong. For neighbors, that looks like community events and experiences. For
            organizations, it looks like a boutique culture &amp; community advisory. Tell us why
            you&rsquo;re here.
          </p>
        </div>
      </div>

      <div className="gw-panels">
        <Link
          to="/community"
          ref={panelA.ref}
          onMouseMove={panelA.onMouseMove}
          className="gw-panel gw-panel--primary gw-reveal gw-d4"
        >
          <div className="gw-panel-content">
            <div className="gw-panel-badge">
              <span className="gw-dot" aria-hidden="true" />
              Most people start here
            </div>
            <CommunityMark className="gw-mark" />
            <div className="gw-panel-eyebrow">For Neighbors &amp; Families</div>
            <h2 className="gw-panel-title">Find your people</h2>
            <p className="gw-panel-body">
              Join a monthly event, or join The Village — a free newsletter for anyone looking for
              real connection.
            </p>
            <span className="gw-panel-cta">
              Start with community
              <ArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </Link>

        <Link
          to="/homepage-v2"
          ref={panelB.ref}
          onMouseMove={panelB.onMouseMove}
          className="gw-panel gw-panel--secondary gw-reveal gw-d5"
        >
          <div className="gw-panel-content">
            <OrgMark className="gw-mark" />
            <div className="gw-panel-eyebrow">For Organizations &amp; Businesses</div>
            <h2 className="gw-panel-title">Build a stronger organization</h2>
            <p className="gw-panel-body">
              Community strategy, culture, and events consulting for small businesses, allied
              health practices, and mission-driven organizations ready to turn stakeholders into
              real community.
            </p>
            <span className="gw-panel-cta">
              Explore our services
              <ArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>

      <div className="gw-strip gw-reveal gw-d6">
        <div className="gw-strip-inner">
          <div className="gw-strip-head">
            <span className="gw-strip-eyebrow">Tools &amp; Resources</span>
            <span className="gw-strip-sub">Not ready to pick a door? Start here instead.</span>
          </div>
          <div className="gw-strip-row">
            <Link to="/worth-quiz" className="gw-strip-item">
              <span className="gw-strip-item-title">Dollars &amp; Cents Quiz</span>
              <span className="gw-strip-item-body">Find your marketable skills and an income path that fits.</span>
              <span className="gw-strip-item-cta">
                Take the quiz
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
            <Link to="/consultation-intake" className="gw-strip-item">
              <span className="gw-strip-item-title">Consulting Intake</span>
              <span className="gw-strip-item-body">Tell us what you&rsquo;re working on and start a real conversation.</span>
              <span className="gw-strip-item-cta">
                Start the intake
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
            <a href="https://girlhoodeventrequest.netlify.app" target="_blank" rel="noopener noreferrer" className="gw-strip-item">
              <span className="gw-strip-item-title">Event Collaboration</span>
              <span className="gw-strip-item-body">Partner, co-host, or sponsor an upcoming event.</span>
              <span className="gw-strip-item-cta">
                Submit a request
                <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="gw-footer-line gw-reveal gw-d7">
        <div className="gw-rule" />
        <p>
          <span className="gw-dot" aria-hidden="true" />
          Running an organization instead?{' '}
          <Link to="/homepage-v2">
            Explore our services
          </Link>
          {' '}— you&rsquo;re in the right place too.
        </p>
      </div>
    </div>
  );
}
