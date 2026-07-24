import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const FOUNDER_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2562.jpg?v=1774664826';
const FAMILY_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-brittany-family.jpg?v=1774545413';
const PERSONAL_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_9211.jpg?v=1774029457';

const STATS = [
  { value: '2025', label: 'Founded' },
  { value: '12+', label: 'Events hosted' },
  { value: '4', label: 'Community partners' },
  { value: '66%', label: 'Newsletter open rate' },
];

export default function About() {
  return (
    <div className="page-shell">
      <NavBar variant="navy" active="About" />

      {/* HERO */}
      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 52px' }}>
        <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>Our story</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 52, color: 'var(--gc-navy)', lineHeight: 1.04, maxWidth: 720 }}>
          Uniting makers, teachers, leaders &amp; learners{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>since 2025.</span>
        </div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, marginTop: 20 }}>
          We connect women and girls to the people, programs, and experiences that they've been missing — right here on Cincinnati's Greater Cincinnati.
        </p>
      </div>

      {/* FOUNDER */}
      <div style={{ background: '#fff', padding: '64px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 44, alignItems: 'center', maxWidth: 960, margin: '0 auto' }}>
          <div>
            <img
              src={FOUNDER_PHOTO}
              alt="Brittany Gruber, founder of Girlhood Collective"
              loading="lazy"
              style={{ width: 260, height: 300, objectFit: 'cover', objectPosition: 'center 10%', borderRadius: 8, display: 'block' }}
            />
          </div>
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Meet the founder</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Brittany Gruber</div>
            <div style={{ font: '600 12px var(--font-sans)', letterSpacing: '.04em', color: 'var(--gc-ink-muted)', marginBottom: 20 }}>Founder · Girlhood Collective</div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 14 }}>
              Girlhood Collective started the way most good things do — with a room, some folding chairs, and the stubborn belief that women and girls deserve spaces built on connection instead of performance. Because community shouldn't feel manufactured — we all deserve to find our village.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 22 }}>
              What began as a single workshop has grown into a community hub of events, workshops, florals, and neighbors — makers, teachers, leaders, and learners, all in the same room. Connecting the dots, it turns out, is the whole job.
            </p>
            <div style={{ borderLeft: '3px solid var(--gc-emerald)', paddingLeft: 18 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--gc-slate)', lineHeight: 1.6, marginBottom: 8 }}>
                "Connecting the dots is my superpower."
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-lavender)' }}>— BG</div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY THIS IS PERSONAL */}
      <div style={{ background: 'var(--gc-slate)', padding: '60px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 20 }}>Why this is personal</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.28, letterSpacing: '-.01em' }}>
              Diagnosed with ADHD and autism later in life, I know what it's like to navigate a world that wasn't built for the way your brain works best.
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, maxWidth: 680, marginTop: 24 }}>
              That journey fuels the work. I love helping others understand themselves, embrace their strengths, and advocate for what they need — and helping organizations learn what it really means to be genuinely inclusive.
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--gc-lavender-soft)', marginTop: 24 }}>— Brittany</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <img
              src={FAMILY_PHOTO}
              alt="Brittany with her family"
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
            <img
              src={PERSONAL_PHOTO}
              alt="Brittany Gruber"
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* BY THE NUMBERS */}
      <div style={{ background: '#fff', padding: '52px 44px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '0 40px', borderRight: i < STATS.length - 1 ? '1px solid var(--gc-border)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, color: 'var(--gc-emerald)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '52px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Want to build something <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>together?</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 22px' }}>
          Collaborations, partnerships, and good ideas are always welcome. Reach out directly.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/partners" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
            Become a partner
          </Link>
          <Link className="btn" to="/newsletter" style={{ border: '1.5px solid var(--gc-emerald)', color: 'var(--gc-emerald)', padding: '13.5px 28px' }}>
            Join the newsletter
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
