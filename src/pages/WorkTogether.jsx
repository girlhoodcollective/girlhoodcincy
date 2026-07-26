import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import { useSEO, useStructuredData, faqSchema } from '../lib/seo.js';
import { SERVICES, FAQS } from '../data/content.js';

export default function WorkTogether() {
  useSEO({
    title: 'Work Together | Girlhood Collective Consulting & Speaking',
    description: 'Community Audit & Roadmap, Community Strategy Partnership, Event Design & Facilitation, and Speaking — pick the tier that fits your budget and commitment level.',
    path: '/work-together',
  });

  useStructuredData('faq', faqSchema(FAQS));

  return (
    <div className="page-shell">
      <NavBar variant="white" active="Work Together" />

      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px 58px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, right: -70, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,130,109,.14), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>
          <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Consulting · Events · Speaking
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 57.5, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
            Let&rsquo;s build something real, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>together.</span>
          </h1>
          <p style={{ fontSize: 20, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '22px 0 10px' }}>
            Girlhood Collective helps small businesses, health professionals, mission-driven organizations, and community members build real, lasting community — not through networking events or marketing gimmicks, but through the same hospitality and intentionality it takes to host a great gathering.
          </p>
          <p style={{ fontSize: 17.5, fontWeight: 400, color: 'var(--gc-ink)', marginTop: 18, marginBottom: 28 }}>
            Every partnership starts the same way — a conversation, not a pitch.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
              Let&rsquo;s Schedule a Time to Chat
            </Link>
            <Link className="btn" to="/consultation-intake" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '15px 28px' }}>
              Not sure where to start? Take the intake
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICE LADDER */}
      <div style={{ background: '#fff', padding: '58px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {SERVICES.map((s) => (
            <div key={s.id} className="hover-lift" style={{ border: '1px solid var(--gc-border)', borderRadius: 8, padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8, lineHeight: 1.25 }}>{s.title}</div>
              <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 16 }}>{s.cadence}</div>
              <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: 12, flexGrow: 1 }}>{s.body}</p>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--gc-ink-muted)' }}>{s.bestFor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY HIGHLIGHT */}
      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 14 }}>Case study</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 35, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>
              From zero awareness to campaign kickoff.
            </div>
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
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(0.8)', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--gc-section)', padding: '58px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Questions</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)' }}>What to expect</div>
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
            Let&rsquo;s Schedule a Time to Chat
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
