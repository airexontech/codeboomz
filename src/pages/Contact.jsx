import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  ChevronDown, Check, Linkedin, Twitter, Instagram 
} from 'lucide-react';
import { COURSES } from '../data/coursesData';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdcKVHGyOML3W8ERfNB-See2r-OD22gqAjuFgCe5EVLzfbYdnoQ7U7Qkhm1W7I2_Rd/exec";

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Pre-fill course from query param if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get('course');
    const planParam = params.get('plan');
    if (courseParam) {
      setFormData((prev) => ({ ...prev, course: courseParam }));
    } else if (planParam) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in enrolling in the ${planParam} plan. Please contact me with details.`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectCourse = (courseName) => {
    setFormData((prev) => ({ ...prev, course: courseName }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const body = new URLSearchParams();
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('course', formData.course || 'General Inquiry');
    body.append('message', formData.message);

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: body,
      mode: 'no-cors'
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', course: '', message: '' });
      })
      .catch((err) => {
        console.error('Submission error:', err);
        // Fallback: still inform user so they are not stuck
        alert('Thank you for reaching out! We will contact you soon.');
        setStatus('idle');
      });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Contact Header */}
      <div className="contact-header">
        <h1 className="contact-title">
          Master Your Future, <br />
          <span className="highlight">Let's Talk.</span>
        </h1>
        <p className="contact-subtitle">
          Confused about which course to pick? Just give us a call! We'll help you find
          the perfect program, discuss pricing, and map out your career roadmap. We
          provide exclusive online services to ensure you get the best tech education
          from anywhere.
        </p>
      </div>

      <div className="contact-content container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Custom Course Dropdown */}
              <div className="form-group">
                <label>What are you looking for?</label>
                <div className="custom-dropdown-container">
                  <div
                    className={`dropdown-trigger ${dropdownOpen ? 'open' : ''} ${
                      formData.course ? 'has-value' : ''
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {formData.course ? (
                      <span className="selected-value">
                        {(() => {
                          const c = COURSES.find((item) => item.title === formData.course);
                          return c && c.icon ? (
                            <img src={c.icon} alt="logo" className="selected-logo-sm" />
                          ) : null;
                        })()}
                        {formData.course}
                      </span>
                    ) : (
                      <span className="placeholder">Choose your career path</span>
                    )}
                    <ChevronDown
                      size={20}
                      className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`}
                    />
                  </div>

                  {dropdownOpen && (
                    <div className="dropdown-options">
                      {COURSES.map((course) => (
                        <div
                          key={course.id}
                          className={`dropdown-option ${
                            formData.course === course.title ? 'selected' : ''
                          }`}
                          onClick={() => handleSelectCourse(course.title)}
                        >
                          <div className="option-info">
                            {course.icon && (
                              <img
                                src={course.icon}
                                alt={course.title}
                                className="option-logo"
                                loading="lazy"
                              />
                            )}
                            <span>{course.title}</span>
                          </div>
                          {formData.course === course.title && (
                            <Check size={18} className="check-icon" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input type="hidden" name="course" value={formData.course} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Questions / Goals</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your background and what you want to achieve..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary send-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Schedule Discussion'}{' '}
                <Send size={18} style={{ marginLeft: '6px' }} />
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="contact-info-card">
            <div className="info-header">
              <h3>Speak to an Expert</h3>
              <p>Directly discuss courses, pricing, and industry-ready training.</p>
            </div>

            <div className="info-list">
              <a href="tel:+918328083619" className="call-action-card">
                <div className="call-icon">
                  <Phone size={24} />
                </div>
                <div className="call-info">
                  <span>Instant Inquiry</span>
                  <h4>+91 832-8083619</h4>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-content">
                  <h4>Official Support</h4>
                  <p>codeboomz@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>5th floor, Sandhya Techno 1, Rai Durg, Hyderabad, Telangana 500032</p>
                </div>
              </div>
            </div>

            <div className="social-links-section">
              <h4>Connect with us</h4>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="map-section" style={{ marginTop: '3rem', borderRadius: '1.5rem', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.999272541626!2d78.3724912270967!3d17.44775315866768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c550c0!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1707246543123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Code Boomz Location"
          ></iframe>
        </div>

        {/* Contact Page FAQs */}
        <div className="faq-section" style={{ marginTop: '4rem' }}>
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do you prepare students for the industry?</h3>
              <p>
                We focus on high-level industry standards training. Our syllabus is designed to
                help you crack technical rounds with confidence by preparing you for real-world
                engineering challenges.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is the mode of training?</h3>
              <p>
                We provide premium online live interactive sessions with mentors from top
                companies, allowing you to learn from the comfort of your home with
                industry-level quality.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I get a certificate after completion?</h3>
              <p>
                Absolutely! You will receive an industry-recognized certification upon
                successful completion of the course.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I pay the fees in installments?</h3>
              <p>
                Yes, we adhere to flexible payment options with monthly installment plans
                available for all our major courses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {status === 'success' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={48} strokeWidth={2} color="var(--primary)" />
            </div>
            <h2 className="modal-title">Success!</h2>
            <p className="modal-text">
              We have received your message. Our team will reach out to you shortly!
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn btn-primary send-btn"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
