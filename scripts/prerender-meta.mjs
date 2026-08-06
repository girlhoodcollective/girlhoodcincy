// Runs after `vite build`. Writes a static index.html per route with that
// route's real title/description/OG tags baked into <head>, so link-preview
// bots that don't execute JS (Facebook, LinkedIn, Slack, iMessage, X) show the
// right card instead of the homepage's. Netlify serves a matching static file
// before falling back to the SPA rewrite in _redirects, so real browsers still
// get the same JS bundle and the React app takes over exactly as before.
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://girlhoodcincy.com';
const DEFAULT_IMAGE = 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/8.png?v=1784772079&width=1200';

// Mirrors each page's useSEO({...}) call in src/pages/*.jsx. Keep in sync if
// a page's title/description/image changes.
const ROUTES = [
  {
    path: '/',
    sourceFile: 'src/pages/Gateway.jsx',
    title: 'Girlhood Collective | Cincinnati Community & Advisory',
    description: 'A monthly community and events experience for Cincinnati neighbors — and a boutique advisory for organizations building real culture and community.',
  },
  {
    path: '/community',
    sourceFile: 'src/pages/Community.jsx',
    title: 'Girlhood Collective | Cincinnati Community Events',
    description: 'Monthly community events, a free newsletter, and the story behind founder Brittany Gruber — for Cincinnati families and neighbors looking for real connection.',
  },
  {
    path: '/homepage-v2',
    sourceFile: 'src/pages/HomepageV2.jsx',
    title: 'Girlhood Collective | Culture & Community Consulting',
    description: 'Fractional community strategy, culture, and events consulting for small businesses, allied health practices, and mission-driven organizations across Cincinnati.',
  },
  {
    path: '/events',
    sourceFile: 'src/pages/Events.jsx',
    title: 'Upcoming Events | Girlhood Collective',
    description: 'Girlhood Cincy Monthly Experiences — one Saturday a month, September through May, where girls ages 8–12 build confidence through hands-on projects.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-2.jpg?v=1774548572&width=1200',
  },
  {
    path: '/village',
    sourceFile: 'src/pages/Village.jsx',
    title: 'Subscribe to Our Updates | Girlhood Collective Newsletter',
    description: 'A free monthly letter for anyone building real community — resources, local favorites, and what’s inspiring us right now.',
  },
  {
    path: '/resources',
    sourceFile: 'src/pages/Resources.jsx',
    title: 'Resources | Insights from Girlhood Collective',
    description: 'Practical ideas for building stronger organizations, neighborhoods, and relationships — the same thinking behind every Girlhood Collective partnership.',
  },
  {
    path: '/consultation-intake',
    sourceFile: 'src/pages/ConsultationIntake.jsx',
    title: 'Consultation Intake — Girlhood Collective',
    description: 'An 8-minute diagnostic to help identify what your organization actually needs, and where Girlhood Collective would start working together.',
  },
  {
    path: '/worth-quiz',
    sourceFile: 'src/pages/WorthQuiz.jsx',
    title: 'Dollars & Cents: A Skills Inventory — Girlhood Collective',
    description: "A warm skills inventory that maps your real, marketable strengths to an income path grounded in Cincinnati's actual market.",
  },
  {
    path: '/helping-hands',
    sourceFile: 'src/pages/HelpingHands.jsx',
    title: 'Helping Hands: A Morning of Giving Back, Together | Girlhood Collective',
    description: 'A parent-child service morning in Cincinnati — a hands-on service project, pop-up consignment shopping, and a kids play experience. Saturday, September 19, 10–12 PM.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/Helping_Hands.png?v=1784921222&width=1200',
  },
  {
    path: '/better-together-recap',
    sourceFile: 'src/pages/BetterTogetherRecap.jsx',
    title: 'Case Study: Better Together Brunch — Girlhood Collective',
    description: 'How one event turned into $3,000 raised, 10 new sponsors, and the start of a lasting community for Endurance in Education.',
    image: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=1200',
  },
  {
    path: '/privacy',
    sourceFile: 'src/pages/Privacy.jsx',
    title: 'Privacy Policy | Girlhood Collective',
    description: 'What information Girlhood Collective collects through its forms and newsletter, how it is used, and who it is shared with.',
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

// Regenerate the sitemap with a real lastmod per route, pulled from that
// page's most recent commit. Falls back to today if git history isn't
// available (e.g. a shallow clone) so the build never fails on this step.
function lastModFor(sourceFile) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${sourceFile}"`, { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) return out;
  } catch {
    // fall through to today's date
  }
  return new Date().toISOString().slice(0, 10);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map((route) => {
    const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
    return `  <url><loc>${url}</loc><lastmod>${lastModFor(route.sourceFile)}</lastmod></url>`;
  }),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log('Regenerated sitemap.xml with lastmod dates.');
