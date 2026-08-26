import React, { useState } from 'react';
import { ArrowUp, Mail, ArrowRight, X } from 'lucide-react';

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const instagramUrl = 'https://www.instagram.com/codespdy?utm_source=qr&igsi=MTA2YjU2bXM5OW1q';
  const emailAddress = 'tonyyanush105@gmail.com';

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 800, fontSize: '1.35rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  background: '#ffffff',
                }}
              >
                <img src="/assets/codespdy_logo.jpeg" alt="codeSPDY Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                code<span className="brand-accent-text">SPDY</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              We build fast, modern, mobile-friendly websites designed to help businesses build trust, reach customers, and grow.
            </p>

            {/* Official Instagram Button */}
            <div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-pill)',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <InstagramIcon size={16} />
                <span>Follow @codespdy</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>


          {/* Utility Pages */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>Utility Pages</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => setActiveLegalModal('privacy')} style={{ color: 'var(--text-muted)', fontSize: '0.88rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalModal('terms')} style={{ color: 'var(--text-muted)', fontSize: '0.88rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>Direct Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <a
                  href={`mailto:${emailAddress}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                  }}
                >
                  <Mail size={16} color="var(--text-main)" />
                  <span>{emailAddress}</span>
                </a>
              </div>

              <div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <InstagramIcon size={16} color="var(--text-main)" />
                  <span>Instagram: @codespdy</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} codeSPDY Studio. All rights reserved. Custom Web Engineering.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn btn-secondary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            Back to Top <ArrowUp size={15} />
          </button>
        </div>
      </div>

      {/* Legal Modals */}
      {activeLegalModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(17, 17, 17, 0.45)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            style={{
              maxWidth: '560px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
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
              aria-label="Close modal"
              onClick={() => setActiveLegalModal(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                color: 'var(--text-muted)',
              }}
            >
              <X size={20} />
            </button>

            {activeLegalModal === 'privacy' ? (
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-main)' }}>Privacy Policy</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  At codeSPDY, we prioritize your privacy. We collect client contact details solely for the purpose of communicating about website design inquiries, project specifications, and billing.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  We never sell, rent, or trade your contact or business information to third-party advertisers. All forms submitted through codeSPDY use secure SSL encryption.
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem', color: 'var(--text-main)' }}>Terms of Service</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  All website design & development services provided by codeSPDY are subject to clear scope agreements. Upon completion and full payment of your project, full code ownership of your custom website is transferred to your business.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Revisions are executed during designated review phases as outlined in your selected package (Starter, Business, or Premium).
                </p>
              </div>
            )}

            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
              <button onClick={() => setActiveLegalModal(null)} className="btn btn-secondary btn-sm">
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
