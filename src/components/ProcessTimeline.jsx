import React, { useState } from 'react';
import { ArrowRight, Search, Palette, Code2, Rocket, Check, ArrowUpRight } from 'lucide-react';

export default function ProcessTimeline({ onGetStarted }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      shortTitle: 'DISCOVER',
      phase: 'Phase 01',
      duration: '48 Hours',
      icon: <Search size={18} strokeWidth={2} />,
      desc: 'Deep-dive analysis of your business model, customer psychology, competitor positioning, and sitemap architecture.',
      deliverables: [
        'Business Goal Blueprint',
        'Customer Journey Map',
        'Site Architecture & Sitemap',
      ],
    },
    {
      num: '02',
      title: 'UI/UX Architecture',
      shortTitle: 'DESIGN',
      phase: 'Phase 02',
      duration: '3 Days',
      icon: <Palette size={18} strokeWidth={2} />,
      desc: 'Bespoke editorial layouts, typography hierarchy, mobile-first design tokens, and interactive UI blueprints.',
      deliverables: [
        'Custom High-Fidelity UI',
        'Mobile-First Responsive System',
        'Interactive Prototype Review',
      ],
    },
    {
      num: '03',
      title: 'Custom Engineering',
      shortTitle: 'BUILD',
      phase: 'Phase 03',
      duration: '3 Days',
      icon: <Code2 size={18} strokeWidth={2} />,
      desc: 'Handcrafted semantic code engineered from scratch. Zero bloated templates, zero page lag, 99/100 Core Web Vitals.',
      deliverables: [
        'Handcrafted Clean Codebase',
        'Sub-0.5s Load Time Standard',
        'Conversion-Optimized Forms',
      ],
    },
    {
      num: '04',
      title: 'Launch & Handoff',
      shortTitle: 'LAUNCH',
      phase: 'Phase 04',
      duration: '24 Hours',
      icon: <Rocket size={18} strokeWidth={2} />,
      desc: 'Production deployment to your custom domain with SSL certification, Google Search Console indexing, and speed audits.',
      deliverables: [
        'Custom Domain & SSL Setup',
        'Google Search Engine Indexing',
        'Full Source Code & Care Handoff',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="section-padding"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Editorial Section Header */}
        <div
          className="reveal-on-scroll"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div className="editorial-eyebrow" style={{ marginBottom: '0.65rem' }}>
              Methodology & Delivery
            </div>
            <h2 className="section-title" style={{ margin: 0 }}>
              Our Work Process.
            </h2>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#0284C7',
                boxShadow: '0 0 0 3px rgba(2, 132, 199, 0.2)',
                display: 'inline-block',
              }}
            />
            <span>7–10 Day Delivery Standard</span>
          </div>
        </div>

        {/* Master Architectural Process Grid */}
        <div
          className="reveal-on-scroll"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            position: 'relative',
          }}
        >
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.num}
                className="process-grid-card"
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  padding: '2.25rem 1.85rem',
                  borderRight: isLast ? 'none' : '1px solid var(--border-color)',
                  borderBottom: 'none',
                  background: isHovered ? '#FAFAF8' : '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-premium)',
                }}
              >
                {/* Top Active Accent Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: isHovered ? 'linear-gradient(90deg, #0284c7, #00f2fe)' : 'transparent',
                    boxShadow: isHovered ? '0 2px 10px rgba(0, 242, 254, 0.4)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />

                <div>
                  {/* Top Meta Bar: Number + Phase Duration */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '2rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.9rem',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: isHovered ? 'var(--text-main)' : 'var(--text-dim)',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {step.num}
                    </span>

                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-pill)',
                        background: isHovered ? '#000000' : 'var(--bg-subtle)',
                        color: isHovered ? '#ffffff' : 'var(--text-muted)',
                        border: isHovered ? '1px solid #000000' : '1px solid var(--border-color)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {step.duration}
                    </div>
                  </div>

                  {/* Step Title & Category */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--text-dim)',
                        display: 'block',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {step.phase}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        margin: 0,
                        color: 'var(--text-main)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Descriptive Copy */}
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      marginBottom: '2rem',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '1.4rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-dim)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Key Outputs
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {step.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-main)',
                          lineHeight: 1.4,
                        }}
                      >
                        <div
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            background: isHovered ? '#000000' : 'var(--bg-subtle)',
                            color: isHovered ? '#ffffff' : 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.55rem',
                            flexShrink: 0,
                            marginTop: '2px',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <Check size={9} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA & Sprint Commitment Bar */}
        <div
          className="reveal-on-scroll"
          style={{
            marginTop: '2.5rem',
            padding: '1.75rem 2.25rem',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-subtle)',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
              Ready to start your custom website sprint?
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>
              Direct access to senior developers. Zero agency overhead.
            </p>
          </div>

          <a
            href="#contact"
            onClick={onGetStarted}
            className="btn btn-primary"
            style={{
              padding: '0.95rem 2.4rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.92rem',
              fontWeight: 700,
              background: '#000000',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none',
              transition: 'all 0.3s var(--ease-premium)',
            }}
          >
            Start Your Process <ArrowRight size={16} className="btn-arrow" />
          </a>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .process-grid-card {
            border-right: none !important;
            border-bottom: 1px solid var(--border-color) !important;
          }
          .process-grid-card:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
