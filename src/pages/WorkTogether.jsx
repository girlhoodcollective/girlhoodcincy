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
          <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Consulting · Events · Speaking
          </div>
          <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
            Let&rsquo;s build something real, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>together.</span>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '22px 0 10px' }}>
            Girlhood Collective helps small businesses, health professionals, mission-driven organizations, and community members build real, lasting community — not through networking events or marketing gimmicks, but through the same hospitality and intentionality it takes to host a great gathering.
          </p>
          <p style={{ fontSize: 16, fontWeight: 400, color: 'var(--gc-ink)', marginTop: 18, marginBottom: 28 }}>
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
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8, lineHeight: 1.25 }}>{s.title}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--gc-emerald)' }}>{s.price}</div>
              <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 16 }}>{s.cadence}</div>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: 12, flexGrow: 1 }}>{s.body}</p>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--gc-ink-muted)' }}>{s.bestFor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--gc-section)', padding: '58px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Questions</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)' }}>What to expect</div>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </div>

      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Not sure which one fits? <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let&rsquo;s talk it through.</span>
        </div>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>
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
