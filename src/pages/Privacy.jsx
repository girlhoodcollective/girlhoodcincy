import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { useSEO } from '../lib/seo.js';

const SECTION = { fontSize: 17, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.85, marginBottom: 18 };
const H2 = { fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, color: 'var(--gc-slate)', marginTop: 40, marginBottom: 14 };

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy | Girlhood Collective',
    description: 'What information Girlhood Collective collects through its forms and newsletter, how it is used, and who it is shared with.',
    path: '/privacy',
  });

  return (
    <div className="page-shell">
      <NavBar variant="white" />

      <div style={{ background: 'var(--gc-cream)', padding: '56px 44px 44px', textAlign: 'center' }}>
        <div style={{ font: '600 16px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 16 }}>Legal</div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 46, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 16, color: 'var(--gc-ink-muted)', marginTop: 12 }}>Last updated August 2026</p>
      </div>

      <div style={{ background: '#fff', padding: '48px 44px 72px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={SECTION}>
            Girlhood Collective (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates girlhoodcincy.com. This page explains what
            information we collect when you use the site, how we use it, and who we share it with. If you have
            questions, email us any time at <a href="mailto:hello@girlhoodcincy.com" style={{ color: 'var(--gc-emerald)' }}>hello@girlhoodcincy.com</a>.
          </p>

          <h2 style={H2}>Information we collect</h2>
          <p style={SECTION}>
            We only collect information you choose to give us, through:
          </p>
          <ul style={{ ...SECTION, paddingLeft: 22 }}>
            <li>The Village newsletter signup — your email address.</li>
            <li>Event RSVP forms — name, email, and any details you add about your registration.</li>
            <li>The consultation intake and Dollars &amp; Cents quiz — your answers, plus a name and email to send you results.</li>
            <li>Contact and inquiry forms — your name, email, organization (if applicable), and message.</li>
          </ul>
          <p style={SECTION}>
            We also use Google Analytics to understand overall site traffic — things like which pages are visited and
            roughly where visitors are coming from. This sets a cookie but doesn&rsquo;t identify you personally. We
            don&rsquo;t collect payment information, and we don&rsquo;t use advertising or retargeting pixels.
          </p>

          <h2 style={H2}>How we use it</h2>
          <p style={SECTION}>
            We use the information you provide to respond to your inquiry, send the newsletter you signed up for,
            follow up on event registrations, and get back to you about a consultation or partnership request. We
            don&rsquo;t sell or rent your information to anyone.
          </p>

          <h2 style={H2}>Who we share it with</h2>
          <p style={SECTION}>
            Form submissions are processed through Netlify Forms, our website host. Newsletter signups are managed
            through MailerLite, our email provider — every newsletter includes an unsubscribe link, and you can opt
            out at any time. Traffic data is processed by Google Analytics, subject to{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gc-emerald)' }}>Google&rsquo;s privacy policy</a>.
            None of these services are permitted to use your information for anything other than delivering our site
            and email on our behalf.
          </p>

          <h2 style={H2}>Children&rsquo;s privacy</h2>
          <p style={SECTION}>
            Some of our events and programs are designed for children, but registration is always completed by a
            parent or guardian — we don&rsquo;t knowingly collect personal information directly from children online.
          </p>

          <h2 style={H2}>Your choices</h2>
          <p style={SECTION}>
            You can unsubscribe from the newsletter at any time using the link in any email, or contact us at{' '}
            <a href="mailto:hello@girlhoodcincy.com" style={{ color: 'var(--gc-emerald)' }}>hello@girlhoodcincy.com</a>{' '}
            to update or delete information you&rsquo;ve shared with us.
          </p>

          <h2 style={H2}>Changes to this policy</h2>
          <p style={SECTION}>
            If this policy changes, we&rsquo;ll update the date at the top of this page.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
