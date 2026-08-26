import React from 'react';
import { ArrowRight, Smartphone, Gauge, ShieldCheck } from 'lucide-react';

export default function Hero({ onGetStarted, onViewWork }) {
  return (
    <section id="home" style={{ paddingTop: '7rem', paddingBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Soft Ambient Background Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(0, 242, 254, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 80%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Editorial Left-Aligned Composition Above Showcase */}
        <div style={{ maxWidth: '880px', margin: '0 auto 3rem auto', textAlign: 'left' }}>
          
          {/* Subtle Eyebrow Label */}
          <div className="hero-eyebrow animate-fade-in stagger-1" style={{ marginBottom: '1.25rem' }}>
            CODESPDY STUDIO — WEB ENGINEERING
          </div>

          {/* Large Editorial Display Headline */}
          <h1
            className="animate-fade-in stagger-2"
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
              marginBottom: '1.25rem',
              color: '#0a0a0a',
            }}
          >
            Websites Built for Businesses That Want to Grow.
          </h1>

          {/* 3. Narrow Editorial Paragraph */}
          <p
            className="animate-fade-in stagger-3"
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '560px',
              marginBottom: '2rem',
            }}
          >
            codeSPDY creates fast, modern, mobile-friendly websites designed to help businesses build trust, reach customers, and turn visitors into loyal clients.
          </p>

          {/* 4. Refined CTA Group */}
          <div
            className="animate-fade-in stagger-4"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.25rem',
            }}
          >
            <a href="#contact" onClick={onGetStarted} className="btn btn-primary btn-lg" style={{ padding: '1.05rem 2.8rem' }}>
              Start Your Project <ArrowRight size={18} className="btn-arrow" />
            </a>
            <a href="#portfolio" onClick={onViewWork} className="btn btn-secondary btn-lg">
              View Our Work <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>

          {/* 5. Quiet Editorial Trust Metadata */}
          <div
            className="animate-fade-in stagger-5 hero-trust-badges"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)', background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <Smartphone size={15} color="var(--text-main)" /> <span>100% Mobile Optimized</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)', background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <Gauge size={15} color="var(--text-main)" /> <span>Performance Optimized</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-main)', background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <ShieldCheck size={15} color="var(--text-main)" /> <span>Custom Code Guarantee</span>
            </div>
          </div>
        </div>

        {/* Featured Showcase with Floating Metric Badges */}
        <div className="animate-fade-in stagger-5" style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative' }}>
          
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.03)',
              position: 'relative',
            }}
          >
            {/* Browser Header Bar */}
            <div
              style={{
                height: '38px',
                background: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.02em' }}>
                codespdy.com/live-demo
              </div>
              <div style={{ width: '40px' }} />
            </div>

            {/* Ultra-Sharp Featured Image */}
            <img
              src="/assets/hero_mockup.jpg"
              alt="codeSPDY — Custom Business Website Engineering Showcase"
              fetchPriority="high"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.4s var(--ease-premium)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.008)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
