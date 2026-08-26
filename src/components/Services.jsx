import React, { useState } from 'react';
import { ArrowRight, Check, X, Layout, Code, Smartphone, Rocket, Search, Wrench } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      num: '01',
      id: 'design',
      title: 'Website Design',
      shortDesc: 'Custom UI/UX designed around your business positioning, visual hierarchy, and customer expectations.',
      fullDesc: 'Our custom design process focuses on brand alignment, visual hierarchy, typography, and clear conversion paths. We design custom layouts that set you apart from competitors using off-the-shelf templates.',
      features: ['Tailored Brand Colors & Typography', 'Custom Layout Wireframing', 'Conversion-Focused Hierarchy', 'User Experience (UX) Blueprinting'],
    },
    {
      num: '02',
      id: 'development',
      title: 'Website Development',
      shortDesc: 'Responsive, highly functional websites built with clean, modern web technologies and standards.',
      fullDesc: 'We craft scalable, clean codebase structures using modern component architectures. Every line of code is written for speed, security, and long-term maintainability.',
      features: ['Clean Modern HTML5 / JS Structure', 'Semantic Code Standards', 'Cross-Browser Compatibility', 'Interactive Forms & Modals'],
    },
    {
      num: '03',
      id: 'mobile',
      title: 'Mobile Optimization',
      shortDesc: 'Handcrafted responsive layouts designed to function effortlessly across phones, tablets, and desktops.',
      fullDesc: 'Over 60% of web traffic comes from mobile devices. We optimize touch targets, fluid layouts, navigation menus, and media scaling so every mobile visitor gets a native-like experience.',
      features: ['320px – 1920px Tested Breakpoints', 'Touch-Friendly Navigation Menu', 'Fluid Responsive Typography', 'Adaptive Image Loading'],
    },
    {
      num: '04',
      id: 'performance',
      title: 'Performance Optimization',
      shortDesc: 'Fast-loading pages with optimized assets, efficient code execution, and zero layout shift.',
      fullDesc: 'Slow websites cost sales. We optimize CSS, compress media, eliminate render-blocking bottlenecks, and configure modern asset delivery for top-tier Lighthouse scores.',
      features: ['Lighthouse 90+ Score Target', 'Compressed Next-Gen Images', 'Minified CSS & JS Assets', 'Zero Cumulative Layout Shift (CLS)'],
    },
    {
      num: '05',
      id: 'seo',
      title: 'SEO Foundation',
      shortDesc: 'Proper technical structure, metadata, headings, and search-engine-friendly architecture.',
      fullDesc: 'We build your website with a solid Search Engine Optimization foundation, including Schema.org structured data, meta titles, descriptions, canonical tags, and clean sitemaps.',
      features: ['Meta Titles & Descriptions', 'Open Graph & Social Cards', 'Structured JSON-LD Data', 'Semantic Heading Hierarchy'],
    },
    {
      num: '06',
      id: 'maintenance',
      title: 'Website Maintenance',
      shortDesc: 'Optional ongoing updates, technical monitoring, content tweaks, and performance upkeep.',
      fullDesc: 'Keep your website running at peak health. We offer maintenance packages covering software updates, security checks, content revisions, and cloud deployment backups.',
      features: ['Regular Dependency Audits', 'Monthly Content Updates', 'Backup & Rollback Safeguards', 'Priority Support Desk'],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="editorial-eyebrow reveal-on-scroll">
          Capabilities & Core Services
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'end' }} className="reveal-on-scroll">
          <h2 className="section-title" style={{ margin: 0 }}>
            Everything You Need for a Professional Website.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
            From initial strategy and visual design to clean engineering and long-term care—we handle every phase.
          </p>
        </div>

        {/* Nothing™ Style Editorial Services List */}
        <div style={{ borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`reveal-on-scroll stagger-${(index % 4) + 1} editorial-service-row`}
              style={{
                padding: '2rem 1rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'grid',
                gridTemplateColumns: '80px 1.5fr 2fr 180px',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'background var(--transition-fast), padding var(--transition-fast)',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedService(service)}
            >
              {/* Number */}
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dim)', fontFamily: 'var(--font-heading)' }} className="service-number">
                {service.num}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0, lineHeight: 1.55 }}>
                {service.shortDesc}
              </p>

              {/* Explore Button */}
              <div style={{ textAlign: 'right' }}>
                <span
                  className="btn btn-secondary btn-sm"
                  style={{ pointerEvents: 'none' }}
                >
                  Explore <ArrowRight size={14} className="btn-arrow" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(17, 17, 17, 0.45)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedService(null)}
        >
          <div
            style={{
              maxWidth: '560px',
              width: '100%',
              padding: '2.25rem',
              position: 'relative',
              background: '#ffffff',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-hover)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close service details"
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                color: 'var(--text-muted)',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--accent-cyan-dark)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {selectedService.num}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{selectedService.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>codeSPDY Core Capability</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.94rem', lineHeight: 1.6 }}>
              {selectedService.fullDesc}
            </p>

            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.85rem', color: 'var(--text-main)', fontWeight: 700 }}>Included Standards:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {selectedService.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem' }}>
                  <Check size={15} color="var(--text-main)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button onClick={() => setSelectedService(null)} className="btn btn-secondary btn-sm">
                Close
              </button>
              <a
                href="#contact"
                onClick={() => {
                  onSelectService(selectedService.title);
                  setSelectedService(null);
                }}
                className="btn btn-primary btn-sm"
              >
                Request Service <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .editorial-service-row:hover {
          background: #ffffff;
        }
        .editorial-service-row:hover .service-number {
          color: var(--text-main) !important;
        }
        @media (max-width: 850px) {
          .editorial-service-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.85rem !important;
            padding: 1.5rem 1rem !important;
          }
          .editorial-service-row > div:last-child {
            width: 100% !important;
            text-align: left !important;
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
