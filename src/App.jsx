import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBenefits from './components/TrustBenefits';
import Services from './components/Services';
import BusinessTypes from './components/BusinessTypes';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';

import ProcessTimeline from './components/ProcessTimeline';

import ValueDeliverables from './components/ValueDeliverables';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Instant & Scroll Visibility Trigger
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const checkVisibility = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('is-visible');
        }
      });
    };

    // Run immediately on mount & load
    checkVisibility();
    // Run after brief tick for late images/DOM renders
    const timer = setTimeout(checkVisibility, 100);

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPackage = (pkgName) => {
    setSelectedPackage(pkgName);
    scrollToContact();
  };

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  const handleSelectIndustry = (industryName) => {
    setSelectedService(`Website for ${industryName}`);
    scrollToContact();
  };

  const handleOrderProject = (projectTitle) => {
    setSelectedService(`Design like ${projectTitle}`);
    scrollToContact();
  };

  return (
    <div className="app-root">
      <Header onSelectPackage={handleSelectPackage} />

      <main>
        <Hero
          onGetStarted={scrollToContact}
          onViewWork={scrollToPortfolio}
        />

        <TrustBenefits />

        <Services onSelectService={handleSelectService} />

        <BusinessTypes onSelectIndustry={handleSelectIndustry} />

        <Portfolio onOrderProject={handleOrderProject} />

        <Pricing onSelectPackage={handleSelectPackage} />

        <ProcessTimeline onGetStarted={scrollToContact} />



        <ValueDeliverables />

        <FAQAccordion onGetStarted={scrollToContact} />

        <ContactForm
          preselectedPackage={selectedPackage}
          preselectedService={selectedService}
        />
      </main>

      <Footer />
    </div>
  );
}
