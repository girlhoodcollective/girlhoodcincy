import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { useSEO } from '../lib/seo.js';
import '../styles/utilityPages.css';

const COLLAB_TYPES = ['Co-host an event', 'Sponsor an event', 'Partner on a collaboration', 'Something else'];

const LABEL_STYLE = { display: 'block', fontSize: 16, fontWeight: 600, color: 'var(--gc-slate)', marginBottom: 8 };

export default function EventCollaboration() {
  useSEO({
    title: 'Event Collaboration | Girlhood Collective',
    description: 'Want to co-host, sponsor, or partner with Girlhood Collective on an upcoming event? Tell us what you have in mind.',
    path: '/event-collaboration',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [collabType, setCollabType] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSending(true);
    setSubmitError(false);
    try {
      await submitNetlifyForm('event-collaboration', {
        name: name.trim(),
        email: email.trim(),
        org: org.trim(),
        collabType,
        message: message.trim(),
      });
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <div className="up-grain" />
      <NavBar variant="white" ctaColor="var(--gc-navy)" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', position: 'relative', overflow: 'hidden' }}>
        <div className="up-ghost up-ghost--italic" aria-hidden="true" style={{ top: '-6%', right: '30%', fontSize: 'clamp(140px,16vw,240px)' }}>&amp;</div>
        <Reveal style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div className="up-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="up-dot" aria-hidden="true" />
            For partners
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 47.5, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.15 }}>
            Let&rsquo;s collaborate.
          </h1>
          <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.8, maxWidth: 480, margin: '16px auto 0' }}>
            Want to co-host, sponsor, or partner with us on an upcoming event? Tell us what you have in mind and we&rsquo;ll follow up.
          </p>
        </Reveal>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px 80px' }}>
        <Reveal style={{ maxWidth: 560, margin: '0 auto' }}>
          {submitted ? (
            <div style={{ background: 'var(--gc-sage-light)', border: '1px solid var(--gc-border)', borderRadius: 14, padding: '32px 28px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-navy)', marginBottom: 8 }}>
                Thanks for reaching out.
              </div>
              <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6 }}>
                We&rsquo;ll be in touch soon to talk through what you have in mind.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label htmlFor="ec-name" style={LABEL_STYLE}>Your name</label>
                <input id="ec-name" className="fld" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="ec-email" style={LABEL_STYLE}>Your email</label>
                <input id="ec-email" className="fld" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="ec-org" style={LABEL_STYLE}>Organization or business</label>
                <input id="ec-org" className="fld" type="text" value={org} onChange={(e) => setOrg(e.target.value)} />
              </div>
              <div>
                <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>What kind of collaboration?</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                  {COLLAB_TYPES.map((t) => {
                    const sel = collabType === t;
                    return (
                      <div
                        key={t}
                        onClick={() => setCollabType(t)}
                        style={{
                          padding: '10px 16px', border: `1.5px solid ${sel ? 'var(--gc-navy)' : 'var(--gc-border)'}`, borderRadius: 100, cursor: 'pointer',
                          fontSize: 16, color: sel ? '#fff' : 'var(--gc-slate)', background: sel ? 'var(--gc-navy)' : '#fff', transition: 'all .2s', userSelect: 'none',
                        }}
                      >
                        {t}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <label htmlFor="ec-message" style={LABEL_STYLE}>Tell us what you have in mind</label>
                <textarea
                  id="ec-message"
                  className="fld"
                  required
                  rows={5}
                  style={{ resize: 'vertical' }}
                  placeholder="e.g. We'd love to sponsor an upcoming market, or co-host a workshop for our members…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn" disabled={sending} style={{ background: 'var(--gc-navy)', color: '#fff', padding: '15px 30px', opacity: sending ? 0.7 : 1, cursor: sending ? 'default' : 'pointer' }}>
                {sending ? 'Sending…' : 'Submit request'}
              </button>
              {submitError && (
                <p style={{ fontSize: 16, color: '#c0392b', textAlign: 'center' }}>
                  Something went wrong. Please email us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com">hello@girlhoodcincy.com</a>.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
