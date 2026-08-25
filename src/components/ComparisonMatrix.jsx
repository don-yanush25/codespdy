import React from 'react';
import { Check, X, Zap } from 'lucide-react';

export default function ComparisonMatrix() {
  const comparisonItems = [
    {
      feature: 'Custom Modern Design & Brand Alignment',
      codespdy: true,
      agency: true,
      wix: false,
    },
    {
      feature: 'Fast Loading Speed (Lighthouse 95+ Score)',
      codespdy: true,
      agency: 'Varies',
      wix: false,
    },
    {
      feature: '100% Handcrafted Mobile Responsiveness',
      codespdy: true,
      agency: true,
      wix: 'Auto-scaled',
    },
    {
      feature: 'Full Code Ownership (Zero Vendor Lock-In)',
      codespdy: true,
      agency: true,
      wix: false,
    },
    {
      feature: 'Transparent, Fixed Budget Pricing',
      codespdy: true,
      agency: false,
      wix: true,
    },
    {
      feature: 'Clean SEO Architecture & Schema Data',
      codespdy: true,
      agency: true,
      wix: 'Basic',
    },
    {
      feature: 'Direct Communication & Fast Delivery',
      codespdy: true,
      agency: false,
      wix: 'Self-Serve',
    },
  ];

  const renderStatus = (val) => {
    if (val === true) {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan-dark)', fontWeight: 700 }}>
          <Check size={16} /> Included
        </div>
      );
    } else if (val === false) {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dim)', fontWeight: 500 }}>
          <X size={16} /> No
        </div>
      );
    } else {
      return <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{val}</span>;
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <div className="section-badge">Value Comparison</div>
          <h2 className="section-title">How codeSPDY Compares</h2>
          <p className="section-desc">
            See why real business owners choose codeSPDY over slow DIY page builders or overpriced traditional agencies.
          </p>
        </div>

        <div
          className="glass-card reveal-on-scroll"
          style={{
            overflowX: 'auto',
            padding: '0.5rem',
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            marginTop: '2rem',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '650px',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1.1rem 1rem', fontSize: '0.95rem', color: 'var(--text-main)', width: '40%', fontWeight: 700 }}>
                  Features & Standards
                </th>
                <th
                  style={{
                    padding: '1.1rem 1rem',
                    fontSize: '1rem',
                    color: 'var(--text-main)',
                    background: 'rgba(0, 242, 254, 0.12)',
                    fontWeight: 800,
                    textAlign: 'center',
                    borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                    borderLeft: '1px solid rgba(0, 242, 254, 0.3)',
                    borderRight: '1px solid rgba(0, 242, 254, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                    <Zap size={16} color="var(--accent-cyan-dark)" /> codeSPDY
                  </div>
                </th>
                <th style={{ padding: '1.1rem 1rem', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 600 }}>
                  Traditional Agencies ($5k+)
                </th>
                <th style={{ padding: '1.1rem 1rem', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 600 }}>
                  DIY Builders (Wix/Squarespace)
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: '1px solid var(--border-color)',
                    background: index % 2 === 0 ? 'transparent' : 'var(--bg-subtle)',
                  }}
                >
                  <td style={{ padding: '1rem 1rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {item.feature}
                  </td>
                  <td
                    style={{
                      padding: '1rem 1rem',
                      textAlign: 'center',
                      background: 'rgba(0, 242, 254, 0.04)',
                      borderLeft: '1px solid rgba(0, 242, 254, 0.15)',
                      borderRight: '1px solid rgba(0, 242, 254, 0.15)',
                      fontWeight: 700,
                    }}
                  >
                    {renderStatus(item.codespdy)}
                  </td>
                  <td style={{ padding: '1rem 1rem', textAlign: 'center' }}>
                    {renderStatus(item.agency)}
                  </td>
                  <td style={{ padding: '1rem 1rem', textAlign: 'center' }}>
                    {renderStatus(item.wix)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
