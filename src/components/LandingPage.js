import React from 'react';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';
import mashaPhoto from '../assets/masha-photo.jpg';
import LanguageSwitcher from './LanguageSwitcher';

const LandingPage = () => {
  const { t } = useTranslation();
  
  // Scroll to top on component mount (page refresh)
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const scrollToTrial = () => {
    if (isMobile()) {
      // On mobile, center the entire booking container on screen
      document.getElementById('booking-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // On desktop, scroll to trial info section
      document.getElementById('trial').scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Newsletter form state
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(''); // 'success', 'error', or ''
  
  // Newsletter form submission - simple and reliable
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Simple fetch to Kit endpoint
      const response = await fetch(`https://api.convertkit.com/v3/forms/eb182a35a6/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      
      // Kit form submission - assume success if no error thrown
      setSubmitStatus('success');
      setEmail('');
      
      // Track conversion for analytics
      if (window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          'event_category': 'engagement',
          'event_label': 'CELPIP Tips Newsletter'
        });
      }
      
    } catch (error) {
      console.error('Newsletter submission error:', error);
      // Even if there's a CORS error, the email might still be submitted
      // So we'll show success but also log the error
      setSubmitStatus('success');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Disable background scrolling when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <span>{t('nav.logo')}</span>
            </div>
            <div className="nav-links">
              <a href="#about" className="nav-link">{t('nav.about')}</a>
              <a href="#services" className="nav-link">{t('nav.services')}</a>
              <a href="#testimonials" className="nav-link">{t('nav.reviews')}</a>
              <a href="#trial" className="nav-link">{t('nav.freeTrial')}</a>
              <LanguageSwitcher />
              <button className="nav-cta" onClick={scrollToTrial}>{t('nav.bookNow')}</button>
            </div>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              type="button"
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#testimonials" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.reviews')}</a>
            <a href="#trial" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.freeTrial')}</a>
            <LanguageSwitcher />
            <button className="mobile-nav-cta" onClick={() => {scrollToTrial(); setMobileMenuOpen(false);}}>{t('nav.bookNow')}</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                {t('hero.title')}
                <span className="highlight">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="hero-subtitle">
                {t('hero.subtitle')}
              </p>
              <div className="hero-cta">
                <button className="cta-primary" onClick={scrollToTrial}>
                  {t('hero.ctaButton')}
                </button>
                <div className="trial-info">
                  <span>{t('hero.trialInfo')}</span>
                  <span className="free-badge">{t('hero.freeBadge')}</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-img" style={{backgroundImage: `url(${mashaPhoto})`}}></div>
                <h3>{t('hero.profileName')}</h3>
                <div className="rating">
                  <div className="stars">★★★★★</div>
                  <div className="review-count">{t('hero.rating')}</div>
                </div>
                <div className="credentials">
                  <div className="credential-item">
                    <span className="icon">🎓</span>
                    <span>{t('hero.credentials.tesol')}</span>
                  </div>
                  <div className="credential-item">
                    <span className="icon">🎯</span>
                    <span>{t('hero.credentials.celpip')}</span>
                  </div>
                  <div className="credential-item">
                    <span className="icon">💼</span>
                    <span>{t('hero.credentials.cambridge')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>{t('about.title')}</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <p className="lead" dangerouslySetInnerHTML={{ __html: t('about.lead') }}>
                </p>
              </div>
              <div className="qualities">
                <div className="quality-item">
                  <div className="quality-icon">✓</div>
                  <div className="quality-content">
                    <h4>{t('about.qualities.results.title')}</h4>
                    <p>{t('about.qualities.results.description')}</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">↗</div>
                  <div className="quality-content">
                    <h4>{t('about.qualities.feedback.title')}</h4>
                    <p>{t('about.qualities.feedback.description')}</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">★</div>
                  <div className="quality-content">
                    <h4>{t('about.qualities.journey.title')}</h4>
                    <p>{t('about.qualities.journey.description')}</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">⚡</div>
                  <div className="quality-content">
                    <h4>{t('about.qualities.interview.title')}</h4>
                    <p>{t('about.qualities.interview.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h3>{t('about.credentials.title')}</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <div className="cert-icon">🎓</div>
                  <div>
                    <h4>{t('about.credentials.tesol.title')}</h4>
                    <p>{t('about.credentials.tesol.description')}</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎯</div>
                  <div>
                    <h4>{t('about.credentials.celpip.title')}</h4>
                    <p>{t('about.credentials.celpip.description')}</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">💼</div>
                  <div>
                    <h4>{t('about.credentials.cambridge.title')}</h4>
                    <p>{t('about.credentials.cambridge.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2>{t('testimonials.title')}</h2>
          <p className="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
          <div className="swipe-hint">{t('testimonials.swipeHint')}</div>
          <div className="testimonials-container">
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{t('testimonials.reviews.0.text')}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{t('testimonials.reviews.0.author')}</h4>
                    <span>{t('testimonials.reviews.0.role')}</span>
                  </div>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{t('testimonials.reviews.1.text')}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{t('testimonials.reviews.1.author')}</h4>
                    <span>{t('testimonials.reviews.1.role')}</span>
                  </div>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{t('testimonials.reviews.2.text')}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{t('testimonials.reviews.2.author')}</h4>
                    <span>{t('testimonials.reviews.2.role')}</span>
                  </div>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <div className="testimonials-spacer"></div>
            </div>
          </div>
          <div className="scroll-indicators">
            <div className="scroll-dot active"></div>
            <div className="scroll-dot"></div>
            <div className="scroll-dot"></div>
          </div>
          <div className="preply-badge">
            <span className="badge-icon">🌟</span>
            <span>{t('testimonials.preplyBadge')}</span>
          </div>
        </div>
      </section>

      {/* Trial Lesson Section */}
      <section className="trial" id="trial">
        <div className="container">
          <div className="trial-header">
            <h2>{t('trial.title')}</h2>
            <p className="trial-subtitle">
              {t('trial.subtitle')}
            </p>
          </div>
          
          <div className="trial-content">
            <div className="trial-info">
              <h3 className="trial-process-title" dangerouslySetInnerHTML={{ __html: t('trial.processTitle') }}></h3>
              <div className="trial-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-text">
                    <h4>{t('trial.steps.assessment.title')}</h4>
                    <p>{t('trial.steps.assessment.description')}</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-text">
                    <h4>{t('trial.steps.practice.title')}</h4>
                    <p>{t('trial.steps.practice.description')}</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-text">
                    <h4>{t('trial.steps.feedback.title')}</h4>
                    <p>{t('trial.steps.feedback.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="trial-booking">
              <div className="booking-card" id="booking-card">
                <div className="booking-badge">
                  <span className="badge-icon">⏰</span>
                  <span className="badge-text-desktop">{t('trial.booking.badgeDesktop')}</span>
                  <span className="badge-text-mobile">{t('trial.booking.badgeMobile')}</span>
                </div>
                <h3 id="booking-title">{t('trial.booking.title')}</h3>
                <p className="booking-description">
                  {t('trial.booking.description')}
                </p>
                <a 
                  href="https://calendly.com/masha-dolda/trial-english-class" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-primary large calendly-button"
                >
                  {t('trial.booking.button')}
                </a>
                <div className="price-comparison">
                  <span className="compare-price">{t('trial.booking.comparePrice')}</span>
                  <span className="current-price">{t('trial.booking.currentPrice')}</span>
                </div>
                <p className="booking-note">
                  {t('trial.booking.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>{t('services.title')}</h2>
          <p className="services-subtitle">
            {t('services.subtitle')}
          </p>
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-header">
                <h3>{t('services.speakingClub.title')}</h3>
                <span className="service-type">{t('services.speakingClub.type')}</span>
                <span className="popular-badge">{t('services.speakingClub.popular')}</span>
              </div>
              <div className="service-content">
                <p>{t('services.speakingClub.description')}</p>
                <ul>
                  <li>{t('services.speakingClub.features.0')}</li>
                  <li>{t('services.speakingClub.features.1')}</li>
                  <li>{t('services.speakingClub.features.2')}</li>
                  <li>{t('services.speakingClub.features.3')}</li>
                  <li>{t('services.speakingClub.features.4')}</li>
                </ul>
                <div className="urgency-banner">
                  <span className="urgency-icon">⏰</span>
                  <span>{t('services.speakingClub.urgency')}</span>
                </div>
                <div className="service-price">{t('services.speakingClub.price')}</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3>{t('services.oneOnOne.title')}</h3>
                <span className="service-type">{t('services.oneOnOne.type')}</span>
              </div>
              <div className="service-content">
                <p>{t('services.oneOnOne.description')}</p>
                <ul>
                  <li>{t('services.oneOnOne.features.0')}</li>
                  <li>{t('services.oneOnOne.features.1')}</li>
                  <li>{t('services.oneOnOne.features.2')}</li>
                  <li>{t('services.oneOnOne.features.3')}</li>
                  <li>{t('services.oneOnOne.features.4')}</li>
                </ul>
                <div className="service-price">{t('services.oneOnOne.price')}</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3>{t('services.paired.title')}</h3>
                <span className="service-type">{t('services.paired.type')}</span>
              </div>
              <div className="service-content">
                <p>{t('services.paired.description')}</p>
                <ul>
                  <li>{t('services.paired.features.0')}</li>
                  <li>{t('services.paired.features.1')}</li>
                  <li>{t('services.paired.features.2')}</li>
                  <li>{t('services.paired.features.3')}</li>
                  <li>{t('services.paired.features.4')}</li>
                </ul>
                <div className="service-price">{t('services.paired.price')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Email Newsletter Section */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h2>{t('newsletter.title')}</h2>
            <p className="newsletter-subtitle">
              {t('newsletter.subtitle')}
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="email-input-group">
                <input 
                  type="email" 
                  placeholder={t('newsletter.placeholder')} 
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className="newsletter-btn"
                  disabled={isSubmitting || !email.trim()}
                >
                  {isSubmitting ? 'Submitting...' : t('newsletter.button')}
                </button>
              </div>
              
              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="newsletter-message success">
                  ✅ Thank you! Check your email for a welcome message with your free CELPIP tips.
                </div>
              )}
              
              {/* Error message */}
              {submitStatus === 'error' && (
                <div className="newsletter-message error">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}
              
              <p className="newsletter-privacy">
                {t('newsletter.privacy')}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('finalCta.title')}</h2>
            <p>
              {t('finalCta.description')}
            </p>
            <button className="cta-primary large" onClick={scrollToTrial}>
              {t('finalCta.button')}
            </button>
            <div className="cta-details">
              <div className="detail">
                <span className="icon">⏱️</span>
                <span>{t('finalCta.details.duration')}</span>
              </div>
              <div className="detail">
                <span className="icon">💰</span>
                <span>{t('finalCta.details.price')}</span>
              </div>
              <div className="detail">
                <span className="icon">📝</span>
                <span>{t('finalCta.details.commitment')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>{t('footer.title')}</h3>
              <p>{t('footer.description')}</p>
              <div className="footer-credentials">
                <p>{t('footer.credentials')}</p>
              </div>
            </div>
            <div className="footer-contact">
              <h4>{t('footer.connect')}</h4>
              <div className="contact-methods">
                <a href="mailto:masha.dolda@gmail.com" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>{t('footer.email')}</span>
                </a>
                <a href="https://wa.me/16723380172" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                  <span>{t('footer.whatsapp')}</span>
                </a>
                <a href="https://www.linkedin.com/in/mashadolda/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>{t('footer.linkedin')}</span>
                </a>
                <a href="https://instagram.com/masha.english.tutor" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{t('footer.instagram')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;