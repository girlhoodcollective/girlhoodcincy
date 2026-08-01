import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics.js';

export default function PageViewTracker() {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    // Deferred so it fires after the matched page's own useSEO() effect
    // has updated document.title for this route.
    const id = setTimeout(() => {
      trackPageView(pathname + search + hash, document.title);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname, hash, search]);
  return null;
}
