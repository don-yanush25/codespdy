import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '0.85rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1080px',
          background: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(245, 244, 239, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.6rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s var(--ease-premium)',
          boxShadow: isScrolled ? '0 8px 24px -6px rgba(0,0,0,0.04)' : 'none',
          pointerEvents: 'auto',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="codeSPDY — Back to Home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid var(--border-color)',
              background: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              flexShrink: 0,
            }}
          >
            <img src="/assets/codespdy_logo.jpeg" alt="codeSPDY Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 900,
                color: 'var(--text-main)',
                letterSpacing: '-0.035em',
                lineHeight: 1,
              }}
            >
              code<span style={{ color: '#0284c7' }}>SPDY</span>
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                background: 'rgba(0,0,0,0.05)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-color)',
                padding: '0.15rem 0.45rem',
                borderRadius: 'var(--radius-pill)',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.88rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm desktop-only-btn"
            style={{ padding: '0.6rem 1.8rem' }}
          >
            Contact Us <ArrowRight size={14} className="btn-arrow" />
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            style={{
              padding: '0.45rem',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-pill)',
              background: '#ffffff',
              border: '1px solid var(--border-color)',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '5.5rem',
            left: '1rem',
            right: '1rem',
            background: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            pointerEvents: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: 'var(--text-main)',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.4rem 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          >
            Contact Us <ArrowRight size={16} className="btn-arrow" />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .desktop-only-btn { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          .desktop-only-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
