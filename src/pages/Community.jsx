import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { getUpcomingPublishedEvents } from '../data/events.js';
import { useSEO, useStructuredData, SITE_URL } from '../lib/seo.js';
import { TRUST_STATS } from '../data/content.js';

const UPCOMING_EVENTS = getUpcomingPublishedEvents(2);

const FOUNDER_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2890.jpg?v=1785099356';
const FAMILY_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-brittany-family.jpg?v=1774545413';
const PERSONAL_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_9211.jpg?v=1774029457';

const CREDIBILITY = [
  { title: 'Community Needs Assessment', body: 'As Program Development Committee Chair for a local nonprofit board, participated in an 18-month community needs assessment that resulted in a $75,000 seed grant and 800+ volunteer hours.' },
  { title: 'B.A., Communication & Public Relations', body: 'University of Cincinnati.' },
];

export default function Community() {
  useSEO({
    title: 'Girlhood Collective | Community Events & The Village Newsletter',
    description: 'Monthly community events, a free newsletter, and the story behind founder Brittany Gruber — for Cincinnati families and neighbors looking for real connection.',
    path: '/community',
  });

  useStructuredData('person', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brittany Gruber',
    jobTitle: 'Founder, Girlhood Collective',
    worksFor: { '@type': 'Organization', name: 'Girlhood Collective' },
    url: `${SITE_URL}/community`,
    alumniOf: 'University of Cincinnati',
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
              It takes a village. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let&rsquo;s build yours.</span>
            </h1>
            <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 500, margin: '16px 0 26px' }}>
              Creating spaces that foster meaningful relationships, improve local communities, and promote a genuine sense of belonging.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link className="btn" to="/events" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
                See Upcoming Events →
              </Link>
              <Link className="btn" to="/village" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '14px 26px' }}>
                Join The Village
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
          Fractional support when you need a hand, not a full-time hire. A fresh set of eyes when you need to build genuine internal culture or community presence.
        </p>
        <div style={{ width: 54, height: 3, background: 'var(--gc-emerald)', borderRadius: 2, margin: '32px auto' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 27, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.5, maxWidth: 700, margin: '0 auto' }}>
          Events designed to encourage and empower. Programs and resources built to move you forward.
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

      {/* ABOUT / MEET THE FOUNDER */}
      <div id="about">
        <div style={{ background: 'var(--gc-cream)', padding: '64px 44px' }}>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 44, alignItems: 'center', maxWidth: 960, margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={FOUNDER_PHOTO + '&width=520'}
                alt="Brittany Gruber, founder of Girlhood Collective"
                loading="lazy"
                style={{ width: 260, height: 300, objectFit: 'cover', objectPosition: 'center 8%', borderRadius: 8, display: 'block', margin: '0 auto' }}
              />
            </div>
            <div>
              <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Meet the founder</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Brittany Gruber</h2>
              <div style={{ font: '600 15px var(--font-sans)', letterSpacing: '.04em', color: 'var(--gc-ink-muted)', marginBottom: 20 }}>Founder · Girlhood Collective</div>
              <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85 }}>
                Brittany Gruber is the founder of Girlhood Collective, a Cincinnati-based boutique advisory specializing in organizational and community health, helping small businesses, health professionals, and mission-driven organizations build stronger leadership and lasting community.
              </p>
            </div>
          </div>
        </div>

        {/* LONG BIO */}
        <div style={{ background: '#fff', padding: '60px 44px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 20 }}>
              Girlhood Collective exists to build stronger communities by creating meaningful connections between individuals, families, nonprofits, schools, and businesses.
            </p>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 20 }}>
              Founded in Cincinnati, Girlhood Collective brings people together through thoughtfully designed events, educational programming, strategic partnerships, and boutique advisory services in organizational and community health. Whether we&rsquo;re helping a local business engage with its community, creating experiences that foster belonging, or developing programs that inspire the next generation of leaders, our work is rooted in one belief: when people feel connected, communities thrive.
            </p>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 20 }}>
              We believe community doesn&rsquo;t happen by accident. It is built intentionally through shared experiences, authentic relationships, and opportunities for everyone to contribute.
            </p>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 32 }}>
              Today, Girlhood Collective serves as both a trusted community platform and a strategic partner for organizations looking to create lasting local impact. Every event, collaboration, and initiative is designed with the same goal: helping people find connection, discover opportunity, and build something bigger together.
            </p>
            <div style={{ borderLeft: '3px solid var(--gc-emerald)', paddingLeft: 20 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 27.5, color: 'var(--gc-slate)', lineHeight: 1.5 }}>
                &ldquo;Community and belonging take practice and work — they&rsquo;re a science, not an accident.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* HOW I WORK */}
        <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '52px 44px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>How I work</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 14 }}>
              Girlhood Collective is me — but you&rsquo;re never getting just one perspective.
            </h2>
            <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85 }}>
              I collaborate with a trusted network of doctors, teachers, community leaders, and local brands, so every partnership brings in real expertise and the right connections — whatever the scenario calls for.
            </p>
          </div>
        </div>

        {/* WHY THIS IS PERSONAL */}
        <div style={{ background: 'var(--gc-slate)', padding: '60px 44px' }}>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 20 }}>Why this is personal</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                Diagnosed with ADHD and autism later in life, I know what it&rsquo;s like to navigate a world that wasn&rsquo;t built for the way your brain works best.
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, maxWidth: 620, marginTop: 20 }}>
                That journey fuels the work. I love helping others understand themselves, embrace their strengths, and advocate for what they need — and helping organizations learn what it really means to be genuinely inclusive. It&rsquo;s part of why belonging, not just performance, is the standard every Girlhood Collective engagement is built around.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 27.5, color: 'var(--gc-lavender-soft)', marginTop: 20 }}>— Brittany</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <img
                src={FAMILY_PHOTO + '&width=600'}
                alt="Brittany with her family"
                loading="lazy"
                style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'center 10%', borderRadius: 8, display: 'block' }}
              />
              <img
                src={PERSONAL_PHOTO + '&width=600'}
                alt="Brittany Gruber"
                loading="lazy"
                style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* CREDIBILITY */}
        <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Credibility</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)' }}>Track record.</h2>
          </div>
          <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24, maxWidth: 700, margin: '0 auto', alignItems: 'stretch' }}>
            <div style={{ width: '100%', height: '100%', minHeight: 260, overflow: 'hidden', borderRadius: 8 }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/E2C08EAF-A1B7-4D74-BEA5-ED8E33947415.jpg?v=1785100809&width=520"
                alt="Brittany Gruber being interviewed by a local reporter"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CREDIBILITY.map((c) => (
                <div key={c.title} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, borderTop: '3px solid var(--gc-emerald)', padding: '24px 22px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
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
