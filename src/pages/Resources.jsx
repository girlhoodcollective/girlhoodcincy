import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { useSEO } from '../lib/seo.js';
import { PARTNER_LOGOS } from '../data/content.js';
import '../styles/utilityPages.css';

const TOOLS = [
  {
    href: '/worth-quiz',
    accent: 'var(--gc-lavender)',
    eyebrow: 'For individuals · 20 questions',
    title: 'Dollars & Cents',
    body: 'A warm skills inventory that maps your real, marketable strengths to an income path that fits you — grounded in Cincinnati\'s actual market.',
    cta: 'Take the quiz',
  },
];

export default function Resources() {
  useSEO({
    title: 'Resources | Insights from Girlhood Collective',
    description: 'Practical ideas for building stronger organizations, neighborhoods, and relationships — the same thinking behind every Girlhood Collective partnership.',
    path: '/resources',
  });

  return (
    <div className="page-shell">
      <div className="up-grain" />
      <NavBar variant="white" active="Resources" />

      <Link to="/village#archive" style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ background: 'var(--gc-navy)', padding: '13px 44px', textAlign: 'center' }}>
          <span style={{ font: '700 13.5px var(--font-sans)', letterSpacing: '.06em', color: '#fff' }}>
            Catch up on The Village — read the full newsletter archive →
          </span>
        </div>
        <div style={{ display: 'flex', height: 5 }}>
          <div style={{ flex: 1, background: 'var(--gc-emerald)' }} />
          <div style={{ flex: 1, background: 'var(--gc-emerald-soft)' }} />
          <div style={{ flex: 1, background: '#6F96CF' }} />
          <div style={{ flex: 1, background: 'var(--gc-peony)' }} />
        </div>
      </Link>

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="up-ghost" aria-hidden="true" style={{ top: '-10%', right: '4vw', fontSize: 'clamp(140px,16vw,240px)' }}>&hellip;</div>
        <Reveal style={{ position: 'relative', zIndex: 1 }}>
          <div className="up-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="up-dot" aria-hidden="true" />
            Resources
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 57.5, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1, maxWidth: 640, margin: '0 auto' }}>
            Less blog, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>more library.</span>
          </h1>
          <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '18px auto 0' }}>
            Practical ideas for building stronger organizations, neighborhoods, and relationships — the same thinking behind every Girlhood Collective partnership.
          </p>
        </Reveal>
      </div>

      {/* FREE TOOLS */}
      <div style={{ background: 'var(--gc-navy-deep)', padding: '56px 44px', position: 'relative', overflow: 'hidden' }}>
        <div className="up-grain-dark" aria-hidden="true" />
        <Reveal style={{ textAlign: 'center', marginBottom: 28, position: 'relative', zIndex: 1 }}>
          <div className="up-eyebrow up-eyebrow--onlight" style={{ justifyContent: 'center' }}>
            <span className="up-dot" aria-hidden="true" />
            Free tools
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 35, color: '#fff' }}>Start with a question.</h2>
        </Reveal>
        <Reveal delay={100} style={{ maxWidth: 420, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {TOOLS.map((t) => (
            <Link
              key={t.title}
              className="up-card"
              to={t.href}
              style={{ textDecoration: 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 8, padding: '26px 24px', display: 'block' }}
            >
              <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>{t.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, marginBottom: 12 }}>{t.body}</p>
              <span className="up-cta" style={{ color: t.accent }}>
                {t.cta}
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>

      {/* COMMUNITY COLLABORATORS */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="up-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="up-dot" aria-hidden="true" />
            Community Collaborators
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)' }}>In good company.</h2>
        </Reveal>
        <Reveal delay={100} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
          {PARTNER_LOGOS.map((p) => (
            <div key={p.href} style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="up-card"
                style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 8, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 18, overflow: 'hidden' }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', transform: p.zoom ? `scale(${p.zoom})` : undefined }}
                />
              </a>
              <p style={{ fontSize: 14, fontStyle: 'normal', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.5, textAlign: 'center', margin: '10px 4px 0' }}>
                {p.quote}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      {/* VILLAGE CTA */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '52px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="up-ghost" aria-hidden="true" style={{ bottom: '-14%', left: '2vw', fontSize: 'clamp(120px,15vw,200px)' }}>V.</div>
        <Reveal style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
            Want new resources in your <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>inbox?</span>
          </div>
          <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 22px' }}>
            The Village gets first look at every new article, plus local favorites and what&rsquo;s inspiring us.
          </p>
          <Link className="btn" to="/village" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
            Subscribe to Updates
          </Link>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
