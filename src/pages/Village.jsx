import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { useSEO } from '../lib/seo.js';
import { VILLAGE_SECTIONS } from '../data/content.js';

// Real sent issues, pulled from MailerLite campaign history (Issues 1–5, Apr–Jun 2026).
const ISSUES = [
  { vol: 'Issue 5', date: 'June 2026', accent: 'var(--gc-blush)', title: 'One Month Until Our First Fundraiser 🎉 Sponsor Highlights 💫 Hyde Park Market Preview 🛍️', url: 'https://preview.mailerlite.io/preview/1805515/emails/191026880087852582' },
  { vol: 'Issue 4', date: 'May 2026', accent: 'var(--gc-emerald)', title: 'Brunch News & Market Fun', url: 'https://preview.mailerlite.io/preview/1805515/emails/188546365699130527' },
  { vol: 'Issue 3', date: 'May 2026', accent: 'var(--gc-lavender)', title: 'Summer is coming! Updates Inside 💫', url: 'https://preview.mailerlite.io/preview/1805515/emails/187929868071077793' },
  { vol: 'Issue 2', date: 'May 2026', accent: '#c96a95', title: 'Girlhood Community Spotlights & News', url: 'https://preview.mailerlite.io/preview/1805515/emails/186202367462474900' },
  { vol: 'Issue 1', date: 'April 2026', accent: 'var(--gc-blush)', title: 'Girlhood Collective Newsletter Issue 1 💫', url: 'https://preview.mailerlite.io/preview/1805515/emails/185545856632489332' },
];

export default function Village() {
  useSEO({
    title: 'Join the Village | Girlhood Collective Newsletter',
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
      <NavBar variant="navy" active="Join the Village" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The Village</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 65, color: 'var(--gc-navy)', lineHeight: 1.08 }}>You&rsquo;re invited.</h1>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 520, margin: '16px auto 30px' }}>
          A free monthly letter for anyone building real community — resources, local favorites, and what&rsquo;s inspiring us right now.
        </p>

        {submitted ? (
          <div style={{ maxWidth: 440, margin: '0 auto', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '28px 24px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 32.5, color: 'var(--gc-navy)', marginBottom: 6 }}>You&rsquo;re in!</div>
            <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
              Watch your inbox for our next letter.
            </p>
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
                className="fld email-input"
                style={{ width: 320 }}
              />
              <button
                onClick={handleSubscribe}
                disabled={sending}
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 14px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 3 }}
              >
                {sending ? 'Joining…' : 'Join the Village'}
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
      </div>

      {/* PHOTO BANNER */}
      <div style={{ width: '100%', height: 320, overflow: 'hidden', background: 'var(--gc-navy)' }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6384.jpg?v=1784581853&width=1400"
          alt="Guests at the Better Together Brunch, a Girlhood Collective community event"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', transform: 'scale(0.55)', display: 'block' }}
        />
      </div>

      {/* WHAT SUBSCRIBERS GET */}
      <div style={{ background: '#fff', padding: '54px 44px' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>What&rsquo;s inside</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 35, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 28, textAlign: 'center' }}>Every issue, a little of everything.</h2>
        <div className="rgrid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 900, margin: '0 auto' }}>
          {VILLAGE_SECTIONS.map((s) => (
            <div key={s} style={{ border: '1px solid var(--gc-border)', borderRadius: 6, padding: '18px 20px', fontSize: 17, fontWeight: 600, color: 'var(--gc-slate)', textAlign: 'center' }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* ARCHIVE */}
      <div style={{ background: 'var(--gc-section)', padding: '56px 44px 64px' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>The archive</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Past issues</h2>
        <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 520, marginBottom: 26 }}>
          Catch up on what you missed. A little of everything we&rsquo;ve been up to.
        </p>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {ISSUES.map((i) => (
            <a
              key={i.vol}
              href={i.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              style={{ textDecoration: 'none', display: 'block', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${i.accent}`, padding: '24px 26px' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <span style={{ font: '700 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{i.vol}</span>
                <span style={{ font: '600 14px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{i.date}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 10, lineHeight: 1.4 }}>{i.title}</h3>
              <span style={{ font: '600 14px var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>Read this issue →</span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
