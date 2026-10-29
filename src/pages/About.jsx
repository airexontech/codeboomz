import React from 'react';
import { BookOpen, Users, Award, Handshake } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function About() {
  return (
    <div className="about-page">
      {/* About Hero */}
      <div className="about-hero">
        <div className="container about-hero-content">
          <h1>
            About <span className="highlight">Us</span>
          </h1>
          <p className="about-intro-text">
            A future-focused learning platform transforming careers through mentorship
            and industry-vetted roadmaps.
          </p>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="container stats-container-wrapper">
        <div className="stats-glass-card">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <div className="stat-info">
                <h3>10+</h3>
                <p>Courses</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <h3>5000+</h3>
                <p>Students</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Award size={24} />
              </div>
              <div className="stat-info">
                <h3>20+</h3>
                <p>Experts</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Handshake size={24} />
              </div>
              <div className="stat-info">
                <h3>200+</h3>
                <p>Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container about-section">
        <div className="mission-vision-grid">
          <div className="mv-card">
            <div className="mv-content">
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-text">
                Our mission is to help learners build strong fundamentals, develop real-world
                technical skills, and grow with the right mentorship and guidance, so they can
                consistently perform at the highest level and confidently move into top roles
                across the tech industry.
              </p>
            </div>
            <div className="mv-visual">
              <img
                src="/assets/Mission-BJr6F1Jr.jpg"
                alt="Our Mission"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mv-card reverse">
            <div className="mv-content">
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-text">
                Our vision is to enable individuals to become the top 1% in tech. Professionals
                who stand out for their depth of knowledge, problem-solving ability, and
                real-world impact.
              </p>
            </div>
            <div className="mv-visual">
              <img
                src="/assets/vision-C-FluxPE.jpg"
                alt="Our Vision"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="container about-section" style={{ paddingTop: "1.5rem" }}>
        <div className="mb-5">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
