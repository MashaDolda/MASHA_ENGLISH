import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const scrollToTrial = () => {
    document.getElementById('trial').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Master CELPIP with an Expert
                <span className="highlight"> Who Gets Results</span>
              </h1>
              <p className="hero-subtitle">
                I'm Masha, your TESOL-certified CELPIP instructor. I help immigrants like you 
                pass CELPIP faster with proven methods, personalized feedback, and clear progress tracking.
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
                  <span>TESOL Certified</span>
                </div>
                <div className="credential-item">
                  <span className="icon">📜</span>
                  <span>Cambridge Business English</span>
                </div>
                <div className="credential-item">
                  <span className="icon">🎯</span>
                  <span>CELPIP Instructor</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-img"></div>
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
                    <p>I speak Russian and Ukrainian. I know the challenges immigrants face learning English.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="certifications">
              <h3>Professional Credentials</h3>
              <div className="cert-list">
                <div className="cert-item">
                  <div className="cert-icon">🇨🇦</div>
                  <div>
                    <h4>TESOL Diploma</h4>
                    <p>Canada - Teaching English to Speakers of Other Languages</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎯</div>
                  <div>
                    <h4>CELPIP Instructor Certificate</h4>
                    <p>Certified to prepare students for Canadian immigration English tests</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🏢</div>
                  <div>
                    <h4>Cambridge Business English Certificate</h4>
                    <p>Specialized training in professional English communication</p>
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
                  href="https://calendly.com/your-calendly-link" 
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
            Three options to improve your English and CELPIP scores
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
                  <li>General conversation skills</li>
                  <li>Small groups (max 6 students)</li>
                  <li>Structured feedback sessions</li>
                  <li>Weekly practice schedule</li>
                </ul>
                <div className="service-price">From CAD $15 per session</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <h3>1-on-1 Lessons</h3>
                <span className="service-type">Private</span>
              </div>
              <div className="service-content">
                <p>Personalized English and CELPIP preparation tailored to your specific needs and timeline.</p>
                <ul>
                  <li>Customized lesson plans</li>
                  <li>All 4 CELPIP skills or focus areas</li>
                  <li>Flexible scheduling</li>
                  <li>Intensive feedback and correction</li>
                  <li>Progress tracking</li>
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
            </div>
            <div className="footer-credentials">
              <p>TESOL Certified • Cambridge Business English • CELPIP Instructor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;