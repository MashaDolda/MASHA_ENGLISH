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
                <p>English Teacher & CELPIP Specialist</p>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>3+ Years Experience</span>
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
                    <h4>Interview Preparation Expert</h4>
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
                <p>We've had about ten lessons so far, and my main goal is to prepare for the CELPIP English test. Masha has created an excellent study plan and helps me with my weak areas. She is always punctual, and I'm happy to continue learning with her. Her approach is organized and focused, which gives me confidence as I get closer to my test date.</p>
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
                <p>Masha is a great teacher, since I started learning with her I have seen my level of English improve, all the classes are very productive and practical. She is kind, patient and always in a great mood. Highly recommended!</p>
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
                <p>Masha is a very professional tutor. While we are making conversations, she is also checking my English, immediately points out to me about my mistakes. She really cares about my progress in English and building my confidence in communication.</p>
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
            <span>5.0/5 stars • 7 reviews on Preply</span>
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
            <div className="limited-time-notice">
              <span className="notice-icon">⏰</span>
              <span>Free trial available while I'm building my schedule</span>
            </div>
          </div>
          
          <div className="trial-content">
            <div className="trial-info">
              <h3>What Happens in Your Trial</h3>
              <div className="trial-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <div className="step-text">
                    <h4>Assessment</h4>
                    <p>I evaluate your current English level and CELPIP goals</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <div className="step-text">
                    <h4>Practice Task</h4>
                    <p>You try a sample CELPIP speaking task</p>
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
                  Book Free Trial - $0
                </a>
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
                  <span>Limited spots available for September 2025 cohort</span>
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
              Stay updated with CELPIP tips and news about upcoming classes
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
                  <span className="contact-icon">📧</span>
                  <span>masha.dolda@gmail.com</span>
                </a>
                <a href="https://wa.me/16723380172" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">💬</span>
                  <span>WhatsApp: +1 (672) 338-0172</span>
                </a>
                <a href="https://www.linkedin.com/in/mashadolda/" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/masha.english.tutor" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="contact-icon">📸</span>
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