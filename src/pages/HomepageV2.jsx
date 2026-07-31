import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../components/YouTubeEmbed.jsx';
import { useSEO } from '../lib/seo.js';
import { HOW_WE_HELP, CLIENTS_LIST, STATS_V2, PARTNERS_V2, AUDIENCE_V2 } from '../data/homepageV2Content.js';
import '../styles/homepageV2.css';

const ACCENT = 'var(--gc-emerald-soft)'; // Sage — default secondaryAccent per design system

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Tools', href: '#tools' },
  { label: 'Partners', href: '#partners' },
];

// One shared type scale so headings/body copy stay consistent across every section.
const TYPE = {
  h2: { fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3.2vw,32px)', lineHeight: 1.2 },
  h3: { fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.3 },
  body: { fontSize: 17, lineHeight: 1.6 },
  small: { fontSize: 15, lineHeight: 1.5 },
  eyebrow: { fontSize: 13, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' },
  quote: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 21, lineHeight: 1.5 },
};

// Requests an appropriately-sized asset from Shopify's CDN instead of the full original file.
const cdnResize = (url, width) => `${url}${url.includes('?') ? '&' : '?'}width=${width}`;

export default function HomepageV2() {
  useSEO({
    title: 'Girlhood Collective | Homepage Design Preview',
    description: 'Design-handoff preview of the Girlhood Collective consultancy homepage. Not linked from primary navigation.',
    path: '/homepage-v2',
  });

  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', 'noindex, nofollow');
    return () => tag?.setAttribute('content', 'index, follow');
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  const [openItems, setOpenItems] = useState({ 0: true });
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleItem = (i) => setOpenItems((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div className="hv2" style={{ background: '#fff', fontFamily: 'var(--font-sans)', color: 'var(--gc-navy)' }}>
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
          <span style={{ fontStyle: 'italic', fontSize: 15, alignSelf: 'flex-end', marginTop: -4 }}>Collective</span>
        </a>
        <div className={`hv2-nav-links${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)}>
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
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* HERO */}
      <div id="top" className="hv2-section-pad" style={{ padding: '64px 48px 48px', textAlign: 'center', background: '#fff' }}>
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
        <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', maxWidth: 620, margin: '20px auto 0' }}>
          Community strategy, organizational culture, and community programs that create measurable impact.
        </div>
        <div className="hv2-hero-cta" style={{ marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="hv2-pill-cta">
            Ready to get to work? Let&rsquo;s chat.
          </a>
          <a href="#services" className="hv2-pill-outline">
            Explore Our Services
          </a>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ padding: '18px 48px', textAlign: 'center', background: '#fff', borderTop: '1px solid rgba(29,53,87,.14)', borderBottom: '1px solid rgba(29,53,87,.14)' }}>
        <div style={{ ...TYPE.eyebrow, color: 'var(--gc-ink-muted)' }}>
          Trusted by organizations, nonprofits, healthcare leaders, and community partners across Greater Cincinnati
        </div>
      </div>

      {/* HOW WE HELP */}
      <div id="services" className="hv2-section-pad" style={{ padding: '64px 48px', background: '#fff' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 32 }}>How We Help</div>
        <div className="hv2-grid-2col" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'start' }}>
          <img
            src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3916.jpg?v=1783447727', 900)}
            alt="Girlhood Collective community event"
            loading="lazy"
            decoding="async"
            className="hv2-sticky-img"
            style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block', borderRadius: 6, position: 'sticky', top: 90 }}
          />
          <div>
            {HOW_WE_HELP.map((item, i) => {
              const isOpen = !!openItems[i];
              return (
                <div key={item.title} style={{ borderTop: '1px solid rgba(29,53,87,.14)' }}>
                  <button type="button" className="hv2-accordion-row" onClick={() => toggleItem(i)} aria-expanded={isOpen}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--gc-emerald-soft)', width: 30, flex: 'none' }}>
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
          </div>
        </div>
      </div>

      {/* WHY GIRLHOOD COLLECTIVE */}
      <div id="why" className="hv2-section-pad" style={{ padding: '64px 48px', background: 'var(--gc-navy)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ ...TYPE.h2, color: '#f8f6f0', marginBottom: 22 }}>Why Girlhood Collective?</div>
          <div style={{ ...TYPE.body, color: 'rgba(248,246,240,.72)', marginBottom: 18 }}>
            There are plenty of consultants who can hand you a strategy deck.
          </div>
          <div
            style={{
              ...TYPE.quote,
              color: '#f8f6f0',
              margin: '0 auto 18px',
              maxWidth: 560,
              borderLeft: '2px solid var(--gc-peony)',
              paddingLeft: 18,
              display: 'inline-block',
              textAlign: 'left',
            }}
          >
            We believe real community work starts with relationships.
          </div>
          <div style={{ ...TYPE.body, color: 'rgba(248,246,240,.72)', marginBottom: 18 }}>
            Everything we recommend is grounded in lived experience — community building, executive leadership, communications, and organizational development. No performative initiatives, no one-size-fits-all solutions. Just the work that helps people trust your organization, feel like they belong, and stay connected.
          </div>
          <div style={{ fontSize: 18, color: '#f8f6f0', fontWeight: 600, lineHeight: 1.5 }}>
            Because when people feel connected, organizations grow stronger.
          </div>
        </div>
      </div>

      {/* WHY THIS WORK MATTERS + WHO WE WORK WITH */}
      <div id="about" className="hv2-section-pad" style={{ padding: '48px 48px', background: '#fff' }}>
        <div className="hv2-grid-2col" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40 }}>
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
                Community is more than events or follower counts. It&rsquo;s creating environments where people feel seen and connected, so reputation and partnerships grow stronger.
              </div>
            </div>
          </div>
          <div className="hv2-grid-2col-divider" style={{ borderLeft: '1px solid rgba(29,53,87,.14)', paddingLeft: 40 }}>
            <div style={{ ...TYPE.h3, color: 'var(--gc-navy)', marginBottom: 12 }}>Who we work with</div>
            <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', marginBottom: 14 }}>
              We partner with organizations that understand people are their greatest asset.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {AUDIENCE_V2.map((who) => (
                <div key={who} style={{ color: 'var(--gc-navy)', background: '#fff', fontSize: 14, fontWeight: 500, padding: '7px 14px', borderRadius: 999, border: `1.5px solid ${ACCENT}` }}>
                  {who}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CLIENTS COME TO US WHEN */}
      <div className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-section)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', marginBottom: 20, textAlign: 'center' }}>
            Clients come to us when&hellip;
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CLIENTS_LIST.map((line) => (
              <div key={line} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: ACCENT, marginTop: 8, flex: 'none' }} />
                <div style={{ ...TYPE.body, color: 'var(--gc-navy)' }}>{line}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div id="results" className="hv2-section-pad" style={{ padding: '64px 48px', background: '#fff' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 32 }}>
          Real community, real results
        </div>
        <div className="hv2-stats-row" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {STATS_V2.map((stat) => (
            <div key={stat.label} className="hv2-stat-col" style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid rgba(29,53,87,.14)' }}>
              <div style={{ width: 24, height: 3, background: ACCENT, borderRadius: 2, margin: '0 auto 12px' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 38, color: 'var(--gc-navy)', marginBottom: 8 }}>{stat.value}</div>
              <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 800, margin: '40px auto 0', borderLeft: '2px solid var(--gc-peony)', paddingLeft: 28 }}>
          <div style={{ ...TYPE.quote, color: 'var(--gc-navy)', marginBottom: 16 }}>
            &ldquo;Co-hosting the community brunch alongside Girlhood Collective was an absolute high point for us at Endurance in Education. The room curated by Girlhood Collective embodied everything we stand for: genuine connections, community strength, and people passionate about building a stronger talent pipeline for Cincinnati.&rdquo;
          </div>
          <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', marginBottom: 16 }}>
            Brittany curated an incredible panel of female leaders spanning business, nonprofit development, and education — and led the charge from day one. We raised $1,000 in direct donations to EIE while reaching a wider audience.
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--gc-navy)' }}>
            Allyson Place<span style={{ fontWeight: 400, color: 'var(--gc-ink-muted)' }}>, Founder, Endurance in Education</span>
          </div>
        </div>
        <div className="hv2-img-pair" style={{ maxWidth: 900, margin: '32px auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <img
            src={cdnResize('https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2874.jpg?v=1785099357', 800)}
            alt="Brittany Gruber"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block', borderRadius: 6 }}
          />
          <div>
            <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', marginBottom: 16 }}>Meet Brittany</div>
            <div style={{ ...TYPE.body, color: 'var(--gc-navy)', marginBottom: 14 }}>
              What started as a passion for creating spaces where people can grow with confidence has become a full ecosystem of support, consulting, and events.
            </div>
            <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', marginBottom: 20 }}>
              Her path here wasn&rsquo;t a straight line — brand partnerships, nonprofit programs, systems, and community marketing, long before she called herself a founder. What ties it together: people thrive when they feel like they truly belong. She holds a B.A. in Communication &amp; Public Relations from the University of Cincinnati.
            </div>
            <div style={{ paddingTop: 18, borderTop: '1px solid rgba(29,53,87,.14)', marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, color: 'var(--gc-navy)', marginBottom: 2 }}>Brittany Gruber</div>
              <div style={{ fontSize: 15, color: 'var(--gc-emerald-soft)', fontWeight: 600 }}>Founder &amp; Executive Director, Girlhood Collective</div>
            </div>
            <a href="#contact" className="hv2-pill-cta">
              Ready to get to work? Let&rsquo;s chat.
            </a>
          </div>
        </div>
      </div>

      {/* TOOLS */}
      <div id="tools" className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-section)' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10 }}>Start a Conversation</div>
        <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 28px' }}>
          Two quick ways to get started.
        </div>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <a href="https://girlhoodeventrequest.netlify.app" target="_blank" rel="noopener noreferrer" className="hv2-tool-card">
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--gc-emerald-soft)' }}>01</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.4 }}>
              Submit a request to partner on an event or collaboration.
            </div>
          </a>
          <Link to="/consultation-intake" className="hv2-tool-card">
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--gc-emerald-soft)' }}>02</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.4 }}>
              Curious what support could look like? Start the intake quiz.
            </div>
          </Link>
        </div>
      </div>

      {/* PARTNERS */}
      <div id="partners" className="hv2-section-pad" style={{ padding: '56px 48px', background: '#fff', borderTop: '1px solid rgba(29,53,87,.14)' }}>
        <div style={{ ...TYPE.h2, color: 'var(--gc-navy)', textAlign: 'center', marginBottom: 10 }}>Our Partners</div>
        <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)', textAlign: 'center', maxWidth: 600, margin: '0 auto 28px' }}>
          Local businesses and organizations we&rsquo;ve had the privilege of building community with.
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
          {PARTNERS_V2.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="hv2-partner-card">
              <img src={cdnResize(p.logo, 200)} alt={p.name} loading="lazy" decoding="async" style={{ width: '100%', height: 52, objectFit: 'contain' }} />
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--gc-navy)', textAlign: 'center', lineHeight: 1.3 }}>{p.name}</div>
            </a>
          ))}
        </div>
      </div>

      {/* MID CTA */}
      <div className="hv2-section-pad" style={{ padding: '56px 48px', background: 'var(--gc-navy)', textAlign: 'center' }}>
        <div style={{ ...TYPE.h2, color: '#f8f6f0', maxWidth: 700, margin: '0 auto 14px' }}>
          Let&rsquo;s build something people want to be part of.
        </div>
        <div style={{ ...TYPE.small, color: 'rgba(248,246,240,.72)', maxWidth: 560, margin: '0 auto 24px' }}>
          Whether it&rsquo;s internal culture, community relationships, or experiences people remember, we&rsquo;re here to help.
        </div>
        <a href="#contact" className="hv2-pill-white">
          Ready to get to work? Let&rsquo;s chat.
        </a>
      </div>

      {/* EXPLAINER VIDEO */}
      <div className="hv2-section-pad" style={{ padding: '48px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', borderRadius: 6, overflow: 'hidden' }}>
          <YouTubeEmbed videoId="RutKIsejsmo" title="Girlhood Collective — what we do" />
        </div>
      </div>

      {/* CONTACT / FOOTER */}
      <div id="contact" className="hv2-section-pad" style={{ padding: '48px 48px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ ...TYPE.body, color: 'var(--gc-ink-muted)', marginBottom: 24 }}>
            Let&rsquo;s chat. Reach out below and we&rsquo;ll get back to you ASAP.
          </div>
        </div>
        {formSubmitted ? (
          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', padding: '32px 24px', border: '1.5px solid var(--gc-emerald-soft)', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 21, color: 'var(--gc-navy)', marginBottom: 8 }}>Thanks for reaching out.</div>
            <div style={{ ...TYPE.small, color: 'var(--gc-ink-muted)' }}>We&rsquo;ll be in touch soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: 520, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-name" style={{ fontSize: 14, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Name
              </label>
              <input id="hv2-name" type="text" required value={form.name} onChange={setField('name')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-org" style={{ fontSize: 14, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Organization
              </label>
              <input id="hv2-org" type="text" value={form.org} onChange={setField('org')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-email" style={{ fontSize: 14, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Email
              </label>
              <input id="hv2-email" type="email" required value={form.email} onChange={setField('email')} className="hv2-field" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left' }}>
              <label htmlFor="hv2-message" style={{ fontSize: 14, fontWeight: 600, color: 'var(--gc-navy)' }}>
                Message
              </label>
              <textarea id="hv2-message" required rows={4} value={form.message} onChange={setField('message')} className="hv2-field" style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="hv2-submit">
              Send message
            </button>
          </form>
        )}
        <div style={{ maxWidth: 1160, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(29,53,87,.14)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--gc-navy)', display: 'flex', alignItems: 'center', gap: 8 }}>
            Girlhood Collective
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gc-peony)', display: 'inline-block' }} />
          </div>
          <div style={{ fontSize: 14, color: 'var(--gc-ink-muted)' }}>© 2026 Girlhood Collective. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
