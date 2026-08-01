import { useState } from 'react';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import Reveal from '../components/Reveal.jsx';
import { useSEO } from '../lib/seo.js';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { HOW_WE_HELP, CLIENTS_LIST, STATS_V2, PARTNERS_V2, AUDIENCE_V2 } from '../data/homepageV2Content.js';
import { EVENTS, PAST_EVENTS } from '../data/events.js';
import '../styles/homepageV2.css';

const FEATURED_EVENT = EVENTS.find((e) => e.id === 'helping-hands');
const FEATURED_EVENT_IMAGE = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/Helping_Hands.png?v=1784921222';

const ACCENT = 'var(--gc-emerald-soft)'; // Sage — default secondaryAccent per design system

// Brittany's brand palette (see Brittany_Gruber_Color_Codes.pdf) — used for repeated
// decorative moments (stat bars, tag borders, list dots) so no two spots feel identical.
const SAGE = 'var(--gc-emerald-soft)';
const EMERALD = 'var(--gc-emerald)';
const HYDRANGEA = '#6F96CF';
const PEONY = 'var(--gc-peony)';
const ACCENT_CYCLE = [SAGE, EMERALD, HYDRANGEA, PEONY];
const TAG_CYCLE = [SAGE, EMERALD, HYDRANGEA];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Events', href: '#events' },
  { label: 'Tools', href: '#tools' },
  { label: 'Partners', href: '#partners' },
];

// One shared type scale so headings/body copy stay consistent across every section.
const TYPE = {
  h2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3.2vw,32px)', lineHeight: 1.2 },
  h3: { fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.3 },
  body: { fontSize: 17, lineHeight: 1.6 },
  small: { fontSize: 16, lineHeight: 1.5 },
  quote: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 21, lineHeight: 1.5 },
};

// Requests an appropriately-sized asset from Shopify's CDN instead of the full original file.
const cdnResize = (url, width) => `${url}${url.includes('?') ? '&' : '?'}width=${width}`;

export default function HomepageV2() {
  useSEO({
    title: 'Girlhood Collective | Community & Culture Advisory for Organizations',
    description: 'Fractional community strategy, culture, and events consulting for small businesses, allied health practices, and mission-driven organizations across Cincinnati.',
    path: '/homepage-v2',
  });

  const [navOpen, setNavOpen] = useState(false);
  const [openItems, setOpenItems] = useState({ 0: true });
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState(false);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setFormSending(true);
    setFormError(false);
    try {
      await submitNetlifyForm('homepage-v2-contact', form);
      setFormSubmitted(true);
    } catch {
      setFormError(true);
    } finally {
      setFormSending(false);
    }
  };

  const toggleItem = (i) => setOpenItems((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div className="hv2" style={{ background: '#fff', fontFamily: 'var(--font-sans)', color: 'var(--gc-navy)' }}>
      <div style={{ height: 4, background: `linear-gradient(90deg, var(--gc-navy), ${SAGE}, ${EMERALD}, ${HYDRANGEA}, ${PEONY})` }} />

      {/* NAV */}
      <div
        className="hv2-section-pad"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 48px',
          background: '#fff',
          borderBottom: '1px solid rgba(29,53,87,.14)',
        }}
      >
        <a href="#top" style={{ textDecoration: 'none', fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1, color: 'var(--gc-navy)', display: 'flex', flexDirection: 'column' }}>
          <span>Girlhood</span>
          <span style={{ fontStyle: 'italic', fontSize: 16, alignSelf: 'flex-end', marginTop: -4 }}>Collective</span>
        </a>
        <div className={`hv2-nav-links${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)}>
          <Link to="/" className="hv2-navlink">
            Home
          </Link>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hv2-navlink">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="hv2-pill-cta hv2-nav-cta">
            Let&rsquo;s chat
          </a>
        </div>
        <button
          type="button"
          className="hv2-burger"
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span style={{ transform: navOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: navOpen ? 0 : 1 }} />
          <span style={{ width: navOpen ? '100%' : undefined, transform: navOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* HERO */}
      <div id="top" className="hv2-section-pad" style={{ padding: '64px 48px 48px', textAlign: 'center', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="hv2-ghost" aria-hidden="true" style={{ top: '-4%', right: '2vw', fontSize: 'clamp(140px,16vw,260px)' }}>&amp;</div>
        <Reveal style={{ position: 'relative', zIndex: 1 }}>
          <div className="hv2-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="hv2-dot" aria-hidden="true" />
            Community &amp; Culture Advisory
          </div>
          <div
            className="hv2-hero-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(26px,3.4vw,40px)',
              color: 'var(--gc-navy)',
              maxWidth: 860,
              margin: '0 auto',
              lineHeight: 1.22,
            }}
          >
            Helping build communities people can&rsquo;t wait to be a part of.
          </div>
          <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', maxWidth: 680, margin: '20px auto 0' }}>
            Programs and events that create measurable impact. Bridging corporate culture, non-profit impact, and community engagement across Greater Cincinnati.
          </div>
          <div className="hv2-hero-cta" style={{ marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="hv2-pill-cta">
              Ready to get to work? Let&rsquo;s chat.
            </a>
            <a href="#services" className="hv2-pill-outline">
              Explore Our Services
            </a>
          </div>
        </Reveal>
      </div>

      {/* HOW WE HELP */}
      <div id="services" className="hv2-section-pad" style={{ padding: '64px 48px', background: '#fff' }}>
        <Reveal>
          <div className="hv2-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="hv2-dot" aria-hidden="true" />
            What we do
          </div>
        </Reveal>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 32 }}>How We Help</div>
        <div className="hv2-grid-2col" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'start' }}>
          <Reveal as="div" className="hv2-sticky-img" style={{ position: 'sticky', top: 90 }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 14, left: -14, right: -14, bottom: -14, background: HYDRANGEA, opacity: 0.35, borderRadius: 6, zIndex: 0 }} />
            <img
              src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3916.jpg?v=1783447727', 900)}
              alt="Girlhood Collective community event"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block', borderRadius: 6, position: 'relative', zIndex: 1 }}
            />
          </Reveal>
          <Reveal as="div" delay={100}>
            {HOW_WE_HELP.map((item, i) => {
              const isOpen = !!openItems[i];
              return (
                <div key={item.title} style={{ borderTop: '1px solid rgba(29,53,87,.14)' }}>
                  <button type="button" className="hv2-accordion-row" onClick={() => toggleItem(i)} aria-expanded={isOpen}>
                    <div className="hv2-accordion-num" style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--gc-emerald-soft)', width: 30, flex: 'none' }}>
                      0{i + 1}
                    </div>
                    <div style={{ ...TYPE.h3, color: 'var(--gc-navy)', flex: 1 }}>{item.title}</div>
                    <div style={{ position: 'relative', width: 22, height: 22, flex: 'none', marginLeft: 'auto' }}>
                      <span style={{ position: 'absolute', top: 10, left: 2, width: 18, height: 2, background: 'var(--gc-navy)' }} />
                      <span className={`hv2-accordion-vbar${isOpen ? ' open' : ''}`} />
                    </div>
                  </button>
                  <div className={`hv2-accordion-panel${isOpen ? ' open' : ''}`}>
                    <div style={{ padding: '0 4px 24px', maxWidth: 760 }}>
                      <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', marginBottom: 14 }}>{item.desc}</div>
                      <a href={item.href} className="hv2-cta-link" style={{ color: ACCENT }}>
                        {item.ctaLabel}
                        <span className="hv2-arrow" aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid rgba(29,53,87,.14)' }} />
          </Reveal>
        </div>
      </div>

      {/* WHY THIS WORK MATTERS + WHO WE WORK WITH */}
      <div id="about" className="hv2-section-pad" style={{ padding: '48px 48px', background: '#fff' }}>
        <Reveal className="hv2-grid-2col" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40 }}>
          <div>
            <div style={{ ...TYPE.h3, color: 'var(--gc-navy)', marginBottom: 12 }}>Why this work matters</div>
            <div style={{ ...TYPE.body, color: 'var(--gc-navy)', marginBottom: 10 }}>
              Organizations don&rsquo;t struggle because they lack good intentions — they struggle because building genuine engagement takes time, strategy, and capacity they don&rsquo;t have to spare.
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--gc-navy)', lineHeight: 1.4, marginBottom: 12 }}>
              That&rsquo;s where we come in.
            </div>
            <div style={{ background: 'var(--gc-section)', borderRadius: 6, padding: '16px 18px' }}>
              <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)' }}>
                Community is more than events or follower counts. It&rsquo;s the discipline behind stronger workforce retention, a deeper community footprint, and strategic partner initiatives that actually get executed.
              </div>
            </div>
          </div>
          <div className="hv2-grid-2col-divider" style={{ borderLeft: '1px solid rgba(29,53,87,.14)', paddingLeft: 40 }}>
            <div style={{ ...TYPE.h3, color: 'var(--gc-navy)', marginBottom: 12 }}>Who we work with</div>
            <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', marginBottom: 14 }}>
              We partner with organizations that understand people are their greatest asset.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {AUDIENCE_V2.map((who, i) => (
                <div key={who} style={{ color: 'var(--gc-navy)', background: '#fff', fontSize: 16, fontWeight: 500, padding: '7px 14px', borderRadius: 999, border: `1.5px solid ${TAG_CYCLE[i % TAG_CYCLE.length]}` }}>
                  {who}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* EXPLAINER VIDEO — paired with the About section above */}
      <div className="hv2-section-pad" style={{ padding: '0 48px 48px', background: '#fff' }}>
        <Reveal style={{ maxWidth: 420, margin: '0 auto', borderRadius: 6, overflow: 'hidden' }}>
          <YouTubeEmbed videoId="RutKIsejsmo" title="Girlhood Collective — what we do" />
        </Reveal>
      </div>

      {/* CLIENTS COME TO US WHEN */}
      <div className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-section)', position: 'relative', overflow: 'hidden' }}>
        <div className="hv2-grain" style={{ position: 'absolute' }} />
        <Reveal style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', marginBottom: 20, textAlign: 'center' }}>
            Clients come to us when&hellip;
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CLIENTS_LIST.map((line, i) => (
              <div key={line} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: ACCENT_CYCLE[i % ACCENT_CYCLE.length], marginTop: 8, flex: 'none' }} />
                <div style={{ ...TYPE.body, color: 'var(--gc-navy)' }}>{line}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* RESULTS */}
      <div id="results" className="hv2-section-pad" style={{ padding: '64px 48px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="hv2-ghost" aria-hidden="true" style={{ bottom: '-4%', left: '1vw', fontSize: 'clamp(120px,14vw,220px)' }}>&rdquo;</div>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 32, position: 'relative', zIndex: 1 }}>
          Real community, real results
        </div>
        <Reveal as="div" className="hv2-stats-row" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative', zIndex: 1 }}>
          {STATS_V2.map((stat, i) => (
            <div key={stat.label} className="hv2-stat-col" style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid rgba(29,53,87,.14)', transform: i % 2 === 1 ? 'translateY(-10px)' : undefined }}>
              <div style={{ width: 24, height: 3, background: ACCENT_CYCLE[i % ACCENT_CYCLE.length], borderRadius: 2, margin: '0 auto 12px' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 38, color: 'var(--gc-navy)', marginBottom: 8 }}>{stat.value}</div>
              <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={100} style={{ maxWidth: 800, margin: '40px auto 0', position: 'relative', zIndex: 1 }}>
          <span className="hv2-pullquote-mark" aria-hidden="true">&ldquo;</span>
          <div style={{ ...TYPE.quote, color: 'var(--gc-navy)', marginBottom: 16 }}>
            Co-hosting the community brunch alongside Girlhood Collective was an absolute high point for us at Endurance in Education. The room curated by Girlhood Collective embodied everything we stand for: genuine connections, community strength, and people passionate about building a stronger talent pipeline for Cincinnati.
          </div>
          <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', marginBottom: 16 }}>
            Brittany curated an incredible panel of female leaders spanning business, nonprofit development, and education — and led the charge from day one. We raised $1,000 in direct donations to EIE while reaching a wider audience.
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)' }}>
            Allyson Place<span style={{ fontWeight: 400, color: 'var(--gc-ink-muted)' }}>, Founder, Endurance in Education</span>
          </div>
        </Reveal>
        <div className="hv2-img-pair" style={{ maxWidth: 900, margin: '32px auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative', zIndex: 1 }}>
          <img
            src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_8694.jpg?v=1785375920', 700)}
            alt="Girlhood Collective community event"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', borderRadius: 6 }}
          />
          <img
            src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6378.jpg?v=1785376026', 700)}
            alt="Girlhood Collective community event"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block', borderRadius: 6 }}
          />
        </div>
      </div>

      {/* MEET BRITTANY */}
      <div className="hv2-section-pad" style={{ padding: '64px 48px', background: '#fff' }}>
        <div className="hv2-grid-2col" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 48, alignItems: 'center' }}>
          <Reveal as="div" className="hv2-photo-frame-wrap">
            <img
              src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2874.jpg?v=1785099357', 800)}
              alt="Brittany Gruber"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block', borderRadius: 6 }}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="hv2-eyebrow">
              <span className="hv2-dot" aria-hidden="true" />
              Meet the founder
            </div>
            <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', marginBottom: 16 }}>Meet Brittany</div>
            <div style={{ ...TYPE.body, color: 'var(--gc-navy)', marginBottom: 14 }}>
              What started as a passion for creating spaces where people can grow with confidence has become a full ecosystem of support, consulting, and events.
            </div>
            <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', marginBottom: 20 }}>
              Her path here wasn&rsquo;t a straight line — brand partnerships, nonprofit programs, systems, and community marketing, long before she called herself a founder. What ties it together: people thrive when they feel like they truly belong. She holds a B.A. in Communication &amp; Public Relations from the University of Cincinnati.
            </div>
            <div style={{ paddingTop: 18, borderTop: '1px solid rgba(29,53,87,.14)', marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--gc-navy)', marginBottom: 2 }}>Brittany Gruber</div>
              <div style={{ fontSize: 16, color: 'var(--gc-emerald-soft)', fontWeight: 600 }}>Founder &amp; Executive Director, Girlhood Collective</div>
            </div>
            <a href="#contact" className="hv2-pill-cta">
              Ready to get to work? Let&rsquo;s chat.
            </a>
          </Reveal>
        </div>
      </div>

      {/* UPCOMING COMMUNITY EVENTS */}
      {FEATURED_EVENT && (
        <div id="events" className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-section)' }}>
          <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10 }}>Upcoming Community Events</div>
          <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
            Join us in person — here&rsquo;s what&rsquo;s next.
          </div>
          <Reveal className="hv2-grid-2col" style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 36, alignItems: 'center', background: '#fff', borderRadius: 8, border: '1px solid rgba(29,53,87,.14)', overflow: 'hidden' }}>
            <img
              src={cdnResize(FEATURED_EVENT_IMAGE, 700)}
              alt={FEATURED_EVENT.title}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '8px 32px 8px 0' }}>
              <div style={{ display: 'inline-block', fontSize: 16, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#fff', background: HYDRANGEA, padding: '5px 12px', borderRadius: 999, marginBottom: 14 }}>
                {FEATURED_EVENT.mon} {FEATURED_EVENT.day}, {FEATURED_EVENT.year}
              </div>
              <div style={{ ...TYPE.h3, color: 'var(--gc-navy)', marginBottom: 6 }}>{FEATURED_EVENT.title}</div>
              <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', marginBottom: 12 }}>{FEATURED_EVENT.where}</div>
              <div style={{ ...TYPE.body, color: 'var(--gc-navy)', marginBottom: 16 }}>{FEATURED_EVENT.desc}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)', marginBottom: 20 }}>{FEATURED_EVENT.price}</div>
              <a href={FEATURED_EVENT.shopifyUrl} target="_blank" rel="noopener noreferrer" className="hv2-pill-cta">
                Reserve Your Spot
              </a>
            </div>
          </Reveal>
        </div>
      )}

      {/* EVENTS WE'RE PROUD OF */}
      <div className="hv2-section-pad" style={{ padding: '56px 48px', background: '#fff' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10 }}>Seriously proud of what we made.</div>
        <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 32px' }}>
          A look back at the rooms we&rsquo;ve filled since 2025.
        </div>
        <Reveal style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {PAST_EVENTS.map((p, i) => {
            const Wrapper = p.href ? Link : 'div';
            const wrapperProps = p.href ? { to: p.href } : {};
            return (
              <Wrapper key={p.title} className="hv2-story-card" {...wrapperProps}>
                <div className="hv2-story-img-wrap">
                  <img
                    src={cdnResize(p.photo, 500)}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ width: 24, height: 3, background: ACCENT_CYCLE[i % ACCENT_CYCLE.length], borderRadius: 2, margin: '14px 0 10px' }} />
                <div className="hv2-story-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--gc-navy)', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)' }}>
                  {p.caption}
                  {p.href ? ' · Read the case study →' : ''}
                </div>
              </Wrapper>
            );
          })}
        </Reveal>
      </div>

      {/* TOOLS */}
      <div id="tools" className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-section)', position: 'relative', overflow: 'hidden' }}>
        <div className="hv2-grain" style={{ position: 'absolute' }} />
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10, position: 'relative', zIndex: 1 }}>Start a Conversation</div>
        <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 28px', position: 'relative', zIndex: 1 }}>
          One quick way to get started.
        </div>
        <Reveal style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, position: 'relative', zIndex: 1 }}>
          <a href="https://girlhoodeventrequest.netlify.app" target="_blank" rel="noopener noreferrer" className="hv2-tool-card">
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: SAGE }}>01</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.4 }}>
              Submit a request to partner on an event or collaboration.
            </div>
          </a>
          <Link to="/consultation-intake" className="hv2-tool-card">
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: SAGE }}>02</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.4 }}>
              Start a consulting client intake.
            </div>
          </Link>
        </Reveal>
      </div>

      {/* PARTNERS */}
      <div id="partners" className="hv2-section-pad" style={{ padding: '56px 48px', background: '#fff', borderTop: '1px solid rgba(29,53,87,.14)' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10 }}>Our Partners</div>
        <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 28px' }}>
          Local businesses and organizations we&rsquo;ve had the privilege of building community with.
        </div>
        <Reveal style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
          {PARTNERS_V2.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="hv2-partner-card">
              <img src={cdnResize(p.logo, 200)} alt={p.name} loading="lazy" decoding="async" style={{ width: '100%', height: 52, objectFit: 'contain' }} />
              <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.3 }}>{p.name}</div>
            </a>
          ))}
        </Reveal>
      </div>

      {/* MID CTA */}
      <div className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-navy)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hv2-grain-dark" aria-hidden="true" />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -140,
            right: -110,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${EMERALD}40, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div className="hv2-ghost hv2-ghost--onlight" aria-hidden="true" style={{ top: '-8%', left: '2vw', fontSize: 'clamp(120px,15vw,220px)' }}>&amp;</div>
        <Reveal style={{ position: 'relative', zIndex: 1 }}>
          <div className="hv2-eyebrow hv2-eyebrow--onlight" style={{ justifyContent: 'center' }}>
            <span className="hv2-dot" aria-hidden="true" />
            Let&rsquo;s talk
          </div>
          <div style={{ ...TYPE.h2, color: '#f8f6f0', maxWidth: 700, margin: '0 auto 14px' }}>
            Let&rsquo;s build something people want to be part of.
          </div>
          <div style={{ ...TYPE.small, color: 'rgba(248,246,240,.72)', maxWidth: 560, margin: '0 auto 24px' }}>
            Whether it&rsquo;s internal culture, community relationships, or experiences people remember, we&rsquo;re here to help.
          </div>
          <a href="#contact" className="hv2-pill-white">
            Ready to get to work? Let&rsquo;s chat.
          </a>
        </Reveal>
      </div>

      {/* CONTACT / FOOTER */}
      <div id="contact" className="hv2-section-pad" style={{ padding: '48px 48px 40px', background: '#fff' }}>
        <Reveal style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div className="hv2-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="hv2-dot" aria-hidden="true" />
            Get in touch
          </div>
          <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', marginBottom: 24 }}>
            Let&rsquo;s chat. Reach out below and we&rsquo;ll get back to you ASAP.
          </div>
        </Reveal>
        {formSubmitted ? (
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', padding: '32px 24px', border: '1.5px solid var(--gc-emerald-soft)', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 21, color: 'var(--gc-navy)', marginBottom: 8 }}>Thanks for reaching out.</div>
            <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)' }}>We&rsquo;ll be in touch soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-name" style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Name
              </label>
              <input id="hv2-name" type="text" required value={form.name} onChange={setField('name')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-org" style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Organization
              </label>
              <input id="hv2-org" type="text" value={form.org} onChange={setField('org')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-email" style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Email
              </label>
              <input id="hv2-email" type="email" required value={form.email} onChange={setField('email')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-message" style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Message
              </label>
              <textarea id="hv2-message" required rows={4} value={form.message} onChange={setField('message')} className="hv2-field" style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="hv2-submit" disabled={formSending}>
              {formSending ? 'Sending…' : 'Send message'}
            </button>
            {formError && (
              <p style={{ fontSize: 16, color: '#c0392b', textAlign: 'center' }}>
                Something went wrong. Please email us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com">hello@girlhoodcincy.com</a>.
              </p>
            )}
          </form>
        )}
        <div style={{ maxWidth: 1160, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(29,53,87,.14)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--gc-navy)', display: 'flex', alignItems: 'center', gap: 8 }}>
            Girlhood Collective
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gc-peony)', display: 'inline-block' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 16, color: 'var(--gc-ink-muted)' }}>
            <span>© 2026 Girlhood Collective. All rights reserved.</span>
            <Link to="/privacy" style={{ color: 'var(--gc-ink-muted)' }}>Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
