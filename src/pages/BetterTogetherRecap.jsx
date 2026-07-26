import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';

const STATS = [
  { value: '$3,000', label: 'Revenue raised' },
  { value: '$1,000', label: 'Donated directly to nonprofit capital campaign kickoff' },
  { value: '10', label: 'Sponsors secured' },
  { value: '30', label: 'Guests in attendance' },
  { value: '5', label: 'Panelists featured' },
  { value: '1', label: 'Future gala sponsor' },
  { value: '1 Month', label: 'Planning timeline' },
  { value: '3', label: 'Women-owned businesses as event vendors' },
];

const APPROACH = [
  'Community outreach campaign, securing 10 event sponsors from a variety of industries and neighborhoods.',
  'Managed the full budget from anticipated event revenue, sequencing vendor commitments, ticket sales, and sponsor confirmations tightly within the one-month timeline.',
  "Used the event as a pipeline, not a one-off — turning the day's momentum into a secured sponsorship for the organization's future gala.",
];

const RESULTS = [
  'standing start with no existing donor base.',
  'a 33% direct-give rate, notably high for a first-time event carrying its own budget.',
  'establishing new brand relationships in the community for this event and beyond.',
  "extending the event's impact well past a single day.",
  'through 5 featured panelists.',
  'funded entirely by the event\'s own revenue.',
];

const SPONSORS = [
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4419.jpg?v=1784511473&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4050.jpg?v=1784511429&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4417.jpg?v=1784511337&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4418.jpg?v=1784510803&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4103.jpg?v=1784510675&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/Untitled_2Bdesign_2B_25286_2529.webp?v=1784503719&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/PillarLogoSalmon_edited_edited.png?v=1784503720&width=400', alt: 'Pillar' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/full-ks-logo.png?v=1784503720&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo-1.png?v=1784503720&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo-web.png?v=1784503719&width=400', alt: 'Better Together Brunch sponsor' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/logo.png?v=1784511511&width=400', alt: 'Better Together Brunch sponsor' },
];

const GALLERY = [
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=1100', alt: 'Guests and panelists together at the Better Together Brunch' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6378.jpg?v=1784590111&width=1100', alt: 'Better Together Brunch at the Columbia Center', position: 'center 15%' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_6384.jpg?v=1784581853&width=1100', alt: 'Guests at the Better Together Brunch' },
  { src: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_4415_1d38b43f-96e0-47ca-96f8-4e8db80ef328.jpg?v=1784581862&width=1100', alt: 'Speaker addressing the room at the Better Together Brunch' },
];

export default function BetterTogetherRecap() {
  useSEO({
    title: 'Case Study: Better Together Brunch — Girlhood Collective',
    description: 'How one event turned into $3,000 raised, 10 new sponsors, and the start of a lasting community for Endurance in Education.',
    path: '/better-together-recap',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=1200',
  });

  return (
    <div className="page-shell">
      <NavBar variant="navy" active="Events" />

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 52px', textAlign: 'center' }}>
        <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>Case study</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 42.5, fontWeight: 400, color: 'var(--gc-emerald)', marginBottom: 6 }}>Better Together Brunch</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 50, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.15, maxWidth: 680, margin: '0 auto' }}>
          From zero awareness to campaign kickoff
        </h1>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.8, maxWidth: 560, margin: '18px auto 0' }}>
          How one event turned from a first-time nonprofit fundraiser into $3,000 raised, 10 new sponsors, and the start of a community.
        </p>
      </div>

      <div style={{ background: '#fff', padding: '48px 44px' }}>
        <div className="rgrid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, maxWidth: 1000, margin: '0 auto' }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ border: '1px solid var(--gc-border)', borderRadius: 8, padding: '22px 18px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 35, color: 'var(--gc-slate)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ font: '600 12.5px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '56px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 12 }}>The challenge</div>
          <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 36 }}>
            Introduce Endurance in Education to the community and lay a real financial and relational foundation for the campaign ahead. All within a one-month planning window, funded entirely by the event's own revenue.
          </p>

          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 12 }}>The approach</div>
          <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 20 }}>
            Girlhood Collective built the Better Together Brunch Fundraiser as a single event designed to be three things: community introduction, fundraiser, and relationship-building platform for the campaign's future.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 }}>
            {APPROACH.map((a) => (
              <div key={a} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderLeft: '3px solid var(--gc-emerald)', borderRadius: '0 6px 6px 0', padding: '16px 20px', fontSize: 17.5, color: 'var(--gc-ink)', lineHeight: 1.65 }}>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 44px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 20 }}>The results</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                <strong>$3,000</strong> in total revenue generated from a {RESULTS[0]}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                <strong>$1,000</strong> donated directly to Endurance in Education — {RESULTS[1]}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                <strong>10 sponsors</strong> secured, {RESULTS[2]}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                <strong>1 future gala sponsor</strong> locked in, {RESULTS[3]}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                <strong>30 guests</strong> engaged directly with the organization's mission {RESULTS[4]}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gc-emerald)', fontWeight: 700, marginTop: 2 }}>✓</span>
              <p style={{ fontSize: 18, color: 'var(--gc-ink)', lineHeight: 1.7 }}>
                All delivered in a <strong>one-month planning window</strong>, {RESULTS[5]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gc-section)', padding: '56px 44px' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Made possible by</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24 }}>Our sponsors.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14, maxWidth: 1000 }}>
          {SPONSORS.map((s, i) => (
            <div
              key={s.src + i}
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
                src={s.src}
                alt={s.alt}
                loading="lazy"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px', borderTop: '1px solid rgba(45,52,71,.06)' }}>
        <div style={{ font: '700 14px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>From the room</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32.5, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 24 }}>A few moments from the morning.</div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
          {GALLERY.map((g) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: g.position || 'center', borderRadius: 10, border: '1px solid var(--gc-border)', display: 'block' }}
            />
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--gc-slate)', padding: '56px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 35, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Starting your own campaign from zero?</div>
        <p style={{ fontSize: 18, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 24px' }}>
          Whether you're launching a capital campaign, kicking off a new initiative, or introducing your organization to a community for the first time, we're here to help.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/consultation-intake" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
            Start the intake
          </Link>
          <Link className="btn" to="/work-together" style={{ border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '13.5px 28px' }}>
            See services
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
