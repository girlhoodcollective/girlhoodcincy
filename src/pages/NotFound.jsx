import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found — Girlhood Collective',
    description: "The page you're looking for doesn't exist. Head back to Girlhood Collective's homepage to find what you need.",
    path: '/404',
  });

  return (
    <div className="page-shell">
      <NavBar variant="white" />

      <div style={{ background: 'var(--gc-cream)', padding: '90px 44px', textAlign: 'center' }}>
        <div style={{ font: '600 14px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>
          404
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 55, color: 'var(--gc-navy)', lineHeight: 1.1 }}>
          This page took a <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>wrong turn.</span>
        </div>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.85, maxWidth: 480, margin: '20px auto 32px' }}>
          Let's get you back home.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
            Back to home
          </Link>
          <Link className="btn" to="/events" style={{ border: '1.5px solid var(--gc-navy)', color: 'var(--gc-navy)', padding: '13.5px 28px' }}>
            See events
          </Link>
        </div>
      </div>

      <Footer linked={false} />
    </div>
  );
}
