import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Loader2, Mail, AlertCircle } from 'lucide-react';

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

export default function ContactForm({ preselectedPackage, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant & Hospitality',
    packageChoice: 'Business Package (₹19,999)',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({
        ...prev,
        packageChoice: preselectedPackage.includes('Package')
          ? preselectedPackage
          : `${preselectedPackage} Package`,
      }));
    }
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        details: `Interested in service: ${preselectedService}.\n${prev.details}`,
      }));
    }
  }, [preselectedPackage, preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.businessName.trim()) newErrors.businessName = 'Please enter your business or project name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your website goals or requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6b2a4c23-c06c-4753-a03a-84ebf6d68e86',
          name: formData.name,
          business_name: formData.businessName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          business_type: formData.businessType,
          package_choice: formData.packageChoice,
          message: formData.details,
          from_name: 'codeSPDY Studio Website',
          subject: `⚡ New Project Inquiry: ${formData.name} (${formData.businessName})`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please try again or email tonyyanush105@gmail.com directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      businessType: 'Restaurant & Hospitality',
      packageChoice: 'Business Package (₹19,999)',
      details: '',
    });
    setErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  const instagramUrl = 'https://www.instagram.com/codespdy?utm_source=qr&igsi=MTA2YjU2bXM5OW1q';
  const emailAddress = 'tonyyanush105@gmail.com';

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Editorial Heading Statement */}
        <div className="reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
          <div className="editorial-eyebrow">
            Start a Conversation
          </div>
          <h2 className="section-title">
            Let’s build something worth visiting.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6, marginTop: '1rem' }}>
            Tell us about your business and goals. We'll review your details and respond with a custom proposal within 24 hours.
          </p>
        </div>

        {/* Visually Integrated Lead Form Container */}
        <div
          className="editorial-card reveal-on-scroll"
          style={{
            padding: '2.5rem',
            background: '#ffffff',
            border: '1px solid var(--border-color)',
          }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                }}
              >
                <CheckCircle size={28} color="#059669" />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Inquiry Received ✓
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
                Thank you, <strong style={{ color: 'var(--text-main)' }}>{formData.name}</strong>! We've received your request for <strong style={{ color: 'var(--text-main)' }}>{formData.businessName}</strong>. Our lead developer will review your requirements and send a detailed proposal to <strong style={{ color: 'var(--text-main)' }}>{formData.email}</strong> within 24 hours.
              </p>

              <button onClick={handleReset} className="btn btn-secondary btn-sm">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {status === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 1rem',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: 'var(--radius-sm)',
                    color: '#b91c1c',
                    fontSize: '0.88rem',
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{errorMessage || 'Submission error. Please try again or email tonyyanush105@gmail.com directly.'}</span>
                </div>
              )}

              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Your Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Samantha"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      border: errors.name ? '1px solid #ef4444' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                    }}
                  />
                  {errors.name && <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="businessName" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Business Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    autoComplete="organization"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Athletic Studio"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      border: errors.businessName ? '1px solid #ef4444' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                    }}
                  />
                  {errors.businessName && <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.businessName}</span>}
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="samantha@yourbusiness.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      border: errors.email ? '1px solid #ef4444' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                    }}
                  />
                  {errors.email && <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-subtle)',
                    }}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="businessType" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Business Category
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <option value="Restaurant & Hospitality">Restaurant & Hospitality</option>
                    <option value="Fitness & Gym">Fitness & Gym</option>
                    <option value="Real Estate & Property">Real Estate & Property</option>
                    <option value="Salon & Wellness Spa">Salon & Wellness Spa</option>
                    <option value="Professional & Legal Services">Professional & Legal Services</option>
                    <option value="Local Retail & Boutique">Local Retail & Boutique</option>
                    <option value="Startup & Technology">Startup & Technology</option>
                    <option value="Personal Brand & Coach">Personal Brand & Coach</option>
                    <option value="Other Small Business">Other Small Business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="packageChoice" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Preferred Package
                  </label>
                  <select
                    id="packageChoice"
                    name="packageChoice"
                    value={formData.packageChoice}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      background: 'var(--bg-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <option value="Starter Package (₹9,999)">Starter Package (₹9,999)</option>
                    <option value="Business Package (₹19,999)">Business Package (₹19,999)</option>
                    <option value="Premium Package (₹39,999+)">Premium Package (₹39,999+)</option>
                    <option value="Custom Project / Estimator Quote">Custom Project / Estimator Quote</option>
                  </select>
                </div>
              </div>

              {/* Text Area */}
              <div>
                <label htmlFor="details" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Website Requirements & Details <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your business, how many pages you need, features (e.g. menu, booking, contact form), and desired launch date..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    fontSize: '0.92rem',
                    resize: 'vertical',
                    border: errors.details ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-subtle)',
                  }}
                />
                {errors.details && <span style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{errors.details}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Submitting Request...
                  </>
                ) : (
                  <>
                    Start Your Project <ArrowRight size={18} className="btn-arrow" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Links Bar */}
        <div
          className="reveal-on-scroll"
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '1.25rem',
            background: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            fontSize: '0.88rem',
          }}
        >
          <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Or reach out directly:</span>
          
          <a
            href={`mailto:${emailAddress}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--text-main)',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.35rem 0.85rem',
              background: '#ffffff',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-color)',
            }}
          >
            <Mail size={15} color="var(--text-main)" />
            <span>{emailAddress}</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--text-main)',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '0.35rem 0.85rem',
              background: '#ffffff',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-color)',
            }}
          >
            <InstagramIcon size={15} color="var(--text-main)" />
            <span>Instagram: @codespdy</span>
          </a>
        </div>

      </div>
    </section>
  );
}
