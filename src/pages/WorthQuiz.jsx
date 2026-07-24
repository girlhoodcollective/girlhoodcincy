import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

const QUESTIONS = [
  { type: 'single', text: 'When something at work is broken, what do you actually do?', context: "Not what you should do — what do you instinctively reach for first?", options: [{ text: 'Make a list, assign owners, build a timeline — project mode immediately', skills: ['project_mgmt', 'operations'] }, { text: "Start asking 'why' until I find the real problem underneath", skills: ['analysis', 'systems'] }, { text: 'Call the right person — I know who can actually fix it', skills: ['people', 'communication'] }, { text: 'Write up what\'s happening so everyone sees the same picture', skills: ['writing', 'communication'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which of these have people actually said to you — job, volunteer work, or just life?', context: 'Select up to 3. The things people thank you for or hand you without asking.', options: [{ text: '"Can you proofread / rewrite / send this for me?"', skills: ['writing', 'communication'] }, { text: '"Can you help me figure out what to do?"', skills: ['coaching', 'people'] }, { text: '"Can you run this? You actually follow through."', skills: ['project_mgmt', 'operations'] }, { text: '"Can you explain this so it makes sense?"', skills: ['teaching', 'communication'] }, { text: '"Can you handle the people side of this?"', skills: ['people', 'leadership'] }, { text: '"Can you look at the numbers on this?"', skills: ['analysis', 'research'] }] },
  { type: 'single', text: "You're at a Cincinnati networking event. Where do you end up by the end of the night?", context: "How you naturally move through a room — not what you aspire to.", options: [{ text: 'Deep in a real conversation with one or two people I connected with', skills: ['coaching', 'people'] }, { text: 'Having exchanged numbers with five people from different industries', skills: ['people', 'leadership'] }, { text: 'Scoping the room, thinking about who knows who and what\'s possible', skills: ['systems', 'analysis'] }, { text: 'Telling a story that made a small group laugh or lean in', skills: ['storytelling', 'speaking'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which of these tools or skills do you already use — even informally?', context: 'Select all that apply. On the job, on YouTube, or just by doing.', options: [{ text: 'Canva, Adobe, or any visual design tool', skills: ['visual', 'marketing'] }, { text: 'AI tools — ChatGPT, Claude, or anything similar', skills: ['tech', 'systems'] }, { text: 'Email marketing, social scheduling, or analytics', skills: ['marketing', 'tech'] }, { text: 'Spreadsheets or databases — actually building, not just reading', skills: ['analysis', 'operations'] }, { text: 'Project tools — Asana, Notion, Trello, a good to-do system', skills: ['project_mgmt', 'operations'] }, { text: 'Video editing, podcast, or content creation tools', skills: ['visual', 'storytelling'] }] },
  { type: 'single', text: 'When you imagine finally getting paid what you\'re worth, what does that look like?', context: "What's your version of financial independence?", options: [{ text: 'A full-time role at a company I believe in — stability first', skills: ['operations', 'project_mgmt'] }, { text: 'Multiple income streams — some consistent, some flexible, some mine', skills: ['coaching', 'marketing'] }, { text: 'Running my own thing — consulting, freelance, real revenue', skills: ['leadership', 'storytelling'] }, { text: "A role that pays well and doesn't follow me home", skills: ['teaching', 'people'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which Cincinnati industries feel like the right world for you?', context: 'Select up to 3. Where you can see yourself thriving and earning.', options: [{ text: "Healthcare — Cincinnati Children's, UC Health, TriHealth, mental health", skills: ['people', 'coaching'] }, { text: 'Consumer brands & CPG — P&G, Kroger, brand-adjacent roles', skills: ['marketing', 'storytelling'] }, { text: 'Finance & banking — Fifth Third, Western & Southern', skills: ['analysis', 'operations'] }, { text: 'Nonprofits, education & social impact', skills: ['advocacy', 'teaching'] }, { text: 'Tech, startups & innovation — the Cintrifuse ecosystem, remote-first', skills: ['tech', 'systems'] }, { text: 'Creative industries — arts, media, events, hospitality, OTR', skills: ['visual', 'storytelling'] }] },
  { type: 'single', text: 'How do you feel about selling yourself — your ideas, your work, your value?', context: 'Be honest about where you are right now.', options: [{ text: "Decent at it when I believe in what I'm pitching", skills: ['storytelling', 'marketing'] }, { text: 'I sell through trust and track record', skills: ['people', 'leadership'] }, { text: 'Honestly? I undersell myself constantly and I know it', skills: ['coaching', 'advocacy'] }, { text: "Better at selling other people's ideas than my own", skills: ['writing', 'communication'] }] },
  { type: 'single', text: 'You have 10 free hours this week, no obligations. What do you do with it?', context: "What you choose when no one's watching says a lot.", options: [{ text: 'Learn something — a new tool, skill, course, deep dive', skills: ['research', 'tech'] }, { text: 'Create something — write, design, build, make', skills: ['writing', 'visual'] }, { text: 'Connect — catch up with someone, host, go somewhere with people I love', skills: ['people', 'communication'] }, { text: 'Optimize something — a system, a process, get organized', skills: ['systems', 'operations'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which of these roles have you played — paid or unpaid?', context: 'Select all that apply. Parenting, volunteering, side projects all count.', options: [{ text: 'Event organizer or coordinator — made something from scratch', skills: ['project_mgmt', 'operations'] }, { text: 'Mentor, tutor, or go-to person for someone figuring something out', skills: ['teaching', 'coaching'] }, { text: 'Fundraiser, grant writer, or someone who made the case for a cause', skills: ['advocacy', 'writing'] }, { text: "Team lead, captain, or unofficial 'person in charge'", skills: ['leadership', 'people'] }, { text: 'Content creator, newsletter writer, or maker for an audience', skills: ['writing', 'marketing'] }, { text: 'The person who figured out the tech everyone else used', skills: ['tech', 'systems'] }] },
  { type: 'single', text: 'When you really care about something, how do you get others to care too?', context: 'This is your influence style — it matters more than people credit.', options: [{ text: 'I share the evidence — data, research, receipts', skills: ['analysis', 'research'] }, { text: 'I tell a story that makes it personal', skills: ['storytelling', 'speaking'] }, { text: 'I get people in a room together — energy is contagious', skills: ['people', 'advocacy'] }, { text: 'I write something — an email, a post, a letter', skills: ['writing', 'marketing'] }] },
  { type: 'single', text: "If you've thought about changing jobs, what's driving it?", context: "Answer for the version of you that's considered it.", options: [{ text: "The pay doesn't match my contribution. I know the market now.", skills: ['advocacy', 'leadership'] }, { text: "I'm not growing. I need a role that stretches me.", skills: ['teaching', 'systems'] }, { text: 'The culture is misaligned. I want somewhere that fits me.', skills: ['people', 'coaching'] }, { text: 'I want to build something of my own', skills: ['storytelling', 'marketing'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which of these describe how you work best?', context: 'Select up to 3. Your actual style, not an idealized one.', options: [{ text: 'Remote or hybrid — I do best when I control my environment', skills: ['operations', 'writing'] }, { text: 'Collaborative — I think better bouncing ideas off people', skills: ['communication', 'people'] }, { text: 'Independent and deep — give me a problem and let me work alone', skills: ['research', 'analysis'] }, { text: 'Fast-paced — I thrive with urgency and real stakes', skills: ['project_mgmt', 'leadership'] }, { text: 'Creative and unstructured — my best ideas don\'t come from a 9–5', skills: ['visual', 'storytelling'] }] },
  { type: 'single', text: "What's the thing you do that nobody else seems to think is hard?", context: 'The invisible skill — so seamless no one calls it a skill.', options: [{ text: 'Keep everyone aligned and moving — communication, logistics, all of it', skills: ['communication', 'operations'] }, { text: 'Make sense of information nobody else wants to deal with', skills: ['analysis', 'research'] }, { text: 'Write things that actually land', skills: ['writing', 'marketing'] }, { text: 'Read the room and know exactly what it needs', skills: ['people', 'coaching'] }] },
  { type: 'single', text: 'When you imagine making your most money, what does the work look like?', context: 'Your version — not a corner office by default.', options: [{ text: "Advising or consulting — people paying for my judgment", skills: ['coaching', 'analysis'] }, { text: 'Creating content or products that earn while I sleep', skills: ['marketing', 'visual'] }, { text: 'Leading a team or org — scope, impact, and a title to match', skills: ['leadership', 'project_mgmt'] }, { text: 'Speaking, training, or teaching rooms full of people', skills: ['speaking', 'teaching'] }] },
  { type: 'multi', maxSelect: 3, text: 'What do you want your work to do — beyond paying the bills?', context: 'Select up to 3. Your money-meaning-well-being trifecta.', options: [{ text: 'Change something real — policy, systems, how people see themselves', skills: ['advocacy', 'teaching'] }, { text: 'Build something that lasts — a brand, a practice, a product', skills: ['marketing', 'leadership'] }, { text: 'Serve a community I actually belong to', skills: ['people', 'coaching'] }, { text: 'Use my creativity — make things, think differently', skills: ['visual', 'storytelling'] }, { text: 'Keep learning — get smarter and more capable over time', skills: ['research', 'systems'] }] },
  { type: 'single', text: 'If a Cincinnati Fortune 500 called tomorrow, which role could you actually do?', context: 'P&G. Kroger. Fifth Third. Cintas. Western & Southern.', options: [{ text: 'Brand manager, UX researcher, or consumer insights', skills: ['marketing', 'analysis'] }, { text: 'Program manager, ops lead, or process improvement', skills: ['project_mgmt', 'operations'] }, { text: 'Community relations, DEI, or communications', skills: ['advocacy', 'communication'] }, { text: 'Learning & development, talent, or HR business partner', skills: ['teaching', 'people'] }] },
  { type: 'single', text: "When you've mentored or guided someone, what did they say afterward?", context: 'Think of an actual moment.', options: [{ text: '"That conversation changed how I see myself."', skills: ['coaching', 'storytelling'] }, { text: '"I finally understand how this works."', skills: ['teaching', 'communication'] }, { text: '"I know what to do now — you helped me see a path."', skills: ['analysis', 'coaching'] }, { text: '"I didn\'t know that opportunity existed — thank you for the intro."', skills: ['advocacy', 'people'] }] },
  { type: 'multi', maxSelect: 3, text: 'Which of these could you lead tomorrow — with real confidence?', context: "Select up to 3. Not 'I could prepare' — right now.", options: [{ text: 'How to communicate or navigate hard workplace conversations', skills: ['communication', 'teaching'] }, { text: 'How to use AI tools to save time and do better work', skills: ['tech', 'systems'] }, { text: 'How to know your value and ask for it', skills: ['advocacy', 'leadership'] }, { text: 'How to build community or run a meaningful event', skills: ['people', 'operations'] }, { text: 'How to write content that converts', skills: ['writing', 'marketing'] }, { text: 'Something personal — a story that shifts how people see themselves', skills: ['storytelling', 'coaching'] }] },
  { type: 'single', text: 'When you walk into a room of peers, what do you tell yourself?', context: "Acknowledging it doesn't make it true.", options: [{ text: '"I belong here and I have something specific to contribute."', skills: ['leadership', 'speaking'] }, { text: '"I have to prove myself before I belong."', skills: ['advocacy', 'coaching'] }, { text: '"I\'m watching first. I\'ll speak when I know what\'s needed."', skills: ['analysis', 'people'] }, { text: '"Half these people probably feel exactly like I do."', skills: ['storytelling', 'teaching'] }] },
  { type: 'single', text: 'If a younger woman asked \'how did you figure out what you were worth?\' — what would you say?', context: 'Your answer tells us more about your leadership than anything else.', options: [{ text: '"I stopped asking permission to know what I already knew."', skills: ['leadership', 'advocacy'] }, { text: '"I found people who reflected it back until I could see it."', skills: ['people', 'coaching'] }, { text: '"I built something — and couldn\'t argue with the evidence."', skills: ['project_mgmt', 'storytelling'] }, { text: '"I said out loud the thing I was already doing — then charged for it."', skills: ['marketing', 'writing'] }] },
];

const SKILL_LABELS = { project_mgmt: 'Project & Program Management', operations: 'Operations & Process Design', leadership: 'Leadership & Strategic Thinking', people: 'People & Relationship Intelligence', communication: 'Communication & Facilitation', analysis: 'Data Analysis & Research', research: 'Research & Strategic Insight', writing: 'Writing & Content Creation', marketing: 'Marketing & Brand Strategy', coaching: 'Coaching & Advising', teaching: 'Training & Instructional Design', speaking: 'Public Speaking & Facilitation', storytelling: 'Storytelling & Persuasion', tech: 'Tech Fluency & Digital Tools', systems: 'Systems Thinking', advocacy: 'Advocacy & Community Building', visual: 'Visual Communication & Design' };

const ARCHETYPES = {
  connector: { name: 'Connector', tagline: 'You are the infrastructure other people\'s success runs on. You make people feel seen, trusted, and aligned — the most valuable skill in almost any room.', skills: ['people', 'communication', 'advocacy', 'coaching'], streams: [{ label: 'Full-time · in demand here', title: 'Community Affairs / DEI Manager', desc: "Cincinnati Children's, P&G, and Fifth Third are all building in this space. Relational intelligence is the job.", range: '$65K–$105K' }, { label: 'Consulting', title: 'ERG Strategy & Facilitation Consultant', desc: "Cincinnati's corporate ecosystem needs facilitators who can run culture programs that aren't performative.", range: '$2K–$8K / engagement' }, { label: 'Start now', title: '1:1 or Group Coaching Practice', desc: 'Coaches charge $100–$500/session. Your track record of making people feel seen is your proof of concept.', range: '$100–$500 / session' }], imposter: "Around 70% of women have experienced imposter syndrome — and it often gets worse with career progression, not better. That's not a sign something's wrong with you. It's a sign the systems you're moving through weren't built with you in mind.", reframe: "They called it 'soft skills.' What they meant was the skills that hold everything together — and they hoped you'd keep doing it for free." },
  strategist: { name: 'Strategist', tagline: "You see around corners. When everyone else is reacting, you've already mapped what happens next — exactly what Cincinnati's fastest-growing sectors pay for.", skills: ['analysis', 'systems', 'research', 'operations'], streams: [{ label: 'Full-time · in demand here', title: 'Strategy & Operations Lead', desc: "Kroger Tech, Fifth Third's fintech, and the Cintrifuse ecosystem hire people who turn complexity into clear action.", range: '$75K–$130K' }, { label: 'Fractional', title: 'Fractional COO or Process Consultant', desc: 'Local small businesses need someone like you 10–15 hours a month. Fractional ops is the fastest-growing consulting niche.', range: '$5K–$12K / month' }, { label: 'Start now', title: 'Data & Systems Analyst (Freelance)', desc: 'TriHealth and UC Health need people who can make their data legible.', range: '$50–$150 / hr' }], imposter: 'Credentials rarely resolve the doubt — even people with board certifications and decades of practice report it. What does help? Evidence. You have it. The question is whether you\'re letting yourself count it.', reframe: 'They said you were \'overthinking it.\' What they meant was you saw consequences they hadn\'t considered yet — and you were right.' },
  storyteller: { name: 'Storyteller', tagline: 'You make people feel something, then move. In a market flooded with AI content, your voice is the thing that cannot be automated.', skills: ['writing', 'storytelling', 'marketing', 'communication'], streams: [{ label: 'Full-time · in demand here', title: 'Content Strategist / Brand Voice Lead', desc: "P&G, Kroger, and local startups need humans who write with a point of view. Cincinnati's lower cost of living makes the salary go further.", range: '$65K–$110K' }, { label: 'Freelance', title: 'Copywriter / Ghostwriter for Executives', desc: "Plenty of Cincinnati leaders have something to say and can't find the words. Ghostwriting retainers run $2K–$8K/month.", range: '$2K–$8K / month' }, { label: 'Start now', title: 'Speaking & Workshop Facilitation', desc: 'Women of Cincy, eWomenNetwork, and Aviatra all book speakers.', range: '$1,500–$15K / talk' }], imposter: "Women undervalue their communication skills more than almost any other competency — we're trained to think things that come naturally aren't worth much. But natural to you + rare in the market + un-automatable = premium income.", reframe: "They said you were 'too much.' What they meant was you said things other people weren't brave enough to say — and people needed to hear them." },
  builder: { name: 'Builder', tagline: 'You make things real. You build the infrastructure that lets ideas survive contact with the real world — and that is genuinely rare.', skills: ['project_mgmt', 'operations', 'leadership', 'teaching'], streams: [{ label: 'Full-time · in demand here', title: 'Program Director / Project Manager', desc: "Cincinnati's healthcare sector — 165,000+ employees — constantly needs people who can execute.", range: '$80K–$130K' }, { label: 'Consulting', title: 'Launch & Implementation Consultant', desc: "Cincinnati's startups need someone to translate plans into programs. That's you, on contract, on your terms.", range: '$6K–$15K / project' }, { label: 'Start now', title: 'Course Creator / Instructional Designer', desc: 'If you can build a system, you can package it. Professional-development courses earn $500–$10K/month.', range: '$500–$10K / mo' }], imposter: "Women who 'just make things happen' are the most likely to be underpaid, because execution looks invisible to the people benefiting from it. Finding people who actually deliver is a top challenge for leaders — you are the answer to that problem.", reframe: "They said you were 'just organized.' What they meant was you were the only reason anything worked — and hoped you wouldn't notice." },
  advocate: { name: 'Advocate', tagline: 'You fight for people. Right now, in this city and this moment, industries need you urgently — especially the ones that have gotten by without you.', skills: ['advocacy', 'speaking', 'people', 'leadership'], streams: [{ label: 'Full-time · growing here', title: 'Community Affairs / Policy / DEI Lead', desc: "Several Greater Cincinnati companies make Forbes' Best Employers for Women — and are building out the infrastructure you can lead.", range: '$70K–$120K' }, { label: 'Consulting', title: 'Nonprofit Fundraising & Development Consultant', desc: 'United Way and dozens of local nonprofits need someone who can write grants and build donor relationships.', range: '$50–$100 / hr' }, { label: 'Start now', title: 'Corporate Trainer / ERG Speaker', desc: 'Lived experience + advocacy + the ability to hold a room = a paid speaking practice.', range: '$2K–$10K / session' }], imposter: "Advocacy and community-facing roles see some of the highest rates of imposter syndrome — often because you're asked to fix problems caused by the exact systems you work inside. The friction isn't you being wrong.", reframe: "They said you were 'too passionate.' What they meant was you cared so much it made people who weren't willing to care uncomfortable." },
  teacher: { name: 'Teacher', tagline: 'You make hard things make sense — and change how people think, not just what they know. That\'s the highest form of influence.', skills: ['teaching', 'coaching', 'communication', 'research'], streams: [{ label: 'Full-time · fastest-growing here', title: 'Learning & Development Manager', desc: "Healthcare, higher ed, and Cincinnati's corporate sector all have urgent L&D needs.", range: '$70K–$120K' }, { label: 'Consulting', title: 'Corporate Trainer / Workshop Designer', desc: 'The Women\'s Business Center and Aviatra book facilitators. Design and deliver a workshop for $2K–$10K.', range: '$2K–$10K / session' }, { label: 'Start now', title: 'Online Course Creator', desc: "Package what you already know. Your curriculum already exists — it's just living in your head.", range: '$500–$5K / mo' }], imposter: 'Nearly all women in knowledge-based fields report imposter feelings — including experienced teachers with years of evidence they\'re effective. The credential doesn\'t create the confidence. Letting yourself count your own receipts does.', reframe: "They said you were 'just a teacher.' What they meant was you could take something impossible and make it make sense — one of the rarest things a person can do." },
};

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function WorthQuiz() {
  const [phase, setPhase] = useState('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const start = () => {
    setPhase('quiz');
    setCurrent(0);
  };

  const hasAnswer = (qi) => {
    const q = QUESTIONS[qi];
    const a = answers[qi];
    if (q.type === 'multi') return Array.isArray(a) && a.length > 0;
    return a !== undefined && a !== null;
  };

  const select = (i) => {
    const qi = current;
    const q = QUESTIONS[qi];
    setAnswers((prev) => {
      const ans = { ...prev };
      if (q.type === 'multi') {
        const cur = Array.isArray(ans[qi]) ? [...ans[qi]] : [];
        const idx = cur.indexOf(i);
        if (idx >= 0) cur.splice(idx, 1);
        else if (cur.length < q.maxSelect) cur.push(i);
        ans[qi] = cur;
      } else {
        ans[qi] = i;
      }
      return ans;
    });
  };

  const go = (n) => {
    setCurrent(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calc = () => {
    const scores = {};
    QUESTIONS.forEach((q, qi) => {
      const a = answers[qi];
      if (a === undefined) return;
      let sk = [];
      if (q.type === 'multi' && Array.isArray(a)) a.forEach((ix) => sk.push(...q.options[ix].skills));
      else if (typeof a === 'number') sk = q.options[a].skills;
      sk.forEach((x) => (scores[x] = (scores[x] || 0) + 1));
    });
    return scores;
  };

  const archetypeKey = (scores) => {
    let best = 'connector';
    let bs = -1;
    for (const [k, a] of Object.entries(ARCHETYPES)) {
      const sc = a.skills.reduce((t, s) => t + (scores[s] || 0), 0);
      if (sc > bs) { bs = sc; best = k; }
    }
    return best;
  };

  const retake = () => {
    setPhase('intro');
    setCurrent(0);
    setAnswers({});
  };

  const next = () => {
    const qi = current;
    if (!hasAnswer(qi)) return;
    const last = qi === QUESTIONS.length - 1;
    if (last) setPhase('results');
    else go(qi + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gc-cream)' }}>
      <NavBar variant="minimal" label="What Are You Worth? · A skills inventory" />

      {phase === 'intro' && (
        <div style={{ background: 'var(--gc-navy)', padding: '64px 32px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -90, right: -70, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(186,217,243,.22), transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 640, margin: '0 auto' }}>
            <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 18 }}>
              A warm skills inventory · Cincinnati
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 44, fontWeight: 700, color: '#fff', lineHeight: 1.12 }}>
              You were never <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender-soft)' }}>wrong</span> about yourself.
            </div>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.8, maxWidth: 500, margin: '20px auto 26px' }}>
              You were just never given the tools to name what you're actually good at — and what it's worth. Twenty questions, about six minutes, and a lot more clarity than when you started.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
              <span style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.16)', borderRadius: 100, padding: '7px 16px', fontSize: 12, color: 'rgba(255,255,255,.72)' }}>
                Names the skills you call "just common sense"
              </span>
              <span style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.16)', borderRadius: 100, padding: '7px 16px', fontSize: 12, color: 'rgba(255,255,255,.72)' }}>
                Grounded in Cincinnati's real market
              </span>
            </div>
            <button className="btn" onClick={start} style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '16px 40px' }}>
              Begin the quiz →
            </button>
          </div>
        </div>
      )}

      {phase === 'quiz' && (() => {
        const qi = current;
        const q = QUESTIONS[qi];
        const a = answers[qi];
        const multi = q.type === 'multi';
        const last = qi === QUESTIONS.length - 1;
        const progressPct = Math.max(5, Math.round(((qi + 1) / QUESTIONS.length) * 100));

        return (
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '28px 24px 70px' }}>
            <div style={{ padding: '20px 0 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ font: '600 10px var(--font-sans)', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)' }}>Progress</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)' }}>
                  {qi + 1} / {QUESTIONS.length}
                </span>
              </div>
              <div style={{ height: 4, background: 'rgba(45,52,71,.12)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${progressPct}%`, height: '100%', background: 'var(--gc-emerald)', borderRadius: 2, transition: 'width .4s ease' }} />
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 14, boxShadow: '0 4px 24px rgba(53,91,116,.07)', padding: '36px 32px' }}>
              <div style={{ display: 'inline-block', background: 'var(--gc-sage-light)', borderRadius: 6, padding: '4px 11px', font: '600 10px var(--font-sans)', letterSpacing: '.08em', color: 'var(--gc-emerald)', marginBottom: 14, whiteSpace: 'nowrap' }}>
                {multi ? `Select up to ${q.maxSelect}` : 'Choose one'}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, lineHeight: 1.4, color: 'var(--gc-slate)', marginBottom: 8 }}>{q.text}</div>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 22 }}>{q.context}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {q.options.map((o, i) => {
                  const sel = multi ? Array.isArray(a) && a.includes(i) : a === i;
                  return (
                    <div
                      key={o.text}
                      onClick={() => select(i)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 13, padding: '14px 16px',
                        border: `2px solid ${sel ? 'var(--gc-emerald)' : 'var(--gc-border)'}`, borderRadius: 12,
                        background: sel ? 'var(--gc-sage-light)' : '#fff', cursor: 'pointer', transition: 'all .18s', userSelect: 'none',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0, width: 24, height: 24, borderRadius: multi ? 5 : '50%',
                          background: sel ? 'var(--gc-emerald)' : 'rgba(45,52,71,.08)', color: sel ? '#fff' : 'var(--gc-ink-muted)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, marginTop: 1, transition: 'all .18s',
                        }}
                      >
                        {LETTERS[i]}
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--gc-slate)', lineHeight: 1.45 }}>{o.text}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
                {qi > 0 && (
                  <button className="btn" onClick={() => go(qi - 1)} style={{ background: 'transparent', border: '1.5px solid var(--gc-border)', color: 'var(--gc-ink-muted)', padding: '13px 22px' }}>
                    ← Back
                  </button>
                )}
                <button className="btn" onClick={next} disabled={!hasAnswer(qi)} style={{ flex: 1, background: 'var(--gc-navy)', color: '#fff', padding: '14px 24px' }}>
                  {last ? 'See my results →' : 'Next →'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {phase === 'results' && (() => {
        const scores = calc();
        const key = archetypeKey(scores);
        const arch = ARCHETYPES[key];
        const top = Object.entries(scores).sort((x, y) => y[1] - x[1]).slice(0, 6);
        const max = top[0] ? top[0][1] : 1;

        return (
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '28px 24px 70px' }}>
            <div style={{ background: 'var(--gc-navy)', borderRadius: 16, padding: '42px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(186,217,243,.22), transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>Your skill profile</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 38, fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
                  The <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-lavender-soft)' }}>{arch.name}</span>
                </div>
                <p style={{ fontSize: 14.5, fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.7, maxWidth: 460, margin: '14px auto 0' }}>{arch.tagline}</p>
              </div>
            </div>

            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', margin: '32px 0 14px' }}>
              Your strongest marketable skills
            </div>
            {top.map(([s, v]) => {
              const pct = Math.round((v / max) * 100);
              return (
                <div key={s} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--gc-slate)' }}>{SKILL_LABELS[s] || s}</span>
                    <span style={{ fontSize: 12, color: 'var(--gc-emerald)', fontWeight: 600 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 8, background: 'rgba(45,52,71,.08)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', borderRadius: 4, background: 'var(--gc-emerald)' }} />
                  </div>
                </div>
              );
            })}

            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--gc-emerald)', margin: '30px 0 14px' }}>
              Income streams that fit you — in Cincinnati
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {arch.streams.map((s) => (
                <div key={s.title} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 12, borderLeft: '4px solid var(--gc-emerald)', padding: '20px 22px' }}>
                  <div style={{ font: '700 9.5px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 5 }}>{s.title}</div>
                  <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.55, marginBottom: 10 }}>{s.desc}</p>
                  <span style={{ display: 'inline-block', background: 'var(--gc-cream)', borderRadius: 6, padding: '4px 11px', fontSize: 12, fontWeight: 600, color: 'var(--gc-slate)' }}>{s.range}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--gc-sage-light)', borderRadius: 12, padding: '20px 22px', marginTop: 20, fontSize: 13, color: 'var(--gc-ink)', lineHeight: 1.65, borderLeft: '3px solid var(--gc-emerald)' }}>
              <strong style={{ color: 'var(--gc-emerald)' }}>On imposter syndrome:</strong> {arch.imposter}
            </div>

            <div style={{ background: 'var(--gc-slate)', borderRadius: 14, padding: '26px 28px', marginTop: 16 }}>
              <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-lavender-soft)', marginBottom: 12 }}>Your reframe</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: '#fff', lineHeight: 1.55 }}>{arch.reframe}</div>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 14, padding: 28, textAlign: 'center', marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>
                The table is set. Come <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>sit at it.</span>
              </div>
              <p style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, marginBottom: 18 }}>
                The next Girlhood Brunch is a room full of women who already knew they were worth more. Or start a conversation about working together.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link className="btn" to="/events" style={{ background: 'var(--gc-emerald)', color: '#fff', padding: '14px 26px' }}>
                  See the next brunch
                </Link>
                <button className="btn" onClick={retake} style={{ background: 'transparent', border: '1.5px solid var(--gc-border)', color: 'var(--gc-ink-muted)', padding: '13px 22px' }}>
                  Retake the quiz
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
