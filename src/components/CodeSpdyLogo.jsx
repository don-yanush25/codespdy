import React from 'react';

export default function CodeSpdyLogo({ size = 'default', showBadge = true }) {
  const isSmall = size === 'small';
  const iconSize = isSmall ? 34 : 40;

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
      {/* 1. Official Logo Emblem in Soft Elevated Squircle */}
      <div
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '11px',
          background: '#ffffff',
          border: '1px solid #E5E7EB',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          padding: '3px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/assets/codespdy_logo.jpeg"
          alt="codeSPDY Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
      </div>

      {/* 2. Typographic Wordmark & STUDIO Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}>
          {/* "code" in bold geometric sans */}
          <span
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontSize: isSmall ? '1.35rem' : '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#080A10',
              lineHeight: 1,
              display: 'inline-block',
            }}
          >
            code
          </span>

          {/* "SPDY" in slanted dynamic teal-blue gradient */}
          <span
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontSize: isSmall ? '1.35rem' : '1.5rem',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginLeft: '1px',
              background: 'linear-gradient(120deg, #0284C7 0%, #00BFA5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            SPDY
          </span>
        </div>

        {/* 3. Perfectly Centered S T U D I O Badge */}
        {showBadge && (
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#4B5563',
              background: '#F3F4F6',
              border: '1px solid #E5E7EB',
              padding: '0.24rem 0.65rem',
              borderRadius: '9999px',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textIndent: '0.12em',
            }}
          >
            STUDIO
          </span>
        )}
      </div>
    </div>
  );
}

