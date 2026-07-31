import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { useSEO } from '../lib/seo.js';

export default function Gateway() {
  useSEO({
    title: 'Girlhood Collective | Start Here',
    description: 'Staged concept: a homepage fork sending community neighbors and organizations/businesses to the experience built for them.',
    path: '/gateway',
  });

  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', 'noindex, nofollow');
    return () => tag?.setAttribute('content', 'index, follow');
  }, []);

  return (
    <div className="flow-shell" style={{ minHeight: '100vh', background: 'var(--gc-cream)' }}>
      <NavBar variant="minimal" label="Start Here · Concept" />

      <div style={{ padding: '64px 32px 24px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: 'clamp(30px,4.5vw,44px)',
            color: 'var(--gc-navy)',
            maxWidth: 720,
            margin: '0 auto',
            lineHeight: 1.15,
          }}
        >
          Girlhood Collective is two things at once.
        </h1>
        <p
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'var(--gc-ink-muted)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '18px auto 0',
          }}
        >
          A monthly community and events experience for Cincinnati neighbors — and a boutique advisory for organizations building real culture and community. Tell us why you&rsquo;re here.
        </p>
      </div>

      <div
        className="rgrid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          maxWidth: 1000,
          margin: '32px auto 64px',
          padding: '0 32px',
        }}
      >
        <Link
          to="/"
          className="hover-lift"
          style={{
            textDecoration: 'none',
            display: 'block',
            background: '#fff',
            border: '1px solid var(--gc-border)',
            borderRadius: 10,
            padding: '40px 34px',
          }}
        >
          <div style={{ font: '700 12.5px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 14 }}>
            For Neighbors &amp; Families
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-navy)', marginBottom: 12, lineHeight: 1.25 }}>
            Find your people
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, marginBottom: 20 }}>
            Join a monthly event, or join The Village — a free newsletter for anyone looking for real connection.
          </p>
          <span style={{ font: '600 14px var(--font-sans)', color: 'var(--gc-emerald)' }}>Explore Girlhood Collective →</span>
        </Link>

        <Link
          to="/homepage-v2"
          className="hover-lift"
          style={{
            textDecoration: 'none',
            display: 'block',
            background: 'var(--gc-navy)',
            borderRadius: 10,
            padding: '40px 34px',
          }}
        >
          <div style={{ font: '700 12.5px var(--font-sans)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gc-emerald-soft)', marginBottom: 14 }}>
            For Organizations &amp; Businesses
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: '#f8f6f0', marginBottom: 12, lineHeight: 1.25 }}>
            Build a stronger organization
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'rgba(248,246,240,.72)', lineHeight: 1.7, marginBottom: 20 }}>
            Community strategy, culture, and events consulting for small businesses, allied health practices, and mission-driven organizations ready to turn stakeholders into real community.
          </p>
          <span style={{ font: '600 14px var(--font-sans)', color: '#f8f6f0' }}>See our consulting work →</span>
        </Link>
      </div>

      <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--gc-ink-muted)', paddingBottom: 48 }}>
        Not sure? <Link to="/" style={{ color: 'var(--gc-emerald)', fontWeight: 600 }}>Start with the community side</Link> — you can always find your way to the other.
      </p>
    </div>
  );
}
