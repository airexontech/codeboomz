import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="Code Boomz" loading="lazy" />
            <h3>Code Boomz</h3>
          </div>
          <p>
            India's leading platform for next-gen tech education. We empower the next generation
            of engineers with industry-grade skills and global certifications.
          </p>
        </div>

        <div className="footer-section">
          <h4>Top Programs</h4>
          <ul>
            <li>
              <Link to="/courses/forward-deployed-ai-engineer">Forward Deployed AI</Link>
            </li>
            <li>
              <Link to="/courses/java-full-stack-ai-cloud">Java Full Stack (AI & Cloud)</Link>
            </li>
            <li>
              <Link to="/courses/python-full-stack-ai-ml">Python Full Stack (AI & ML)</Link>
            </li>
            <li>
              <Link to="/courses/cloud-computing-devops">Cloud & DevOps</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing Plans</Link>
            </li>
            <li>
              <Link to="/contact">Contact & Support</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Mail size={16} /> codeboomz@gmail.com
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Phone size={16} /> +91 832-8083619
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Code Boomz. All rights reserved.</p>
      </div>
    </footer>
  );
}
