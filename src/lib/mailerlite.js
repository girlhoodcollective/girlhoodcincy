export async function subscribeToNewsletter(email) {
  const res = await fetch('/.netlify/functions/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error(`Subscribe failed: ${res.status}`);
}
