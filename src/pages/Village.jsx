import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { useSEO } from '../lib/seo.js';
import '../styles/utilityPages.css';

// Real sent issues, pulled from MailerLite campaign history (Issues 1–5, Apr–Jun 2026).
const ISSUES = [
  { vol: 'Issue 7', date: 'August 2026', accent: 'var(--gc-emerald-soft)', title: "Pull up a seat! This Week's Gatherings, Grants, and Good News", url: 'https://preview.mailerlite.io/preview/1805515/emails/194791249315628091' },
  { vol: 'Issue 6', date: 'July 2026', accent: 'var(--gc-peony)', title: 'A Voice That Carries: Issue No. 6', url: 'https://preview.mailerlite.io/preview/1805515/emails/194169670417254076' },
  { vol: 'Issue 5', date: 'June 2026', accent: 'var(--gc-blush)', title: 'One Month Until Our First Fundraiser 🎉 Sponsor Highlights 💫 Hyde Park Market Preview 🛍️', url: 'https://preview.mailerlite.io/preview/1805515/emails/191026880087852582' },
  { vol: 'Issue 4', date: 'May 2026', accent: 'var(--gc-emerald)', title: 'Brunch News & Market Fun', url: 'https://preview.mailerlite.io/preview/1805515/emails/188546365699130527' },
  { vol: 'Issue 3', date: 'May 2026', accent: 'var(--gc-lavender)', title: 'Summer is coming! Updates Inside 💫', url: 'https://preview.mailerlite.io/preview/1805515/emails/187929868071077793' },
  { vol: 'Issue 2', date: 'May 2026', accent: '#c96a95', title: 'Girlhood Community Spotlights & News', url: 'https://preview.mailerlite.io/preview/1805515/emails/186202367462474900' },
  { vol: 'Issue 1', date: 'April 2026', accent: 'var(--gc-blush)', title: 'Girlhood Collective Newsletter Issue 1 💫', url: 'https://preview.mailerlite.io/preview/1805515/emails/185545856632489332' },
];

export default function Village() {
  useSEO({
    title: 'Subscribe to Our Updates | Girlhood Collective Newsletter',
    description: 'A free monthly letter for anyone building real community — resources, local favorites, and what’s inspiring us right now.',
    path: '/village',
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
      <div className="up-grain" />
      <NavBar variant="navy" active="Subscribe" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', position: 'relative', overflow: 'hidden' }}>
        <div className="up-ghost up-ghost--italic" aria-hidden="true" style={{ top: '-6%', right: '30%', fontSize: 'clamp(140px,16vw,240px)' }}>&ldquo;</div>
        <div className="rgrid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 44, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <Reveal>
            <div className="up-eyebrow">
              <span className="up-dot" aria-hidden="true" />
              The Village
            </div>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 65, color: 'var(--gc-navy)', lineHeight: 1.08 }}>You&rsquo;re invited.</h1>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 480, margin: '16px 0 30px' }}>
              A free monthly letter for anyone building real community — resources, local favorites, and what&rsquo;s inspiring us right now.
            </p>

            {submitted ? (
              <div style={{ maxWidth: 440, background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '28px 24px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 32.5, color: 'var(--gc-navy)', marginBottom: 6 }}>You&rsquo;re in!</div>
                <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
                  Watch your inbox for our next letter.
                </p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    placeholder="you@cincinnati.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    aria-label="Email address"
                    className="fld email-input"
                    style={{ width: 320 }}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={sending}
                    style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 16px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 3 }}
                  >
                    {sending ? 'Subscribing…' : 'Subscribe to Updates'}
                  </button>
                </div>
                {error && (
                  <p style={{ fontSize: 16, color: '#c0392b', marginTop: 14 }}>
                    {error} Reach us directly at{' '}
                    <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a>.
                  </p>
                )}
              </div>
            )}
          </Reveal>

          {/* PHOTO */}
          <Reveal delay={120} style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '-14px -14px 14px 14px', border: '1.5px solid var(--gc-emerald-soft)', borderRadius: 10, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: 460, overflow: 'hidden', borderRadius: 10, background: 'var(--gc-navy)', boxShadow: '0 26px 50px rgba(29,53,87,.16)' }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_7498.jpg?v=1785100814&width=800"
                alt="Girlhood Collective community gathering"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ARCHIVE */}
      <div id="archive" style={{ background: 'var(--gc-section)', padding: '56px 44px 64px', scrollMarginTop: 80 }}>
        <Reveal>
          <div className="up-eyebrow">
            <span className="up-dot" aria-hidden="true" />
            The archive
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Past issues</h2>
          <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 520, marginBottom: 26 }}>
            Catch up on what you missed. A little of everything we&rsquo;ve been up to.
          </p>
        </Reveal>
        <Reveal delay={100} className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {ISSUES.map((i) => (
            <a
              key={i.vol}
              href={i.url}
              target="_blank"
              rel="noopener noreferrer"
              className="up-card"
              style={{ textDecoration: 'none', display: 'block', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${i.accent}`, padding: '24px 26px' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <span style={{ font: '700 16px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{i.vol}</span>
                <span style={{ font: '600 16px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{i.date}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 10, lineHeight: 1.4 }}>{i.title}</h3>
              <span className="up-cta" style={{ color: 'var(--gc-emerald)' }}>
                Read this issue
                <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          ))}
        </Reveal>
      </div>

      <Footer newsletterFormOnPage />
    </div>
  );
}
