import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';
import { PARTNER_LOGOS } from '../data/content.js';

const TOOLS = [
  {
    href: '/consultation-intake',
    accent: 'var(--gc-emerald)',
    eyebrow: 'For organizations · 8 min',
    title: 'Consultation Intake',
    body: "A five-part diagnostic for leaders. Tell us what's actually going on and get a personalized read on the pattern underneath and where we'd start.",
    cta: 'Begin the intake →',
  },
  {
    href: '/worth-quiz',
    accent: 'var(--gc-lavender)',
    eyebrow: 'For individuals · 20 questions',
    title: 'Dollars & Cents',
    body: 'A warm skills inventory that maps your real, marketable strengths to an income path that fits you — grounded in Cincinnati\'s actual market.',
    cta: 'Take the quiz →',
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
      <NavBar variant="white" active="Resources" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>Resources</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 57.5, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1, maxWidth: 640, margin: '0 auto' }}>
          Less blog, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>more library.</span>
        </h1>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '18px auto 0' }}>
          Practical ideas for building stronger organizations, neighborhoods, and relationships — the same thinking behind every Girlhood Collective partnership.
        </p>
      </div>

      {/* FREE TOOLS */}
      <div style={{ background: 'var(--gc-navy-deep)', padding: '56px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>Free tools</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 35, color: '#fff' }}>Start with a question.</h2>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 900, margin: '0 auto' }}>
          {TOOLS.map((t) => (
            <Link key={t.title} className="hover-lift" to={t.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 8, padding: '26px 24px', display: 'block' }}>
              <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>{t.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{t.title}</h3>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, marginBottom: 12 }}>{t.body}</p>
              <span style={{ font: '600 14px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: t.accent }}>{t.cta}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* COMMUNITY COLLABORATORS */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>Community Collaborators</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24, textAlign: 'center' }}>In good company.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
          {PARTNER_LOGOS.map((p) => (
            <div key={p.href} style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
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
        </div>
      </div>

      {/* VILLAGE CTA */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '52px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Want new resources in your <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>inbox?</span>
        </div>
        <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 22px' }}>
          The Village gets first look at every new article, plus local favorites and what&rsquo;s inspiring us.
        </p>
        <Link className="btn" to="/village" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
          Subscribe to Updates
        </Link>
      </div>

      <Footer />
    </div>
  );
}
