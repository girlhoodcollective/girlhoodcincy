import { useState } from 'preact/hooks';
import {
  orgDefs, problemDefs, affectedDefs, supportDefs,
  durationDefs, timelineDefs, budgetDefs, ndDefs, safetyNoteText,
  type OptionDef,
} from '../data/intake';

type Section = 1 | 2 | 3 | 4 | 5 | 'results';

interface FormState {
  name: string; email: string; role: string;
  problemDesc: string; prevAttempts: string; peopleDesc: string;
  success: string; fears: string; resistance: string; trust: string;
  orgType: string[]; problemType: string[]; affected: string[]; supportType: string[];
  duration: string; timeline: string; budget: string; ndContext: string; psychSafety: string;
}

const initialForm: FormState = {
  name: '', email: '', role: '',
  problemDesc: '', prevAttempts: '', peopleDesc: '',
  success: '', fears: '', resistance: '', trust: '',
  orgType: [], problemType: [], affected: [], supportType: [],
  duration: '', timeline: '', budget: '', ndContext: '', psychSafety: '',
};

function CheckGroup({ group, defs, selected, onToggle }: {
  group: string; defs: OptionDef[]; selected: string[]; onToggle: (v: string) => void;
}) {
  return (
    <div class="opt-grid">
      {defs.map((d) => {
        const sel = selected.includes(d.v);
        return (
          <div class={`check-opt${sel ? ' check-opt--sel' : ''}`} onClick={() => onToggle(d.v)}>
            <div class={`check-box${sel ? ' check-box--sel' : ''}`}>{sel && <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}>✓</span>}</div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--gc-slate)', lineHeight: 1.35 }}>{d.label}</div>
              {d.sub && <div style={{ fontSize: '11.5px', fontWeight: 300, color: 'var(--gc-ink-muted)', marginTop: '2px' }}>{d.sub}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PillGroup({ defs, value, onSelect }: { defs: OptionDef[]; value: string; onSelect: (v: string) => void }) {
  return (
    <div class="pill-row">
      {defs.map((d) => (
        <div class={`pill-opt${value === d.v ? ' pill-opt--sel' : ''}`} onClick={() => onSelect(d.v)}>{d.label}</div>
      ))}
    </div>
  );
}

function buildResultCards(s: FormState) {
  const cards: { label: string; title: string; body: string }[] = [];
  const longstanding = s.duration === 'years' || s.duration === 'always';
  const belonging = s.problemType.includes('belonging') || s.problemType.includes('culture');
  const nd = s.problemType.includes('nd-access') || (!!s.ndContext && s.ndContext !== 'no');

  let p = '';
  if (longstanding) p += "This has been happening long enough that it's become normalized — often the most dangerous kind of problem, because people stop naming it. ";
  if (belonging && nd) p += "What you're describing lives at the intersection of belonging and neurodivergent access — environments that weren't designed for how some people operate. That's a design problem, not a diversity problem. ";
  else if (belonging) p += 'Belonging issues rarely announce themselves. They show up in who leaves, who stays quiet, and who stops trying. ';
  else if (nd) p += "Neurodivergent access is almost always invisible until it becomes a crisis — by then the people most affected have found a workaround or an exit. ";
  if (s.problemType.includes('retention')) p += 'Retention problems are usually downstream of culture, trust, or environment. The exits are the symptom. ';
  if (!p) p = "You've named something real. The work is figuring out whether the visible problem is the actual problem — or whether it's pointing to something underneath.";
  cards.push({ label: "What I'm hearing", title: 'The pattern underneath your situation', body: p.trim() });

  const labels: Record<string, string> = { women: 'women and girls', 'nd-folks': 'neurodivergent individuals', bipoc: 'BIPOC community members', youth: 'young people', frontline: 'frontline staff and volunteers', 'leadership-team': 'organizational leadership', clients: 'clients and participants', 'whole-org': 'the whole organization' };
  const named = s.affected.map((g) => labels[g] || g).join(', ');
  cards.push({
    label: "Who's at the center", title: 'The people this work is for',
    body: named ? `The people at the center include ${named}. I've worked with — and been — people in these categories, and that shapes how I listen and what I notice before anyone says a word.` : "We'll get specific about who's most impacted when we talk.",
  });

  const low = !!s.psychSafety && parseInt(s.psychSafety, 10) <= 2;
  let start: string;
  if (s.timeline === 'urgent' && low) start = "Given the urgency and low psychological safety, the first session isn't about strategy — it's about stabilization. We'd start with a 1:1 debrief before any group work.";
  else if (belonging && low) start = 'Before we design anything, we need to understand what the environment actually is. That usually starts with a structured listening process — interviews, observation, or an anonymous needs assessment.';
  else if (s.problemType.includes('nd-access')) start = 'Neurodivergent access work starts with an environment audit — not policies, but actual practices. How meetings run, how information is shared, what "participation" excludes.';
  else if (s.problemType.includes('programming') || s.supportType.includes('programming')) start = "Program work starts with the community you're trying to reach, not the program. Who isn't showing up, why, and what they actually need — that informs everything downstream.";
  else start = 'The first step is a real conversation — a genuine assessment of what\'s happening and what kind of support actually fits. That call is free.';
  cards.push({ label: "Where we'd start", title: 'A realistic first step', body: start });

  const map: Record<string, string> = { consult: 'Strategic Consultation', workshop: 'Workshop / Facilitation', speaking: 'Speaking Engagement', programming: 'Program Design', 'hr-support': 'HR & People Strategy', ongoing: 'Ongoing Advisory' };
  const types = s.supportType.map((t) => map[t] || t).join(' · ');
  cards.push({ label: 'What working together could look like', title: 'Possible engagement types', body: `${types || "To be determined — let's talk first."}. These aren't commitments — every engagement is scoped to the actual situation, not a package.` });

  return cards;
}

export default function ConsultationIntake() {
  const [section, setSection] = useState<Section>(1);
  const [form, setForm] = useState<FormState>(initialForm);

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));
  const toggle = (group: 'orgType' | 'problemType' | 'affected' | 'supportType', v: string) => {
    setForm((f) => {
      const cur = f[group];
      const next = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v];
      return { ...f, [group]: next };
    });
  };
  const go = (n: Section) => {
    setSection(n);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRes = section === 'results';
  const secNum = isRes ? 5 : section;
  const pct = isRes ? 100 : Math.round(((secNum as number) - 1) / 5 * 100);
  const firstName = form.name ? form.name.trim().split(' ')[0] : 'You';
  const ndActive = !!form.ndContext && form.ndContext !== 'no';
  const quote = ndActive
    ? '"What if you were never wrong about yourself — you were just never given the tools to understand yourself?"'
    : form.affected.includes('women')
      ? '"You were never too much. You were in the wrong room."'
      : '"The correction travels both directions — we\'re building the room our daughters walk into without hesitation."';

  return (
    <div class="intake-body">
      <div class="progress-wrap">
        <div class="progress-labels"><span>Section {secNum} of 5</span><span>{pct}%</span></div>
        <div class="progress-track"><div class="progress-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      {section === 1 && (
        <div class="intake-card">
          <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '12px' }}>Section 01 · About you</div>
          <div class="serif-heading" style={{ fontSize: '28px', marginBottom: '8px' }}>Tell me who you are.</div>
          <p class="intake-sub">Not your job title. Not your LinkedIn. Who you are — what you lead, what you carry, and what brought you here.</p>

          <label class="field-label">Your name</label>
          <input class="field" style={{ marginBottom: '24px' }} placeholder="First name is fine" value={form.name} onInput={(e) => set({ name: (e.target as HTMLInputElement).value })} />

          <label class="field-label">Your email</label>
          <input class="field" style={{ marginBottom: '24px' }} type="email" placeholder="So I can follow up with your full intake summary" value={form.email} onInput={(e) => set({ email: (e.target as HTMLInputElement).value })} />

          <label class="field-label" style={{ marginBottom: '4px' }}>Your role — or how you'd describe what you do</label>
          <div class="field-hint">Don't overthink this. "I run a nonprofit" or "I'm a manager trying to fix a broken team culture" works just fine.</div>
          <textarea class="field" style={{ marginBottom: '24px' }} placeholder="e.g. Executive Director of a youth-serving nonprofit, HR manager at a 50-person company, founder of a new women's initiative…" value={form.role} onInput={(e) => set({ role: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginBottom: '10px' }}>What kind of organization or context are you bringing me into?</label>
          <CheckGroup group="orgType" defs={orgDefs} selected={form.orgType} onToggle={(v) => toggle('orgType', v)} />

          <button class="btn btn-secondary" style={{ marginTop: '30px' }} onClick={() => go(2)}>Continue →</button>
        </div>
      )}

      {section === 2 && (
        <div class="intake-card">
          <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '12px' }}>Section 02 · The real problem</div>
          <div class="serif-heading" style={{ fontSize: '28px', marginBottom: '8px' }}>What's actually going on?</div>
          <p class="intake-sub">Not what you'd say in a board meeting. The thing that keeps coming up, the thing that isn't working, the conversation you've been avoiding.</p>

          <label class="field-label" style={{ marginBottom: '4px' }}>In your own words: what is the problem?</label>
          <div class="field-hint">Be as messy and honest as you need to be. This is not a performance.</div>
          <textarea class="field" style={{ minHeight: '120px', marginBottom: '24px' }} placeholder="e.g. We keep losing our best people and I don't know why. / My team talks over each other and I can't name what's wrong…" value={form.problemDesc} onInput={(e) => set({ problemDesc: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginBottom: '10px' }}>How long has this been going on?</label>
          <PillGroup defs={durationDefs} value={form.duration} onSelect={(v) => set({ duration: v })} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '4px' }}>What's at the center of it?</label>
          <div class="field-hint">Select all that apply.</div>
          <CheckGroup group="problemType" defs={problemDefs} selected={form.problemType} onToggle={(v) => toggle('problemType', v)} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '4px' }}>Has anyone tried to fix this before?</label>
          <div class="field-hint">Training? New hires? Policy changes? What was tried — and what actually happened.</div>
          <textarea class="field" placeholder="e.g. We did a DEI training two years ago but nothing changed…" value={form.prevAttempts} onInput={(e) => set({ prevAttempts: (e.target as HTMLTextAreaElement).value })} />

          <div class="intake-actions">
            <button class="btn btn-secondary" onClick={() => go(3)}>Continue →</button>
            <button class="btn btn-ghost" onClick={() => go(1)}>← Back</button>
          </div>
        </div>
      )}

      {section === 3 && (
        <div class="intake-card">
          <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '12px' }}>Section 03 · Your people</div>
          <div class="serif-heading" style={{ fontSize: '28px', marginBottom: '8px' }}>Tell me about the humans involved.</div>
          <p class="intake-sub">Organizations aren't broken in the abstract. People are struggling. Let's get specific about who.</p>

          <label class="field-label" style={{ marginBottom: '10px' }}>Who is most directly affected?</label>
          <CheckGroup group="affected" defs={affectedDefs} selected={form.affected} onToggle={(v) => toggle('affected', v)} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '4px' }}>Describe the people most impacted, in your own words.</label>
          <div class="field-hint">What do they need that they're not getting? How are they coping right now?</div>
          <textarea class="field" placeholder="e.g. My Black women staff keep leaving quietly and never say why…" value={form.peopleDesc} onInput={(e) => set({ peopleDesc: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '10px' }}>How psychologically safe does your environment feel right now?</label>
          <div class="scale-labels"><span>People are afraid to speak</span><span>People say what they think</span></div>
          <div class="scale-row">
            {['1', '2', '3', '4', '5'].map((v) => (
              <div class={`scale-opt${form.psychSafety === v ? ' scale-opt--sel' : ''}`} onClick={() => set({ psychSafety: v })}>{v}</div>
            ))}
          </div>
          {!!form.psychSafety && <div class="safety-note">{safetyNoteText(form.psychSafety)}</div>}

          <div class="intake-actions">
            <button class="btn btn-secondary" onClick={() => go(4)}>Continue →</button>
            <button class="btn btn-ghost" onClick={() => go(2)}>← Back</button>
          </div>
        </div>
      )}

      {section === 4 && (
        <div class="intake-card">
          <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '12px' }}>Section 04 · What you're looking for</div>
          <div class="serif-heading" style={{ fontSize: '28px', marginBottom: '8px' }}>What does success actually look like?</div>
          <p class="intake-sub">Not the grant-report version. What do you actually want to be different — and how will you know when it is?</p>

          <label class="field-label" style={{ marginBottom: '10px' }}>What kind of support are you looking for?</label>
          <CheckGroup group="supportType" defs={supportDefs} selected={form.supportType} onToggle={(v) => toggle('supportType', v)} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '4px' }}>If this goes exactly right, what's different in 6 months?</label>
          <div class="field-hint">Be specific. "A better culture" is hard to work toward. "My team doesn't cry in the bathroom anymore" tells me a lot.</div>
          <textarea class="field" style={{ marginBottom: '24px' }} placeholder="Describe the change you're hoping for — in the room, in the people, in the org…" value={form.success} onInput={(e) => set({ success: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginBottom: '10px' }}>What's your timeline?</label>
          <PillGroup defs={timelineDefs} value={form.timeline} onSelect={(v) => set({ timeline: v })} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '10px' }}>Budget range? (approximate is fine)</label>
          <PillGroup defs={budgetDefs} value={form.budget} onSelect={(v) => set({ budget: v })} />

          <div class="intake-actions">
            <button class="btn btn-secondary" onClick={() => go(5)}>Continue →</button>
            <button class="btn btn-ghost" onClick={() => go(3)}>← Back</button>
          </div>
        </div>
      )}

      {section === 5 && (
        <div class="intake-card">
          <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '12px' }}>Section 05 · The honest stuff</div>
          <div class="serif-heading" style={{ fontSize: '28px', marginBottom: '8px' }}>A few harder questions.</div>
          <p class="intake-sub">This is where most intake forms stop — and where the most useful information lives. All optional, but the more you answer, the more targeted my response.</p>

          <label class="field-label" style={{ marginBottom: '4px' }}>Anything you're afraid this process might surface?</label>
          <div class="field-hint">Naming what you're protecting helps me work around it appropriately. Completely confidential.</div>
          <textarea class="field" style={{ marginBottom: '24px' }} placeholder="Totally optional." value={form.fears} onInput={(e) => set({ fears: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginBottom: '10px' }}>Who might resist change — and why?</label>
          <textarea class="field" style={{ marginBottom: '24px' }} placeholder="e.g. The board is very traditional. / My co-founder and I disagree about what the problem is…" value={form.resistance} onInput={(e) => set({ resistance: (e.target as HTMLTextAreaElement).value })} />

          <label class="field-label" style={{ marginBottom: '4px' }}>Is there a neurodivergent dimension that matters here?</label>
          <div class="field-hint">For you, your team, or your community. This shapes how I approach everything from facilitation to communication.</div>
          <PillGroup defs={ndDefs} value={form.ndContext} onSelect={(v) => set({ ndContext: v })} />

          <label class="field-label" style={{ marginTop: '24px', marginBottom: '10px' }}>What would make you trust a consultant right away?</label>
          <textarea class="field" placeholder="e.g. Someone who listens before they propose a solution. / Lived experience, not just theory…" value={form.trust} onInput={(e) => set({ trust: (e.target as HTMLTextAreaElement).value })} />

          <div class="intake-actions">
            <button class="btn btn-primary" onClick={() => go('results')}>See my summary →</button>
            <button class="btn btn-ghost" onClick={() => go(4)}>← Back</button>
          </div>
        </div>
      )}

      {isRes && (
        <div class="results-wrap">
          <div class="results-hero">
            <div class="serif-script" style={{ fontSize: '18px', color: 'var(--gc-lavender-soft)', marginBottom: '10px' }}>Here's what I see.</div>
            <div class="serif-heading" style={{ fontSize: '30px', color: '#fff' }}>{firstName}, you're in the right place.</div>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,.62)', lineHeight: 1.7, maxWidth: '440px', margin: '12px auto 0' }}>
              A snapshot of what you're carrying, where we'd start, and what working together could look like.
            </p>
          </div>

          <div class="result-cards">
            {buildResultCards(form).map((c) => (
              <div class="result-card">
                <div class="eyebrow eyebrow-emerald" style={{ fontSize: '9.5px', marginBottom: '8px' }}>{c.label}</div>
                <div class="serif-heading" style={{ fontSize: '18px', marginBottom: '8px' }}>{c.title}</div>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div class="result-quote">{quote}</div>

          <div class="result-cta">
            <div class="serif-script" style={{ fontSize: '20px', color: 'var(--gc-emerald)', marginBottom: '8px' }}>Let's get to work.</div>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 22px' }}>
              The next step is a real conversation — no pitch, no pressure. Just an honest look at whether I'm the right person for what you're facing.
            </p>
            <a class="btn btn-secondary" href="mailto:hello@girlhoodcincy.com">Request a consultation call</a>
          </div>
        </div>
      )}
    </div>
  );
}
