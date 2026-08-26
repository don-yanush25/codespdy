import React from 'react';

export default function CodeSpdyLogo({ size = 'default', showBadge = true, theme = 'light' }) {
  const isSmall = size === 'small';
  const iconSize = isSmall ? 32 : 38;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        userSelect: 'none',
      }}
      className="codespdy-brand-mark"
    >
      {/* Precision Engineered Geometric Vector Emblem */}
      <div
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '11px',
          background: 'linear-gradient(145deg, #0f172a 0%, #020617 100%)',
          border: '1px solid rgba(2, 132, 199, 0.35)',
          boxShadow: '0 4px 14px -2px rgba(2, 132, 199, 0.25), 0 0 0 1px rgba(0, 242, 254, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Ambient Inner Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle at center, rgba(0, 242, 254, 0.2) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        {/* High-Tech Vector Code & Speed Glyph */}
        <svg
          width={isSmall ? '20' : '24'}
          height={isSmall ? '20' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Left Code Bracket < */}
          <path
            d="M8.5 7.5L4 12L8.5 16.5"
            stroke="#00F2FE"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Code Bracket > */}
          <path
            d="M15.5 7.5L20 12L15.5 16.5"
            stroke="#0284C7"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dynamic Speed Bolt Center S / Slash */}
          <path
            d="M13.5 5.5L9.5 18.5"
            stroke="url(#spdyGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="spdyGrad" x1="9.5" y1="5.5" x2="13.5" y2="18.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F2FE" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name & Studio Lockup */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        <span
          style={{
            fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
            fontSize: isSmall ? '1.25rem' : '1.42rem',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: theme === 'dark' ? '#ffffff' : '#0a0a0a',
          }}
        >
          code
          <span
            style={{
              background: 'linear-gradient(135deg, #0284C7 0%, #00F2FE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
            }}
          >
            SPDY
          </span>
        </span>

        {showBadge && (
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0284C7',
              background: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              padding: '0.18rem 0.5rem',
              borderRadius: 'var(--radius-pill)',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#00F2FE',
                boxShadow: '0 0 6px #00F2FE',
              }}
            />
            STUDIO
          </span>
        )}
      </div>
    </div>
  );
}
