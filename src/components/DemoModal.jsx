import React, { useState } from 'react';
import { X, Monitor, Tablet, Smartphone, ArrowRight } from 'lucide-react';

export default function DemoModal({ project, onClose, onOrderSimilar }) {
  const [deviceView, setDeviceView] = useState('desktop');

  if (!project) return null;

  const getWidthByDevice = () => {
    switch (deviceView) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(23, 25, 29, 0.45)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Toolbar */}
      <div
        style={{
          height: '60px',
          background: '#ffffff',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
          gap: '1rem',
          boxShadow: 'var(--shadow-subtle)',
        }}
      >
        {/* Project Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>{project.title}</span>
          <span
            style={{
              fontSize: '0.72rem',
              padding: '0.15rem 0.6rem',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(2, 132, 199, 0.08)',
              color: 'var(--accent-cyan-dark)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              fontWeight: 700,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Viewport Device Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-subtle)',
            padding: '0.2rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-color)',
          }}
        >
          <button
            onClick={() => setDeviceView('desktop')}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              background: deviceView === 'desktop' ? 'var(--text-main)' : 'transparent',
              color: deviceView === 'desktop' ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              transition: 'all var(--transition-fast)',
            }}
          >
            <Monitor size={15} /> Desktop
          </button>

          <button
            onClick={() => setDeviceView('tablet')}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              background: deviceView === 'tablet' ? 'var(--text-main)' : 'transparent',
              color: deviceView === 'tablet' ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              transition: 'all var(--transition-fast)',
            }}
          >
            <Tablet size={15} /> Tablet
          </button>

          <button
            onClick={() => setDeviceView('mobile')}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              background: deviceView === 'mobile' ? 'var(--text-main)' : 'transparent',
              color: deviceView === 'mobile' ? '#ffffff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              transition: 'all var(--transition-fast)',
            }}
          >
            <Smartphone size={15} /> Mobile
          </button>
        </div>

        {/* CTA & Close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href="#contact"
            onClick={() => {
              onOrderSimilar(project.title);
              onClose();
            }}
            className="btn btn-primary btn-sm"
          >
            Build Site Like This <ArrowRight size={14} className="btn-arrow" />
          </a>
          <button
            onClick={onClose}
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
            }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          padding: deviceView === 'desktop' ? '1rem' : '2rem 1rem',
          background: 'var(--bg-secondary)',
        }}
      >
        <div
          style={{
            width: getWidthByDevice(),
            maxWidth: '100%',
            transition: 'width 0.35s var(--ease-premium)',
            background: '#ffffff',
            borderRadius: deviceView === 'desktop' ? '8px' : '18px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-hover)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Mockup Header Bar */}
          <div
            style={{
              padding: '0.5rem 0.85rem',
              background: 'var(--bg-subtle)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
              Previewing {project.title} ({deviceView.toUpperCase()} Viewport)
            </span>
          </div>

          {/* Screenshot Display */}
          <div style={{ width: '100%', overflowY: 'auto', maxHeight: 'calc(100vh - 150px)' }}>
            <img
              src={project.image}
              alt={`${project.title} Demo Screenshot`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {/* Spec Sheet below preview */}
            <div style={{ padding: '1.75rem', background: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>About this Project</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                {project.fullDesc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Industry</span>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{project.category}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Engineered For</span>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{project.targetAudience}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Performance Target</span>
                  <p style={{ fontWeight: 700, color: 'var(--accent-cyan-dark)' }}>{project.lighthouseScore} Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
