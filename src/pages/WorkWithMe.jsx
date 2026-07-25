import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';

const SERVICES = [
  {
    id: 'consultation',
    n: '01',
    title: 'Strategic Consultation',
    kicker: 'Think · plan · decide',
    body: 'An outside voice for the problem beneath the problem — we find the small, honest change that moves everything downstream.',
    bullets: [
      "For founders, EDs, and leaders navigating something they can't name",
      'A diagnosis, a first step, language for the room',
    ],
  },
  {
    id: 'hr',
    n: '02',
    title: 'HR & People Strategy',
    kicker: 'Culture · hiring · access',
    body: "Belonging isn't a training — it's how the room is built. I help you build it, from hiring to how meetings run.",
    bullets: [
      'For teams quietly losing good people, or growing without culture on purpose',
      'Real audits and redesign — not policy theater',
    ],
  },
  {
    id: 'program',
    n: '03',
    title: 'Program Design',
    kicker: 'Build · rethink · reach',
    body: "Built around who isn't showing up, not the program itself — we learn why, then build what actually reaches them.",
    bullets: [
      "For nonprofits, schools, and civic orgs whose programming isn't landing",
      'Grounded in real community input, tested in real rooms',
    ],
  },
];

const BRANDS = [
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4419.jpg?v=1784511473&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4050.jpg?v=1784511429&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4417.jpg?v=1784511337&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4418.jpg?v=1784510803&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4103.jpg?v=1784510675&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/Untitled_2Bdesign_2B_25286_2529.webp?v=1784503719&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/PillarLogoSalmon_edited_edited.png?v=1784503720&width=400', alt: 'Pillar' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/full-ks-logo.png?v=1784503720&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo-1.png?v=1784503720&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo-web.png?v=1784503719&width=400', alt: 'Brand we\'ve worked with' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo.png?v=1784511511&width=400', alt: 'Brand we\'ve worked with' },
];

const STEPS = [
  { border: 'var(--gc-emerald)', n: '1', title: 'Start with the intake', body: 'An 8-minute diagnostic tells me what you\'re really carrying — before we ever talk.' },
  { border: 'var(--gc-lavender)', n: '2', title: 'A real conversation', body: 'No pitch, no pressure. An honest look at whether I\'m the right person for this.' },
  { border: '#d98cae', n: '3', title: 'Scoped to the situation', body: 'Every engagement is built for your actual problem, not a template.' },
];

export default function WorkWithMe() {
  useSEO({
    title: 'Work With Me — Consulting, HR & Program Design | Girlhood Collective',
    description: 'Strategic consultation, HR & people strategy, and program design for organizations building rooms where people are truly understood.',
    path: '/work-with-me',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3918.jpg?v=1783447727&width=1200',
  });

  return (
    <div className="page-shell">
      <NavBar variant="white" active="Work With Me" />

      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px 58px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, right: -70, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,178,134,.14), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>
          <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Consulting · Facilitation · People strategy
          </div>
          <div className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 50, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.08 }}>
            Build a room where people are <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>understood.</span>
          </div>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '22px 0 28px' }}>
            I help organizations and the women inside them build environments where people are actually seen — combining people strategy, program design, and lived experience of navigating rooms that weren't built for how everyone works.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link className="btn" to="/consultation-intake" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
              Start the intake →
            </Link>
            <a className="btn" href="#book" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '15px 28px' }}>
              Book a call
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', borderBottom: '1px solid var(--gc-border)', padding: '16px 44px', display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', position: 'sticky', top: 57, zIndex: 90 }}>
        <a className="navlink navlink--onwhite" href="#consultation">Strategic Consultation</a>
        <a className="navlink navlink--onwhite" href="#hr">HR &amp; People Strategy</a>
        <a className="navlink navlink--onwhite" href="#program">Program Design</a>
      </div>

      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="rgrid"
              style={{
                scrollMarginTop: 80,
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 36,
                padding: i === 0 ? '0 0 44px' : '44px 0',
                borderBottom: '1px solid var(--gc-border)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, color: 'var(--gc-lavender-soft)', marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', lineHeight: 1.2 }}>{s.title}</div>
                <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginTop: 10 }}>{s.kicker}</div>
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 16 }}>{s.body}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.bullets.map((b) => (
                    <div key={b} style={{ fontSize: 14, color: 'var(--gc-ink-muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--gc-emerald)', fontWeight: 600 }}>✦</span>&nbsp;&nbsp;{b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '58px 44px', borderTop: '1px solid var(--gc-border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 34 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>How it works</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)' }}>
            No packages. Just the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>right</span> fit.
          </div>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, borderTop: `3px solid ${s.border}`, padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--gc-lavender-soft)', marginBottom: 10 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{s.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: '#fff', padding: '58px 44px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Trusted by</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24 }}>Brands we've worked with.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
            {BRANDS.map((b, i) => (
              <div
                key={b.src + i}
                style={{
                  background: '#fff',
                  border: '1px solid var(--gc-border)',
                  borderRadius: 8,
                  height: 110,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 18,
                }}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gc-slate)', padding: '58px 44px' }}>
        <div className="rgrid" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 36, alignItems: 'flex-start' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3918.jpg?v=1783447727&width=320"
            alt="Brittany at work"
            loading="lazy"
            style={{ width: 160, height: 190, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(255,255,255,.18)', display: 'block' }}
          />
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 18 }}>The lens I bring</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
              I don't theorize about rooms that weren't built for you. As a later-in-life AuDHD diagnosis and a Black woman in predominantly white civic spaces,{' '}
              <span style={{ color: 'var(--gc-lavender-soft)' }}>I've navigated them from the inside.</span>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, marginTop: 20 }}>
              That's pattern recognition, not just frameworks. It shapes how I listen, how I facilitate, and what I notice before anyone says a word — and it's why the work usually isn't about fixing the person. It's about fixing the room they were given.
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-lavender-soft)', marginTop: 22 }}>— Brittany</div>
          </div>
        </div>
      </div>

      <div id="book" style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Let's get to <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>work.</span>
        </div>
        <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>
          The best first step is the intake — it makes our conversation ten times more useful. Or reach out directly and we'll find a time.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/consultation-intake" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
            Start the intake
          </Link>
          <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ border: '1px solid var(--gc-slate)', color: 'var(--gc-slate)', padding: '15px 28px' }}>
            Email hello@girlhoodcincy.com
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
