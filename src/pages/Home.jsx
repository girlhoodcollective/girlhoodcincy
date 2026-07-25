import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { getUpcomingPublishedEvents } from '../data/events.js';
import { useSEO, useStructuredData, SITE_URL, SITE_NAME } from '../lib/seo.js';
import { PERSONAS, CORNERSTONE_ARTICLES } from '../data/content.js';

const UPCOMING_EVENTS = getUpcomingPublishedEvents(2);

const DIFFERENTIATORS = [
  { title: 'We write about it, not just do it', body: 'A genuine Resources library — cornerstone articles and real thinking, not marketing content dressed up as insight.' },
  { title: 'Rooted in Cincinnati, not generic', body: "Real local connections — this city's neighborhoods and its people — not \"anywhere\" consulting." },
  { title: 'One practice, every sector', body: 'Small business, allied health, mission-driven organizations, and individuals — because belonging isn\'t industry-specific.' },
];

const TRUST_STATS = [
  { value: '$50K', label: 'Year-one revenue goal' },
  { value: '9', label: 'Girlhood Cincy sessions a year' },
  { value: '12', label: 'Partnerships a year' },
  { value: '7%', label: 'Monthly newsletter growth target' },
];

export default function Home() {
  useSEO({
    title: 'Girlhood Collective | Community Strategy Consulting in Cincinnati',
    description: 'Girlhood Collective helps small businesses, health professionals, mission-driven organizations, and community members build real, lasting community — through consulting, events, and experiences rooted in Cincinnati.',
    path: '/',
  });

  useStructuredData('organization', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=512',
    sameAs: ['https://instagram.com/girlhood_cincy'],
    founder: { '@type': 'Person', name: 'Brittany Gruber' },
  });

  useStructuredData('website', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSending(true);
    setError(false);
    try {
      await subscribeToNewsletter(email.trim());
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="white" />

      {/* HERO */}
      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, left: -70, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(111,150,207,.16), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Cincinnati · EST 2025
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1, maxWidth: 680, margin: '0 auto' }}>
            Community takes practice. </span>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '20px auto 30px' }}>
            Girlhood Collective helps small businesses, independent professionals, mission-driven organizations, and community members build authentic, lasting community. Advisory services, community events, and experiences built for all.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
              Let&rsquo;s Schedule a Time to Chat
            </Link>
            <Link className="btn" to="/village" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '15px 28px' }}>
              Join the Village
            </Link>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div style={{ background: '#fff', padding: '48px 44px', textAlign: 'center' }}>
        <p style={{ fontSize: 15.5, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, maxWidth: 720, margin: '0 auto' }}>
          Real community isn&rsquo;t an accident. It takes practice — the same way any skill does. Girlhood Collective works with small businesses, health professionals, mission-driven organizations, and community members across Cincinnati to build the kind of belonging people actually stay for.
        </p>
      </div>

      {/* PERSONA CARDS */}
      <div style={{ background: 'var(--gc-section)', padding: '52px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {PERSONAS.map((p) => (
            <div key={p.id} className="hover-lift" style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 8, padding: '26px 22px' }}>
              <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>{p.title}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8, lineHeight: 1.3 }}>{p.headline}</div>
              <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DIFFERENTIATORS */}
      <div style={{ background: '#fff', padding: '54px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Why Girlhood Collective</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)' }}>Not another consultant.</div>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 980, margin: '0 auto' }}>
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} style={{ border: '1px solid var(--gc-border)', borderRadius: 6, borderTop: '3px solid var(--gc-emerald)', padding: '24px 22px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{d.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED RESOURCE */}
      <div style={{ background: 'var(--gc-navy)', padding: '54px 44px', textAlign: 'center' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 14 }}>From the Resources library</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: '#fff', maxWidth: 640, margin: '0 auto 20px', lineHeight: 1.4 }}>
          &ldquo;{CORNERSTONE_ARTICLES[0]}&rdquo;
        </div>
        <Link className="navlink navlink--ondark" to="/resources" style={{ color: 'var(--gc-lavender-soft)' }}>
          Explore Resources →
        </Link>
      </div>

      {/* TRUST STRIP */}
      <div style={{ background: '#fff', padding: '46px 44px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {TRUST_STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '0 34px', borderRight: i < TRUST_STATS.length - 1 ? '1px solid var(--gc-border)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, color: 'var(--gc-emerald)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* UPCOMING EVENT TEASER */}
      {UPCOMING_EVENTS.length > 0 && (
        <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>Girlhood Cincy Monthly Experiences</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24, textAlign: 'center' }}>Gather beautifully.</div>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 760, margin: '0 auto' }}>
            {UPCOMING_EVENTS.map((e) => (
              <Link
                key={e.id}
                className="hover-shadow"
                to="/events"
                style={{ textDecoration: 'none', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'center' }}
              >
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ font: '600 9px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{e.mon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--gc-slate)', lineHeight: 1 }}>{e.day}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--gc-slate)' }}>{e.title}</div>
                  <p style={{ fontSize: 12.5, fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: 2 }}>{e.where}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 22 }}>
            <Link className="navlink navlink--onwhite" to="/events" style={{ color: 'var(--gc-emerald)' }}>
              View Upcoming Events →
            </Link>
          </div>
        </div>
      )}

      {/* VILLAGE SIGNUP */}
      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px', textAlign: 'center' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>The Village</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 38, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>You&rsquo;re invited.</div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.8, maxWidth: 480, margin: '12px auto 26px' }}>
          A free monthly letter for anyone building real community — resources, local favorites, and what&rsquo;s inspiring us right now.
        </p>
        {submitted ? (
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: '#fff' }}>
            You&rsquo;re in. Watch your inbox for our next letter.
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="you@cincinnati.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                aria-label="Email address"
                className="email-input"
                style={{ background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 100, padding: '14px 22px', font: '400 14px var(--font-sans)', color: '#fff', width: 300, outline: 'none' }}
              />
              <button
                onClick={handleSubscribe}
                disabled={sending}
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '15px 28px', borderRadius: 100 }}
              >
                {sending ? 'Joining…' : 'Join the Village'}
              </button>
            </div>
            {error && (
              <p style={{ fontSize: 13, color: '#ffb4a8', marginTop: 14 }}>
                Please enter a valid email, or reach us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#ffb4a8' }}>hello@girlhoodcincy.com</a>.
              </p>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
