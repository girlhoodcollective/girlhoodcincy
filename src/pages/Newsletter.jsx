import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { useSEO } from '../lib/seo.js';

const ISSUES = [
  { vol: 'Issue 05', date: 'June 2026', accent: 'var(--gc-blush)', title: 'One Month Until Our First Fundraiser — Sponsor Highlights & Hyde Park Market Preview', url: 'https://preview.mailerlite.io/preview/1805515/emails/191026880087852582' },
  { vol: 'Issue 04', date: 'May 2026', accent: 'var(--gc-emerald)', title: 'Brunch News & Market Fun', url: 'https://preview.mailerlite.io/preview/1805515/emails/188546365699130527' },
  { vol: 'Issue 03', date: 'May 2026', accent: 'var(--gc-lavender)', title: 'Summer Is Coming! Updates Inside', url: 'https://preview.mailerlite.io/preview/1805515/emails/187929868071077793' },
  { vol: 'Issue 02', date: 'May 2026', accent: '#c96a95', title: 'Girlhood Community Spotlights & News', url: 'https://preview.mailerlite.io/preview/1805515/emails/186202367462474900' },
  { vol: 'Issue 01', date: 'April 2026', accent: 'var(--gc-slate)', title: 'Girlhood Collective Newsletter Issue 1', url: 'https://preview.mailerlite.io/preview/1805515/emails/185545856632489332' },
];

export default function Newsletter() {
  useSEO({
    title: 'The Newsletter: A Voice That Carries — Girlhood Collective',
    description: 'Join the Girlhood Collective newsletter for Cincinnati events, workshops, and neighbors worth knowing.',
    path: '/newsletter',
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
      <NavBar variant="navy" active="Newsletter" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 56px', textAlign: 'center' }}>
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The newsletter</div>
        <div className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 52, color: 'var(--gc-navy)', lineHeight: 1.08 }}>A Voice That Carries</div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 520, margin: '16px auto 28px' }}>
          The events, workshops, and neighbors worth knowing — delivered with warmth, never noise. Twice a month, from our Greater Cincinnati to your inbox.
        </p>
        {submitted ? (
          <div style={{ maxWidth: 440, margin: '0 auto', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '28px 24px' }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>💌</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--gc-navy)', marginBottom: 6 }}>You're on the list!</div>
            <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
              Watch your inbox — the next issue lands in a week or two. So glad you're here.
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
                className="fld email-input"
                style={{ width: 320 }}
              />
              <button
                onClick={handleSubscribe}
                disabled={sending}
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 11px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 3 }}
              >
                {sending ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>
            {error && (
              <p style={{ fontSize: 13, color: '#c0392b', marginTop: 14 }}>
                Something went wrong sending that — please email us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a> instead.
              </p>
            )}
          </div>
        )}
      </div>

      <div style={{ background: '#fff', padding: '56px 44px 64px' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>The archive</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Past issues</div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          Catch up on what you missed. A little of everything we've been up to.
        </p>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {ISSUES.map((i) => (
            <a key={i.vol} href={i.url} target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: 'block', border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${i.accent}`, padding: '24px 26px', textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <span style={{ font: '700 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{i.vol}</span>
                <span style={{ font: '600 11px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{i.date}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 14 }}>{i.title}</div>
              <span style={{ font: '600 11px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gc-slate)' }}>Read issue →</span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
