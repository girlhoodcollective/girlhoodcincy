export default function ImageSlot({ label, width = '100%', height = 180, radius = 6, style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: 'linear-gradient(135deg, var(--gc-section), var(--gc-sage-light))',
        border: '1px dashed var(--gc-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 12,
        ...style,
      }}
    >
      <span
        style={{
          font: '600 10px var(--font-sans)',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: 'var(--gc-ink-muted)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
