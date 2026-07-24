export interface GCEvent {
  id: string;
  mon: string;
  day: string;
  year: string;
  cat: 'Brunch' | 'Market' | 'Workshop';
  badgeBg: string;
  badgeText: string;
  title: string;
  where: string;
  price: string;
  desc: string;
  long: string;
}

export const events: GCEvent[] = [
  {
    id: 'brunch',
    mon: 'Jul',
    day: '18',
    year: '2026',
    cat: 'Brunch',
    badgeBg: 'var(--gc-blush)',
    badgeText: 'var(--gc-slate)',
    title: 'Better, together.',
    where: 'Sat, Jul 18 · 10 AM–1 PM · Columbia Center',
    price: '$75 per seat · benefiting EIE',
    desc: "Our flagship fundraiser — an intimate, seated brunch bringing Cincinnati's most engaged women into one room to connect, learn from an expert panel, and give.",
    long: "More than a brunch. An upscale, seated morning of expert panelists, a real EIE student story, and generous conversation — with a portion of every $75 seat going directly to Endurance in Education's youth mentorship work. Saturday, July 18, 2026 · 10 AM–1 PM at the Columbia Center.",
  },
  {
    id: 'market',
    mon: 'Sep',
    day: '13',
    year: '2026',
    cat: 'Market',
    badgeBg: 'var(--gc-sage-light)',
    badgeText: 'var(--gc-emerald)',
    title: 'Girlhood Goes to Market',
    where: 'Fall Makers Market · Cincinnati',
    price: 'Free · All ages',
    desc: 'Local makers, florals, and neighbors — an afternoon of finding your people and supporting the women building things across Greater Cincinnati.',
    long: 'A free, open-to-all afternoon market featuring 20+ local women makers, seasonal florals from the shop, and live music. Bring a friend, bring your kids, bring cash for the makers.',
  },
  {
    id: 'studio',
    mon: 'Oct',
    day: '02',
    year: '2026',
    cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)',
    badgeText: 'var(--gc-slate)',
    title: 'Studio Art Series',
    where: '4 Wednesdays · Girls 9+',
    price: '$150 · materials included',
    desc: 'An immersive four-week workshop where girls use art as a tool for self-expression, reflection, and confidence building. No experience required.',
    long: 'Four Wednesdays of ink, watercolor, acrylics, and oil pastels — guided by a local artist in a small, supportive studio of ten. Every student leaves with finished pieces to hang and be genuinely proud of.',
  },
  {
    id: 'florals',
    mon: 'Nov',
    day: '07',
    year: '2026',
    cat: 'Workshop',
    badgeBg: 'var(--gc-lavender-soft)',
    badgeText: 'var(--gc-slate)',
    title: 'An Evening of Florals',
    where: 'Seasonal Arranging · Ages 16+',
    price: '$75 · flowers & vessel included',
    desc: 'A slow, hands-on evening building your own seasonal arrangement — a little wine, a lot of greenery, and space to breathe.',
    long: 'Learn the basics of seasonal arranging with florals fresh from the shop. You bring yourself; we bring the blooms, the vessel, and a warm room full of good company. Leave with an arrangement for your table.',
  },
  {
    id: 'holiday',
    mon: 'Dec',
    day: '06',
    year: '2026',
    cat: 'Market',
    badgeBg: 'var(--gc-sage-light)',
    badgeText: 'var(--gc-emerald)',
    title: 'Holiday Neighbors Market',
    where: 'Winter Market · The Columbia Center',
    price: 'Free · All ages',
    desc: 'Greater Cincinnati comes together one more time before the year closes — gifts, greenery, cocoa, and the neighbors you love.',
    long: 'Our cozy winter market: handmade gifts from local women makers, holiday florals and wreaths, hot cocoa for the kids, and a warm room to end the year in.',
  },
  {
    id: 'intentions',
    mon: 'Jan',
    day: '17',
    year: '2027',
    cat: 'Brunch',
    badgeBg: 'var(--gc-blush)',
    badgeText: 'var(--gc-slate)',
    title: 'New Year Intentions Brunch',
    where: "Women's Brunch · Cincinnati",
    price: 'From $55',
    desc: 'A quiet, intentional brunch to start the year on purpose — journaling, honest conversation, and women of every age at one table.',
    long: 'No resolutions, no pressure. Just a seated brunch, a guided intention-setting session, and a room of women choosing to start the year with clarity and community.',
  },
];

export const pastEvents = [
  { id: 'ev-past-1', title: 'Spring Studio Art Series', meta: 'April 2025 · 10 students' },
  { id: 'ev-past-2', title: 'Rooftop Summer Social', meta: 'July 2025 · Cincinnati' },
  { id: 'ev-past-3', title: 'Back-to-School Market', meta: 'August 2025 · 22 makers' },
  { id: 'ev-past-4', title: "Founders' Coffee", meta: 'February 2025 · Where it began' },
];
