import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const SERVICES = [
  {
    id: 'consultation',
    n: '01',
    title: 'Strategic Consultation',
    kicker: 'Think · plan · decide',
    body: "A clear-eyed outside voice for the problem underneath the problem. We start with what's actually happening — not the board-meeting version — and find where a small, honest change moves everything downstream.",
    bullets: [
      "For founders, EDs, and leaders navigating something they can't quite name",
      'You leave with a diagnosis, a first step, and language for the room',
    ],
  },
  {
    id: 'hr',
    n: '02',
    title: 'HR & People Strategy',
    kicker: 'Culture · hiring · access',
    body: "Culture and environments designed for how people actually work — including neurodivergent access. Belonging isn't a training; it's how the room is built. I help you build it, from hiring practices to the way meetings run.",
    bullets: [
      'For teams losing good people quietly, or growing without a culture on purpose',
      'Environment audits, listening processes, and practical redesign — not policy theater',
    ],
  },
  {
    id: 'program',
    n: '03',
    title: 'Program Design',
    kicker: 'Build · rethink · reach',
    body: "Build or rethink what you offer — starting with the community you're trying to reach, not the program itself. Before we build anything, we learn who isn't showing up, why, and what they actually need. That work shapes everything downstream.",
    bullets: [
      "For nonprofits, schools, and civic orgs whose programming isn't landing",
      'Grounded in real community input, tested in real rooms',
    ],
  },
];

const STEPS = [
  { border: 'var(--gc-emerald)', n: '1', title: 'Start with the intake', body: 'An 8-minute diagnostic tells me what you\'re really carrying — before we ever talk.' },
  { border: 'var(--gc-lavender)', n: '2', title: 'A real conversation', body: 'No pitch, no pressure. An honest look at whether I\'m the right person for this.' },
  { border: '#d98cae', n: '3', title: 'Scoped to the situation', body: 'Every engagement is built for the actual problem — not a menu of packages.' },
];

export default function WorkWithMe() {
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
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 50, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.08 }}>
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
        <a className="navlink navlink--onwhite" href="#ugc">UGC &amp; Creator</a>
      </div>

      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
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

          <div id="ugc" style={{ scrollMarginTop: 80, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, padding: '44px 0 8px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, color: 'var(--gc-lavender-soft)', marginBottom: 8 }}>04</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', lineHeight: 1.2 }}>UGC &amp; Creator Partnerships</div>
              <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginTop: 10 }}>Felt · not sold</div>
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 16 }}>
                Authentic, community-rooted content for brands who want to be felt before they're sold. Real voice, real audience, real trust — the kind of creator work that reads like a neighbor's recommendation, not an ad.
              </p>
              <Link className="navlink navlink--onwhite" to="/ugc" style={{ color: 'var(--gc-emerald)' }}>
                See the portfolio &amp; rate card →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '58px 44px', borderTop: '1px solid var(--gc-border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 34 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>How it works</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)' }}>
            No packages. Just the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>right</span> fit.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, borderTop: `3px solid ${s.border}`, padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--gc-lavender-soft)', marginBottom: 10 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{s.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-slate)', padding: '58px 44px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 36, alignItems: 'flex-start' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3918.jpg?v=1783447727"
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
