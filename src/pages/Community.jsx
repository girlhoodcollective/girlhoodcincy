import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { getUpcomingPublishedEvents } from '../data/events.js';
import { useSEO, useStructuredData, SITE_URL } from '../lib/seo.js';
import { TRUST_STATS } from '../data/content.js';
import '../styles/community.css';

const UPCOMING_EVENTS = getUpcomingPublishedEvents(2);

const FOUNDER_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2890.jpg?v=1785099356';
const FAMILY_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-brittany-family.jpg?v=1774545413';
const PERSONAL_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_9211.jpg?v=1774029457';

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
      <div className="cm-grain" />
      <NavBar variant="white" />

      {/* HERO */}
      <div className="cm-hero">
        <div className="cm-hero-glow" />
        <div className="cm-hero-ghost" aria-hidden="true">&ldquo;</div>
        <div className="cm-hero-grid">
          <Reveal delay={40}>
            <div className="cm-eyebrow">
              <span className="cm-dot" aria-hidden="true" />
              Cincinnati · Est. 2025
            </div>
            <h1 className="cm-hero-title">
              It takes a village. <em>Let&rsquo;s build yours.</em>
            </h1>
            <p className="cm-hero-dek">
              Creating spaces that foster meaningful relationships, improve local communities, and
              promote a genuine sense of belonging.
            </p>
            <div className="cm-hero-ctas">
              <Link className="cm-btn-solid" to="/events">
                See Upcoming Events <ArrowUpRight aria-hidden="true" width={16} height={16} />
              </Link>
              <Link className="cm-btn-outline" to="/village">
                Join our emails list
              </Link>
            </div>
          </Reveal>
          <Reveal delay={160} className="cm-hero-media">
            <div className="cm-hero-media-frame" aria-hidden="true" />
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4415_1d38b43f-96e0-47ca-96f8-4e8db80ef328.jpg?v=1784581862&width=560"
              alt="Girlhood Collective community"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>

      {/* UPCOMING EVENT TEASER */}
      {UPCOMING_EVENTS.length > 0 && (
        <div className="cm-ticker">
          <div className="cm-ticker-row">
            <span className="cm-ticker-tag">
              <span className="cm-dot" aria-hidden="true" />
              Upcoming
            </span>
            {UPCOMING_EVENTS.map((e, i) => (
              <span key={e.id} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Link to="/events">
                  <strong style={{ fontWeight: 700 }}>{e.title}</strong>
                  <span style={{ fontWeight: 400, color: 'var(--gc-ink-muted)' }}> — {e.mon} {e.day} · {e.where}</span>
                </Link>
                {i < UPCOMING_EVENTS.length - 1 && <span style={{ color: 'var(--gc-border)' }}>|</span>}
              </span>
            ))}
            <Link className="cm-cta" to="/events">
              View Upcoming Events <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}

      {/* INTRO */}
      <div className="cm-section" style={{ background: '#fff' }}>
        <div className="cm-intro cm-intro--single">
          <Reveal as="div" className="cm-intro-block cm-intro-block--b">
            <p>Events designed to encourage and empower. Programs and resources built to move you forward.</p>
          </Reveal>
        </div>
      </div>

      {/* EXPLAINER VIDEO */}
      <div className="cm-section" style={{ background: 'var(--gc-section)' }}>
        <Reveal className="cm-video-wrap">
          <h2 className="cm-video-heading">Our Why</h2>
          <YouTubeEmbed videoId="RutKIsejsmo" title="Girlhood Collective — what we do" />
        </Reveal>
      </div>

      {/* ABOUT / MEET THE FOUNDER */}
      <div id="about">
        <div className="cm-founder cm-section">
          <div className="cm-founder-grid">
            <Reveal className="cm-founder-photo-wrap">
              <div className="cm-founder-photo-frame" aria-hidden="true" />
              <img
                src={FOUNDER_PHOTO + '&width=520'}
                alt="Brittany Gruber, founder of Girlhood Collective"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="cm-eyebrow">
                <span className="cm-dot" aria-hidden="true" />
                Meet the founder
              </div>
              <h2 className="cm-founder-name">Brittany Gruber</h2>
              <div className="cm-founder-role">Founder · Girlhood Collective</div>
              <p className="cm-founder-lede">
                Brittany Gruber is a Cincinnati-based entrepreneur, wife, and mom of two who believes
                that strong communities change lives. Originally from Dayton, Ohio, Brittany has
                dedicated her career to bringing people together through partnerships, community
                engagement, and education. From leading nonprofit initiatives and supporting a
                top-producing real estate team to founding Girlhood Collective, Brittany has built
                programs, cultivated meaningful partnerships, and helped mission-driven organizations
                expand their impact. Whether she&rsquo;s developing community-centered strategies,
                creating engaging content, or connecting people around a shared purpose, Brittany is
                passionate about building relationships that create lasting change.
              </p>
            </Reveal>
          </div>
        </div>

        {/* LONG BIO */}
        <div className="cm-bio cm-section">
          <Reveal className="cm-bio-inner">
            <p>Girlhood Collective exists to build stronger communities by creating meaningful connections between individuals, families, nonprofits, schools, and businesses.</p>
            <p>Whether we&rsquo;re helping a local business engage with its community, creating experiences that foster belonging, or developing programs that inspire the next generation of leaders, our work is rooted in one belief: when people feel connected, communities thrive.</p>
            <p>We believe community doesn&rsquo;t happen by accident. It is built intentionally. Every event, collaboration, and initiative is designed with the same goal: helping people find connection, discover opportunity, and build something bigger together.</p>
          </Reveal>
        </div>

        {/* HOW I WORK */}
        <div className="cm-work cm-section">
          <div className="cm-work-grid">
            <Reveal className="cm-work-label">
              <span className="cm-dot" aria-hidden="true" />
              How I work
            </Reveal>
            <Reveal delay={100}>
              <h2 className="cm-work-heading">
                Girlhood Collective is me — but you&rsquo;re never getting just one perspective.
              </h2>
              <p className="cm-work-body">
                I collaborate with a trusted network of doctors, teachers, community leaders, and
                local brands, so every partnership brings in real expertise and the right
                connections — whatever the scenario calls for.
              </p>
            </Reveal>
          </div>
        </div>

        {/* WHY THIS IS PERSONAL */}
        <div className="cm-personal cm-section">
          <div className="cm-personal-grid">
            <Reveal>
              <div className="cm-eyebrow cm-eyebrow--onlight">
                <span className="cm-dot" aria-hidden="true" />
                Why this is personal
              </div>
              <h2 className="cm-personal-heading">
                Diagnosed with ADHD and autism later in life, I know what it&rsquo;s like to
                navigate a world that wasn&rsquo;t built for the way your brain works best.
              </h2>
              <p className="cm-personal-body">
                That journey fuels the work. I love helping others understand themselves, embrace
                their strengths, and advocate for what they need — and helping organizations learn
                what it really means to be genuinely inclusive. It&rsquo;s part of why belonging,
                not just performance, is the standard every Girlhood Collective engagement is built
                around.
              </p>
              <div className="cm-personal-sig">— Brittany</div>
            </Reveal>
            <Reveal delay={140} className="cm-personal-photos">
              <img
                src={FAMILY_PHOTO + '&width=600'}
                alt="Brittany with her family"
                loading="lazy"
              />
              <img
                src={PERSONAL_PHOTO + '&width=600'}
                alt="Brittany Gruber"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* CASE STUDY PROOF */}
      <div className="cm-case cm-section">
        <div className="cm-case-grid">
          <Reveal className="cm-case-photo-wrap">
            <div className="cm-case-photo-frame" aria-hidden="true" />
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6378.jpg?v=1784590111&width=320"
              alt="Better Together Brunch at the Columbia Center"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100} className="cm-case-copy">
            <p>$3,000 raised, 10 new sponsors, one month of planning — see how a single event became a lasting community partnership.</p>
            <Link className="cm-cta" to="/better-together-recap">
              Read the case study <ArrowUpRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="cm-trust">
        <Reveal className="cm-trust-row">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="cm-trust-stat">
              <div className="cm-trust-value">{s.value}</div>
              <div className="cm-trust-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
      <p className="cm-trust-note">Since launching in 2025 — and growing every season.</p>

      {/* VILLAGE SIGNUP */}
      <div className="cm-village cm-section">
        <div className="cm-village-ghost" aria-hidden="true">V.</div>
        <Reveal className="cm-village-inner">
          <div className="cm-village-eyebrow">
            <span className="cm-dot" aria-hidden="true" />
            The Village
          </div>
          <h2 className="cm-village-heading">You&rsquo;re invited.</h2>
          <p className="cm-village-dek">
            A free monthly letter for anyone building real community — resources, local favorites,
            and what&rsquo;s inspiring us right now.
          </p>
          {submitted ? (
            <div className="cm-village-success">You&rsquo;re in. Watch your inbox for our next letter.</div>
          ) : (
            <div>
              <div className="cm-village-form">
                <input
                  type="email"
                  placeholder="you@cincinnati.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                  aria-label="Email address"
                  className="cm-village-input"
                />
                <button onClick={handleSubscribe} disabled={sending} className="cm-village-submit">
                  {sending ? 'Subscribing…' : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Mail aria-hidden="true" width={15} height={15} /> Subscribe to Updates
                    </span>
                  )}
                </button>
              </div>
              {error && (
                <p className="cm-village-error">
                  {error} Reach us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com">hello@girlhoodcincy.com</a>.
                </p>
              )}
            </div>
          )}
        </Reveal>
      </div>

      <Footer newsletterFormOnPage />
    </div>
  );
}
