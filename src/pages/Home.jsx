import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { subscribeToNewsletter } from '../lib/newsletter.js';
import { getUpcomingPublishedEvents } from '../data/events.js';
import { useSEO } from '../lib/seo.js';

const UPCOMING_EVENTS = getUpcomingPublishedEvents(2);

export default function Home() {
  useSEO({
    title: 'Girlhood Collective — Community, Curated | Cincinnati',
    description: 'Events, workshops, consulting, and community, right here in Greater Cincinnati.',
    path: '/',
  });

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setSending(true);
    setError(false);
    try {
      await subscribeToNewsletter(email.trim());
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="white" />

      {/* BRAND STRIP */}
      <div style={{ background: 'var(--gc-cream)', padding: '30px 44px 26px', textAlign: 'center', borderBottom: '1px solid rgba(45,52,71,.06)' }}>
        <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.28em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 8 }}>
          Greater Cincinnati · est. 2025
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-navy)' }}>
          We believe in <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>doing it differently.</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 600, margin: '10px auto 0' }}>
          Events, workshops, consulting, and community.
        </p>
      </div>

      {/* TWO-DOOR HERO */}
      <div className="rflex-split" style={{ display: 'flex', alignItems: 'stretch' }}>
        <div className="rflex-half" style={{ width: '50%', background: 'var(--gc-navy)', padding: '58px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(186,217,243,.22), transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 18 }}>
              For organizations &amp; leaders
            </div>
            <div className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Build a room where people are{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender-soft)' }}>understood.</span>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, margin: '20px 0 26px', maxWidth: 420 }}>
              Strategy, HR &amp; people, and program design — with a facilitator who's lived the gap between policy and belonging.
            </p>
            <Link className="btn" to="/work-with-me" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
              Work with us →
            </Link>
          </div>
        </div>
        <div className="rflex-half" style={{ width: '50%', background: 'var(--gc-cream)', padding: '58px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -80, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,178,134,.14), transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
              For women &amp; community
            </div>
            <div className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 700, color: 'var(--gc-slate)', lineHeight: 1.1 }}>
              Find your people. Come sit at the{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>table.</span>
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, margin: '20px 0 26px', maxWidth: 420 }}>
              Brunches, workshops, and markets for women and girls of every age and industry — right here in Greater Cincinnati.
            </p>
            <Link className="btn" to="/events" style={{ background: 'var(--gc-slate)', color: '#fff', padding: '15px 28px' }}>
              upcoming events →
            </Link>
          </div>
        </div>
      </div>

      {/* PROMISE STRIP */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', borderBottom: '1px solid #dde6e2', padding: '20px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
        {['Events', 'Consulting', 'Workshops', 'Community'].map((word, i, arr) => (
          <span key={word} style={{ display: 'contents' }}>
            <span style={{ font: '600 12px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{word}</span>
            {i < arr.length - 1 && <span style={{ color: 'var(--gc-lavender)' }}>✦</span>}
          </span>
        ))}
      </div>

      {/* TOOLS BAND */}
      <div style={{ background: 'var(--gc-navy-deep)', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>
          Start with a question
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 30, color: '#fff', marginBottom: 8 }}>Not sure which door?</div>
        <p style={{ fontSize: 14.5, fontWeight: 300, color: 'rgba(255,255,255,.62)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 30px' }}>
          Three free tools help you figure out what you actually need — for your organization, your career, or your brand.
        </p>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, maxWidth: 900, margin: '0 auto' }}>
          <Link className="hover-lift" to="/consultation-intake" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 8, padding: '26px 22px', textAlign: 'left', display: 'block' }}>
            <div style={{ font: '700 9px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>For orgs · 8 min</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Consultation Intake</div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>Answer honestly, get a personalized read on what you need.</p>
          </Link>
          <Link className="hover-lift" to="/worth-quiz" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 8, padding: '26px 22px', textAlign: 'left', display: 'block' }}>
            <div style={{ font: '700 9px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>For women · 20 Q</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Dollars & Cents </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>Map your real, marketable skills to a Cincinnati path.</p>
          </Link>
          <Link className="hover-lift" to="/ugc" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 8, padding: '26px 22px', textAlign: 'left', display: 'block' }}>
            <div style={{ font: '700 9px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>For brands</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 6 }}>UGC Portfolio</div>
            <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>The creator work, the approach, and the rate card.</p>
          </Link>
        </div>
      </div>

      {/* PARALLEL COLUMNS: WORK WITH ME | EVENTS */}
      <div className="rflex-split" style={{ display: 'flex' }}>
        <div className="rflex-half" style={{ width: '50%', background: '#fff', padding: '54px 44px', borderRight: '1px solid var(--gc-border)' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 8 }}>Work with me</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 20 }}>
            The same care, brought to <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>your</span> room.
          </div>
          {[
            { title: 'Strategic Consultation', desc: 'Think, plan, and decide with an outside voice.' },
            { title: 'HR & People Strategy', desc: 'Culture and environments built for real people.' },
            { title: 'Program Design', desc: 'Build what your community actually needs.' },
            { title: 'UGC & Creator Partnerships', desc: 'Content brands are felt through, not sold with.' },
          ].map((s, i, arr) => (
            <Link
              key={s.title}
              className="hover-row"
              to="/work-with-me"
              style={{
                display: 'block',
                textDecoration: 'none',
                borderTop: '1px solid var(--gc-border)',
                borderBottom: i === arr.length - 1 ? '1px solid var(--gc-border)' : 'none',
                padding: '16px 12px 15px',
                marginBottom: i === arr.length - 1 ? 20 : 0,
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)' }}>{s.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, marginTop: 3 }}>{s.desc}</p>
            </Link>
          ))}
          <Link className="navlink navlink--onwhite" to="/work-with-me" style={{ color: 'var(--gc-emerald)' }}>
            See services &amp; book →
          </Link>
        </div>
        <div className="rflex-half" style={{ width: '50%', background: 'var(--gc-section)', padding: '54px 44px' }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-slate)', marginBottom: 8 }}>Events &amp; community</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 20 }}>
            Come sit at the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>table.</span>
          </div>
          {UPCOMING_EVENTS.map((e, i) => (
            <Link
              key={e.id}
              className="hover-shadow"
              to="/events"
              style={{ textDecoration: 'none', background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'center', marginBottom: i === UPCOMING_EVENTS.length - 1 ? 20 : 12 }}
            >
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ font: '600 9px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)' }}>{e.mon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--gc-slate)', lineHeight: 1 }}>{e.day}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--gc-slate)' }}>{e.title}</div>
                <p style={{ fontSize: 12.5, fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: 2 }}>{e.where}</p>
              </div>
            </Link>
          ))}
          <Link className="navlink navlink--onwhite" to="/events" style={{ color: 'var(--gc-emerald)' }}>
            See all events →
          </Link>
        </div>
      </div>

      {/* LIVED-EXPERIENCE BRIDGE */}
      <div style={{ background: 'var(--gc-slate)', padding: '60px 44px', textAlign: 'center' }}>
        <img
          src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_1964.heic?v=1783122573&format=jpg&width=240"
          alt="Brittany, founder of Girlhood Collective"
          loading="lazy"
          style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '50%', border: '2px solid rgba(255,255,255,.24)', display: 'block', margin: '0 auto 24px' }}
        />
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 20 }}>
          Why this is personal
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1.4, maxWidth: 720, margin: '0 auto' }}>
          Diagnosed with ADHD and autism later in life, I know what it's like to navigate a world that wasn't built for how your brain works.{' '}
          <span style={{ color: 'var(--gc-lavender-soft)' }}>That's the whole reason both doors exist.</span>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-lavender-soft)', marginTop: 20 }}>— Brittany</div>
      </div>

      {/* NEWSLETTER */}
      <div style={{ background: 'var(--gc-navy)', padding: '58px 44px', textAlign: 'center' }}>
        <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>The newsletter</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 42, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>A Voice That Carries</div>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.8, maxWidth: 500, margin: '12px auto 26px' }}>
          The events, workshops, and neighbors worth knowing — warmth, never noise. A <strong style={{ color: '#fff', fontWeight: 600 }}>52–66% open rate</strong> says it lands.
        </p>
        {submitted ? (
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: '#fff' }}>
            💌 You're on the list — welcome in.
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="you@cincinnati.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                className="email-input"
                style={{ background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 100, padding: '14px 22px', font: '400 14px var(--font-sans)', color: '#fff', width: 300, outline: 'none' }}
              />
              <button
                onClick={handleSubscribe}
                disabled={sending}
                style={{ cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '15px 28px', borderRadius: 100 }}
              >
                {sending ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>
            {error && (
              <p style={{ fontSize: 13, color: '#ffb4a8', marginTop: 14 }}>
                Something went wrong — please email us directly at{' '}
                <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#ffb4a8' }}>hello@girlhoodcincy.com</a> instead.
              </p>
            )}
          </div>
        )}
      </div>

      <Footer showExplore linked={false} />
    </div>
  );
}
