import { Link } from 'react-router-dom';

const EXPLORE_LINKS = [
  { label: 'Work With Me', href: '/work-with-me' },
  { label: 'Events', href: '/events' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
];

function Brand({ deep }) {
  return (
    <div style={{ lineHeight: 1, marginBottom: deep ? 14 : 12 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#fff' }}>Girlhood</span>{' '}
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: deep ? 18 : 17,
          color: 'var(--gc-lavender-soft)',
        }}
      >
        Collective
      </span>
    </div>
  );
}

export default function Footer({ showExplore = false, linked = true }) {
  const brandBlock = (
    <>
      <Brand deep={linked} />
      <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
        Cincinnati, OH · girlhoodcincy.com
        <br />
        @girlhood_cincy · {showExplore ? (
          <>
            Uniting makers, teachers,
            <br />
            leaders &amp; learners since 2025.
          </>
        ) : (
          'Since 2025.'
        )}
      </p>
    </>
  );

  return (
    <div
      style={{
        background: 'var(--gc-navy-deep)',
        padding: '44px 44px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      {linked ? (
        <Link to="/" style={{ textDecoration: 'none' }}>
          {brandBlock}
        </Link>
      ) : (
        <div>{brandBlock}</div>
      )}

      {showExplore ? (
        <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap' }}>
          <div>
            <p
              style={{
                font: '600 10px var(--font-sans)',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.4)',
                marginBottom: 12,
              }}
            >
              Explore
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {EXPLORE_LINKS.map((l) => (
                <Link key={l.label} to={l.href} className="navlink navlink--ondark" style={{ color: 'rgba(255,255,255,.6)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                font: '600 10px var(--font-sans)',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.4)',
                marginBottom: 8,
              }}
            >
              Say hello
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-lavender-soft)' }}>
              hello@girlhoodcincy.com
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              font: '600 10px var(--font-sans)',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.4)',
              marginBottom: 8,
            }}
          >
            Say hello
          </p>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--gc-lavender-soft)' }}>
            hello@girlhoodcincy.com
          </div>
        </div>
      )}
    </div>
  );
}
