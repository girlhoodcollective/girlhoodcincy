import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO, useStructuredData, SITE_URL } from '../lib/seo.js';

const FOUNDER_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2562.jpg?v=1774664826';
const FAMILY_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-brittany-family.jpg?v=1774545413';
const PERSONAL_PHOTO = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_9211.jpg?v=1774029457';

const CREDIBILITY = [
  { title: 'Sweet Cheeks Diaper Bank', body: 'As Program Development Committee Chair, participated in an 18-month community needs assessment that resulted in a $75,000 seed grant and 800+ volunteer hours.' },
  { title: 'B.A., Communication & Public Relations', body: 'University of Cincinnati.' },
];

export default function About() {
  useSEO({
    title: 'About Brittany Gruber | Girlhood Collective',
    description: 'Brittany Gruber is the founder of Girlhood Collective, a Cincinnati-based community strategy practice helping small businesses, health professionals, and mission-driven organizations build real, lasting community.',
    path: '/about',
    image: FOUNDER_PHOTO + '&width=1200',
  });

  useStructuredData('person', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brittany Gruber',
    jobTitle: 'Founder, Girlhood Collective',
    worksFor: { '@type': 'Organization', name: 'Girlhood Collective' },
    url: `${SITE_URL}/about`,
    alumniOf: 'University of Cincinnati',
  });

  return (
    <div className="page-shell">
      <NavBar variant="white" active="About" />

      {/* FOUNDER */}
      <div style={{ background: 'var(--gc-cream)', padding: '64px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 44, alignItems: 'center', maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={FOUNDER_PHOTO + '&width=520'}
              alt="Brittany Gruber, founder of Girlhood Collective"
              loading="lazy"
              style={{ width: 260, height: 300, objectFit: 'cover', objectPosition: 'center 10%', borderRadius: 8, display: 'block', margin: '0 auto' }}
            />
          </div>
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Meet the founder</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Brittany Gruber</h1>
            <div style={{ font: '600 12px var(--font-sans)', letterSpacing: '.04em', color: 'var(--gc-ink-muted)', marginBottom: 20 }}>Founder · Girlhood Collective</div>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85 }}>
              Brittany Gruber is the founder of Girlhood Collective, a Cincinnati-based community strategy practice helping small businesses, health professionals, and mission-driven organizations build real, lasting community.
            </p>
          </div>
        </div>
      </div>

      {/* LONG BIO */}
      <div style={{ background: '#fff', padding: '60px 44px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 20 }}>
            Brittany Gruber founded Girlhood Collective in 2024 to help organizations and communities build the kind of belonging that doesn&rsquo;t happen by accident. In its first three months, the platform secured five sponsors and collaborators, grew an email community to 100 subscribers with a roughly 60% open rate, and generated more than 65,000 organic Instagram impressions — all through relationship-first outreach rather than paid growth tactics.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 20 }}>
            Before founding Girlhood Collective, Brittany managed listing operations for the Megan Stacey Group at Coldwell Banker Realty, supporting a relationship-driven business that closed 419 homes and $220.7M in sales volume. Earlier, as Program Manager at Bake Me Home, she built the organization&rsquo;s social media measurement framework and coordinated events, volunteers, and partner relationships across a four-county region. Her early career was in talent acquisition and outreach, work that shaped the relationship-building instincts she now applies to community strategy.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.9, marginBottom: 32 }}>
            As Program Development Committee Chair for a local nonprofit board, Brittany led an 18-month community needs assessment that resulted in a $75,000 seed grant and 800+ volunteer hours awarded to Sweet Cheeks Diaper Bank. She holds a B.A. in Communication and Public Relations from the University of Cincinnati.
          </p>
          <div style={{ borderLeft: '3px solid var(--gc-emerald)', paddingLeft: 20 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-slate)', lineHeight: 1.5 }}>
              &ldquo;Community and belonging take practice and work — they&rsquo;re a science, not an accident.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* WHY THIS IS PERSONAL */}
      <div style={{ background: 'var(--gc-slate)', padding: '60px 44px' }}>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
          <div>
            <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 20 }}>Why this is personal</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
              Diagnosed with ADHD and autism later in life, I know what it&rsquo;s like to navigate a world that wasn&rsquo;t built for the way your brain works best.
            </div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.85, maxWidth: 620, marginTop: 20 }}>
              That journey fuels the work. I love helping others understand themselves, embrace their strengths, and advocate for what they need — and helping organizations learn what it really means to be genuinely inclusive. It&rsquo;s part of why belonging, not just performance, is the standard every Girlhood Collective engagement is built around.
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--gc-lavender-soft)', marginTop: 20 }}>— Brittany</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <img
              src={FAMILY_PHOTO + '&width=600'}
              alt="Brittany with her family"
              loading="lazy"
              style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
            <img
              src={PERSONAL_PHOTO + '&width=600'}
              alt="Brittany Gruber"
              loading="lazy"
              style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* CREDIBILITY */}
      <div style={{ background: 'var(--gc-section)', padding: '54px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ font: '700 11px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 10 }}>Credibility</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)' }}>Track record.</div>
        </div>
        <div className="rgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, maxWidth: 700, margin: '0 auto' }}>
          {CREDIBILITY.map((c) => (
            <div key={c.title} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 6, borderTop: '3px solid var(--gc-emerald)', padding: '24px 22px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{c.title}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--gc-sage-light)', borderTop: '1px solid #dde6e2', padding: '52px 44px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
          Want to build something <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>together?</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 22px' }}>
          Consulting, speaking, and partnerships are always welcome. Reach out directly.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/work-together" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '15px 28px' }}>
            See how we work together
          </Link>
          <Link className="btn" to="/contact" style={{ border: '1.5px solid var(--gc-emerald)', color: 'var(--gc-emerald)', padding: '13.5px 28px' }}>
            Let&rsquo;s Schedule a Time to Chat
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
