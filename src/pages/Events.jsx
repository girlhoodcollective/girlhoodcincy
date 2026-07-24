import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

const EVENTS = [
  {
    id: 'brunch', mon: 'Jul', day: '18', year: '2026', cat: 'Brunch',
    badgeBg: 'var(--gc-blush)', badgeText: 'var(--gc-slate)',
    title: 'Better, together.', where: 'Sat, Jul 18 · 10 AM–1 PM · Columbia Center',
    price: '$75 per seat · benefiting EIE',
    desc: "Our flagship fundraiser — an intimate, seated brunch bringing Cincinnati's most engaged women into one room to connect, learn from an expert panel, and give.",
    long: "More than a brunch. An upscale, seated morning of expert panelists, a real EIE student story, and generous conversation — with a portion of every $75 seat going directly to Endurance in Education's youth mentorship work. Saturday, July 18, 2026 · 10 AM–1 PM at the Columbia Center.",
  },
  {
    id: 'market', mon: 'Sep', day: '13', year: '2026', cat: 'Market',
    badgeBg: 'var(--gc-sage-light)', badgeText: 'var(--gc-emerald)',
    title: 'Girlhood Goes to Market', where: 'Fall Makers Market · Cincinnati',
    price: 'Free · All ages',
    desc: 'Local makers, florals, and neighbors — an afternoon of finding your people and supporting the women building things across Greater Cincinnati.',
    long: 'A free, open-to-all afternoon market featuring 20+ local women makers, seasonal florals from the shop, and live music. Bring a friend, bring your kids, bring cash for the makers.',
  },
  {
    id: 'studio', mon: 'Oct', day: '02', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Studio Art Series', where: '4 Wednesdays · Girls 9+',
    price: '$150 · materials included',
    desc: 'An immersive four-week workshop where girls use art as a tool for self-expression, reflection, and confidence building. No experience required.',
    long: 'Four Wednesdays of ink, watercolor, acrylics, and oil pastels — guided by a local artist in a small, supportive studio of ten. Every student leaves with finished pieces to hang and be genuinely proud of.',
  },
  {
    id: 'florals', mon: 'Nov', day: '07', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'An Evening of Florals', where: 'Seasonal Arranging · Ages 16+',
    price: '$75 · flowers & vessel included',
    desc: 'A slow, hands-on evening building your own seasonal arrangement — a little wine, a lot of greenery, and space to breathe.',
    long: 'Learn the basics of seasonal arranging with florals fresh from the shop. You bring yourself; we bring the blooms, the vessel, and a warm room full of good company. Leave with an arrangement for your table.',
  },
  {
    id: 'holiday', mon: 'Dec', day: '06', year: '2026', cat: 'Market',
    badgeBg: 'var(--gc-sage-light)', badgeText: 'var(--gc-emerald)',
    title: 'Holiday Neighbors Market', where: 'Winter Market · The Columbia Center',
    price: 'Free · All ages',
    desc: 'Greater Cincinnati comes together one more time before the year closes — gifts, greenery, cocoa, and the neighbors you love.',
    long: 'Our cozy winter market: handmade gifts from local women makers, holiday florals and wreaths, hot cocoa for the kids, and a warm room to end the year in.',
  },
  {
    id: 'intentions', mon: 'Jan', day: '17', year: '2027', cat: 'Brunch',
    badgeBg: 'var(--gc-blush)', badgeText: 'var(--gc-slate)',
    title: 'New Year Intentions Brunch', where: "Women's Brunch · Cincinnati",
    price: 'From $55',
    desc: 'A quiet, intentional brunch to start the year on purpose — journaling, honest conversation, and women of every age at one table.',
    long: 'No resolutions, no pressure. Just a seated brunch, a guided intention-setting session, and a room of women choosing to start the year with clarity and community.',
  },
];

const PAST = [
  { title: 'Spring Studio Art Series', caption: 'April 2025 · 10 students' },
  { title: 'Rooftop Summer Social', caption: 'July 2025 · Cincinnati' },
  { title: 'Back-to-School Market', caption: 'August 2025 · 22 makers' },
  { title: "Founders' Coffee", caption: "February 2025 · Where it began" },
];

const CATS = ['All', 'Brunch', 'Market', 'Workshop'];

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [detailId, setDetailId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', seats: '1', note: '' });

  const detail = EVENTS.find((e) => e.id === detailId) || null;
  const visible = EVENTS.filter((e) => filter === 'All' || e.cat === filter);
  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const openDetail = (id) => {
    setDetailId(id);
    setSubmitted(false);
    setForm({ name: '', email: '', seats: '1', note: '' });
  };
  const closeDetail = () => setDetailId(null);

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Events & Workshops" />

      <div style={{ background: 'var(--gc-slate)', padding: '56px 44px 52px' }}>
        <div style={{ width: 54, height: 4, background: 'var(--gc-emerald)', borderRadius: 2, marginBottom: 24 }} />
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 16 }}>Events &amp; Workshops</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, color: '#fff', lineHeight: 1.04, maxWidth: 640 }}>
          Gather, make, <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender-soft)' }}>belong.</span>
        </div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, maxWidth: 520, marginTop: 20 }}>
          Brunches that fill a room, markets that build a neighborhood, and workshops where girls find their creative voice. Come as you are.
        </p>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Upcoming</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)' }}>What's coming up next</div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CATS.map((c) => (
              <button key={c} className={`fbtn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {visible.map((e) => (
            <div key={e.id} className="hover-shadow" style={{ display: 'flex', border: '1px solid var(--gc-border)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ background: 'var(--gc-slate)', width: 120, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '22px 12px' }}>
                <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)' }}>{e.mon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: '#fff', lineHeight: 1 }}>{e.day}</div>
                <div style={{ font: '400 12px var(--font-sans)', color: 'rgba(255,255,255,.55)' }}>{e.year}</div>
              </div>
              <div style={{ padding: '22px 28px', flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-block', font: '700 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, background: e.badgeBg, color: e.badgeText }}>
                    {e.cat}
                  </span>
                  <span style={{ font: '400 12.5px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.where}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{e.title}</div>
                <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.65, maxWidth: 600, marginBottom: 14 }}>{e.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <button
                    onClick={() => openDetail(e.id)}
                    style={{ cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: 3 }}
                  >
                    Details &amp; RSVP
                  </button>
                  <span style={{ font: '600 12px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '56px 44px' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Looking back</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Seriously proud of what we made.</div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
          A look back at the rooms we've filled since 2025. Drop your own photos in to bring the gallery to life.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {PAST.map((p) => (
            <div key={p.title} className="hover-caption">
              <ImageSlot label={p.title} height={180} radius={6} />
              <div className="hover-caption-target" style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--gc-slate)', marginTop: 12, transition: 'color .2s' }}>
                {p.title}
              </div>
              <div style={{ font: '600 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 3 }}>{p.caption}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {detail && (
        <div
          onClick={closeDetail}
          style={{ position: 'fixed', inset: 0, background: 'rgba(27,34,54,.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 500, padding: 24 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 6, maxWidth: 560, width: '100%', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 70px rgba(27,34,54,.4)' }}>
            <div style={{ background: 'var(--gc-slate)', padding: '28px 32px', position: 'relative' }}>
              <button
                onClick={closeDetail}
                style={{ position: 'absolute', top: 18, right: 20, background: 'rgba(255,255,255,.12)', border: 'none', color: '#fff', width: 30, height: 30, borderRadius: '50%', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}
              >
                ×
              </button>
              <span style={{ display: 'inline-block', font: '700 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, background: detail.badgeBg, color: detail.badgeText, marginBottom: 12 }}>
                {detail.cat}
              </span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{detail.title}</div>
              <div style={{ font: '400 13px var(--font-sans)', color: 'rgba(255,255,255,.72)' }}>
                {detail.mon} {detail.day}, {detail.year} · {detail.where}
              </div>
            </div>
            <div style={{ padding: '28px 32px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 34, marginBottom: 10 }}>🎉</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 30, color: 'var(--gc-slate)', marginBottom: 8 }}>You're in!</div>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 20px' }}>
                    We'll reach out within a day or two with everything you need. Can't wait to see you there.
                  </p>
                  <button
                    onClick={closeDetail}
                    style={{ cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 10px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: 3 }}
                  >
                    Back to events
                  </button>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: 20 }}>{detail.long}</p>
                  <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 14 }}>Reserve your spot</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <input className="fld" placeholder="Your name" value={form.name} onChange={setField('name')} />
                    <input className="fld" placeholder="Email address" value={form.email} onChange={setField('email')} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <select className="fld" value={form.seats} onChange={setField('seats')}>
                      <option value="1">1 seat</option>
                      <option value="2">2 seats</option>
                      <option value="3">3 seats</option>
                      <option value="4">4 seats</option>
                      <option value="5">5+ seats</option>
                    </select>
                    <input className="fld" value={detail.title} readOnly style={{ background: 'var(--gc-section)', color: 'var(--gc-ink-muted)' }} />
                  </div>
                  <textarea
                    className="fld"
                    placeholder="Anything we should know? (optional)"
                    rows={2}
                    value={form.note}
                    onChange={setField('note')}
                    style={{ marginBottom: 16 }}
                  />
                  <button
                    onClick={() => setSubmitted(true)}
                    style={{ width: '100%', cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 11px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3 }}
                  >
                    Confirm my RSVP
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
