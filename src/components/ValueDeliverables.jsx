import React from 'react';

export default function ValueDeliverables() {
  const stats = [
    {
      figure: '100%',
      label: 'Custom Code Standard',
      desc: 'Zero heavy templates or bloated page builders. Every website is custom-coded for speed, security, and long-term business growth.',
    },
    {
      figure: '< 0.5s',
      label: 'Target Page Load Time',
      desc: 'Websites engineered by codeSPDY load lightning-fast across smartphones and desktops to maximize visitor conversion.',
    },
    {
      figure: '24/7',
      label: 'Dedicated Engineer Support',
      desc: 'Direct communication with your dedicated developer throughout design, building, launch, and ongoing care.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Eyebrow & Title */}
        <div className="editorial-eyebrow reveal-on-scroll" style={{ marginBottom: '0.6rem' }}>
          Startup Engineering Standards
        </div>

        <div className="reveal-on-scroll" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>
            Engineered for Growing Businesses.
          </h2>
        </div>

        {/* Proportioned Statistics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2.5rem',
          }}
        >
          {stats.map((item, idx) => (
            <div key={idx} className={`reveal-on-scroll stagger-${idx + 1}`}>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: 'var(--text-main)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {item.figure}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                {item.label}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
