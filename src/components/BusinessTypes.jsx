import React, { useState, useEffect, useRef } from 'react';
import { Utensils, Scissors, Dumbbell, Home, Briefcase, ShoppingBag, Rocket, UserCheck, ArrowRight, Check, Zap } from 'lucide-react';

export default function BusinessTypes({ onSelectIndustry }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [prevCategory, setPrevCategory] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverRow, setHoverRow] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const progressTimer = useRef(null);
  const AUTO_CYCLE_MS = 4000;

  const industries = [
    {
      num: '01',
      icon: <Utensils size={22} />,
      name: 'Restaurants & Cafés',
      tagline: 'Interactive Menus, Table Reservations & Local Discovery',
      desc: 'Engineered to showcase culinary atmosphere, drive table bookings, and highlight digital menus seamlessly across smartphone touchscreens.',
      features: ['Digital interactive menu showcase', 'Table reservation inquiry form', 'Google Maps & operating hours banner', 'Direct WhatsApp & phone booking links'],
      modules: 'Menu Tabs • Reservation Module • Google Maps',
      accent: '#C2410C',
    },
    {
      num: '02',
      icon: <Dumbbell size={22} />,
      name: 'Fitness & Gyms',
      tagline: 'Class Schedules, Trainer Profiles & Enrollment',
      desc: 'High-energy studio portals designed to showcase workout schedules, introduce personal trainers, and convert visitors into active members.',
      features: ['Weekly class timetable matrix', 'Personal trainer bio cards', 'Membership pricing tier comparison', 'Trial session registration forms'],
      modules: 'Class Matrix • Trainer Cards • Trial Booking',
      accent: '#15803D',
    },
    {
      num: '03',
      icon: <Home size={22} />,
      name: 'Real Estate & Property',
      tagline: 'High-Impact Property Showcases & Agent Leads',
      desc: 'Sleek property browsing portals featuring high-resolution property galleries, virtual tour embeds, and agent contact modules.',
      features: ['Featured property listing gallery', 'Virtual tour & video embed ready', 'Agent contact & inquiry forms', 'Interactive location neighborhood maps'],
      modules: 'Property Gallery • Virtual Tours • Agent Form',
      accent: '#1D4ED8',
    },
    {
      num: '04',
      icon: <Scissors size={22} />,
      name: 'Salons & Wellness',
      tagline: 'Service Treatment Menus & Appointment CTAs',
      desc: 'Calm luxury wellness aesthetics designed to display treatment price lists, stylist portfolios, and online appointment requests.',
      features: ['Treatment & service price lists', 'Stylist portfolio image gallery', 'Appointment booking request forms', 'Verified customer review highlights'],
      modules: 'Treatment Price List • Portfolio • Booking CTA',
      accent: '#7E22CE',
    },
    {
      num: '05',
      icon: <Briefcase size={22} />,
      name: 'Professional Services',
      tagline: 'Lawyers, Accountants & Corporate Consultants',
      desc: 'Designed to build immediate corporate authority, showcase practice areas, and capture qualified consultation leads.',
      features: ['Authority-building team profiles', 'Practice area breakdowns', 'Consultation request forms', 'Client case study summary cards'],
      modules: 'Practice Areas • Attorney Profiles • Consultation Form',
      accent: '#0F172A',
    },
    {
      num: '06',
      icon: <ShoppingBag size={22} />,
      name: 'Local Shops & Retail',
      tagline: 'Storefront Presence & Seasonal Catalog',
      desc: 'Clean mobile-first showcases highlighting store catalog items, opening hours, directions, and direct customer contact links.',
      features: ['Featured product catalog grid', 'Store location & hours banner', 'Click-to-call & WhatsApp links', 'Special promo & seasonal banners'],
      modules: 'Catalog Grid • In-Store Pickup • Map Directions',
      accent: '#B45309',
    },
    {
      num: '07',
      icon: <Rocket size={22} />,
      name: 'Startups & Technology',
      tagline: 'Product Landing Pages & Early Access Waitlists',
      desc: 'Modern tech landing pages engineered to highlight product features, display pricing tiers, and collect early access leads.',
      features: ['Feature highlights & hero mockups', 'Interactive pricing toggles', 'Early access waitlist forms', 'API / Integration ecosystem matrix'],
      modules: 'Hero Mockups • Interactive Pricing • Lead Capture',
      accent: '#0369A1',
    },
    {
      num: '08',
      icon: <UserCheck size={22} />,
      name: 'Personal Brands & Experts',
      tagline: 'Coaches, Speakers & Executive Creators',
      desc: 'Authority personal sites crafted to position industry experts, showcase speaking topics, and book consulting engagements.',
      features: ['Personal bio & media kit', 'Speaking engagement inquiries', 'Course & content highlights', 'Newsletter signup integration'],
      modules: 'Media Kit • Speaking Booking • Content Grid',
      accent: '#BE185D',
    },
  ];

  const current = industries[activeCategory];

  // Auto-cycle with progress bar
  const startProgress = () => {
    setProgressWidth(0);
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / AUTO_CYCLE_MS) * 100, 100);
      setProgressWidth(pct);
      if (pct < 100) {
        progressTimer.current = requestAnimationFrame(step);
      } else {
        setActiveCategory((prev) => (prev + 1) % industries.length);
      }
    };
    progressTimer.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    startProgress();
    return () => cancelAnimationFrame(progressTimer.current);
  }, [activeCategory]);

  const handleSelectCategory = (index) => {
    cancelAnimationFrame(progressTimer.current);
    if (index === activeCategory) return;
    setPrevCategory(activeCategory);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(index);
      setPrevCategory(null);
      setIsAnimating(false);
    }, 220);
  };

  return (
    <section
      id="industries"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}
      className="section-padding"
    >
      <div className="container">

        {/* Eyebrow */}
        <div className="editorial-eyebrow reveal-on-scroll">
          Tailored Web Architecture
        </div>

        {/* Header row */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem', alignItems: 'end' }}
          className="reveal-on-scroll"
        >
          <h2 className="section-title" style={{ margin: 0 }}>Built For Your Industry.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
            We tailor every website around your specific industry sales funnels, user behavior, and conversion goals.
          </p>
        </div>

        {/* Main 2-col grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}
          className="reveal-on-scroll"
        >
          {/* ── LEFT: Industry List ── */}
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-color)' }}>
            {industries.map((ind, index) => {
              const isActive = activeCategory === index;
              const isHover = hoverRow === index;
              return (
                <div
                  key={ind.name}
                  onClick={() => handleSelectCategory(index)}
                  onMouseEnter={() => setHoverRow(index)}
                  onMouseLeave={() => setHoverRow(null)}
                  className="industry-row-item"
                  style={{
                    padding: '1.05rem 1.2rem',
                    borderBottom: '1px solid var(--border-color)',
                    borderLeft: isActive
                      ? `3px solid ${current.accent}`
                      : isHover
                        ? '3px solid rgba(0,0,0,0.12)'
                        : '3px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: isActive ? '#ffffff' : isHover ? 'rgba(255,255,255,0.55)' : 'transparent',
                    transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
                    boxShadow: isActive ? '0 2px 18px rgba(0,0,0,0.06)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Animated dot */}
                    <span
                      style={{
                        display: 'inline-block',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: isActive ? current.accent : 'var(--border-color)',
                        transition: 'background 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                        transform: isActive ? 'scale(1.5)' : 'scale(1)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: isActive ? current.accent : 'var(--text-dim)',
                        fontFamily: 'var(--font-heading)',
                        transition: 'color 0.2s ease',
                        minWidth: '22px',
                      }}
                    >
                      {ind.num}
                    </span>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: isActive ? 800 : 500,
                        color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                        margin: 0,
                        transition: 'all 0.2s ease',
                        letterSpacing: isActive ? '-0.01em' : '0',
                      }}
                    >
                      {ind.name}
                    </h3>
                  </div>

                  {/* Arrow pill */}
                  <div
                    className="industry-arrow-icon"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: isActive ? current.accent : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--text-muted)',
                      border: isActive ? 'none' : '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                      transform: isActive || isHover ? 'translateX(3px) scale(1.1)' : 'scale(1)',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={13} />
                  </div>
                </div>
              );
            })}

            {/* Auto-progress bar */}
            <div style={{ height: '3px', background: 'var(--border-color)', marginTop: '0.1rem', borderRadius: '2px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${progressWidth}%`,
                  background: current.accent,
                  transition: 'width 0.05s linear, background 0.4s ease',
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Deep-Dive Card ── */}
          <div
            key={activeCategory}
            className="editorial-card"
            style={{
              padding: '0',
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: isAnimating
                ? 'industryOut 0.22s ease forwards'
                : 'industryIn 0.45s cubic-bezier(0.34,1.06,0.64,1) forwards',
            }}
          >
            {/* Accent header strip */}
            <div
              style={{
                height: '5px',
                background: `linear-gradient(90deg, ${current.accent}, ${current.accent}88)`,
                transition: 'background 0.5s ease',
                animation: 'stripSlide 0.5s cubic-bezier(0.34,1.06,0.64,1) forwards',
              }}
            />

            <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                {/* Icon + title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: `${current.accent}15`,
                        border: `1.5px solid ${current.accent}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: current.accent,
                        animation: 'iconBounce 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {current.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          margin: 0,
                          color: 'var(--text-main)',
                          animation: 'slideUpFade 0.4s ease forwards',
                        }}
                      >
                        {current.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: current.accent,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Tailored Web Solution
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-pill)',
                      background: `${current.accent}12`,
                      border: `1px solid ${current.accent}30`,
                      color: current.accent,
                      animation: 'fadeIn 0.5s ease 0.1s forwards',
                      opacity: 0,
                    }}
                  >
                    <Zap size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {current.modules}
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                    animation: 'fadeIn 0.4s ease 0.05s forwards',
                    opacity: 0,
                  }}
                >
                  {current.desc}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    background: `linear-gradient(90deg, ${current.accent}40, transparent)`,
                    marginBottom: '1.5rem',
                    animation: 'lineExpand 0.5s ease 0.1s forwards',
                    transformOrigin: 'left',
                    transform: 'scaleX(0)',
                  }}
                />

                {/* Features */}
                <h4 style={{ fontSize: '0.82rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Included Standard Modules
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {current.features.map((feat, idx) => (
                    <div
                      key={`${activeCategory}-${idx}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.87rem',
                        color: 'var(--text-main)',
                        background: `${current.accent}08`,
                        border: `1px solid ${current.accent}18`,
                        borderRadius: '8px',
                        padding: '0.5rem 0.7rem',
                        animation: `featureSlide 0.4s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.07}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <Check size={14} color={current.accent} style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 500 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => onSelectIndustry(current.name)}
                className="btn btn-primary btn-lg"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: current.accent,
                  border: `1px solid ${current.accent}`,
                  animation: 'fadeIn 0.5s ease 0.3s forwards',
                  opacity: 0,
                }}
              >
                Build Website for {current.name} <ArrowRight size={16} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes industryIn {
          from { opacity: 0; transform: translateY(16px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes industryOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-10px); }
        }
        @keyframes featureSlide {
          from { opacity: 0; transform: translateX(-12px) scale(0.94); }
          to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        @keyframes iconBounce {
          0%   { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          60%  { transform: scale(1.12) rotate(3deg); }
          100% { transform: scale(1)   rotate(0deg); opacity: 1; }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes stripSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .industry-row-item:hover {
          background: rgba(255,255,255,0.55) !important;
        }
        .industry-row-item:hover h3 {
          letter-spacing: -0.01em;
        }
      `}</style>
    </section>
  );
}
