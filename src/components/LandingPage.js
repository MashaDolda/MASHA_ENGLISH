import React from 'react';
import './LandingPage.css';
import mashaPhoto from '../assets/masha-photo.jpg';

const LandingPage = () => {
  const scrollToTrial = () => {
    document.getElementById('trial').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <span>Masha English Teacher</span>
            </div>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#testimonials" className="nav-link">Reviews</a>
              <a href="#trial" className="nav-link">Free Trial</a>
              <button className="nav-cta" onClick={scrollToTrial}>Book Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Pass CELPIP & Get Your Canadian PR
                <span className="highlight"> with Expert Guidance</span>
              </h1>
              <p className="hero-subtitle">
                I'm Masha, your TESOL-certified English instructor living in Canada 🇨🇦. I help immigrants like you 
                achieve CELPIP success and improve English for Canadian life with proven teaching methods.
              </p>
              <div className="hero-cta">
                <button className="cta-primary" onClick={scrollToTrial}>
                  Try a FREE Lesson
                </button>
                <div className="trial-info">
                  <span>25-minute trial • See if we're a good fit</span>
                  <span className="free-badge">FREE</span>
                </div>
              </div>
              <div className="credentials">
                <div className="credential-item">
                  <span className="icon">🎓</span>
                  <span>TESOL Diploma</span>
                </div>
                <div className="credential-item">
                  <span className="icon">🎯</span>
                  <span>Official CELPIP Instructor</span>
                </div>
                <div className="credential-item">
                  <span className="icon">💼</span>
                  <span>Cambridge Business English</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-img" style={{backgroundImage: `url(${mashaPhoto})`}}></div>
                <h3>Masha</h3>
                <div className="rating">
                  <div className="stars">★★★★★</div>
                  <div className="review-count">5 Star Super Tutor on Preply</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>Why Work With Me?</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <p className="lead">
                  I help immigrants pass CELPIP and improve their English with <strong>proven methods 
                  that get results.</strong> My students consistently improve their CLB levels because 
                  I focus on what actually works.
                </p>
              </div>
              <div className="qualities">
                <div className="quality-item">
                  <div className="quality-icon">🎯</div>
                  <div>
                    <h4>Results-Focused Teaching</h4>
                    <p>Every lesson has a clear goal. You'll know exactly what you're learning and why.</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">📊</div>
                  <div>
                    <h4>Personalized Feedback</h4>
                    <p>I identify your specific weak points and give you a clear plan to improve them.</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">🌍</div>
                  <div>
                    <h4>I Understand Your Journey</h4>
                    <p>I speak Ukrainian and Russian, and I've taught students from many countries. I know the specific challenges each nationality faces and what to focus on for faster improvement.</p>
                  </div>
                </div>
                <div className="quality-item">
                  <div className="quality-icon">💼</div>
                  <div>
                    <h4>Interview Preparation</h4>
                    <p>With my Cambridge Business English certification and HR experience in Canada, I help you prepare for job interviews and professional communication.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h3>Professional Credentials</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <div className="cert-icon">🎓</div>
                  <div>
                    <h4>TESOL Diploma</h4>
                    <p>Canada - Teaching English to Speakers of Other Languages</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎯</div>
                  <div>
                    <h4>Official CELPIP Instructor</h4>
                    <p>Certified to prepare students for Canadian immigration English tests</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">💼</div>
                  <div>
                    <h4>Cambridge Business English</h4>
                    <p>Professional communication & interview preparation specialist</p>
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
          <h2>What My Students Say</h2>
          <p className="testimonials-subtitle">
            Real feedback from students I've helped
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"We've had about ten lessons so far, and my main goal is to prepare for the CELPIP English test. Masha has created an excellent study plan and helps me with my weak areas. She is always punctual, and I'm happy to continue learning with her. Her approach is organized and focused, which gives me confidence as I get closer to my test date."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mariia</h4>
                  <span>CELPIP Student</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Masha is a great teacher, since I started learning with her I have seen my level of English improve, all the classes are very productive and practical. She is kind, patient and always in a great mood. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Viktoriia</h4>
                  <span>English Student</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Masha is a very professional tutor. While we are making conversations, she is also checking my English, immediately points out to me about my mistakes. She really cares about my progress in English and building my confidence in communication."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Ivanna</h4>
                  <span>English Student</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          <div className="preply-badge">
            <span className="badge-icon">🌟</span>
            <span>45+ positive reviews on Preply</span>
          </div>
        </div>
      </section>

      {/* Trial Lesson Section */}
      <section className="trial" id="trial">
        <div className="container">
          <div className="trial-header">
            <h2>Book Your Free Trial Lesson</h2>
            <p className="trial-subtitle">
              25 minutes to see if we're a good fit • No commitment required
            </p>

                    </div>
            
            <div className="trial-content">
              <div className="trial-info">
                <h3 className="trial-process-title">What Happens in Your Trial</h3>
                <div className="trial-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-text">
                    <h4>Assessment</h4>
                    <p>I evaluate your current English level and your specific goals (CELPIP, general English, or job interviews)</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-text">
                    <h4>Practice Task</h4>
                    <p>You try a relevant speaking task based on your goals (CELPIP practice, conversation, or interview simulation)</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <div className="step-text">
                    <h4>Feedback & Recommendation</h4>
                    <p>I give you specific feedback and suggest next steps</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="trial-booking">
              <div className="booking-card">
                <div className="booking-badge">
                  <span className="badge-icon">⏰</span>
                  <span>Open slots available • Limited time offer</span>
                </div>
                <h3>Choose Your Time</h3>
                <p className="booking-description">
                  Pick a time that works for you from my available slots
                </p>
                <a 
                  href="https://calendly.com/masha-dolda/trial-english-class" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-primary large calendly-button"
                >
                  Book Free Trial
                </a>
                <div className="price-comparison">
                  <span className="compare-price">CA$15</span>
                  <span className="current-price">FREE</span>
                </div>
                <p className="booking-note">
                  Choose your preferred time • Automatic confirmation • No waiting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>How I Can Help You</h2>
          <p className="services-subtitle">
            CELPIP preparation • General English for immigration • Interview coaching
          </p>
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-header">
                <h3>Speaking Club</h3>
                <span className="service-type">Group Sessions</span>
                <span className="popular-badge">Most Popular</span>
              </div>
              <div className="service-content">
                <p>CELPIP-focused and General English speaking practice in small groups. Build confidence with other learners at your level.</p>
                <ul>
                  <li>CELPIP speaking tasks practice</li>
                  <li>General English conversation skills</li>
                  <li>Small group setting</li>
                  <li>Structured feedback sessions</li>
                  <li>Weekly practice schedule</li>
                </ul>
                <div className="urgency-banner">
                  <span className="urgency-icon">⏰</span>
                  <span>Limited spots available for September 2025</span>
                </div>
                <div className="service-price">From CAD $15 per session</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3>1-on-1 Lessons</h3>
                <span className="service-type">Private</span>
              </div>
              <div className="service-content">
                <p>Personalized CELPIP preparation, general English, or interview coaching tailored to your specific needs.</p>
                <ul>
                  <li>CELPIP test preparation (all 4 skills)</li>
                  <li>General English for immigration</li>
                  <li>Job interview preparation</li>
                  <li>Flexible scheduling</li>
                  <li>Intensive feedback and progress tracking</li>
                </ul>
                <div className="service-price">From CAD $35 per session</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3>Paired Lessons</h3>
                <span className="service-type">2 Students</span>
              </div>
              <div className="service-content">
                <p>Semi-private lessons for you and a friend or partner. More personal than group, more affordable than 1-on-1.</p>
                <ul>
                  <li>Share lessons with a partner</li>
                  <li>CELPIP or general English focus</li>
                  <li>Conversation practice together</li>
                  <li>Individual and pair feedback</li>
                  <li>Cost-effective option</li>
                </ul>
                <div className="service-price">From CAD $25 per session (each)</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Email Newsletter Section */}
      <section className="newsletter-signup">
        <div className="container">
          <div className="newsletter-content">
            <h2>Get CELPIP Tips & Updates</h2>
            <p className="newsletter-subtitle">
              Get weekly CELPIP tips, practice questions, and news about upcoming classes
            </p>
            <form className="newsletter-form">
              <div className="email-input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="email-input"
                  required 
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
              <p className="newsletter-privacy">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Improve Your English?</h2>
            <p>
              Book your free trial lesson now. I'll help you understand exactly where you are
              and what you need to do to reach your CELPIP goals.
            </p>
            <button className="cta-primary large" onClick={scrollToTrial}>
              Book Your FREE Trial Lesson
            </button>
            <div className="cta-details">
              <div className="detail">
                <span className="icon">⏱️</span>
                <span>25 minutes</span>
              </div>
              <div className="detail">
                <span className="icon">💰</span>
                <span>Completely FREE</span>
              </div>
              <div className="detail">
                <span className="icon">📝</span>
                <span>No commitment</span>
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
              <h3>Masha - English Teacher</h3>
              <p>Professional English instruction with a focus on results</p>
              <div className="footer-credentials">
                <p>TESOL Certified • Cambridge Business English • CELPIP Instructor</p>
              </div>
            </div>
            <div className="footer-contact">
              <h4>Connect With Me</h4>
              <div className="contact-methods">
                <a href="mailto:masha.dolda@gmail.com" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>masha.dolda@gmail.com</span>
                </a>
                <a href="https://wa.me/16723380172" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                  <span>WhatsApp: +1 (672) 338-0172</span>
                </a>
                <a href="https://www.linkedin.com/in/mashadolda/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/masha.english.tutor" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@masha.english.tutor</span>
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