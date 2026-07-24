import { useState } from 'preact/hooks';
import type { GCEvent } from '../data/events';

const CATEGORIES = ['All', 'Brunch', 'Market', 'Workshop'] as const;

export default function EventsExplorer({ events }: { events: GCEvent[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const [detailId, setDetailId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', seats: '1', note: '' });

  const visible = events.filter((e) => filter === 'All' || e.cat === filter);
  const detail = events.find((e) => e.id === detailId) || null;

  const openDetail = (e: GCEvent) => {
    setDetailId(e.id);
    setSubmitted(false);
    setForm({ name: '', email: '', seats: '1', note: '' });
  };
  const close = () => setDetailId(null);

  return (
    <>
      <div class="ev-filters">
        {CATEGORIES.map((c) => (
          <button
            class={`fbtn${c === filter ? ' fbtn--active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div class="ev-list">
        {visible.map((e) => (
          <div class="evrow">
            <div class="evrow-date">
              <div class="eyebrow eyebrow-sky" style={{ fontSize: '11px' }}>{e.mon}</div>
              <div class="display-heading" style={{ fontSize: '44px', color: '#fff', lineHeight: 1 }}>{e.day}</div>
              <div style={{ font: '400 12px var(--font-sans)', color: 'rgba(255,255,255,.55)' }}>{e.year}</div>
            </div>
            <div class="evrow-body">
              <div class="evrow-meta">
                <span class="ev-badge" style={{ background: e.badgeBg, color: e.badgeText }}>{e.cat}</span>
                <span style={{ font: '400 12.5px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.where}</span>
              </div>
              <div class="serif-heading" style={{ fontSize: '20px', marginBottom: '6px' }}>{e.title}</div>
              <p class="evrow-desc">{e.desc}</p>
              <div class="evrow-actions">
                <button class="btn btn-primary btn-sm" onClick={() => openDetail(e)}>Details &amp; RSVP</button>
                <span style={{ font: '600 12px var(--font-sans)', color: 'var(--gc-ink-muted)' }}>{e.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {detail && (
        <div class="ev-modal-backdrop" onClick={close}>
          <div class="ev-modal" onClick={(ev) => ev.stopPropagation()}>
            <div class="ev-modal-head">
              <button class="ev-modal-close" onClick={close} aria-label="Close">×</button>
              <span class="ev-badge" style={{ background: detail.badgeBg, color: detail.badgeText, marginBottom: '12px' }}>{detail.cat}</span>
              <div class="serif-heading" style={{ fontSize: '26px', color: '#fff', marginBottom: '6px' }}>{detail.title}</div>
              <div style={{ font: '400 13px var(--font-sans)', color: 'rgba(255,255,255,.72)' }}>{detail.mon} {detail.day}, {detail.year} · {detail.where}</div>
            </div>
            <div class="ev-modal-body">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: '34px', marginBottom: '10px' }}>🎉</div>
                  <div class="serif-script" style={{ fontSize: '30px', color: 'var(--gc-slate)', marginBottom: '8px' }}>You're in!</div>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gc-ink-muted)', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto 20px' }}>
                    We'll reach out within a day or two with everything you need. Can't wait to see you there.
                  </p>
                  <button class="btn btn-primary btn-sm" onClick={close}>Back to events</button>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.7, marginBottom: '20px' }}>{detail.long}</p>
                  <div class="eyebrow eyebrow-emerald" style={{ marginBottom: '14px' }}>Reserve your spot</div>
                  <div class="ev-form-grid">
                    <input class="field" placeholder="Your name" value={form.name} onInput={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })} />
                    <input class="field" placeholder="Email address" value={form.email} onInput={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })} />
                  </div>
                  <div class="ev-form-grid" style={{ marginTop: '12px' }}>
                    <select class="field" value={form.seats} onChange={(e) => setForm({ ...form, seats: (e.target as HTMLSelectElement).value })}>
                      <option value="1">1 seat</option>
                      <option value="2">2 seats</option>
                      <option value="3">3 seats</option>
                      <option value="4">4 seats</option>
                      <option value="5">5+ seats</option>
                    </select>
                    <input class="field" value={detail.title} readOnly style={{ background: 'var(--gc-section)', color: 'var(--gc-ink-muted)' }} />
                  </div>
                  <textarea
                    class="field"
                    placeholder="Anything we should know? (optional)"
                    rows={2}
                    value={form.note}
                    onInput={(e) => setForm({ ...form, note: (e.target as HTMLTextAreaElement).value })}
                    style={{ marginTop: '12px', marginBottom: '16px' }}
                  />
                  <button class="btn btn-primary" style={{ width: '100%' }} onClick={() => setSubmitted(true)}>Confirm my RSVP</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
