import { Link } from 'react-router-dom';

const WHITE_LINKS = [
  { label: 'Work With Me', href: '/work-with-me' },
  { label: 'Events', href: '/events' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
];

const NAVY_LINKS = [
  { label: 'Events & Workshops', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/partners' },
];

export default function NavBar({ variant = 'white', active, label }) {
  if (variant === 'minimal') {
    return (
      <nav
        style={{
          background: 'var(--gc-navy)',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ lineHeight: 1, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#fff' }}>Girlhood</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 15,
              color: '#fff',
              marginLeft: 5,
            }}
          >
            Collective
          </span>
        </Link>
        <div
          style={{
            font: '600 10px var(--font-sans)',
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.5)',
          }}
        >
          {label}
        </div>
      </nav>
    );
  }

  const isNavy = variant === 'navy';
  const links = isNavy ? NAVY_LINKS : WHITE_LINKS;

  return (
    <nav
      style={{
        background: isNavy ? 'var(--gc-slate)' : '#fff',
        borderBottom: isNavy ? 'none' : '1px solid var(--gc-border)',
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={
          isNavy
            ? { display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none' }
            : { lineHeight: 1, textDecoration: 'none' }
        }
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isNavy ? 20 : 21,
            color: isNavy ? '#fff' : 'var(--gc-navy)',
            ...(isNavy ? { marginTop: 0 } : {}),
          }}
        >
          Girlhood
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 16,
            color: isNavy ? '#fff' : 'var(--gc-navy)',
            marginLeft: isNavy ? 0 : 5,
            marginTop: isNavy ? 2 : 0,
          }}
        >
          Collective
        </span>
      </Link>
      <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.href}
            className={`navlink ${isNavy ? 'navlink--ondark' : 'navlink--onwhite'} ${active === l.label ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
        {isNavy ? (
          <Link
            to="/newsletter"
            style={{
              background: 'var(--gc-emerald)',
              color: '#fff',
              font: '600 10px var(--font-sans)',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              padding: '11px 20px',
              borderRadius: 3,
              textDecoration: 'none',
            }}
          >
            Newsletter
          </Link>
        ) : (
          <Link to="/newsletter" className="btn" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '11px 20px' }}>
            Newsletter
          </Link>
        )}
      </div>
    </nav>
  );
}
