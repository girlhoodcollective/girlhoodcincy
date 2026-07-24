import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

const STATS = [
  { value: '52–66%', label: 'Newsletter open rate' },
  { value: '12+', label: 'Events produced' },
  { value: 'Cincy', label: 'Cincinnati rooted' },
];

const FORMATS = [
  { border: 'var(--gc-emerald)', title: 'Short-form video', body: 'Reels & TikToks that feel like a friend talking — hooks, voiceover, and honest product moments.' },
  { border: 'var(--gc-lavender)', title: 'Photo & lifestyle', body: 'Warm, natural stills for your feed, site, and ads — in real spaces with real people.' },
  { border: 'var(--gc-slate)', title: 'Written & email', body: 'Captions, newsletters, and brand voice that carries — the words behind a 52–66% open rate.' },
];

const RATES = [
  { eyebrow: 'Single piece', title: 'One video or photo set', body: 'Concept, shoot, and edit for one deliverable with usage rights.', price: 'from $250', featured: false },
  { eyebrow: 'Content bundle', title: '3–5 pieces, mixed formats', body: 'A cohesive set for a launch or campaign — video, photo, and captions.', price: 'from $800', featured: true },
  { eyebrow: 'Monthly retainer', title: 'Ongoing partnership', body: 'A steady stream of content plus strategy — for brands building over time.', price: "let's talk", featured: false },
];

export default function UGC() {
  return (
    <div className="page-shell">
      <NavBar variant="white" active="Tools" />

      <div style={{ background: 'var(--gc-cream)', padding: '62px 44px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, right: -70, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,178,134,.14), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>
          <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            UGC &amp; creator partnerships · for brands
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
            Content that gets <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>felt</span> — before it's sold.
          </div>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 560, margin: '22px 0 28px' }}>
            Authentic, community-rooted content for brands who want to read like a neighbor's recommendation, not an ad. Real voice, real audience, real trust — from someone who's spent years building exactly that in Cincinnati.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
              Start a collaboration →
            </a>
            <a className="btn" href="#rates" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '15px 28px' }}>
              See the rate card
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', borderBottom: '1px solid var(--gc-border)', padding: '34px 44px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '0 38px', borderRight: i < STATS.length - 1 ? '1px solid var(--gc-border)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, color: 'var(--gc-emerald)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>What I make</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 30 }}>
          Formats that <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender)' }}>land.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {FORMATS.map((f) => (
            <div key={f.title} style={{ border: '1px solid var(--gc-border)', borderRadius: 8, borderTop: `3px solid ${f.border}`, padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{f.title}</div>
              <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px', borderTop: '1px solid rgba(45,52,71,.06)' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Selected work</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24 }}>A few recent pieces.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {['Reel / cover', 'Product still', 'Lifestyle', 'Campaign'].map((label) => (
            <ImageSlot key={label} label={label} height={240} radius={10} style={{ background: '#fff', border: '1px solid var(--gc-border)' }} />
          ))}
        </div>
        <p style={{ fontSize: 12.5, fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: 14 }}>Drag your own samples onto the frames above — they'll stay put.</p>
      </div>

      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 18 }}>The approach</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
            She feels seen before she feels sold to. <span style={{ color: 'var(--gc-lavender-soft)' }}>That's the standard for everything I make.</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, marginTop: 20 }}>
            I don't chase trends or perform enthusiasm. I make content the way I build community — with discernment, warmth, and a real point of view. Brands come to me because my audience trusts me, and that trust doesn't transfer to things I don't believe in.
          </p>
        </div>
      </div>

      <div id="rates" style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Rate card</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)' }}>
            Starting points, not <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender)' }}>packages.</span>
          </div>
          <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, maxWidth: 480, margin: '10px auto 0' }}>
            Every brand is scoped to fit. These give you a sense of where things begin.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 920, margin: '0 auto' }}>
          {RATES.map((r) => (
            <div
              key={r.eyebrow}
              style={{
                border: r.featured ? '1.5px solid var(--gc-emerald)' : '1px solid var(--gc-border)',
                borderRadius: 10,
                padding: '28px 26px',
                position: 'relative',
              }}
            >
              {r.featured && (
                <div style={{ position: 'absolute', top: -11, left: 26, background: 'var(--gc-emerald)', color: '#fff', font: '700 9px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>
                  Most popular
                </div>
              )}
              <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>{r.eyebrow}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{r.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, marginBottom: 16 }}>{r.body}</p>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--gc-slate)' }}>{r.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Let's make something <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>worth trusting.</span>
        </div>
        <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto 24px' }}>
          Tell me about your brand and what you're launching — I'll come back with a real idea, not a template.
        </p>
        <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 30px' }}>
          Email hello@girlhoodcincy.com
        </a>
      </div>

      <Footer />
    </div>
  );
}
