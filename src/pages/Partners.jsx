import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { useSEO } from '../lib/seo.js';
import { PARTNERSHIP_TIERS, CURRENT_PARTNERS } from '../data/content.js';

const INTERESTS = [
  { value: '', label: "I'm interested in…" },
  { value: 'community-collaborator', label: 'Community Collaborator' },
  { value: 'giveaway-product', label: 'Giveaway / Product Partner' },
  { value: 'season-sponsor', label: 'Season Sponsor' },
];

export default function Partners() {
  useSEO({
    title: 'Partner With Us | Girlhood Collective',
    description: 'Three ways to be part of Girlhood Cincy — from leading a session to sponsoring the season.',
    path: '/partners',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ org: '', name: '', email: '', interest: '', msg: '' });

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    setSending(true);
    setError(false);
    try {
      await submitNetlifyForm('partners-contact', form);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Partners" />

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The neighborhood</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 46, color: 'var(--gc-navy)', lineHeight: 1.1, maxWidth: 640, margin: '0 auto' }}>
          Partner <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>with us.</span>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '20px auto 0' }}>
          Three ways to be part of Girlhood Cincy — from leading a session to sponsoring the season.
        </p>
      </div>

      {/* TIERS */}
      <div style={{ background: '#fff', padding: '58px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {PARTNERSHIP_TIERS.map((t) => (
            <div key={t.id} className="hover-lift" style={{ border: '1px solid var(--gc-border)', borderRadius: 8, padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{t.title}</div>
              <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.08em', color: 'var(--gc-emerald)', marginBottom: 14 }}>{t.price}</div>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CURRENT PARTNERS */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>2026–27 Community Collaborators</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24, textAlign: 'center' }}>In good company.</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 900, margin: '0 auto' }}>
          {CURRENT_PARTNERS.map((name) => (
            <div key={name} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 100, padding: '10px 20px', fontSize: 16, fontWeight: 600, color: 'var(--gc-slate)' }}>
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* INQUIRY FORM */}
      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Let's talk</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)' }}>
              Tell us about your <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>business.</span>
            </div>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '12px auto 0' }}>
              We&rsquo;ll be in touch within 2 business days.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', background: 'var(--gc-sage-light)', border: '1px solid #dde6e2', borderRadius: 6, padding: '40px 28px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 30, color: 'var(--gc-slate)', marginBottom: 8 }}>Thank you!</div>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
                Thanks — we&rsquo;ll be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Business / organization" aria-label="Business or organization" value={form.org} onChange={setField('org')} />
                <input className="fld" placeholder="Your name" aria-label="Your name" value={form.name} onChange={setField('name')} />
              </div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Your email" aria-label="Your email" value={form.email} onChange={setField('email')} />
                <select className="fld" aria-label="What you're interested in" value={form.interest} onChange={setField('interest')}>
                  {INTERESTS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <textarea
                className="fld"
                placeholder="Tell us about your business"
                aria-label="Tell us about your business"
                rows={4}
                value={form.msg}
                onChange={setField('msg')}
                style={{ marginBottom: 16 }}
              />
              {error && (
                <p style={{ fontSize: 16, color: '#c0392b', marginBottom: 12 }}>
                  Something went wrong on our end — try again, or reach us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a>.
                </p>
              )}
              <button
                onClick={handleSubmit}
                disabled={sending}
                style={{ width: '100%', cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 16px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3 }}
              >
                {sending ? 'Sending…' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
