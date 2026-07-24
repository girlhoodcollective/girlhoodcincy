import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ImageSlot from '../components/ImageSlot.jsx';

const EVENTS = [
  {
    id: 'market', mon: 'Sep', day: '13', year: '2026', cat: 'Market',
    badgeBg: 'var(--gc-sage-light)', badgeText: 'var(--gc-emerald)',
    title: 'Girlhood Goes to Market', where: 'Fall Makers Market · Cincinnati',
    price: 'Free · All ages',
    desc: 'Local makers, florals, and neighbors — an afternoon of finding your people and supporting the women building things across Greater Cincinnati.',
    long: 'A free, open-to-all afternoon market featuring 20+ local women makers, seasonal florals from the shop, and live music. Bring a friend, bring your kids, bring cash for the makers.',
  },
  {
    id: 'dream-big', mon: 'Sep', day: '12', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Dream Big', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "A vision board, a mini dance session, and a letter to your future self — with Jess Evans of Dance Factory Fitness on goal-setting and dreaming with purpose.",
    long: "Meet Jess Evans and hear her story of leaving NYC to open Dance Factory Fitness. A confidence-building dance-cardio session, hands-on vision board building, and a future-self letter to open in a year. 120 minutes · girls 8–12.",
  },
  {
    id: 'bloom-confidence', mon: 'Oct', day: '10', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Bloom with Confidence', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "Build a paper-petal \"Confidence Garden\" naming your strengths and coping tools, with play therapist Val Strunk of Wired to Bloom.",
    long: "Meet Val Strunk and learn what a play therapist actually does. Build a Confidence Garden keepsake — each petal names a strength or coping tool — plus a guided journal prompt on what helps you bloom on a hard day. 120 minutes · girls 8–12.",
  },
  {
    id: 'treasure-story', mon: 'Nov', day: '14', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Treasure Your Story', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "Decorate a keepsake treasure box, learn saving vs. spending, and set a savings goal — with Courtney Reinhold of Little Treasurer.",
    long: "Meet Courtney Reinhold and the story behind Little Treasurer and Finley the panda. A money-basics mini-lesson (coin ID, saving vs. spending, goal setting), a decorated keepsake treasure box, and a short memory or goal story to put inside. 120 minutes · girls 8–12.",
  },
  {
    id: 'sweet-success', mon: 'Dec', day: '12', year: '2026', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Sweet Success', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Decorate cupcakes or cookies and design the packaging to give them away — with Trillium Cake Co. on small-business basics.',
    long: "Meet the Trillium Cake Co. baker and her small-business story. Decorate cupcakes or cookies, then a mini branding lesson to design a simple label or box before gifting your treats to someone you choose. 120 minutes · girls 8–12.",
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
    id: 'every-brain-belongs', mon: 'Jan', day: '09', year: '2027', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Every Brain Belongs', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Build a personalized learning toolkit and explore how every brain learns differently, with Dana Huls of Learn With Me Cincy.',
    long: "Meet Dana Huls and her work on math anxiety and learning differences. Identify your own visual, auditory, or hands-on learning style, build a personalized toolkit, and reflect on a growth-mindset journal prompt. 120 minutes · girls 8–12.",
  },
  {
    id: 'building-community', mon: 'Feb', day: '13', year: '2027', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Building Community', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Design a kindness campaign or neighborhood guide in small groups, with Abbey Cummins of Everything Cincy.',
    long: "Meet Abbey Cummins and how she built Everything Cincy to connect people to the city. Small groups design a kindness campaign or mini neighborhood guide, present it to the room, then assemble a take-home community challenge kit. 120 minutes · girls 8–12.",
  },
  {
    id: 'ready-to-lead', mon: 'Mar', day: '13', year: '2027', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Ready to Lead', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'A team challenge and an intro to emergency preparedness, with an American Red Cross volunteer.',
    long: "An intro-level taste of preparedness (not a certification course): build a mini emergency kit, practice a scenario as a team, and talk through what to do and who to call. Every girl leaves with a take-home preparedness resource kit. 120 minutes · girls 8–12.",
  },
  {
    id: 'mix-it-up', mon: 'Apr', day: '10', year: '2027', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Mix It Up', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Create a signature mocktail, name it, and design the menu card — with the founder behind Nava.',
    long: "Meet the Nava founder and her story building a coffee and beverage brand from a truck. Small groups create a signature mocktail recipe, design a simple menu card, name and brand the drink, then taste-test and serve each other. 120 minutes · girls 8–12.",
  },
  {
    id: 'launch-big-idea', mon: 'May', day: '08', year: '2027', cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Launch Your Big Idea', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Develop a business idea, sketch a logo, package a product, and pitch it — with Truckshop founder Ashley Volbrecht.',
    long: "Meet Ashley Volbrecht, founder of Truckshop, and her origin story. Develop a simple business idea, sketch a logo, package a sample product, and practice a one-minute pitch in pairs — with volunteers pitching to the whole group. 120 minutes · girls 8–12.",
  },
];

const PAST = [
  { title: 'Better, Together — Girlhood Brunch', caption: 'July 2026 · Flagship fundraiser for EIE' },
  { title: 'Spring Studio Art Series', caption: 'April 2025 · 10 students' },
  { title: 'Rooftop Summer Social', caption: 'July 2025 · Cincinnati' },
  { title: 'Back-to-School Market', caption: 'August 2025 · 22 makers' },
  { title: "Founders' Coffee", caption: "February 2025 · Where it began" },
];

const CATS = ['All', 'Market', 'Workshop'];

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
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 52, color: '#fff', lineHeight: 1.04, maxWidth: 640 }}>
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
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 44, color: '#fff', lineHeight: 1 }}>{e.day}</div>
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
