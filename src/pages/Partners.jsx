import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';

const DIRECTORY = [
  { border: '#c96a95', name: 'Pillar', tag: 'Pelvic Health & PT', tagColor: '#c96a95', body: "Women's pelvic health and physical therapy that meets you with real expertise and even realer talk." },
  { border: 'var(--gc-lavender)', name: 'Trillium', tag: 'Custom Cakes', tagColor: 'var(--gc-lavender)', body: 'Show-stopping custom cakes for the birthdays, showers, and Saturdays worth gathering around.' },
  { border: 'var(--gc-emerald)', name: 'Endurance in Education', tag: 'Youth Mentorship · Brunch Beneficiary', tagColor: 'var(--gc-emerald)', body: "Cross-industry mentorship building Cincinnati's next generation of leaders — and the cause behind Better Together." },
];

const WHY = [
  { icon: '🤝', border: 'var(--gc-emerald)', title: 'Engaged audience', body: 'Reach women of every age and industry through events, markets, and a newsletter with a 52–66% open rate.' },
  { icon: '💗', border: 'var(--gc-lavender)', title: 'Real community', body: 'Not impressions — relationships. Our partners become part of the neighborhood, not a logo on a banner.' },
  { icon: '🎓', border: '#c96a95', title: 'Tangible impact', body: 'A portion of event proceeds supports youth mentorship. Your name goes toward something that lasts.' },
];

const INTERESTS = [
  { value: '', label: "I'm interested in…" },
  { value: 'event', label: 'Event sponsorship' },
  { value: 'community', label: 'Community partnership' },
  { value: 'maker', label: 'Joining as a maker' },
  { value: 'collab', label: 'A collaboration' },
];

export default function Partners() {
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

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 52px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The neighborhood</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 52, color: 'var(--gc-navy)', lineHeight: 1.04, maxWidth: 640 }}>
            Built <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>alongside</span> good people.
          </div>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, marginTop: 20 }}>
            We partner with women-led businesses, educators, makers, and community leaders across Cincinnati. Because we're better together.
          </p>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3916.jpg?v=1783447727"
          alt="Brittany working with a student"
          loading="lazy"
          style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 10, border: '1px solid var(--gc-border)', display: 'block' }}
        />
      </div>

      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Our community partners</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 28 }}>In good company</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {DIRECTORY.map((p) => (
            <div key={p.name} className="hover-border" style={{ border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `4px solid ${p.border}`, padding: '28px 26px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 4 }}>{p.name}</div>
              <div style={{ font: '600 9px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: p.tagColor, marginBottom: 12 }}>{p.tag}</div>
              <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '56px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 34 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Why partner with us</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)' }}>A room worth being in</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {WHY.map((w) => (
            <div key={w.title} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 4, borderTop: `3px solid ${w.border}`, padding: '26px 24px' }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{w.icon}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{w.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{w.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Let's talk</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)' }}>
              Become a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>partner</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '12px auto 0' }}>
              Tell us a little about you and we'll reach out within a day or two. No pitch decks required.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', background: 'var(--gc-sage-light)', border: '1px solid #dde6e2', borderRadius: 6, padding: '40px 28px' }}>
              <div style={{ fontSize: 34, marginBottom: 10 }}>💌</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 30, color: 'var(--gc-slate)', marginBottom: 8 }}>Thank you!</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 4px' }}>
                We got your note and we'll be in touch within a day or two. Connecting the dots is our favorite part.
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--gc-lavender)', marginTop: 14 }}>— BG</div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Business / organization" value={form.org} onChange={setField('org')} />
                <input className="fld" placeholder="Your name" value={form.name} onChange={setField('name')} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Email address" value={form.email} onChange={setField('email')} />
                <select className="fld" value={form.interest} onChange={setField('interest')}>
                  {INTERESTS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <textarea
                className="fld"
                placeholder="Tell us a little about what you have in mind"
                rows={4}
                value={form.msg}
                onChange={setField('msg')}
                style={{ marginBottom: 16 }}
              />
              {error && (
                <p style={{ fontSize: 13, color: '#c0392b', marginBottom: 12 }}>
                  Something went wrong sending that — please email us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a> instead.
                </p>
              )}
              <button
                onClick={handleSubmit}
                disabled={sending}
                style={{ width: '100%', cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 11px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3 }}
              >
                {sending ? 'Sending…' : 'Send it our way'}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
