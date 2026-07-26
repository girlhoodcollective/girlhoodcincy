import { useState } from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Work Together', href: '/work-together' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Partners', href: '/partners' },
  { label: 'Join the Village', href: '/village' },
];

export default function NavBar({ variant = 'white', active, label }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (variant === 'minimal') {
    return (
      <nav
        style={{
          background: 'var(--gc-cream)',
          borderBottom: '1px solid var(--gc-border)',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          rowGap: 6,
        }}
      >
        <Link to="/" style={{ lineHeight: 1, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 25, color: 'var(--gc-navy)' }}>Girlhood</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 19,
              color: 'var(--gc-navy)',
              marginLeft: 5,
            }}
          >
            Collective
          </span>
        </Link>
        <div
          style={{
            font: '600 12.5px var(--font-sans)',
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--gc-ink-muted)',
            textAlign: 'right',
          }}
        >
          {label}
        </div>
      </nav>
    );
  }

  const links = LINKS;

  return (
    <>
      <nav
        style={{
          background: '#fff',
          borderBottom: '1px solid var(--gc-border)',
          padding: '16px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Link to="/" style={{ lineHeight: 1, textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--gc-navy)' }}>Girlhood</span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 20,
              color: 'var(--gc-navy)',
              marginLeft: 5,
            }}
          >
            Collective
          </span>
        </Link>
        <div className="nav-links-desktop" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`navlink navlink--onwhite ${active === l.label ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '11px 20px', whiteSpace: 'nowrap' }}>
            Let's Schedule a Time to Chat
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.href}
            className={`navlink navlink--onwhite ${active === l.label ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="btn"
          style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '11px 20px', textAlign: 'center', marginTop: 8 }}
          onClick={() => setMenuOpen(false)}
        >
          Let's Schedule a Time to Chat
        </Link>
      </div>
    </>
  );
}
