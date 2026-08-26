import React from 'react';

export default function CodeSpdyLogo({ size = 'default', showBadge = true, theme = 'light' }) {
  const isSmall = size === 'small';
  const iconSize = isSmall ? 32 : 36;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        textDecoration: 'none',
        userSelect: 'none',
        transition: 'transform 0.2s ease',
      }}
      className="codespdy-brand-mark"
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* 10/10 Iconic Speed-Code Geometric Emblem */}
      <div
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '10px',
          background: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          position: 'relative',
        }}
      >
        <svg
          width={isSmall ? '18' : '20'}
          height={isSmall ? '18' : '20'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lightning / Speed Code Bracket Symbol */}
          <path
            d="M13 2.5L4 13.5H12L11 21.5L20 10.5H12L13 2.5Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 10/10 Typographic Brand Lockup */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
        <span
          style={{
            fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif",
            fontSize: isSmall ? '1.28rem' : '1.45rem',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            color: '#000000',
            lineHeight: 1,
          }}
        >
          code
        </span>
        <span
          style={{
            fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif",
            fontSize: isSmall ? '1.28rem' : '1.45rem',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            color: '#000000',
            lineHeight: 1,
            display: 'inline-flex',
            alignItems: 'baseline',
          }}
        >
          SPDY
          <span
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#000000',
              marginLeft: '2px',
              display: 'inline-block',
            }}
          />
        </span>

        {showBadge && (
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.55rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#000000',
              background: 'rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              padding: '0.15rem 0.45rem',
              borderRadius: 'var(--radius-pill)',
              lineHeight: 1,
              marginLeft: '0.35rem',
              alignSelf: 'center',
            }}
          >
            STUDIO
          </span>
        )}
      </div>
    </div>
  );
}
