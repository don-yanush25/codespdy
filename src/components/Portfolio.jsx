import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DemoModal from './DemoModal';

export default function Portfolio({ onOrderProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeDemoProject, setActiveDemoProject] = useState(null);

  const filterCategories = ['All', 'Retail & Boutique', 'Restaurant', 'Services', 'Business'];

  const projects = [
    {
      id: 'amaze-boutique',
      title: 'Amaze Boutique',
      badge: 'Retail & Boutique Showcase',
      category: 'Retail & Boutique',
      shortDesc: 'Chic local retail boutique website featuring modern seasonal apparel collections, store location directions, and customer inquiry form.',
      fullDesc: 'Amaze Boutique provides local shoppers with a beautiful mobile showcase of new seasonal arrivals, store opening hours, in-store pickup info, and contact inquiry forms.',
      image: '/assets/portfolio_retail.jpg',
      targetAudience: 'Local Retail Shops & Fashion Boutiques',
      lighthouseScore: '99/100',
      tags: ['Store Collection', 'In-Store Pickup', 'Location Map', 'Mobile Responsive'],
      layoutStyle: 'split',
    },
    {
      id: 'lumina-bistro',
      title: 'Lumina Bistro',
      badge: 'Featured Showcase',
      category: 'Restaurant',
      shortDesc: 'Modern fine dining restaurant website with interactive digital menu, online table reservation, and Google Maps integration.',
      fullDesc: 'Lumina Bistro showcases an elegant fine dining aesthetic. Features dynamic category menu tabs, interactive table reservation inquiry forms, and mobile responsive touch targets.',
      image: '/assets/portfolio_restaurant.jpg',
      targetAudience: 'Upscale Restaurants & Cafés',
      lighthouseScore: '99/100',
      tags: ['Online Menu', 'Table Booking', 'Location Map', 'Mobile Responsive'],
      layoutStyle: 'split',
    },
    {
      id: 'apex-fitness',
      title: 'Apex Athletic Studio',
      badge: 'Service Showcase',
      category: 'Services',
      shortDesc: 'High-energy fitness studio portal featuring weekly class timetables, personal trainer cards, and enrollment forms.',
      fullDesc: 'Engineered for high conversion rates. Features a clean weekly workout schedule calendar, class registration forms, trainer showcase cards, and membership tier comparisons.',
      image: '/assets/portfolio_fitness.jpg',
      targetAudience: 'Gyms, Yoga & Wellness Studios',
      lighthouseScore: '100/100',
      tags: ['Class Timetable', 'Trainer Cards', 'Membership Pricing', 'Fast Speed'],
      layoutStyle: 'split',
    },
    {
      id: 'vanguard-estates',
      title: 'Vanguard Estates',
      badge: 'Real Estate Portal',
      category: 'Business',
      shortDesc: 'Luxury real estate agency showcase with interactive property search cards, virtual tour embeds, and agent contact modules.',
      fullDesc: 'Vanguard Estates provides luxury property buyers with a sleek, interactive browsing experience. Includes custom property search filters, agent contact widgets, and virtual tour modal embeds.',
      image: '/assets/portfolio_realestate.jpg',
      targetAudience: 'Real Estate Brokers & Property Developers',
      lighthouseScore: '98/100',
      tags: ['Property Search', 'Virtual Tour Ready', 'Agent Inquiry', 'Clean UI'],
      layoutStyle: 'split',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="editorial-eyebrow reveal-on-scroll">
          Selected Portfolio Showcase
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 className="section-title" style={{ margin: 0 }}>
              Crafted Web Projects.
            </h2>
          </div>

          {/* Interactive Filter Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: activeFilter === cat ? 'var(--text-main)' : '#ffffff',
                  color: activeFilter === cat ? '#ffffff' : 'var(--text-muted)',
                  border: activeFilter === cat ? '1px solid var(--text-main)' : '1px solid var(--border-color)',
                  transition: 'all 0.2s var(--ease-premium)',
                  boxShadow: activeFilter === cat ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Showcase Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card"
              style={{
                background: '#ffffff',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s var(--ease-premium)',
              }}
              onClick={() => setActiveDemoProject(project)}
            >
              {/* Project Image */}
              <div style={{ overflow: 'hidden', position: 'relative', height: '360px', background: 'var(--bg-subtle)' }}>
                <img
                  src={project.image}
                  alt={`${project.title} website design by codeSPDY`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s var(--ease-premium)',
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid var(--border-color)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                  }}
                >
                  {project.badge}
                </div>
              </div>

              {/* Project Information */}
              <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.lighthouseScore} Speed</span>
                  </div>

                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {project.shortDesc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-pill)',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-main)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="portfolio-card-actions" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => setActiveDemoProject(project)}
                    className="btn btn-secondary btn-sm"
                  >
                    Explore Case Demo <ArrowRight size={14} className="btn-arrow" />
                  </button>
                  <a
                    href="#contact"
                    onClick={() => onOrderProject(project.title)}
                    className="btn btn-primary btn-sm"
                  >
                    Build Website Like This <ArrowRight size={14} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
        onOrderSimilar={onOrderProject}
      />

      <style>{`
        @media (max-width: 650px) {
          .portfolio-card-actions {
            flex-direction: column !important;
            width: 100% !important;
          }
          .portfolio-card-actions button,
          .portfolio-card-actions a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
