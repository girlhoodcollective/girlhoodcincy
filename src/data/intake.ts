export interface OptionDef {
  v: string;
  label: string;
  sub?: string;
}

export const orgDefs: OptionDef[] = [
  { v: 'nonprofit', label: 'Nonprofit / social impact', sub: '501c3, community org, advocacy' },
  { v: 'small-biz', label: 'Small business or startup', sub: '10–50 people, figuring out culture' },
  { v: 'corporate', label: 'Corporate / mid-large org', sub: 'ERG, DEI initiative, leadership team' },
  { v: 'school', label: 'School or education setting', sub: 'K–12, university, parent org' },
  { v: 'community', label: 'Community group / civic org', sub: 'Volunteer-led, board, league' },
  { v: 'individual', label: 'Just me — individual', sub: 'Founder, leader, or person navigating something' },
];

export const problemDefs: OptionDef[] = [
  { v: 'culture', label: 'Culture / environment', sub: 'Something is off but hard to name' },
  { v: 'belonging', label: 'Belonging & inclusion', sub: "People don't feel safe or seen" },
  { v: 'communication', label: 'Communication breakdown', sub: 'Things get lost, people disengage' },
  { v: 'leadership', label: 'Leadership gaps', sub: 'Not sure how to lead this team' },
  { v: 'programming', label: 'Programming or services', sub: "What we offer isn't landing" },
  { v: 'nd-access', label: 'Neurodivergent access', sub: "Not built for how some people work" },
  { v: 'advocacy', label: 'Advocacy & policy', sub: 'We need to make the case for change' },
  { v: 'retention', label: 'Retention & burnout', sub: 'Losing people, losing energy' },
];

export const affectedDefs: OptionDef[] = [
  { v: 'women', label: 'Women / girls', sub: 'Any age, any context' },
  { v: 'nd-folks', label: 'Neurodivergent people', sub: 'ADHD, autism, dyslexia, etc.' },
  { v: 'bipoc', label: 'BIPOC community members', sub: 'Racial or ethnic minority in your space' },
  { v: 'youth', label: 'Youth / young people', sub: 'Under 25' },
  { v: 'frontline', label: 'Frontline staff / volunteers', sub: 'The people doing the direct work' },
  { v: 'leadership-team', label: 'Leadership / board', sub: 'The people making decisions' },
  { v: 'clients', label: 'Clients / participants', sub: 'The people you serve' },
  { v: 'whole-org', label: 'The whole organization', sub: 'Systemic — everyone feels it' },
];

export const supportDefs: OptionDef[] = [
  { v: 'consult', label: 'Strategic consultation', sub: 'Help me think, plan, and decide' },
  { v: 'workshop', label: 'Workshop / facilitation', sub: 'Bring something to my team' },
  { v: 'speaking', label: 'Speaking engagement', sub: 'An event, keynote, or panel' },
  { v: 'programming', label: 'Program design', sub: 'Help build or rethink what we offer' },
  { v: 'hr-support', label: 'HR or people strategy', sub: 'Hiring, culture, environment design' },
  { v: 'ongoing', label: 'Ongoing advisory', sub: 'A consistent voice in the room' },
];

export const durationDefs: OptionDef[] = [
  { v: 'new', label: 'Just started' },
  { v: 'months', label: 'A few months' },
  { v: 'year', label: 'About a year' },
  { v: 'years', label: 'Multiple years' },
  { v: 'always', label: "It's always been this way" },
];

export const timelineDefs: OptionDef[] = [
  { v: 'urgent', label: 'Urgent — something is actively wrong' },
  { v: 'soon', label: 'Soon — within 60 days' },
  { v: 'planning', label: 'Planning — 3–6 months' },
  { v: 'exploratory', label: 'Exploratory — figuring out fit' },
];

export const budgetDefs: OptionDef[] = [
  { v: 'under500', label: 'Under $500' },
  { v: '500-1500', label: '$500–$1,500' },
  { v: '1500-5k', label: '$1,500–$5,000' },
  { v: '5k-plus', label: '$5,000+' },
  { v: 'unknown', label: 'Not sure yet' },
];

export const ndDefs: OptionDef[] = [
  { v: 'yes-me', label: 'Yes — applies to me personally' },
  { v: 'yes-team', label: 'Yes — present in my team' },
  { v: 'yes-community', label: 'Yes — central to who we serve' },
  { v: 'yes-all', label: 'All of the above' },
  { v: 'not-sure', label: 'Not sure' },
  { v: 'no', label: 'No' },
];

export function safetyNoteText(v: string): string {
  const n: Record<string, string> = {
    '1': "This is significant. When people can't speak, problems compound silently. We'll address the environment before the work.",
    '2': "Guarded territory. People are watching what happens when someone takes a risk. Trust is the first thing we build.",
    '3': "Mixed signals. Safety is uneven — the gap is usually about identity, history, or hierarchy.",
    '4': "Mostly functional. There's enough trust to work; the gaps are probably specific and addressable.",
    '5': 'Strong foundation. Rare — we can move faster and go deeper when people already feel safe.',
  };
  return n[v] || '';
}
