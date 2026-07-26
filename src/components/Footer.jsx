import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribeToNewsletter } from '../lib/newsletter.js';

const EXPLORE_LINKS = [
  { label: 'Work Together', href: '/work-together' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Join the Village', href: '/village' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/girlhood_cincy' },
];

function MiniNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email.trim()) return;
    setState('sending');
    try {
      await subscribeToNewsletter(email.trim());
      setState('done');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.7)' }}>
        You're in. Watch your inbox for our next letter.
      </p>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="email"
          placeholder="you@cincinnati.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          aria-label="Email address"
          style={{ background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 100, padding: '10px 16px', font: '400 16px var(--font-sans)', color: '#fff', width: 190, outline: 'none' }}
        />
        <button
          onClick={handleSubmit}
          disabled={state === 'sending'}
          style={{ cursor: state === 'sending' ? 'default' : 'pointer', opacity: state === 'sending' ? 0.7 : 1, border: 'none', background: 'var(--gc-emerald)', color: '#fff', font: '600 12.5px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '10px 16px', borderRadius: 100, whiteSpace: 'nowrap' }}
        >
          Join
        </button>
      </div>
      {state === 'error' && (
        <p style={{ fontSize: 14.5, color: '#ffb4a8', marginTop: 8 }}>{error} Email us at hello@girlhoodcincy.com instead.</p>
      )}
    </div>
  );
}

function Brand({ deep }) {
  return (
    <div style={{ lineHeight: 1, marginBottom: deep ? 14 : 12 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 27.5, color: '#fff' }}>Girlhood</span>{' '}
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: deep ? 18 : 17,
          color: '#fff',
        }}
      >
        Collective
      </span>
    </div>
  );
}

export default function Footer({ linked = true }) {
  const brandMark = <Brand deep={linked} />;

  return (
    <div
      style={{
        background: 'var(--gc-navy-deep)',
        padding: '44px 44px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 32,
        flexWrap: 'wrap',
      }}
    >
      <div>
        {linked ? (
          <Link to="/" style={{ textDecoration: 'none' }}>
            {brandMark}
          </Link>
        ) : (
          brandMark
        )}
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: 14 }}>
          Cincinnati, OH · girlhoodcincy.com
          <br />
          Rooted in belonging. Since 2025.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="navlink navlink--ondark"
              style={{ color: 'rgba(255,255,255,.6)' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap' }}>
        <div>
          <p
            style={{
              font: '600 12.5px var(--font-sans)',
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
              font: '600 12.5px var(--font-sans)',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.4)',
              marginBottom: 8,
            }}
          >
            Say hello
          </p>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 27.5, color: 'var(--gc-lavender-soft)', marginBottom: 18 }}>
            hello@girlhoodcincy.com
          </div>
          <p
            style={{
              font: '600 12.5px var(--font-sans)',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.4)',
              marginBottom: 8,
            }}
          >
            Join the Village
          </p>
          <MiniNewsletterSignup />
        </div>
      </div>
    </div>
  );
}
