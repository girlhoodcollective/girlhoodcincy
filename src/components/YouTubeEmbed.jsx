import { useState } from 'react';

// Click-to-play facade: shows a static thumbnail until clicked, so the
// YouTube iframe/script only loads on demand instead of on every page view.
export default function YouTubeEmbed({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const frameStyle = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: 12,
    overflow: 'hidden',
    background: '#000',
  };

  if (playing) {
    return (
      <div style={frameStyle}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      style={{ ...frameStyle, border: 'none', cursor: 'pointer', padding: 0, display: 'block' }}
    >
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ width: 74, height: 74, borderRadius: '50%', background: 'rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
