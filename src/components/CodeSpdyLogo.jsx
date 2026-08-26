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
      }}
      className="codespdy-brand-mark"
    >
      {/* Precision Geometric Emblem */}
      <div
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '10px',
          background: '#0a0a0a',
          border: '1.5px solid rgba(2, 132, 199, 0.4)',
          boxShadow: '0 4px 12px -2px rgba(2, 132, 199, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg
          width={isSmall ? '18' : '22'}
          height={isSmall ? '18' : '22'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Bracket */}
          <path
            d="M8 7L3.5 12L8 17"
            stroke="#00F2FE"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Bracket */}
          <path
            d="M16 7L20.5 12L16 17"
            stroke="#0284C7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Speed Slash */}
          <path
            d="M13 5L11 19"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ITC Kabel Style Geometric Brand Typography */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span
          style={{
            fontFamily: "'Syne', 'Outfit', sans-serif",
            fontSize: isSmall ? '1.3rem' : '1.5rem',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1,
            color: theme === 'dark' ? '#ffffff' : '#0a0a0a',
            textTransform: 'none',
          }}
        >
          code
          <span
            style={{
              color: '#0284C7',
              fontWeight: 900,
              letterSpacing: '-0.01em',
            }}
          >
            SPDY
          </span>
        </span>

        {showBadge && (
          <span
            style={{
              fontFamily: "'Syne', 'Outfit', sans-serif",
              fontSize: '0.58rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0284C7',
              background: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              padding: '0.15rem 0.45rem',
              borderRadius: 'var(--radius-pill)',
              lineHeight: 1,
            }}
          >
            STUDIO
          </span>
        )}
      </div>
    </div>
  );
}
