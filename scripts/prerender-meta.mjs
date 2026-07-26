// Runs after `vite build`. Writes a static index.html per route with that
// route's real title/description/OG tags baked into <head>, so link-preview
// bots that don't execute JS (Facebook, LinkedIn, Slack, iMessage, X) show the
// right card instead of the homepage's. Netlify serves a matching static file
// before falling back to the SPA rewrite in _redirects, so real browsers still
// get the same JS bundle and the React app takes over exactly as before.
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE_URL = 'https://girlhoodcincy.com';
const DEFAULT_IMAGE = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=1200';

// Mirrors each page's useSEO({...}) call in src/pages/*.jsx. Keep in sync if
// a page's title/description/image changes.
const ROUTES = [
  {
    path: '/',
    title: 'Girlhood Collective | Community Strategy Consulting in Cincinnati',
    description: 'Building community through authentic relationships, trust, and intentional connection. We help people see what’s possible, bring the right voices together, and create the conditions where communities can thrive.',
  },
  {
    path: '/about',
    title: 'About Brittany Gruber | Girlhood Collective',
    description: 'Brittany Gruber is the founder of Girlhood Collective, a Cincinnati-based community strategy practice helping small businesses, health professionals, and mission-driven organizations build real, lasting community.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/J8A2562.jpg?v=1774664826&width=1200',
  },
  {
    path: '/events',
    title: 'Upcoming Events | Girlhood Collective',
    description: 'Girlhood Cincy Monthly Experiences — one Saturday a month, September through May, where girls ages 8–12 meet local women entrepreneurs and build confidence through hands-on projects.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-2.jpg?v=1774548572&width=1200',
  },
  {
    path: '/village',
    title: 'Join the Village | Girlhood Collective Newsletter',
    description: 'A free monthly letter for anyone building real community — resources, local favorites, and what’s inspiring us right now.',
  },
  {
    path: '/work-together',
    title: 'Work Together | Girlhood Collective Consulting & Speaking',
    description: 'Community Audit & Roadmap, Community Strategy Partnership, Event Design & Facilitation, and Speaking — pick the tier that fits your budget and commitment level.',
  },
  {
    path: '/resources',
    title: 'Resources | Community Strategy Insights from Girlhood Collective',
    description: 'Practical ideas for building stronger organizations, neighborhoods, and relationships — the same thinking behind every Girlhood Collective partnership.',
  },
  {
    path: '/contact',
    title: "Let's Schedule a Time to Chat | Girlhood Collective",
    description: "Twenty minutes, no pitch — just a conversation about what you're building.",
  },
  {
    path: '/consultation-intake',
    title: 'Consultation Intake — Girlhood Collective',
    description: 'An 8-minute diagnostic to help identify what your organization actually needs, and where we’d start working together.',
  },
  {
    path: '/worth-quiz',
    title: 'Dollars & Cents: A Skills Inventory — Girlhood Collective',
    description: "A warm skills inventory that maps your real, marketable strengths to an income path grounded in Cincinnati's actual market.",
  },
  {
    path: '/better-together-recap',
    title: 'Case Study: Better Together Brunch — Girlhood Collective',
    description: 'How one event turned into $3,000 raised, 10 new sponsors, and the start of a lasting community for Endurance in Education.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=1200',
  },
];

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

function renderFor(route) {
  const url = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const image = route.image || DEFAULT_IMAGE;

  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
  html = html.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
  return html;
}

for (const route of ROUTES) {
  const html = renderFor(route);
  if (route.path === '/') {
    writeFileSync(join(DIST, 'index.html'), html);
  } else {
    const dir = join(DIST, route.path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }
}

console.log(`Prerendered per-route meta tags for ${ROUTES.length} routes.`);
