import { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import { submitNetlifyForm } from '../lib/netlifyForms.js';

const ORG_DEFS = [
  { v: 'nonprofit', label: 'Nonprofit / social impact', sub: '501c3, community org, advocacy' },
  { v: 'small-biz', label: 'Small business or startup', sub: '10–50 people, figuring out culture' },
  { v: 'corporate', label: 'Corporate / mid-large org', sub: 'ERG, DEI initiative, leadership team' },
  { v: 'school', label: 'School or education setting', sub: 'K–12, university, parent org' },
  { v: 'community', label: 'Community group / civic org', sub: 'Volunteer-led, board, league' },
  { v: 'individual', label: 'Just me — individual', sub: 'Founder, leader, or person navigating something' },
];
const PROBLEM_DEFS = [
  { v: 'culture', label: 'Culture / environment', sub: 'Something is off but hard to name' },
  { v: 'belonging', label: 'Belonging & inclusion', sub: "People don't feel safe or seen" },
  { v: 'communication', label: 'Communication breakdown', sub: 'Things get lost, people disengage' },
  { v: 'leadership', label: 'Leadership gaps', sub: 'Not sure how to lead this team' },
  { v: 'programming', label: 'Programming or services', sub: "What we offer isn't landing" },
  { v: 'nd-access', label: 'Neurodivergent access', sub: "Not built for how some people work" },
  { v: 'advocacy', label: 'Advocacy & policy', sub: 'We need to make the case for change' },
  { v: 'retention', label: 'Retention & burnout', sub: 'Losing people, losing energy' },
];
const AFFECTED_DEFS = [
  { v: 'women', label: 'Women / girls', sub: 'Any age, any context' },
  { v: 'nd-folks', label: 'Neurodivergent people', sub: 'ADHD, autism, dyslexia, etc.' },
  { v: 'bipoc', label: 'BIPOC community members', sub: 'Racial or ethnic minority in your space' },
  { v: 'youth', label: 'Youth / young people', sub: 'Under 25' },
  { v: 'frontline', label: 'Frontline staff / volunteers', sub: 'The people doing the direct work' },
  { v: 'leadership-team', label: 'Leadership / board', sub: 'The people making decisions' },
  { v: 'clients', label: 'Clients / participants', sub: 'The people you serve' },
  { v: 'whole-org', label: 'The whole organization', sub: 'Systemic — everyone feels it' },
];
const SUPPORT_DEFS = [
  { v: 'consult', label: 'Strategic consultation', sub: 'Help me think, plan, and decide' },
  { v: 'workshop', label: 'Workshop / facilitation', sub: 'Bring something to my team' },
  { v: 'speaking', label: 'Speaking engagement', sub: 'An event, keynote, or panel' },
  { v: 'programming', label: 'Program design', sub: 'Help build or rethink what we offer' },
  { v: 'hr-support', label: 'HR or people strategy', sub: 'Hiring, culture, environment design' },
  { v: 'ongoing', label: 'Ongoing advisory', sub: 'A consistent voice in the room' },
];
const DURATION_DEFS = [
  { v: 'new', label: 'Just started' },
  { v: 'months', label: 'A few months' },
  { v: 'year', label: 'About a year' },
  { v: 'years', label: 'Multiple years' },
  { v: 'always', label: "It's always been this way" },
];
const TIMELINE_DEFS = [
  { v: 'urgent', label: 'Urgent — something is actively wrong' },
  { v: 'soon', label: 'Soon — within 60 days' },
  { v: 'planning', label: 'Planning — 3–6 months' },
  { v: 'exploratory', label: 'Exploratory — figuring out fit' },
];
const BUDGET_DEFS = [
  { v: 'under500', label: 'Under $500' },
  { v: '500-1500', label: '$500–$1,500' },
  { v: '1500-5k', label: '$1,500–$5,000' },
  { v: '5k-plus', label: '$5,000+' },
  { v: 'unknown', label: 'Not sure yet' },
];
const ND_DEFS = [
  { v: 'yes-me', label: 'Yes — applies to me personally' },
  { v: 'yes-team', label: 'Yes — present in my team' },
  { v: 'yes-community', label: 'Yes — central to who we serve' },
  { v: 'yes-all', label: 'All of the above' },
  { v: 'not-sure', label: 'Not sure' },
  { v: 'no', label: 'No' },
];

const SAFETY_NOTES = {
  1: 'This is significant. When people can’t speak, problems compound silently. We’ll address the environment before the work.',
  2: 'Guarded territory. People are watching what happens when someone takes a risk. Trust is the first thing we build.',
  3: 'Mixed signals. Safety is uneven — the gap is usually about identity, history, or hierarchy.',
  4: 'Mostly functional. There’s enough trust to work; the gaps are probably specific and addressable.',
  5: 'Strong foundation. Rare — we can move faster and go deeper when people already feel safe.',
};

const LABEL_STYLE = { display: 'block', font: '600 12.5px var(--font-sans)', color: 'var(--gc-slate)', marginBottom: 8 };
const HINT_STYLE = { fontSize: 12.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.5, marginBottom: 10 };

function CheckGrid({ group, defs }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {defs.map((d) => {
        const sel = group.value.includes(d.v);
        return (
          <div
            key={d.v}
            onClick={() => group.toggle(d.v)}
            style={{
              display: 'flex', gap: 10, alignItems: 'flex-start', padding: '14px 16px',
              border: `1.5px solid ${sel ? 'var(--gc-emerald)' : 'var(--gc-border)'}`, borderRadius: 8, cursor: 'pointer',
              background: sel ? 'var(--gc-sage-light)' : '#fff', transition: 'border-color .2s, background .2s', userSelect: 'none',
            }}
          >
            <div
              style={{
                width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${sel ? 'var(--gc-emerald)' : '#c3d0d8'}`, background: sel ? 'var(--gc-emerald)' : 'transparent',
              }}
            >
              {sel && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>}
            </div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--gc-slate)', lineHeight: 1.35 }}>{d.label}</div>
              <div style={{ fontSize: 11.5, fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: 2 }}>{d.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PillRow({ value, onChange, defs }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
      {defs.map((d) => {
        const sel = value === d.v;
        return (
          <div
            key={d.v}
            onClick={() => onChange(d.v)}
            style={{
              padding: '10px 18px', border: `1.5px solid ${sel ? 'var(--gc-navy)' : 'var(--gc-border)'}`, borderRadius: 100, cursor: 'pointer',
              fontSize: 13.5, color: sel ? '#fff' : 'var(--gc-slate)', background: sel ? 'var(--gc-navy)' : '#fff', transition: 'all .2s', userSelect: 'none',
            }}
          >
            {d.label}
          </div>
        );
      })}
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 14, boxShadow: '0 6px 28px rgba(53,91,116,.08)', padding: 44, marginTop: 36 }}>
      {children}
    </div>
  );
}

function SectionNav({ onNext, onBack, nextLabel = 'Continue →', disabled = false }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <button className="btn" onClick={onNext} disabled={disabled} style={{ background: 'var(--gc-navy)', color: '#fff', padding: '15px 30px', opacity: disabled ? 0.7 : 1, cursor: disabled ? 'default' : 'pointer' }}>
        {nextLabel}
      </button>
      {onBack && (
        <button className="btn" onClick={onBack} disabled={disabled} style={{ background: 'transparent', color: 'var(--gc-ink-muted)', padding: '15px 16px' }}>
          ← Back
        </button>
      )}
    </div>
  );
}

export default function ConsultationIntake() {
  const [section, setSection] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [problemDesc, setProblemDesc] = useState('');
  const [prevAttempts, setPrevAttempts] = useState('');
  const [peopleDesc, setPeopleDesc] = useState('');
  const [success, setSuccess] = useState('');
  const [fears, setFears] = useState('');
  const [resistance, setResistance] = useState('');
  const [trust, setTrust] = useState('');
  const [orgType, setOrgType] = useState([]);
  const [problemType, setProblemType] = useState([]);
  const [affected, setAffected] = useState([]);
  const [supportType, setSupportType] = useState([]);
  const [duration, setDuration] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [ndContext, setNdContext] = useState('');
  const [psychSafety, setPsychSafety] = useState('');

  const toggle = (setter) => (v) =>
    setter((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]));

  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const go = (n) => {
    setSection(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finishIntake = async () => {
    setSending(true);
    setSubmitError(false);
    try {
      await submitNetlifyForm('consultation-intake', {
        name, email, role,
        orgType: orgType.join(', '),
        problemDesc,
        duration,
        problemType: problemType.join(', '),
        prevAttempts,
        affected: affected.join(', '),
        peopleDesc,
        psychSafety,
        supportType: supportType.join(', '),
        success,
        timeline,
        budget,
        fears,
        resistance,
        ndContext,
        trust,
      });
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
      go('results');
    }
  };

  const isResults = section === 'results';
  const progressPct = isResults ? 100 : Math.round(((section - 1) / 5) * 100);
  const secNum = isResults ? 5 : section;
  const firstName = name ? name.trim().split(' ')[0] : 'You';

  function buildResultCards() {
    const cards = [];
    const longstanding = duration === 'years' || duration === 'always';
    const belonging = problemType.includes('belonging') || problemType.includes('culture');
    const nd = problemType.includes('nd-access') || (ndContext && ndContext !== 'no');
    let p = '';
    if (longstanding) p += 'This has been happening long enough that it’s become normalized — often the most dangerous kind of problem, because people stop naming it. ';
    if (belonging && nd) p += 'What you’re describing lives at the intersection of belonging and neurodivergent access — environments that weren’t designed for how some people operate. That’s a design problem, not a diversity problem. ';
    else if (belonging) p += 'Belonging issues rarely announce themselves. They show up in who leaves, who stays quiet, and who stops trying. ';
    else if (nd) p += 'Neurodivergent access is almost always invisible until it becomes a crisis — by then the people most affected have found a workaround or an exit. ';
    if (problemType.includes('retention')) p += 'Retention problems are usually downstream of culture, trust, or environment. The exits are the symptom. ';
    if (!p) p = 'You’ve named something real. The work is figuring out whether the visible problem is the actual problem — or whether it’s pointing to something underneath.';
    cards.push({ label: "What I'm hearing", title: 'The pattern underneath your situation', body: p.trim() });

    const labels = { women: 'women and girls', 'nd-folks': 'neurodivergent individuals', bipoc: 'BIPOC community members', youth: 'young people', frontline: 'frontline staff and volunteers', 'leadership-team': 'organizational leadership', clients: 'clients and participants', 'whole-org': 'the whole organization' };
    const named = affected.map((g) => labels[g] || g).join(', ');
    cards.push({
      label: "Who's at the center", title: 'The people this work is for',
      body: named ? `The people at the center include ${named}. I’ve worked with — and been — people in these categories, and that shapes how I listen and what I notice before anyone says a word.` : 'We’ll get specific about who’s most impacted when we talk.',
    });

    const low = psychSafety && parseInt(psychSafety, 10) <= 2;
    let start;
    if (timeline === 'urgent' && low) start = 'Given the urgency and low psychological safety, the first session isn’t about strategy — it’s about stabilization. We’d start with a 1:1 debrief before any group work.';
    else if (belonging && low) start = 'Before we design anything, we need to understand what the environment actually is. That usually starts with a structured listening process — interviews, observation, or an anonymous needs assessment.';
    else if (problemType.includes('nd-access')) start = 'Neurodivergent access work starts with an environment audit — not policies, but actual practices. How meetings run, how information is shared, what "participation" excludes.';
    else if (problemType.includes('programming') || supportType.includes('programming')) start = 'Program work starts with the community you’re trying to reach, not the program. Who isn’t showing up, why, and what they actually need — that informs everything downstream.';
    else start = 'The first step is a real conversation — a genuine assessment of what’s happening and what kind of support actually fits. That call is free.';
    cards.push({ label: 'Where we’d start', title: 'A realistic first step', body: start });

    const map = { consult: 'Strategic Consultation', workshop: 'Workshop / Facilitation', speaking: 'Speaking Engagement', programming: 'Program Design', 'hr-support': 'HR & People Strategy', ongoing: 'Ongoing Advisory' };
    const types = supportType.map((t) => map[t] || t).join(' · ');
    cards.push({ label: 'What working together could look like', title: 'Possible engagement types', body: `${types || 'To be determined — let’s talk first.'}. These aren’t commitments — every engagement is scoped to the actual situation, not a package.` });
    return cards;
  }

  const nd = ndContext && ndContext !== 'no';
  const quote = isResults
    ? nd
      ? '"What if you were never wrong about yourself — you were just never given the tools to understand yourself?"'
      : affected.includes('women')
      ? '"You were never too much. You were in the wrong room."'
      : '"The correction travels both directions — we’re building the room our daughters walk into without hesitation."'
    : '';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gc-cream)' }}>
      <NavBar variant="minimal" label="Consultation Intake · Brittany Gruber" />

      <div style={{ background: 'var(--gc-cream)', padding: '60px 32px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -90, right: -70, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,178,134,.14), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 640, margin: '0 auto' }}>
          <div style={{ font: '600 11px var(--font-sans)', letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 18 }}>
            Let's figure out what you actually need
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 42, fontWeight: 700, color: 'var(--gc-navy)', lineHeight: 1.15 }}>
            You were never the problem. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gc-emerald)' }}>Let's start there.</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.8, maxWidth: 500, margin: '18px auto 32px' }}>
            This intake takes about 8 minutes. Answer honestly — there are no right answers, and the more specific you are, the more useful this is for both of us.
          </p>
          <div style={{ maxWidth: 460, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', font: '600 10px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gc-ink-muted)', marginBottom: 8 }}>
              <span>Section {secNum} of 5</span>
              <span>{progressPct}%</span>
            </div>
            <div style={{ background: 'var(--gc-border)', borderRadius: 100, height: 4, overflow: 'hidden' }}>
              <div style={{ width: `${progressPct}%`, height: '100%', background: 'var(--gc-emerald)', borderRadius: 100, transition: 'width .5s ease' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 80px' }}>
        {section === 1 && (
          <Card>
            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Section 01 · About you</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Tell me who you are.</div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 30 }}>
              Not your job title. Not your LinkedIn. Who you are — what you lead, what you carry, and what brought you here.
            </p>

            <div style={{ marginBottom: 24 }}>
              <label style={LABEL_STYLE}>Your name</label>
              <input className="fld" type="text" placeholder="First name is fine" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={LABEL_STYLE}>Your email</label>
              <input className="fld" type="email" placeholder="So I can follow up with your full intake summary" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>Your role — or how you'd describe what you do</label>
              <div style={HINT_STYLE}>Don't overthink this. "I run a nonprofit" or "I'm a manager trying to fix a broken team culture" works just fine.</div>
              <textarea className="fld" placeholder="e.g. Executive Director of a youth-serving nonprofit, HR manager at a 50-person company, founder of a new women's initiative…" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div style={{ marginBottom: 30 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>What kind of organization or context are you bringing me into?</label>
              <CheckGrid group={{ value: orgType, toggle: toggle(setOrgType) }} defs={ORG_DEFS} />
            </div>
            <SectionNav onNext={() => go(2)} />
          </Card>
        )}

        {section === 2 && (
          <Card>
            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Section 02 · The real problem</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>What's actually going on?</div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 30 }}>
              Not what you'd say in a board meeting. The thing that keeps coming up, the thing that isn't working, the conversation you've been avoiding.
            </p>

            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>In your own words: what is the problem?</label>
              <div style={HINT_STYLE}>Be as messy and honest as you need to be. This is not a performance.</div>
              <textarea className="fld" style={{ minHeight: 120 }} placeholder="e.g. We keep losing our best people and I don't know why. / My team talks over each other and I can't name what's wrong…" value={problemDesc} onChange={(e) => setProblemDesc(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>How long has this been going on?</label>
              <PillRow value={duration} onChange={setDuration} defs={DURATION_DEFS} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>What's at the center of it?</label>
              <div style={HINT_STYLE}>Select all that apply.</div>
              <CheckGrid group={{ value: problemType, toggle: toggle(setProblemType) }} defs={PROBLEM_DEFS} />
            </div>
            <div style={{ marginBottom: 30 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>Has anyone tried to fix this before?</label>
              <div style={HINT_STYLE}>Training? New hires? Policy changes? What was tried — and what actually happened.</div>
              <textarea className="fld" placeholder="e.g. We did a DEI training two years ago but nothing changed…" value={prevAttempts} onChange={(e) => setPrevAttempts(e.target.value)} />
            </div>
            <SectionNav onNext={() => go(3)} onBack={() => go(1)} />
          </Card>
        )}

        {section === 3 && (
          <Card>
            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Section 03 · Your people</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>Tell me about the humans involved.</div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 30 }}>
              Organizations aren't broken in the abstract. People are struggling. Let's get specific about who.
            </p>

            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>Who is most directly affected?</label>
              <CheckGrid group={{ value: affected, toggle: toggle(setAffected) }} defs={AFFECTED_DEFS} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>Describe the people most impacted, in your own words.</label>
              <div style={HINT_STYLE}>What do they need that they're not getting? How are they coping right now?</div>
              <textarea className="fld" placeholder="e.g. My Black women staff keep leaving quietly and never say why…" value={peopleDesc} onChange={(e) => setPeopleDesc(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>How psychologically safe does your environment feel right now?</label>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--gc-ink-muted)', marginBottom: 8 }}>
                <span>People are afraid to speak</span>
                <span>People say what they think</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['1', '2', '3', '4', '5'].map((v) => {
                  const sel = psychSafety === v;
                  return (
                    <div
                      key={v}
                      onClick={() => setPsychSafety(v)}
                      style={{
                        width: 46, height: 46, border: `1.5px solid ${sel ? 'var(--gc-emerald)' : 'var(--gc-border)'}`, borderRadius: 8, cursor: 'pointer',
                        fontSize: 15, fontWeight: 600, color: sel ? '#fff' : 'var(--gc-slate)', background: sel ? 'var(--gc-emerald)' : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {v}
                    </div>
                  );
                })}
              </div>
              {psychSafety && (
                <div style={{ background: 'var(--gc-sage-light)', borderLeft: '3px solid var(--gc-emerald)', padding: '14px 18px', borderRadius: '0 8px 8px 0', marginTop: 14, fontSize: 13, color: 'var(--gc-ink)', lineHeight: 1.6 }}>
                  {SAFETY_NOTES[psychSafety]}
                </div>
              )}
            </div>
            <SectionNav onNext={() => go(4)} onBack={() => go(2)} />
          </Card>
        )}

        {section === 4 && (
          <Card>
            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Section 04 · What you're looking for</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>What does success actually look like?</div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 30 }}>
              Not the grant-report version. What do you actually want to be different — and how will you know when it is?
            </p>

            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>What kind of support are you looking for?</label>
              <CheckGrid group={{ value: supportType, toggle: toggle(setSupportType) }} defs={SUPPORT_DEFS} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>If this goes exactly right, what's different in 6 months?</label>
              <div style={HINT_STYLE}>Be specific. "A better culture" is hard to work toward. "My team doesn't cry in the bathroom anymore" tells me a lot.</div>
              <textarea className="fld" placeholder="Describe the change you're hoping for — in the room, in the people, in the org…" value={success} onChange={(e) => setSuccess(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>What's your timeline?</label>
              <PillRow value={timeline} onChange={setTimeline} defs={TIMELINE_DEFS} />
            </div>
            <div style={{ marginBottom: 30 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>Budget range? (approximate is fine)</label>
              <PillRow value={budget} onChange={setBudget} defs={BUDGET_DEFS} />
            </div>
            <SectionNav onNext={() => go(5)} onBack={() => go(3)} />
          </Card>
        )}

        {section === 5 && (
          <Card>
            <div style={{ font: '700 10px var(--font-sans)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 12 }}>Section 05 · The honest stuff</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>A few harder questions.</div>
            <p style={{ fontSize: 14.5, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.65, marginBottom: 30 }}>
              This is where most intake forms stop — and where the most useful information lives. All optional, but the more you answer, the more targeted my response.
            </p>

            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>Anything you're afraid this process might surface?</label>
              <div style={HINT_STYLE}>Naming what you're protecting helps me work around it appropriately. Completely confidential.</div>
              <textarea className="fld" placeholder="Totally optional." value={fears} onChange={(e) => setFears(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>Who might resist change — and why?</label>
              <textarea className="fld" placeholder="e.g. The board is very traditional. / My co-founder and I disagree about what the problem is…" value={resistance} onChange={(e) => setResistance(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 4 }}>Is there a neurodivergent dimension that matters here?</label>
              <div style={HINT_STYLE}>For you, your team, or your community. This shapes how I approach everything from facilitation to communication.</div>
              <PillRow value={ndContext} onChange={setNdContext} defs={ND_DEFS} />
            </div>
            <div style={{ marginBottom: 30 }}>
              <label style={{ ...LABEL_STYLE, marginBottom: 10 }}>What would make you trust a consultant right away?</label>
              <textarea className="fld" placeholder="e.g. Someone who listens before they propose a solution. / Lived experience, not just theory…" value={trust} onChange={(e) => setTrust(e.target.value)} />
            </div>
            <SectionNav onNext={finishIntake} onBack={() => go(4)} nextLabel={sending ? 'Sending…' : 'See my summary →'} disabled={sending} />
          </Card>
        )}

        {isResults && (
          <div style={{ marginTop: 36 }}>
            <div style={{ background: 'var(--gc-navy)', borderRadius: 14, padding: 44, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(186,217,243,.22), transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--gc-lavender-soft)', marginBottom: 10 }}>Here's what I see.</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 700, color: '#fff' }}>{firstName}, you're in the right place.</div>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.62)', lineHeight: 1.7, maxWidth: 440, margin: '12px auto 0' }}>
                  A snapshot of what you're carrying, where we'd start, and what working together could look like.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
              {buildResultCards().map((c) => (
                <div key={c.label} style={{ background: '#fff', border: '1px solid var(--gc-border)', borderRadius: 12, borderTop: '3px solid var(--gc-emerald)', padding: '28px 30px' }}>
                  <div style={{ font: '700 9.5px var(--font-sans)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gc-emerald)', marginBottom: 8 }}>{c.label}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--gc-slate)', marginBottom: 8 }}>{c.title}</div>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.75 }}>{c.body}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--gc-slate)', borderRadius: 12, padding: '26px 30px', marginTop: 14, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: '#fff', lineHeight: 1.6 }}>{quote}</div>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px 10px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--gc-emerald)', marginBottom: 8 }}>Let's get to work.</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 22px' }}>
                The next step is a real conversation — no pitch, no pressure. Just an honest look at whether I'm the right person for what you're facing.
              </p>
              {submitError && (
                <p style={{ fontSize: 13, color: '#c0392b', maxWidth: 440, margin: '0 auto 20px' }}>
                  Heads up — your intake summary didn't send automatically. Please use the button below to reach out directly so nothing gets lost.
                </p>
              )}
              <a className="btn" href="mailto:hello@girlhoodcincy.com" style={{ background: 'var(--gc-navy)', color: '#fff', padding: '15px 30px' }}>
                Request a consultation call
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
