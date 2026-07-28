import { useState } from 'react';
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
              It takes a village. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let&rsquo;s find yours.</span>
            </h1>
            <p style={{ fontSize: 18, fontWeight: 500, color: 'var(--gc-ink-muted)', lineHeight: 1.6, maxWidth: 500, margin: '16px 0 6px' }}>
              Engagement & Operations Support for Entrepreneurs and Institutions
            </p>
            <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, maxWidth: 500, margin: '10px 0 26px' }}>
              Events, Resources, and Community for All.
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
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-2.jpg?v=1774548572&width=560"
              alt="Girls working on a project at a Girlhood Collective workshop"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* UPCOMING EVENT TEASER */}
      {UPCOMING_EVENTS.length > 0 && (
        <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
          <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>Girlhood Cincy Monthly Experiences</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24, textAlign: 'center' }}>Gather beautifully.</h2>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 760, margin: '0 auto 24px' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/DreamBigFlyerFinal.png?v=1785087823&width=440"
              alt="Dream Big monthly experience flyer for girls ages 8–12"
              loading="lazy"
              style={{ width: '100%', height: 180, objectFit: 'contain', background: '#fff', borderRadius: 8, display: 'block' }}
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/Helping_Hands.png?v=1784921222&width=440"
              alt="Helping Hands parent-child volunteer experience flyer"
              loading="lazy"
              style={{ width: '100%', height: 180, objectFit: 'contain', background: '#fff', borderRadius: 8, display: 'block' }}
            />
          </div>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 760, margin: '0 auto' }}>
            {UPCOMING_EVENTS.map((e) => (
              <Link
                key={e.id}
                className="hover-shadow"
                to="/events"
                style={{ textDecoration: 'none', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'center' }}
              >
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{e.mon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 37.5, color: 'var(--gc-slate)', lineHeight: 1 }}>{e.day}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 700, color: 'var(--gc-slate)' }}>{e.title}</div>
                  <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: 2 }}>{e.where}</p>
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

      {/* INTRO */}
      <div style={{ background: '#fff', padding: '48px 44px', textAlign: 'center' }}>
        <p style={{ fontSize: 19.5, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, maxWidth: 720, margin: '0 auto 20px' }}>
          Fractional support when you need support, but not a full-time hire. A fresh take when you don&rsquo;t have the time or space to build culture and community.
        </p>
        <p style={{ fontSize: 19.5, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, maxWidth: 720, margin: '0 auto' }}>
          Events based on building a performance-free, authentic community. Programs and resources designed to move you forward.
        </p>
      </div>

      {/* MEET THE FOUNDER */}
      <div style={{ background: '#fff', padding: '0 44px 52px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, maxWidth: 860, margin: '0 auto', alignItems: 'center' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/founder-in-studio.jpg?v=1783123475&width=440"
            alt="Brittany Gruber, founder of Girlhood Collective, in her studio"
            loading="lazy"
            style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 8, display: 'block' }}
          />
          <div>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Meet the founder</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 10 }}>Hi, I&rsquo;m Brittany.</h2>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              I started Girlhood Collective because I believe belonging takes practice, not luck — and I get to do the work of building it, one relationship at a time.
            </p>
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
