import React from 'react';
import { Smartphone, Zap, Target, MousePointer, Accessibility, Shield, Search } from 'lucide-react';

export default function WebsiteQuality() {
  const standards = [
    {
      icon: <Smartphone size={22} color="var(--accent-cyan-dark)" />,
      title: '📱 Responsive Guarantee',
      desc: 'Tested across 320px, 375px, 768px, 1024px, 1440px, and 1920px viewports with zero horizontal overflow.',
    },
    {
      icon: <Zap size={22} color="var(--text-main)" />,
      title: '⚡ Fast Performance',
      desc: 'Optimized compressed assets, zero layout shifts, minified CSS/JS targeting top Core Web Vitals.',
    },
    {
      icon: <Target size={22} color="var(--accent-cyan-dark)" />,
      title: '🎯 Accurate Content',
      desc: 'Carefully audited text hierarchy, zero broken links, accurate business info, and clear messaging.',
    },
    {
      icon: <MousePointer size={22} color="var(--text-main)" />,
      title: '🖱️ 100% Functional',
      desc: 'Every button, mobile menu, accordion, filter tab, and form interaction works predictably.',
    },
    {
      icon: <Accessibility size={22} color="var(--accent-cyan-dark)" />,
      title: '♿ Accessible (WCAG)',
      desc: 'Built with semantic HTML5, keyboard navigation support, high contrast ratios, and screen-reader labels.',
    },
    {
      icon: <Shield size={22} color="var(--text-main)" />,
      title: '🔒 Secure Standards',
      desc: 'HTTPS ready, sanitized user inputs, no vulnerable frontend dependencies, and secure form validation.',
    },
    {
      icon: <Search size={22} color="var(--accent-cyan-dark)" />,
      title: '🔍 SEO Ready',
      desc: 'Proper heading hierarchy, OpenGraph metadata, structured JSON-LD data, and crawlable content.',
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <div className="section-badge">Engineering Standards</div>
          <h2 className="section-title">Built Properly. Not Just Beautifully.</h2>
          <p className="section-desc">
            We hold our websites to strict technical quality benchmarks so your business operates on a robust foundation.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {standards.map((s, idx) => (
            <div
              key={idx}
              className={`glass-card reveal-on-scroll stagger-${(idx % 4) + 1}`}
              style={{
                padding: '1.5rem 1.35rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                background: '#ffffff',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
