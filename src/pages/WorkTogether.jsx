import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { useSEO, useStructuredData, faqSchema } from '../lib/seo.js';
import { SERVICES, FAQS, PARTNERSHIP_TIERS, PARTNER_LOGOS } from '../data/content.js';

const PARTNER_INTERESTS = [
  { value: '', label: "I'm interested in…" },
  { value: 'community-collaborator', label: 'Community Collaborator' },
  { value: 'giveaway-product', label: 'Giveaway / Product Partner' },
  { value: 'season-sponsor', label: 'Season Sponsor' },
];

export default function WorkTogether() {
  useSEO({
    title: 'Work Together | Girlhood Collective Advisory Services',
    description: 'Community Partnership Strategy, Grants & Sponsorship Support, ERG & Workshop Facilitation, Leadership Coaching, and Fractional Operational Exec Services — pick the engagement that fits.',
    path: '/work-together',
  });

  useStructuredData('faq', faqSchema(FAQS));

  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerSending, setPartnerSending] = useState(false);
  const [partnerError, setPartnerError] = useState(false);
  const [partnerForm, setPartnerForm] = useState({ org: '', name: '', email: '', interest: '', msg: '' });

  const setPartnerField = (key) => (e) => setPartnerForm((f) => ({ ...f, [key]: e.target.value }));

  const handlePartnerSubmit = async () => {
    setPartnerSending(true);
    setPartnerError(false);
    try {
      await submitNetlifyForm('partners-contact', partnerForm);
      setPartnerSubmitted(true);
    } catch {
      setPartnerError(true);
    } finally {
      setPartnerSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="white" active="Work Together" />

      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px 58px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, right: -70, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,130,109,.14), transparent 70%)' }} />
        <div className="rgrid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
            <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
              Organizational & Community Health
            </div>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 57.5, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
              Let&rsquo;s build something real, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>together.</span>
            </h1>
            <p style={{ fontSize: 17.5, fontWeight: 400, color: 'var(--gc-ink)', marginTop: 22, marginBottom: 28 }}>
              Every partnership starts the same way — a conversation, not a pitch.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link className="btn" to="/contact" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
                Request a 20-Minute Fit Call
              </Link>
              <Link className="btn" to="/consultation-intake" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '15px 28px' }}>
                Not sure where to start? Take the intake
              </Link>
            </div>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/founder-in-studio.jpg?v=1783123475&width=560"
            alt="Brittany Gruber, founder of Girlhood Collective, in her studio"
            loading="lazy"
            style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 10, display: 'block' }}
          />
        </div>
      </div>

      {/* COLLABORATIVE NETWORK */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '52px 44px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>How I work</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 14 }}>
            Girlhood Collective is me — but you&rsquo;re never getting just one perspective.
          </h2>
          <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85 }}>
            I collaborate with a trusted network of doctors, teachers, community leaders, and local brands, so every partnership brings in real expertise and the right connections — whatever the scenario calls for.
          </p>
        </div>
      </div>

      {/* COMMUNITY COLLABORATORS */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10, textAlign: 'center' }}>Community Collaborators</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24, textAlign: 'center' }}>In good company.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
          {PARTNER_LOGOS.map((p) => (
            <div key={p.href} style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 8, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 18, overflow: 'hidden' }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', transform: p.zoom ? `scale(${p.zoom})` : undefined }}
                />
              </a>
              <p style={{ fontSize: 14, fontStyle: 'normal', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.5, textAlign: 'center', margin: '10px 4px 0' }}>
                {p.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE LADDER */}
      <div style={{ background: '#fff', padding: '58px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {SERVICES.map((s) => (
            <div key={s.id} className="hover-lift" style={{ border: '1px solid var(--gc-border)', borderRadius: 8, padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 14, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: 12, flexGrow: 1 }}>{s.body}</p>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-ink-muted)' }}>{s.bestFor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EMAIL CTA — after services */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '36px 44px', textAlign: 'center' }}>
        <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', marginBottom: 14 }}>
          Not sure which one fits? Skip the form — email me directly.
        </p>
        <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '14px 28px' }}>
          Email hello@girlhoodcincy.com →
        </a>
      </div>

      {/* CASE STUDY HIGHLIGHT */}
      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 14 }}>Case study</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 35, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>
              From zero awareness to campaign kickoff.
            </h2>
            <p style={{ fontSize: 18, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.8, marginBottom: 24, maxWidth: 480 }}>
              The Better Together Brunch turned a first-time nonprofit fundraiser into $3,000 raised, 10 new sponsors, and the start of a lasting community for Endurance in Education — all within a one-month planning window.
            </p>
            <div style={{ display: 'flex', gap: 28, marginBottom: 28, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32.5, color: '#fff' }}>$3,000</div>
                <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 4 }}>Raised</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32.5, color: '#fff' }}>10</div>
                <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 4 }}>Sponsors secured</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32.5, color: '#fff' }}>1 Month</div>
                <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 4 }}>Planning timeline</div>
              </div>
            </div>
            <Link className="btn" to="/better-together-recap" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '14px 26px' }}>
              Read the case study →
            </Link>
          </div>
          <div style={{ width: '100%', height: 320, borderRadius: 10, overflow: 'hidden', background: 'var(--gc-navy)' }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=640"
              alt="Guests and panelists together at the Better Together Brunch"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(0.7)', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* EMAIL CTA — after case study */}
      <div style={{ background: 'var(--gc-cream)', padding: '36px 44px', textAlign: 'center' }}>
        <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', marginBottom: 14 }}>
          Want results like this for your organization? Let&rsquo;s talk — no pitch, just a conversation.
        </p>
        <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '14px 28px' }}>
          Email hello@girlhoodcincy.com →
        </a>
      </div>

      {/* PARTNERSHIP TIERS */}
      <div style={{ background: 'var(--gc-section)', padding: '58px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>The neighborhood</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 46, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
            Partner <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>with us.</span>
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '20px auto 0' }}>
            Three ways to be part of Girlhood Cincy — from leading a session to sponsoring the season.
          </p>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {PARTNERSHIP_TIERS.map((t) => (
            <div key={t.id} className="hover-lift" style={{ border: '1px solid var(--gc-border)', borderRadius: 8, padding: '26px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{t.title}</h3>
              <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.08em', color: 'var(--gc-emerald)', marginBottom: 14 }}>{t.price}</div>
              <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EMAIL CTA — after partnership tiers */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '36px 44px', textAlign: 'center' }}>
        <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', marginBottom: 14 }}>
          Prefer to skip the form below? Email me directly about partnering.
        </p>
        <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '14px 28px' }}>
          Email hello@girlhoodcincy.com →
        </a>
      </div>

      {/* PARTNER INQUIRY FORM */}
      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Let's talk</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 37.5, fontWeight: 700, color: 'var(--gc-slate)' }}>
              Tell us about your <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>business.</span>
            </h2>
            <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '12px auto 0' }}>
              We&rsquo;ll be in touch within 2 business days.
            </p>
          </div>

          {partnerSubmitted ? (
            <div style={{ textAlign: 'center', background: 'var(--gc-sage-light)', border: '1px solid #dde6e2', borderRadius: 6, padding: '40px 28px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 37.5, color: 'var(--gc-slate)', marginBottom: 8 }}>Thank you!</div>
              <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
                Thanks — we&rsquo;ll be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Business / organization" aria-label="Business or organization" value={partnerForm.org} onChange={setPartnerField('org')} />
                <input className="fld" placeholder="Your name" aria-label="Your name" value={partnerForm.name} onChange={setPartnerField('name')} />
              </div>
              <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <input className="fld" placeholder="Your email" aria-label="Your email" value={partnerForm.email} onChange={setPartnerField('email')} />
                <select className="fld" aria-label="What you're interested in" value={partnerForm.interest} onChange={setPartnerField('interest')}>
                  {PARTNER_INTERESTS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <textarea
                className="fld"
                placeholder="Tell us about your business"
                aria-label="Tell us about your business"
                rows={4}
                value={partnerForm.msg}
                onChange={setPartnerField('msg')}
                style={{ marginBottom: 16 }}
              />
              {partnerError && (
                <p style={{ fontSize: 16, color: '#c0392b', marginBottom: 12 }}>
                  Something went wrong on our end — try again, or reach us directly at{' '}
                  <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a>.
                </p>
              )}
              <button
                onClick={handlePartnerSubmit}
                disabled={partnerSending}
                style={{ width: '100%', cursor: partnerSending ? 'default' : 'pointer', opacity: partnerSending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 14px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3 }}
              >
                {partnerSending ? 'Sending…' : 'Submit'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--gc-section)', padding: '58px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Questions</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)' }}>What to expect</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </div>

      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Not sure which one fits? <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let&rsquo;s talk it through.</span>
        </div>
        <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>
          The intake makes our conversation ten times more useful — or reach out directly and we&rsquo;ll find a time.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/contact" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
            Request a 20-Minute Fit Call
          </Link>
          <Link className="btn" to="/consultation-intake" style={{ border: '1px solid var(--gc-slate)', color: 'var(--gc-slate)', padding: '15px 28px' }}>
            Start the intake
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
