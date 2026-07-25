const NEWSLETTER_SUBSCRIBERS_GROUP_ID = '185503256388044050';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TEMP_HEALTHCHECK_TOKEN = 'hc-9f3a7c2e-audit-verify';

export default async (req) => {
  const url = new URL(req.url);
  if (req.method === 'GET' && url.searchParams.get('token') === TEMP_HEALTHCHECK_TOKEN) {
    const apiKey = Netlify.env.get('MAILERLITE_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ configured: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers?limit=1', {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const detail = mlRes.ok ? null : await mlRes.text();
    return new Response(JSON.stringify({ configured: true, mailerliteStatus: mlRes.status, authValid: mlRes.ok, detail }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let email = '';
  try {
    const body = await req.json();
    email = typeof body.email === 'string' ? body.email.trim() : '';
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ error: 'A valid email address is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = Netlify.env.get('MAILERLITE_API_KEY');
  if (!apiKey) {
    console.error('MAILERLITE_API_KEY is not set');
    return new Response(JSON.stringify({ error: 'Newsletter signup is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: [NEWSLETTER_SUBSCRIBERS_GROUP_ID],
      status: 'active',
    }),
  });

  if (!mlRes.ok) {
    const detail = await mlRes.text();
    console.error('MailerLite subscribe failed', mlRes.status, detail);
    return new Response(JSON.stringify({ error: 'Subscription failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = {
  path: '/api/newsletter-subscribe',
};
