import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { getUpcomingPublishedEvents } from '../data/events.js';
import { useSEO, useStructuredData, SITE_URL, SITE_NAME } from '../lib/seo.js';
import { PERSONAS, TRUST_STATS } from '../data/content.js';

const PERSONA_HREF = (id) => (id === 'community-member' ? '/village' : '/work-together');

const UPCOMING_EVENTS = getUpcomingPublishedEvents(2);

// Hand-drawn, marker-script-style accent marks — used sparingly to add personality
// with the brand's pink. A wobbly path run through an SVG turbulence/displacement
// filter gives it a sketchy, imperfect texture instead of a clean geometric line.
function Circled({ children }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '2px 10px' }}>
      <svg
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', top: '-30%', left: '-7%', width: '114%', height: '160%', zIndex: 0, pointerEvents: 'none', overflow: 'visible' }}
      >
        <defs>
          <filter id={`rough-c-${uid}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.045 0.14" numOctaves="2" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <path
          d="M 24,42 C 19,16 62,4 102,5 C 152,6 187,17 189,41 C 191,61 146,75 99,74 C 51,73 16,63 21,44 C 22,40 20,44 24,42"
          fill="none"
          stroke="var(--gc-peony)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter={`url(#rough-c-${uid})`}
        />
      </svg>
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </span>
  );
}

function Underlined({ children }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-2%', bottom: -7, width: '104%', height: 16, pointerEvents: 'none', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={`fade-${uid}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--gc-peony)" stopOpacity="0" />
            <stop offset="14%" stopColor="var(--gc-peony)" stopOpacity="1" />
            <stop offset="86%" stopColor="var(--gc-peony)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--gc-peony)" stopOpacity="0" />
          </linearGradient>
          <filter id={`rough-u-${uid}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.35" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <path
          d="M4,10 C40,6 70,13 100,9 C130,5 160,12 196,8"
          fill="none"
          stroke={`url(#fade-${uid})`}
          strokeWidth="4.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter={`url(#rough-u-${uid})`}
        />
      </svg>
    </span>
  );
}

export default function Home() {
  useSEO({
    title: 'Girlhood Collective | Boutique Advisory for Organizational & Community Health',
    description: 'A boutique advisory specializing in organizational and community health — plus monthly community events and a free newsletter for Cincinnati families and neighbors.',
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

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSending(true);
    setError('');
    try {
      await subscribeToNewsletter(email.trim());
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="white" />

      {/* HERO */}
      <div style={{ background: 'var(--gc-cream)', padding: '44px 44px 36px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, left: -70, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(111,150,207,.16), transparent 70%)' }} />
        <div className="rgrid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, maxWidth: 1060, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 14 }}>
              Cincinnati · EST 2025
            </div>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.12 }}>
              It takes a <Circled>village</Circled>. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let&rsquo;s build yours.</span>
            </h1>
            <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 500, margin: '16px 0 26px' }}>
              We build communities people strive to belong to, while helping the organizations, schools, and brands who partner with us turn that belonging into engagement, loyalty, and <Underlined>measurable impact</Underlined>.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link className="btn" to="/events" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
                See Upcoming Events →
              </Link>
              <Link className="btn" to="/work-together" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '14px 26px' }}>
                Work With Us
              </Link>
            </div>
          </div>
          <div style={{ width: '100%', height: 340, overflow: 'hidden', borderRadius: 12, background: 'var(--gc-navy)' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4415_1d38b43f-96e0-47ca-96f8-4e8db80ef328.jpg?v=1784581862&width=560"
              alt="Girlhood Collective community"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* UPCOMING EVENT TEASER */}
      {UPCOMING_EVENTS.length > 0 && (
        <div style={{ background: 'var(--gc-section)', borderTop: '1px solid var(--gc-border)', borderBottom: '1px solid var(--gc-border)', padding: '18px 44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 14px', maxWidth: 900, margin: '0 auto', fontSize: 16.5 }}>
            <span style={{ font: '700 12px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>Upcoming</span>
            {UPCOMING_EVENTS.map((e, i) => (
              <span key={e.id} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Link to="/events" style={{ textDecoration: 'none', color: 'var(--gc-slate)' }}>
                  <strong style={{ fontWeight: 700 }}>{e.title}</strong>
                  <span style={{ fontWeight: 400, color: 'var(--gc-ink-muted)' }}> — {e.mon} {e.day} · {e.where}</span>
                </Link>
                {i < UPCOMING_EVENTS.length - 1 && <span style={{ color: 'var(--gc-border)' }}>|</span>}
              </span>
            ))}
            <Link className="navlink navlink--onwhite" to="/events" style={{ color: 'var(--gc-peony)', fontSize: 14, fontWeight: 700 }}>
              View Upcoming Events →
            </Link>
          </div>
        </div>
      )}

      {/* INTRO */}
      <div style={{ background: '#fff', padding: '56px 44px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 27, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.5, maxWidth: 700, margin: '0 auto' }}>
          Fractional support when you need a <Circled>hand</Circled>, not a full-time hire. A fresh set of eyes when you need to build genuine internal culture or community presence.
        </p>
        <div style={{ width: 54, height: 3, background: 'var(--gc-emerald)', borderRadius: 2, margin: '32px auto' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 27, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.5, maxWidth: 700, margin: '0 auto' }}>
          Events designed to <Underlined>encourage and empower</Underlined>. Programs and resources built to move you forward.
        </p>
      </div>

      {/* EXPLAINER VIDEO */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 26 }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>See it in action</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)' }}>What we do, in two minutes.</h2>
          </div>
          <YouTubeEmbed videoId="RutKIsejsmo" title="Girlhood Collective — what we do" />
        </div>
      </div>

      {/* MEET THE FOUNDER */}
      <div style={{ background: '#fff', padding: '0 44px 52px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, maxWidth: 860, margin: '0 auto', alignItems: 'center' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/j8a2636.jpg?v=1785100844&width=440"
            alt="Brittany Gruber, founder of Girlhood Collective"
            loading="lazy"
            style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', borderRadius: 8, display: 'block' }}
          />
          <div>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Meet the founder</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 18 }}>Hi, I&rsquo;m Brittany.</h2>
            <Link className="navlink navlink--onwhite" to="/about" style={{ color: 'var(--gc-emerald)' }}>
              Read my story →
            </Link>
          </div>
        </div>
      </div>

      {/* PERSONA CARDS */}
      <div style={{ background: 'var(--gc-section)', padding: '52px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Who we work with</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 35, fontWeight: 700, color: 'var(--gc-slate)' }}>Choose the support that fits your community.</h2>
        </div>
        <div style={{ width: '100%', maxWidth: 1000, height: 240, overflow: 'hidden', borderRadius: 10, margin: '0 auto 24px' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_2660.png?v=1785100854&width=1200"
            alt="A group of young women from the Girlhood Collective community posing together outdoors"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {PERSONAS.map((p) => (
            <Link
              key={p.id}
              to={PERSONA_HREF(p.id)}
              className="hover-lift"
              style={{ textDecoration: 'none', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 8, padding: '26px 22px', display: 'block' }}
            >
              <div style={{ font: '700 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>{p.title}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8, lineHeight: 1.3 }}>{p.headline}</h3>
              <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{p.body}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* CASE STUDY PROOF */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '32px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, maxWidth: 800, margin: '0 auto', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 110, overflow: 'hidden', borderRadius: 8 }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6378.jpg?v=1784590111&width=320"
              alt="Better Together Brunch at the Columbia Center"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 17, fontWeight: 400, color: 'var(--gc-ink)', marginBottom: 8 }}>
              $3,000 raised, 10 new sponsors, one month of planning — see how a single event became a lasting community partnership.
            </p>
            <Link className="navlink" to="/better-together-recap" style={{ color: 'var(--gc-emerald)', fontWeight: 600 }}>
              Read the case study →
            </Link>
          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div style={{ background: '#fff', padding: '46px 44px 24px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {TRUST_STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '0 34px', borderRight: i < TRUST_STATS.length - 1 ? '1px solid var(--gc-border)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 45, color: 'var(--gc-emerald)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--gc-ink-muted)', paddingBottom: 46 }}>
        Since launching in 2025 — and growing every season.
      </p>

      {/* VILLAGE SIGNUP */}
      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px', textAlign: 'center' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>The Village</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 47.5, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>You&rsquo;re invited.</h2>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.8, maxWidth: 480, margin: '12px auto 26px' }}>
          A free monthly letter for anyone building real community — resources, local favorites, and what&rsquo;s inspiring us right now.
        </p>
        {submitted ? (
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 25, color: '#fff' }}>
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
                style={{ background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 100, padding: '14px 22px', font: '400 17.5px var(--font-sans)', color: '#fff', width: 300, outline: 'none' }}
              />
              <button
                onClick={handleSubscribe}
                disabled={sending}
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 15px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '15px 28px', borderRadius: 100 }}
              >
                {sending ? 'Subscribing…' : 'Subscribe to Updates'}
              </button>
            </div>
            {error && (
              <p style={{ fontSize: 16, color: '#ffb4a8', marginTop: 14 }}>
                {error} Reach us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#ffb4a8' }}>hello@girlhoodcincy.com</a>.
              </p>
            )}
          </div>
        )}
      </div>

      <Footer newsletterFormOnPage />
    </div>
  );
}
