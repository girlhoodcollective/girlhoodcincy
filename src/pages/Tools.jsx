import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';

const TOOLS = [
  {
    href: '/consultation-intake',
    accent: 'var(--gc-emerald)',
    eyebrow: 'For organizations · 8 min',
    eyebrowColor: 'var(--gc-emerald)',
    title: 'Consultation Intake',
    body: "A five-part diagnostic for leaders. Tell me what's actually going on — the thing that keeps coming up, the conversation you've been avoiding — and get a personalized read on the pattern underneath and where we'd start.",
    cta: 'Begin the intake →',
    ctaColor: 'var(--gc-emerald)',
  },
  {
    href: '/worth-quiz',
    accent: 'var(--gc-lavender)',
    eyebrow: 'For women · 20 questions',
    eyebrowColor: 'var(--gc-lavender)',
    title: 'What Are You Worth?',
    body: 'A warm skills inventory that names the things you\'ve been calling "just common sense." Map your real, marketable strengths to an income path that fits you — grounded in Cincinnati\'s actual market.',
    cta: 'Take the quiz →',
    ctaColor: 'var(--gc-lavender)',
  },
  {
    href: '/ugc',
    accent: '#d98cae',
    eyebrow: 'For brands',
    eyebrowColor: '#c96a95',
    title: 'UGC Portfolio',
    body: "See the creator work, the approach, and the rate card. Authentic, community-rooted content for brands who want to be felt before they're sold — content that reads like a neighbor's recommendation, not an ad.",
    cta: 'View the portfolio →',
    ctaColor: '#c96a95',
  },
];

export default function Tools() {
  useSEO({
    title: 'Free Tools — Girlhood Collective',
    description: 'Three free tools to help you figure out what you actually need — for your organization, your career, or your brand.',
    path: '/tools',
  });

  return (
    <div className="page-shell">
      <NavBar variant="white" active="Tools" />

      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, left: -70, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,178,134,.14), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Free · no email wall to look
          </div>
          <div className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1, maxWidth: 640, margin: '0 auto' }}>
            Start with a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>question.</span>
          </div>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.8, maxWidth: 520, margin: '20px auto 0' }}>
            Three tools to help you figure out what you actually need — for your organization, your career, or your brand. Answer honestly; the more specific you are, the more useful they get.
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 920, margin: '0 auto' }}>
        {TOOLS.map((t) => (
          <Link
            key={t.title}
            className="hover-lift rgrid"
            to={t.href}
            style={{
              textDecoration: 'none',
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 32,
              alignItems: 'center',
              border: '1px solid var(--gc-border)',
              borderRadius: 8,
              borderLeft: `5px solid ${t.accent}`,
              padding: '32px 34px',
            }}
          >
            <div>
              <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: t.eyebrowColor, marginBottom: 8 }}>{t.eyebrow}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', lineHeight: 1.15 }}>{t.title}</div>
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.8, marginBottom: 12 }}>{t.body}</p>
              <span style={{ font: '600 11px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: t.ctaColor }}>{t.cta}</span>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
