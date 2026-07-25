import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { useSEO, useStructuredData, faqSchema } from '../lib/seo.js';
import { CONTACT_FAQS } from '../data/content.js';

export default function Contact() {
  useSEO({
    title: "Let's Schedule a Time to Chat | Girlhood Collective",
    description: 'Twenty minutes, no pitch — just a conversation about what you\'re building.',
    path: '/contact',
  });

  useStructuredData('contact-faq', faqSchema(CONTACT_FAQS));

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim()) return;
    setSending(true);
    setError(false);
    try {
      await submitNetlifyForm('contact', form);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="white" active="Contact" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>Contact</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 44, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.12, maxWidth: 640, margin: '0 auto' }}>
          Let&rsquo;s schedule a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>time to chat.</span>
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 480, margin: '18px auto 0' }}>
          Twenty minutes, no pitch — just a conversation about what you&rsquo;re building.
        </p>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', background: 'var(--gc-sage-light)', border: '1px solid #dde6e2', borderRadius: 6, padding: '40px 28px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 28, color: 'var(--gc-slate)', marginBottom: 8 }}>Thank you!</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7 }}>
                Thanks — we&rsquo;ll be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Your name" aria-label="Your name" value={form.name} onChange={setField('name')} />
                <input className="fld" type="email" placeholder="Your email" aria-label="Your email" value={form.email} onChange={setField('email')} />
              </div>
              <textarea
                className="fld"
                placeholder="What's on your mind?"
                aria-label="What's on your mind?"
                rows={4}
                value={form.msg}
                onChange={setField('msg')}
                style={{ marginBottom: 16 }}
              />
              {error && (
                <p style={{ fontSize: 13, color: '#c0392b', marginBottom: 12 }}>
                  Something went wrong on our end — try again, or reach us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a>.
                </p>
              )}
              <button
                onClick={handleSubmit}
                disabled={sending}
                style={{ width: '100%', cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 11px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3, marginBottom: 20 }}
              >
                {sending ? 'Sending…' : 'Send'}
              </button>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', textAlign: 'center' }}>
                Prefer email? Reach us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: 'var(--gc-emerald)' }}>hello@girlhoodcincy.com</a>.
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '52px 44px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16, textAlign: 'center' }}>Quick questions</div>
          <FaqAccordion items={CONTACT_FAQS} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
