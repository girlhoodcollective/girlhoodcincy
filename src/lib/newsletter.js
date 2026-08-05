import { trackSignupConversion } from './analytics.js';

export async function subscribeToNewsletter(email) {
  const res = await fetch('/api/newsletter-subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Subscription failed: ${res.status}`);
  }
  trackSignupConversion();
}
