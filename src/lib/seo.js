import { useEffect } from 'react';

export const SITE_URL = 'https://girlhoodcincy.com';
export const SITE_NAME = 'Girlhood Collective';
export const DEFAULT_OG_IMAGE = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=1200';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO({ title, description, path, image = DEFAULT_OG_IMAGE }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url || SITE_URL);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url || SITE_URL);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, path, image]);
}

// Injects one or more JSON-LD <script> blocks, keyed by id so re-renders replace
// rather than duplicate them, and removed on unmount so schema doesn't leak
// across client-side route changes.
export function useStructuredData(id, data) {
  useEffect(() => {
    if (!data) return undefined;
    const scriptId = `ld-json-${id}`;
    let el = document.getElementById(scriptId);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = scriptId;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      el?.remove();
    };
  }, [id, data]);
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
