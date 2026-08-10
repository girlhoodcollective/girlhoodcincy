const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

export const EVENTS = [
  {
    id: 'market', mon: 'Sep', day: '13', year: '2026', cat: 'Market', published: false,
    badgeBg: 'var(--gc-sage-light)', badgeText: 'var(--gc-emerald)',
    title: 'Girlhood Goes to Market', where: 'Fall Makers Market · Cincinnati',
    price: 'Free · All ages',
    desc: 'Local makers, florals, and neighbors — an afternoon of finding your people and supporting the women building things across Greater Cincinnati.',
    long: 'A free, open-to-all afternoon market featuring 20+ local women makers, seasonal florals from the shop, and live music. Bring a friend, bring your kids, bring cash for the makers.',
  },
  {
    id: 'dream-big', mon: 'Sep', day: '12', year: '2026', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/dream-big-monthly-experience-sep-12-2026',
    buyButtonProductId: '7764329365600',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Dream Big', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "A vision board, a dance workout and confidence activity, and a letter to your future self — an afternoon on goal-setting and dreaming with purpose.",
    long: "A confidence-building dance workout and confidence activity, hands-on vision board building, and a future-self letter to open in a year. 120 minutes · girls 8–12.",
  },
  {
    id: 'helping-hands', mon: 'Sep', day: '19', year: '2026', cat: 'Workshop',
    shopifyUrl: 'https://checkout.mailerlite.com/checkout/33148',
    landingPath: '/helping-hands',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Helping Hands', where: 'Parent-Child Volunteer Experience · 3500 Columbia Pkwy',
    price: '$50 · per adult-child pair',
    desc: 'A hands-on service project for parents and kids (ages preschool–8 or so) to give back together — supporting one of our partner nonprofits.',
    long: "Join us for a hands-on service opportunity supporting one of our partner organizations. All supplies provided — just bring yourself and a positive attitude. All genders of kids and grownups welcome. One ticket required per adult, max 2 kids per adult ticket.",
  },
  {
    id: 'bloom-confidence', mon: 'Oct', day: '10', year: '2026', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/bloom-with-confidence-monthly-experience-oct-10-2026',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Bloom with Confidence', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "Build a paper-petal \"Confidence Garden\" naming your strengths and coping tools, with play therapist Val Strunk of Wired to Bloom.",
    long: "Meet Val Strunk and learn what a play therapist actually does. Build a Confidence Garden keepsake — each petal names a strength or coping tool — plus a guided journal prompt on what helps you bloom on a hard day. 120 minutes · girls 8–12.",
  },
  {
    id: 'treasure-story', mon: 'Nov', day: '14', year: '2026', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/treasure-your-story-monthly-experience-nov-14-2026',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Treasure Your Story', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: "Decorate a keepsake treasure box, learn saving vs. spending, and set a savings goal — with Courtney Reinhold of Little Treasurer.",
    long: "Meet Courtney Reinhold and the story behind Little Treasurer and Finley the panda. A money-basics mini-lesson (coin ID, saving vs. spending, goal setting), a decorated keepsake treasure box, and a short memory or goal story to put inside. 120 minutes · girls 8–12.",
  },
  {
    id: 'sweet-success', mon: 'Dec', day: '12', year: '2026', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/sweet-success-monthly-experience-dec-12-2026',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Sweet Success', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Decorate cupcakes or cookies and design the packaging to give them away — with Trillium Cake Co. on small-business basics.',
    long: "Meet the Trillium Cake Co. baker and her small-business story. Decorate cupcakes or cookies, then a mini branding lesson to design a simple label or box before gifting your treats to someone you choose. 120 minutes · girls 8–12.",
  },
  {
    id: 'holiday', mon: 'Dec', day: '06', year: '2026', cat: 'Market', published: false,
    badgeBg: 'var(--gc-sage-light)', badgeText: 'var(--gc-emerald)',
    title: 'Holiday Neighbors Market', where: 'Winter Market · The Columbia Center',
    price: 'Free · All ages',
    desc: 'Greater Cincinnati comes together one more time before the year closes — gifts, greenery, cocoa, and the neighbors you love.',
    long: 'Our cozy winter market: handmade gifts from local women makers, holiday florals and wreaths, hot cocoa for the kids, and a warm room to end the year in.',
  },
  {
    id: 'every-brain-belongs', mon: 'Jan', day: '09', year: '2027', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/every-brain-belongs-monthly-experience-jan-9-2027',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Every Brain Belongs', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Build a personalized learning toolkit and explore how every brain learns differently, with Dana Huls of Learn With Me Cincy.',
    long: "Meet Dana Huls and her work on math anxiety and learning differences. Identify your own visual, auditory, or hands-on learning style, build a personalized toolkit, and reflect on a growth-mindset journal prompt. 120 minutes · girls 8–12.",
  },
  {
    id: 'building-community', mon: 'Feb', day: '13', year: '2027', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/building-community-monthly-experience-feb-13-2027',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Building Community', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Design a kindness campaign or neighborhood guide in small groups, with Abbey Cummins of Everything Cincy.',
    long: "Meet Abbey Cummins and how she built Everything Cincy to connect people to the city. Small groups design a kindness campaign or mini neighborhood guide, present it to the room, then assemble a take-home community challenge kit. 120 minutes · girls 8–12.",
  },
  {
    id: 'ready-to-lead', mon: 'Mar', day: '13', year: '2027', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/ready-to-lead-monthly-experience-mar-13-2027',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Ready to Lead', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'A team challenge and an intro to emergency preparedness, with a guest safety volunteer.',
    long: "An intro-level taste of preparedness (not a certification course): build a mini emergency kit, practice a scenario as a team, and talk through what to do and who to call. Every girl leaves with a take-home preparedness resource kit. 120 minutes · girls 8–12.",
  },
  {
    id: 'mix-it-up', mon: 'Apr', day: '10', year: '2027', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/mix-it-up-monthly-experience-apr-10-2027',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Mix It Up', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Create a signature mocktail, name it, and design the menu card — with the founder behind Nava.',
    long: "Meet the Nava founder and her story building a coffee and beverage brand from a truck. Small groups create a signature mocktail recipe, design a simple menu card, name and brand the drink, then taste-test and serve each other. 120 minutes · girls 8–12.",
  },
  {
    id: 'launch-big-idea', mon: 'May', day: '08', year: '2027', cat: 'Workshop', published: false,
    shopifyUrl: 'https://shop.girlhoodcincy.com/products/launch-your-big-idea-monthly-experience-may-8-2027',
    badgeBg: 'var(--gc-lavender-soft)', badgeText: 'var(--gc-slate)',
    title: 'Launch Your Big Idea', where: 'Monthly Experience · Girls 8–12',
    price: '$40 · materials included',
    desc: 'Develop a business idea, sketch a logo, package a product, and pitch it — with Truckshop founder Ashley Volbrecht.',
    long: "Meet Ashley Volbrecht, founder of Truckshop, and her origin story. Develop a simple business idea, sketch a logo, package a sample product, and practice a one-minute pitch in pairs — with volunteers pitching to the whole group. 120 minutes · girls 8–12.",
  },
];

export const PAST_EVENTS = [
  {
    title: 'Better, Together — Girlhood Brunch', caption: 'July 2026 · Flagship fundraiser for EIE', href: '/better-together-recap',
    photo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/432_a2c25d8f-0ce8-40d5-b0fe-f1f1d4b17a69.jpg?v=1784653522&width=560',
  },
  {
    title: 'Spring Studio Art Series', caption: 'April 2025 · 10 students',
    photo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/IMG_2311.jpg?v=1777676512&width=560',
  },
  {
    title: 'Hyde Park Market', caption: 'August 2025 · 22 makers',
    photo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/165.jpg?v=1783270119&width=560',
  },
  {
    title: 'Fall Arts and Crafts Series', caption: 'October 2025 · Girls 9+',
    photo: 'https://cdn.shopify.com/s/files/1/0656/4328/2528/files/gc-studio-art-1.jpg?v=1774545499&width=560',
  },
];

export function eventDate(e) {
  return new Date(Number(e.year), MONTHS[e.mon], Number(e.day));
}

export function getUpcomingPublishedEvents(count = 2) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return EVENTS
    .filter((e) => e.published !== false && eventDate(e) >= today)
    .sort((a, b) => eventDate(a) - eventDate(b))
    .slice(0, count);
}
