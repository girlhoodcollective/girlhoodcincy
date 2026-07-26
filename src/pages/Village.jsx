import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { useSEO } from '../lib/seo.js';
import { VILLAGE_SECTIONS } from '../data/content.js';

const ISSUES = [
  { vol: 'Vol. 08', date: 'June 2026', accent: 'var(--gc-blush)', title: 'The room where it happens', excerpt: 'A first look at the Better Together brunch, why we chose Endurance in Education, and how to grab a seat.' },
  { vol: 'Vol. 07', date: 'May 2026', accent: 'var(--gc-emerald)', title: 'Market season is here', excerpt: 'Meet the 20+ makers joining us this fall, plus a florals restock you will want to see.' },
  { vol: 'Vol. 06', date: 'April 2026', accent: 'var(--gc-lavender)', title: 'Ten girls, four Wednesdays', excerpt: 'Behind the scenes of the Studio Art Series — and what the girls said they were most proud of.' },
  { vol: 'Vol. 05', date: 'March 2026', accent: '#c96a95', title: 'On doing less, better', excerpt: 'A short note from BG on discernment, saying no, and why we protect the quiet.' },
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
      <NavBar variant="navy" active="Join the Village" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The Village</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 52, color: 'var(--gc-navy)', lineHeight: 1.08 }}>You&rsquo;re invited.</h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 520, margin: '16px auto 30px' }}>
          A free monthly letter for anyone building real community — resources, local favorites, and what&rsquo;s inspiring us right now.
        </p>

        {submitted ? (
          <div style={{ maxWidth: 440, margin: '0 auto', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '28px 24px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--gc-navy)', marginBottom: 6 }}>You&rsquo;re in!</div>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
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
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 16px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 3 }}
              >
                {sending ? 'Joining…' : 'Join the Village'}
              </button>
            </div>
            {error && (
              <p style={{ fontSize: 16, color: '#c0392b', marginTop: 14 }}>
                Please enter a valid email, or reach us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a>.
              </p>
            )}
          </div>
        )}
      </div>

      {/* WHAT SUBSCRIBERS GET */}
      <div style={{ background: '#fff', padding: '54px 44px' }}>
        <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>What&rsquo;s inside</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 28, textAlign: 'center' }}>Every issue, a little of everything.</div>
        <div className="rgrid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 900, margin: '0 auto' }}>
          {VILLAGE_SECTIONS.map((s) => (
            <div key={s} style={{ border: '1px solid var(--gc-border)', borderRadius: 6, padding: '18px 20px', fontSize: 16, fontWeight: 600, color: 'var(--gc-slate)', textAlign: 'center' }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* ARCHIVE */}
      <div style={{ background: 'var(--gc-section)', padding: '56px 44px 64px' }}>
        <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>The archive</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Past issues</div>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 520, marginBottom: 26 }}>
          Catch up on what you missed. A little of everything we&rsquo;ve been up to.
        </p>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {ISSUES.map((i) => (
            <div key={i.vol} className="hover-lift" style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${i.accent}`, padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <span style={{ font: '700 16px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{i.vol}</span>
                <span style={{ font: '600 16px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{i.date}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{i.title}</div>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{i.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
