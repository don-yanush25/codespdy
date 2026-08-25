import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FAQAccordion({ onGetStarted }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How long does it take to build a website?',
      a: 'A typical Starter business website is built and ready for review in 3 to 5 business days. Business packages take 5 to 7 days, while custom Premium builds require 7 to 12 days depending on page count and custom integrations.',
    },
    {
      q: 'Can you build a website for my specific industry?',
      a: 'Yes! We create custom websites for restaurants, fitness studios, real estate agencies, salons, law firms, consultants, local retail shops, tech startups, and personal brands.',
    },
    {
      q: 'Is the website mobile-friendly?',
      a: 'Absolutely. Every website is engineered responsively and rigorously tested across smartphones (320px – 414px), tablets (768px – 1024px), laptops, and large desktop monitors.',
    },
    {
      q: 'Can I request design changes?',
      a: 'Yes. Every project includes structured review phases where you inspect live preview links and request visual or copy adjustments prior to final deployment.',
    },
    {
      q: 'Do you provide web hosting?',
      a: 'We assist with setting up fast, secure cloud hosting (e.g., Netlify, Vercel, Cloudflare, or your preferred provider). You retain 100% ownership of your hosting account.',
    },
    {
      q: 'Can you help with custom domain setup?',
      a: 'Yes. We assist with connecting your existing custom domain (e.g., yourbusiness.com) or registering a new domain name.',
    },
    {
      q: 'Do you provide ongoing website maintenance?',
      a: 'Yes! We offer optional monthly care plans covering technical monitoring, dependency updates, content edits, and performance optimization.',
    },
    {
      q: 'Can I see a live demo before purchasing?',
      a: 'Yes! You can explore our concept and demo projects right here in our Portfolio section, complete with interactive desktop, tablet, and mobile viewport previews.',
    },
    {
      q: 'How do I get started with codeSPDY?',
      a: 'Simply fill out our request form below with your business details, preferred package, and goals. We will review your info and get back to you within 24 hours to begin!',
    },
  ];

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="editorial-eyebrow reveal-on-scroll">
          Questions & Answers
        </div>

        <div className="reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* Nothing™ Minimal Accordion with Thin Dividers */}
        <div style={{ borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="reveal-on-scroll"
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  padding: '1.5rem 0',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: 'var(--text-main)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    gap: '1rem',
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform var(--transition-fast)',
                    }}
                  >
                    {isOpen ? <Minus size={16} color="var(--text-main)" /> : <Plus size={16} color="var(--text-main)" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '0.85rem',
                      paddingRight: '2rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '2.5rem' }} className="reveal-on-scroll">
          <a href="#contact" onClick={onGetStarted} className="btn btn-secondary btn-sm">
            Ask Us Anything <ArrowRight size={15} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
