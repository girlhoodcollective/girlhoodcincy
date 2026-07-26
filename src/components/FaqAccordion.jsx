import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q} style={{ border: '1px solid var(--gc-border)', borderRadius: 6, overflow: 'hidden' }}>
            <h3 style={{ margin: 0 }}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  border: 'none',
                  background: open ? 'var(--gc-section)' : '#fff',
                  color: 'var(--gc-slate)',
                  textAlign: 'left',
                  padding: '18px 22px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" style={{ color: 'var(--gc-emerald)', fontSize: 18, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              style={{ padding: open ? '0 22px 20px' : 0 }}
            >
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gc-ink)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
