import { useState } from 'preact/hooks';
import { questions, skillLabels, archetypes, calcScores, archetypeKey } from '../data/quiz';

type Phase = 'intro' | 'quiz' | 'results';
type Answer = number | number[];

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function WorthQuiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const go = (n: number) => {
    setCurrent(n);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasAnswer = (qi: number) => {
    const q = questions[qi];
    const a = answers[qi];
    if (q.type === 'multi') return Array.isArray(a) && a.length > 0;
    return a !== undefined && a !== null;
  };

  const select = (i: number) => {
    const qi = current;
    const q = questions[qi];
    setAnswers((prev) => {
      const next = { ...prev };
      if (q.type === 'multi') {
        const cur = Array.isArray(next[qi]) ? [...(next[qi] as number[])] : [];
        const idx = cur.indexOf(i);
        if (idx >= 0) cur.splice(idx, 1);
        else if (cur.length < (q.maxSelect ?? Infinity)) cur.push(i);
        next[qi] = cur;
      } else {
        next[qi] = i;
      }
      return next;
    });
  };

  const retake = () => { setPhase('intro'); setCurrent(0); setAnswers({}); };

  if (phase === 'intro') {
    return (
      <div class="quiz-intro">
        <div class="quiz-glow"></div>
        <div class="quiz-intro-inner">
          <div class="eyebrow eyebrow-sky" style={{ marginBottom: '18px' }}>A warm skills inventory · Cincinnati</div>
          <div class="serif-heading" style={{ fontSize: '44px', color: '#fff', lineHeight: 1.12 }}>You were never <span class="serif-script" style={{ color: 'var(--gc-lavender-soft)' }}>wrong</span> about yourself.</div>
          <p class="quiz-intro-copy">You were just never given the tools to name what you're actually good at — and what it's worth. Twenty questions, about six minutes, and a lot more clarity than when you started.</p>
          <div class="quiz-badges">
            <span class="quiz-badge">Names the skills you call "just common sense"</span>
            <span class="quiz-badge">Grounded in Cincinnati's real market</span>
          </div>
          <button class="btn btn-primary-inverse" onClick={() => setPhase('quiz')}>Begin the quiz →</button>
        </div>
      </div>
    );
  }

  if (phase === 'quiz') {
    const qi = current;
    const q = questions[qi];
    const a = answers[qi];
    const multi = q.type === 'multi';
    const last = qi === questions.length - 1;
    const progressPct = Math.max(5, Math.round(((qi + 1) / questions.length) * 100));

    const next = () => {
      if (!hasAnswer(qi)) return;
      if (last) setPhase('results');
      else go(qi + 1);
    };

    return (
      <div class="quiz-body">
        <div class="quiz-progress">
          <div class="quiz-progress-labels">
            <span>Progress</span>
            <span class="serif-heading" style={{ fontSize: '18px' }}>{qi + 1} / {questions.length}</span>
          </div>
          <div class="quiz-progress-track"><div class="quiz-progress-fill" style={{ width: `${progressPct}%` }} /></div>
        </div>

        <div class="quiz-card">
          <div class="quiz-q-badge">{multi ? `Select up to ${q.maxSelect}` : 'Choose one'}</div>
          <div class="serif-heading" style={{ fontSize: '20px', lineHeight: 1.4, marginBottom: '8px' }}>{q.text}</div>
          <p class="quiz-q-context">{q.context}</p>
          <div class="quiz-options">
            {q.options.map((o, i) => {
              const sel = multi ? (Array.isArray(a) && a.includes(i)) : a === i;
              return (
                <div class={`quiz-opt${sel ? ' quiz-opt--sel' : ''}`} onClick={() => select(i)}>
                  <span class={`quiz-opt-mark${sel ? ' quiz-opt-mark--sel' : ''}`} style={{ borderRadius: multi ? '5px' : '50%' }}>{LETTERS[i]}</span>
                  <span style={{ fontSize: '14px', color: 'var(--gc-slate)', lineHeight: 1.45 }}>{o.text}</span>
                </div>
              );
            })}
          </div>
          <div class="quiz-nav">
            {qi > 0 && <button class="btn btn-outline-muted" onClick={() => go(qi - 1)}>← Back</button>}
            <button class="btn btn-secondary" style={{ flex: 1 }} disabled={!hasAnswer(qi)} onClick={next}>{last ? 'See my results →' : 'Next →'}</button>
          </div>
        </div>
      </div>
    );
  }

  // results
  const scores = calcScores(answers);
  const key = archetypeKey(scores);
  const arch = archetypes[key];
  const top = Object.entries(scores).sort((x, y) => y[1] - x[1]).slice(0, 6);
  const max = top[0] ? top[0][1] : 1;

  return (
    <div class="quiz-body">
      <div class="results-hero">
        <div class="eyebrow eyebrow-sky" style={{ marginBottom: '12px' }}>Your skill profile</div>
        <div class="serif-heading" style={{ fontSize: '38px', color: '#fff', lineHeight: 1.15 }}>The <span class="serif-script" style={{ color: 'var(--gc-lavender-soft)' }}>{arch.name}</span></div>
        <p style={{ fontSize: '14.5px', fontWeight: 300, color: 'rgba(255,255,255,.72)', lineHeight: 1.7, maxWidth: '460px', margin: '14px auto 0' }}>{arch.tagline}</p>
      </div>

      <div class="eyebrow eyebrow-emerald" style={{ margin: '32px 0 14px', letterSpacing: '.24em' }}>Your strongest marketable skills</div>
      {top.map(([s, v]) => (
        <div class="skill-bar">
          <div class="skill-bar-labels"><span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--gc-slate)' }}>{skillLabels[s] || s}</span><span style={{ fontSize: '12px', color: 'var(--gc-emerald)', fontWeight: 600 }}>{Math.round((v / max) * 100)}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style={{ width: `${Math.round((v / max) * 100)}%` }} /></div>
        </div>
      ))}

      <div class="eyebrow eyebrow-emerald" style={{ margin: '30px 0 14px', letterSpacing: '.24em' }}>Income streams that fit you — in Cincinnati</div>
      <div class="stream-list">
        {arch.streams.map((s) => (
          <div class="stream-card">
            <div class="eyebrow eyebrow-emerald" style={{ fontSize: '9.5px', marginBottom: '6px' }}>{s.label}</div>
            <div class="serif-heading" style={{ fontSize: '17px', marginBottom: '5px' }}>{s.title}</div>
            <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.55, marginBottom: '10px' }}>{s.desc}</p>
            <span class="stream-range">{s.range}</span>
          </div>
        ))}
      </div>

      <div class="imposter-note"><strong style={{ color: 'var(--gc-emerald)' }}>On imposter syndrome:</strong> {arch.imposter}</div>

      <div class="reframe-box">
        <div class="eyebrow eyebrow-sky" style={{ marginBottom: '12px', letterSpacing: '.22em' }}>Your reframe</div>
        <div class="serif-script" style={{ fontSize: '18px', color: '#fff', lineHeight: 1.55 }}>{arch.reframe}</div>
      </div>

      <div class="quiz-cta">
        <div class="serif-heading" style={{ fontSize: '21px', marginBottom: '8px' }}>The table is set. Come <span class="serif-script" style={{ color: 'var(--gc-emerald)' }}>sit at it.</span></div>
        <p style={{ fontSize: '13.5px', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.6, marginBottom: '18px' }}>The next Girlhood Brunch is a room full of women who already knew they were worth more. Or start a conversation about working together.</p>
        <div class="quiz-cta-actions">
          <a class="btn btn-primary btn-sm" href="/events">See the next brunch</a>
          <button class="btn btn-outline-muted" onClick={retake}>Retake the quiz</button>
        </div>
      </div>
    </div>
  );
}
