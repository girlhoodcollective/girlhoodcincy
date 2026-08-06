import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import { EVENTS } from '../data/events.js';
import { useSEO, useStructuredData } from '../lib/seo.js';

const EVENT = EVENTS.find((e) => e.id === 'helping-hands');
const EVENT_IMAGE = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_3916.jpg?v=1783447727';

const INCLUDES = [
  'A guided parent-child service project',
  'Pop-up shopping & consignment with Collins Eliza',
  'A kids play experience',
  'A morning of connection with the Girlhood Collective community',
];

export default function HelpingHands() {
  useSEO({
    title: 'Helping Hands: A Morning of Giving Back, Together | Girlhood Collective',
    description: 'A parent-child service morning in Cincinnati — a hands-on service project, pop-up shopping with Collins Eliza, and a kids play experience. Saturday, September 19, 10–12 PM.',
    path: '/helping-hands',
    image: `${EVENT_IMAGE}&width=1200`,
  });

  useStructuredData('helping-hands-event', {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Helping Hands: A Morning of Giving Back, Together',
    startDate: '2026-09-19T10:00:00-04:00',
    endDate: '2026-09-19T12:00:00-04:00',
    location: { '@type': 'Place', name: '3500 Columbia Parkway', address: 'Cincinnati, OH' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '50', url: EVENT?.shopifyUrl },
  });

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Events" />

      <div style={{ background: 'var(--gc-navy)', padding: '72px 44px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ font: '700 16px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-peony)', marginBottom: 18 }}>
            Helping Hands
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 56px)', color: 'var(--gc-cream)', lineHeight: 1.15, maxWidth: 720, margin: '0 auto 20px' }}>
            Bring Your Kid. Bring Your Heart. Give Back Together.
          </h1>
          <p style={{ fontSize: 19, fontWeight: 300, color: 'rgba(248,246,240,.85)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            A morning of service, shopping, and play — built for you and your kiddo.
          </p>
        </Reveal>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal>
            <img
              src={`${EVENT_IMAGE}&width=1200`}
              alt="Parents and kids working together on a Helping Hands service project"
              loading="lazy"
              style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 10, border: '1px solid var(--gc-border)', display: 'block', marginBottom: 48 }}
            />
          </Reveal>

          <Reveal
            delay={80}
            style={{
              background: '#fff',
              border: '1px solid var(--gc-border)',
              borderRadius: 20,
              padding: 48,
              boxShadow: '0 2px 8px rgba(29, 53, 87, 0.08)',
              marginBottom: 48,
            }}
          >
            <div
              className="rgrid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 32,
                marginBottom: 32,
                paddingBottom: 32,
                borderBottom: '1px solid var(--gc-border)',
              }}
            >
              <div>
                <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 8 }}>When</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>Saturday, September 19</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>10:00–12:00 PM</div>
              </div>
              <div>
                <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 8 }}>Where</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>3500 Columbia Parkway</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>Cincinnati, Ohio</div>
              </div>
              <div>
                <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 8 }}>Cost</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>$50 per pair</div>
                <div style={{ font: '500 18px var(--font-sans)', color: 'var(--gc-navy)' }}>One parent/caregiver + one child</div>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: 'var(--gc-navy)', marginBottom: 16 }}>
                What is Helping Hands?
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.8 }}>
                Join Girlhood Collective for Helping Hands, a parent-and-child morning built around giving back. You
                and your kiddo will roll up your sleeves for a hands-on service project, then unwind with pop-up
                shopping and consignment finds from Collins Eliza — and let the kids burn some energy at a kids play
                experience.
              </p>
            </div>

            <div style={{ background: 'rgba(249, 113, 175, 0.06)', borderLeft: '4px solid var(--gc-peony)', borderRadius: '0 4px 4px 0', padding: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--gc-navy)', marginBottom: 16 }}>
                What&rsquo;s included
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {INCLUDES.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: 'var(--gc-ink)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--gc-peony)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal style={{ background: 'var(--gc-cream)', padding: '48px 32px', textAlign: 'center' }}>
        <a
          href={EVENT?.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ background: 'var(--gc-navy)', color: 'var(--gc-cream)', padding: '16px 48px', fontSize: 16, borderRadius: 999 }}
        >
          Register now
        </a>
        <p style={{ fontSize: 16, fontStyle: 'italic', color: 'var(--gc-ink-muted)', marginTop: 16 }}>
          Space is limited — reserve your spot today.
        </p>
      </Reveal>

      <Footer />
    </div>
  );
}
