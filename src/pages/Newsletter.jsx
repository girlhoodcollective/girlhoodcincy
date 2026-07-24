import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const ISSUES = [
  { vol: 'Vol. 08', date: 'June 2026', accent: 'var(--gc-blush)', title: 'The room where it happens', excerpt: 'A first look at the Better Together brunch, why we chose Endurance in Education, and how to grab a seat.' },
  { vol: 'Vol. 07', date: 'May 2026', accent: 'var(--gc-emerald)', title: 'Market season is here', excerpt: 'Meet the 20+ makers joining us this fall, plus a florals restock you will want to see.' },
  { vol: 'Vol. 06', date: 'April 2026', accent: 'var(--gc-lavender)', title: 'Ten girls, four Wednesdays', excerpt: 'Behind the scenes of the Studio Art Series — and what the girls said they were most proud of.' },
  { vol: 'Vol. 05', date: 'March 2026', accent: '#c96a95', title: 'On doing less, better', excerpt: 'A short note from BG on discernment, saying no, and why we protect the quiet.' },
  { vol: 'Vol. 04', date: 'February 2026', accent: 'var(--gc-slate)', title: 'Meet our newest partners', excerpt: 'Little Treasurer, Crown & Cape, Pillar Pelvic Health, and Cincy Mom Made — the neighbors making it all possible.' },
  { vol: 'Vol. 03', date: 'January 2026', accent: 'var(--gc-emerald)', title: 'Starting the year on purpose', excerpt: 'Intentions over resolutions, plus everything on the calendar for the season ahead.' },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Newsletter" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 56px', textAlign: 'center' }}>
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The newsletter</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 52, color: 'var(--gc-navy)', lineHeight: 1.08 }}>A Voice That Carries</div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 520, margin: '16px auto 8px' }}>
          The events, workshops, and neighbors worth knowing — delivered with warmth, never noise. Twice a month, from our Greater Cincinnati to your inbox.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--gc-emerald)' }}>52–66%</span>
          <span style={{ font: '600 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)' }}>open rate</span>
        </div>

        {submitted ? (
          <div style={{ maxWidth: 440, margin: '0 auto', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '28px 24px' }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>💌</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: 'var(--gc-navy)', marginBottom: 6 }}>You're on the list!</div>
            <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
              Watch your inbox — the next issue lands in a week or two. So glad you're here.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="you@cincinnati.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="fld"
              style={{ width: 320 }}
            />
            <button
              onClick={() => setSubmitted(true)}
              style={{ cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 11px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: '14px 26px', borderRadius: 3 }}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>

      <div style={{ background: '#fff', padding: '56px 44px 64px' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>The archive</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Past issues</div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          Catch up on what you missed. A little of everything we've been up to.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {ISSUES.map((i) => (
            <div key={i.vol} className="hover-lift" style={{ border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${i.accent}`, padding: '24px 26px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                <span style={{ font: '700 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{i.vol}</span>
                <span style={{ font: '600 11px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{i.date}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{i.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 14 }}>{i.excerpt}</p>
              <span style={{ font: '600 11px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gc-slate)' }}>Read issue →</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
