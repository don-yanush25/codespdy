import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, Info } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  const [customPages, setCustomPages] = useState(5);
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [includeAdvancedSeo, setIncludeAdvancedSeo] = useState(true);

  const packages = [
    {
      name: 'Starter Package',
      popular: false,
      tagline: 'For businesses that need a clean, professional online presence.',
      price: '₹9,999',
      timeline: '3 - 5 Days Delivery',
      features: [
        'Custom Responsive Website (Up to 3 Pages)',
        'Mobile & Tablet Optimization',
        'Interactive Contact Form',
        'Basic Technical SEO Setup',
        'Domain & Hosting Deployment Assistance',
        '1 Round of Design Revisions',
      ],
      cta: 'Choose Starter Package',
    },
    {
      name: 'Business Package',
      popular: true,
      tagline: 'For businesses that need a stronger, high-converting online presence.',
      price: '₹19,999',
      timeline: '5 - 7 Days Delivery',
      features: [
        'Custom Responsive Website (Up to 7 Pages)',
        'Advanced UI/UX Custom Aesthetics',
        'Interactive Content Sections (Services, FAQs, Portfolio)',
        'Enhanced SEO Setup & Meta Tags',
        'Performance & Asset Optimization',
        'Google Analytics & Map Integration',
        '2 Rounds of Design Revisions',
      ],
      cta: 'Choose Business Package',
    },
    {
      name: 'Premium Package',
      popular: false,
      tagline: 'For businesses requiring a bespoke design and advanced features.',
      price: '₹39,999+',
      timeline: '7 - 12 Days Delivery',
      features: [
        'Custom UI/UX Blueprint & Multi-Page Architecture (Up to 15 Pages)',
        'Advanced Interactive Functionality & Custom Components',
        'Custom Industry Integrations (Reservations, Booking, Catalogs)',
        'Comprehensive Core Web Vitals Optimization',
        'Full SEO Foundation & Schema.org Structured Data',
        '30-Day Priority Technical Support',
      ],
      cta: 'Talk to codeSPDY',
    },
  ];

  const basePrice = 9999;
  const pricePerPage = 1500;
  const pageCost = customPages * pricePerPage;
  const seoCost = includeAdvancedSeo ? 3500 : 0;
  const careCost = includeMaintenance ? 1999 : 0;
  const estimatedCost = basePrice + pageCost + seoCost + careCost;

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="editorial-eyebrow reveal-on-scroll">
          Investment & Transparent Pricing
        </div>

        <div className="reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">
            Investment Packages.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
            No hidden fees, no ongoing vendor lock-in. Transparent pricing designed to fit your business goals.
          </p>
        </div>

        {/* Nothing™ Minimal Pricing Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`editorial-card reveal-on-scroll stagger-${(index % 3) + 1}`}
              style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: pkg.popular ? '2px solid var(--text-main)' : '1px solid var(--border-color)',
                background: '#ffffff',
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '2rem',
                    background: 'var(--text-main)',
                    color: '#ffffff',
                    padding: '0.15rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>{pkg.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', minHeight: '40px', marginBottom: '1.25rem' }}>
                  {pkg.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.03em', fontFamily: 'var(--font-heading)' }}>{pkg.price}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>one-time</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 700 }}>
                  ⚡ {pkg.timeline}
                </div>

                <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '1.5rem' }} />

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                      <Check size={16} color="var(--text-main)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                onClick={() => onSelectPackage(pkg.name)}
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {pkg.cta} <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          ))}
        </div>

        {/* Custom Cost Estimator Box */}
        <div
          className="editorial-card reveal-on-scroll"
          style={{
            marginTop: '3.5rem',
            padding: '2.25rem',
            background: '#ffffff',
            border: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
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
                color: 'var(--text-main)',
              }}
            >
              <Calculator size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Custom Project Estimator</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Transparent fee breakdown & custom project calculator</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <span>Estimated Number of Pages</span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{customPages} Pages</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={customPages}
                  onChange={(e) => setCustomPages(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--text-main)', height: '6px', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={includeAdvancedSeo}
                    onChange={(e) => setIncludeAdvancedSeo(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--text-main)' }}
                  />
                  <span>Advanced Technical SEO & Schema Markup (+₹3,500)</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={includeMaintenance}
                    onChange={(e) => setIncludeMaintenance(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: 'var(--text-main)' }}
                  />
                  <span>Monthly Care & Maintenance Plan (+₹1,999/mo)</span>
                </label>
              </div>
            </div>

            <div
              style={{
                background: 'var(--bg-subtle)',
                padding: '1.35rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                  <Info size={15} color="var(--text-main)" /> Fee Breakdown
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>Base Website Engineering:</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>{customPages} Pages (₹{pricePerPage.toLocaleString('en-IN')}/pg):</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>₹{pageCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                    <span>SEO Package:</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>₹{seoCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>Total Estimated</span>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>₹{estimatedCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => onSelectPackage(`Custom Quote (~₹${estimatedCost.toLocaleString('en-IN')})`)}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
              >
                Request Custom Quote <ArrowRight size={15} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
