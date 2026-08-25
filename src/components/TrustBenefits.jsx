import React from 'react';
import { Smartphone, Zap, Palette, Search, ShieldCheck, Target } from 'lucide-react';

export default function TrustBenefits() {
  const benefits = [
    {
      icon: <Smartphone size={24} color="var(--accent-cyan-dark)" />,
      title: 'Mobile-Friendly',
      desc: 'Handcrafted responsive layouts designed to render flawlessly across smartphones, tablets, laptops, and desktop screens.',
    },
    {
      icon: <Zap size={24} color="var(--text-main)" />,
      title: 'Fast Performance',
      desc: 'Optimized assets, clean minimal code, and lightning-fast loading speeds that keep visitors engaged.',
    },
    {
      icon: <Palette size={24} color="var(--accent-cyan-dark)" />,
      title: 'Modern Design',
      desc: 'Custom aesthetic tailored to your brand strategy—no generic, bloated off-the-shelf templates.',
    },
    {
      icon: <Search size={24} color="var(--text-main)" />,
      title: 'SEO-Friendly Structure',
      desc: 'Clean semantic HTML5 markup, meta tags, and structured data so search engines can easily index your business.',
    },
    {
      icon: <ShieldCheck size={24} color="var(--accent-cyan-dark)" />,
      title: 'Secure & Reliable',
      desc: 'Built with industry security best practices, HTTPS readiness, and sanitized input vectors for absolute peace of mind.',
    },
    {
      icon: <Target size={24} color="var(--text-main)" />,
      title: 'Built Around Your Business',
      desc: 'Designed around your specific sales funnel, customer questions, and clear calls-to-action to maximize growth.',
    },
  ];

  return (
    <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <div className="section-badge">Proven Business Value</div>
          <h2 className="section-title">Why Businesses Choose codeSPDY</h2>
          <p className="section-desc">
            We don't just build pages; we engineer digital assets that project authority, load instantly, and drive measurable customer actions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          {benefits.map((b, index) => (
            <div
              key={index}
              className={`glass-card reveal-on-scroll stagger-${(index % 4) + 1}`}
              style={{
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(2, 132, 199, 0.06)',
                  border: '1px solid rgba(2, 132, 199, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {b.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{b.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
