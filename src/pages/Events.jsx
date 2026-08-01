import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import ShopifyBuyButton from '../components/ShopifyBuyButton.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';
import { EVENTS, eventDate, PAST_EVENTS } from '../data/events.js';
import { useSEO, useStructuredData } from '../lib/seo.js';
import '../styles/utilityPages.css';

const BUY_BUTTON_OPTIONS = {
  product: {
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': 'calc(25% - 20px)',
          'margin-left': '20px',
          'margin-bottom': '50px',
        },
      },
      button: {
        'font-family': 'Roboto, sans-serif',
        ':hover': { 'background-color': '#3a7562' },
        'background-color': '#40826d',
        ':focus': { 'background-color': '#3a7562' },
      },
    },
    text: { button: 'Add to cart' },
    googleFonts: ['Roboto'],
  },
  productSet: {
    styles: {
      products: {
        '@media (min-width: 601px)': { 'margin-left': '-20px' },
      },
    },
  },
  modalProduct: {
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0px',
          'margin-bottom': '0px',
        },
      },
      button: {
        'font-family': 'Roboto, sans-serif',
        ':hover': { 'background-color': '#3a7562' },
        'background-color': '#40826d',
        ':focus': { 'background-color': '#3a7562' },
      },
    },
    googleFonts: ['Roboto'],
    text: { button: 'Add to cart' },
  },
  option: {},
  cart: {
    styles: {
      button: {
        'font-family': 'Roboto, sans-serif',
        ':hover': { 'background-color': '#3a7562' },
        'background-color': '#40826d',
        ':focus': { 'background-color': '#3a7562' },
      },
    },
    text: { total: 'Subtotal', button: 'Checkout' },
    googleFonts: ['Roboto'],
  },
  toggle: {
    styles: {
      toggle: {
        'font-family': 'Roboto, sans-serif',
        'background-color': '#40826d',
        ':hover': { 'background-color': '#3a7562' },
        ':focus': { 'background-color': '#3a7562' },
      },
    },
    googleFonts: ['Roboto'],
  },
};

const CATS = ['All', 'Workshop'];

export default function Events() {
  useSEO({
    title: 'Upcoming Events | Girlhood Collective',
    description: "Girlhood Cincy Monthly Experiences — one Saturday a month, September through May, where girls ages 8–12 meet local women entrepreneurs and build confidence through hands-on projects.",
    path: '/events',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-2.jpg?v=1774548572&width=1200',
  });

  const publishedEvents = EVENTS.filter((e) => e.published !== false);
  useStructuredData(
    'events',
    publishedEvents.map((e) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: e.title,
      startDate: eventDate(e).toISOString().slice(0, 10),
      location: { '@type': 'Place', name: e.where, address: 'Cincinnati, OH' },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: (e.price.match(/\d+/) || ['0'])[0], url: e.shopifyUrl || 'https://girlhoodcincy.com/events' },
    }))
  );

  const [filter, setFilter] = useState('All');
  const [detailId, setDetailId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [rsvpError, setRsvpError] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', seats: '1', note: '' });

  const detail = EVENTS.find((e) => e.id === detailId) || null;
  const published = EVENTS.filter((e) => e.published !== false);
  const visible = published.filter((e) => filter === 'All' || e.cat === filter);
  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const openDetail = (id) => {
    setDetailId(id);
    setSubmitted(false);
    setRsvpError(false);
    setForm({ name: '', email: '', seats: '1', note: '' });
  };
  const closeDetail = () => setDetailId(null);

  const handleRsvp = async () => {
    setSending(true);
    setRsvpError(false);
    try {
      await submitNetlifyForm('event-rsvp', { ...form, event: detail.title });
      setSubmitted(true);
    } catch {
      setRsvpError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Events" />

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 52px', position: 'relative', overflow: 'hidden' }}>
        <div className="up-ghost" aria-hidden="true" style={{ top: '-14%', right: '4vw', fontSize: 'clamp(140px,16vw,240px)' }}>&sect;</div>
        <div className="rgrid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 220px', gap: 32, alignItems: 'center' }}>
          <Reveal>
            <div className="up-eyebrow">
              <span className="up-dot" aria-hidden="true" />
              Girlhood Cincy Monthly Experiences
            </div>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 65, color: 'var(--gc-navy)', lineHeight: 1.04, maxWidth: 640 }}>
              Gather <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>beautifully.</span>
            </h1>
          </Reveal>
          <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-2.jpg?v=1774548572&width=440"
              alt="Girls working on a project at a Girlhood Collective workshop"
              loading="lazy"
              style={{ width: '100%', height: 145, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--gc-border)', display: 'block' }}
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_9209.jpg?v=1785100838&width=440"
              alt="Girlhood Collective community event booth in Cincinnati"
              loading="lazy"
              style={{ width: '100%', height: 145, objectFit: 'cover', objectPosition: 'center 25%', borderRadius: 8, border: '1px solid var(--gc-border)', display: 'block' }}
            />
          </Reveal>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px 40px' }}>
        <Reveal style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          <div>
            <div className="up-eyebrow">
              <span className="up-dot" aria-hidden="true" />
              Upcoming
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 37.5, fontWeight: 700, color: 'var(--gc-slate)' }}>What's coming up next</h2>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CATS.map((c) => (
              <button key={c} className={`fbtn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {visible.map((e) => (
            <div key={e.id} className="up-card" style={{ display: 'flex', border: '1px solid var(--gc-border)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ background: 'var(--gc-slate)', width: 120, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '22px 12px' }}>
                <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)' }}>{e.mon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 55, color: '#fff', lineHeight: 1 }}>{e.day}</div>
                <div style={{ font: '400 15px var(--font-sans)', color: 'rgba(255,255,255,.55)' }}>{e.year}</div>
              </div>
              <div style={{ padding: '22px 28px', flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-block', font: '700 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, background: e.badgeBg, color: e.badgeText }}>
                    {e.cat}
                  </span>
                  <span style={{ font: '400 15.5px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.where}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 25, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 6 }}>{e.title}</h3>
                <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.65, maxWidth: 600, marginBottom: 14 }}>{e.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  {e.buyButtonProductId ? (
                    <ShopifyBuyButton productId={e.buyButtonProductId} options={BUY_BUTTON_OPTIONS} />
                  ) : e.shopifyUrl ? (
                    <a
                      href={e.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-block', cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12.5px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: 3, textDecoration: 'none' }}
                    >
                      Get your ticket →
                    </a>
                  ) : (
                    <button
                      onClick={() => openDetail(e.id)}
                      style={{ cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12.5px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: 3 }}
                    >
                      Details &amp; RSVP
                    </button>
                  )}
                  <span style={{ font: '600 15px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '56px 44px' }}>
        <Reveal>
          <div className="up-eyebrow">
            <span className="up-dot" aria-hidden="true" />
            Looking back
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 37.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Seriously proud of what we made.</h2>
          <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
            A look back at the rooms we've filled since 2025.
          </p>
        </Reveal>
        <Reveal delay={100} className="rgrid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {PAST_EVENTS.map((p) => {
            const Wrapper = p.href ? Link : 'div';
            const wrapperProps = p.href ? { to: p.href, style: { textDecoration: 'none' } } : {};
            return (
              <Wrapper key={p.title} className="hover-caption" {...wrapperProps}>
                <div className="up-img-hover" style={{ borderRadius: 6 }}>
                  <img
                    src={p.photo}
                    alt={p.title}
                    loading="lazy"
                    style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <h3 className="hover-caption-target" style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: 'var(--gc-slate)', marginTop: 12, transition: 'color .2s' }}>
                  {p.title}
                </h3>
                <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 3 }}>
                  {p.caption}{p.href ? ' · Read the case study →' : ''}
                </div>
              </Wrapper>
            );
          })}
        </Reveal>
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
                style={{ position: 'absolute', top: 18, right: 20, background: 'rgba(255,255,255,.12)', border: 'none', color: '#fff', width: 30, height: 30, borderRadius: '50%', cursor: 'pointer', fontSize: 20, lineHeight: 1 }}
              >
                ×
              </button>
              <span style={{ display: 'inline-block', font: '700 12.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 2, background: detail.badgeBg, color: detail.badgeText, marginBottom: 12 }}>
                {detail.cat}
              </span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{detail.title}</div>
              <div style={{ font: '400 16px var(--font-sans)', color: 'rgba(255,255,255,.72)' }}>
                {detail.mon} {detail.day}, {detail.year} · {detail.where}
              </div>
            </div>
            <div style={{ padding: '28px 32px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 42.5, marginBottom: 10 }}>🎉</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 37.5, color: 'var(--gc-slate)', marginBottom: 8 }}>You're in!</div>
                  <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 20px' }}>
                    We'll reach out within a day or two with everything you need. Can't wait to see you there.
                  </p>
                  <button
                    onClick={closeDetail}
                    style={{ cursor: 'pointer', border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12.5px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: 3 }}
                  >
                    Back to events
                  </button>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: 17.5, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: 20 }}>{detail.long}</p>
                  <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 14 }}>Reserve your spot</div>
                  <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <input className="fld" placeholder="Your name" value={form.name} onChange={setField('name')} />
                    <input className="fld" placeholder="Email address" value={form.email} onChange={setField('email')} />
                  </div>
                  <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
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
                  {rsvpError && (
                    <p style={{ fontSize: 16, color: '#c0392b', marginBottom: 12 }}>
                      Something went wrong sending that — please email us directly at{' '}
                      <a href="mailto:hello@girlhoodcincy.com" style={{ color: '#c0392b' }}>hello@girlhoodcincy.com</a> instead.
                    </p>
                  )}
                  <button
                    onClick={handleRsvp}
                    disabled={sending}
                    style={{ width: '100%', cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 14px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', padding: 15, borderRadius: 3 }}
                  >
                    {sending ? 'Sending…' : 'Confirm my RSVP'}
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
