import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Users, Check, ChevronDown, Award, 
  ShieldCheck, ArrowRight, Zap, Target, BookOpen, Clock, 
  Code2, CheckCircle2, MessageSquare, Layers, Sparkles 
} from 'lucide-react';

export default function CourseDetailPage({ courseData }) {
  const [activeAccordion, setActiveAccordion] = useState(0);

  if (!courseData) {
    return (
      <div className="section container text-center" style={{ padding: '6rem 1rem' }}>
        <h2>Course Not Found</h2>
        <p style={{ margin: '1rem 0 2rem' }}>The requested curriculum could not be located.</p>
        <Link to="/courses" className="btn btn-primary">
          Back to Course Catalogue
        </Link>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const enquiryUrl = `/contact?course=${encodeURIComponent(courseData.title)}`;

  return (
    <div className="course-details-page">
      {/* Course Hero */}
      <div className="course-hero-premium">
        <div className="hero-bg-accent"></div>
        <div className="container hero-layout">
          <div className="hero-text-content">
            <div className="hero-header-top">
              {courseData.icon && (
                <div className="tech-icon-glass">
                  <img src={courseData.icon} alt={courseData.title} />
                </div>
              )}
              <div className={`course-tag ${courseData.flagship ? 'flagship-tag' : ''}`}>
                {courseData.flagship ? (
                  <Sparkles size={12} fill="currentColor" />
                ) : (
                  <Zap size={12} fill="currentColor" />
                )}
                <span>{courseData.badge || "Professional Course"}</span>
              </div>
            </div>

            <h1 className="hero-title">{courseData.title}</h1>
            <p className="hero-desc">{courseData.subtitle || courseData.description}</p>

            {/* Technologies Badges */}
            {courseData.technologies && (
              <div className="detail-tech-chips">
                {courseData.technologies.map((tech, i) => (
                  <span key={i} className="detail-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="hero-meta-row">
              <div className="meta-pill">
                <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                <span>{courseData.rating || 4.9}</span>
                <span className="count">({courseData.ratingCount || "8.5k"})</span>
              </div>
              <div className="meta-pill">
                <Users size={16} />
                <span>{courseData.learners || "450,000"} Enrolled</span>
              </div>
              {courseData.duration && (
                <div className="meta-pill">
                  <Clock size={16} />
                  <span>{courseData.duration}</span>
                </div>
              )}
            </div>

            <div className="hero-cta-group">
              <Link to={enquiryUrl} className="enroll-prime-btn">
                Enquire for Admission
                <ArrowRight size={20} className="btn-icon" />
              </Link>
              <p className="guarantee">
                <ShieldCheck size={16} />
                Industry-Vetted Training Standards • Real-World Capstones
              </p>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="course-floating-card">
            <div className="preview-indicator">
              <BookOpen size={18} />
              <span>Program Highlights</span>
            </div>
            <div className="highlights-content">
              {courseData.includes && courseData.includes.map((item, idx) => (
                <div key={idx} className="highlight-row">
                  <Check size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="course-trust-badges">
              <div className="trust-badge">
                <Award size={20} />
                <span>Verified Curriculum</span>
              </div>
              <div className="trust-badge">
                <ShieldCheck size={20} />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container course-info-grid">
        <div className="course-main-left">
          {/* About Track */}
          <section className="about-track-card">
            <div className="card-accent-line"></div>
            <h2 className="section-heading">Program Overview</h2>
            <p className="track-desc">{courseData.about || courseData.description}</p>
            
            {courseData.learningOutcomes && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  Key Learning Outcomes
                </h3>
                <div className="outcome-checks">
                  {courseData.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="check-box">
                      <CheckCircle2 size={18} color="#10b981" /> {outcome}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Flagship 7-Step Workflow (Special Feature for Forward Deployed AI Engineer) */}
          {courseData.flagship && courseData.workflowSteps && (
            <section className="flagship-workflow-full-section">
              <div className="workflow-section-header">
                <div className="badge-wrapper">
                  <Sparkles size={16} color="#ec4899" />
                  <span>Core Methodology</span>
                </div>
                <h2>The 7-Step Forward Deployed Engineering Workflow</h2>
                <p>
                  Master the end-to-end framework used by senior applied AI engineers to transition from business requirement to scalable production deployment.
                </p>
              </div>

              <div className="workflow-steps-vertical">
                {courseData.workflowSteps.map((step) => (
                  <div key={step.step} className="workflow-step-card">
                    <div className="step-number-bubble">{step.step}</div>
                    <div className="step-body">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Syllabus */}
          <section className="curriculum-container-v2">
            <div className="syllabus-header-mini">
              <h2 className="section-heading">Detailed Curriculum Modules</h2>
              <p className="syllabus-meta">
                {courseData.syllabus ? courseData.syllabus.length : 0} Comprehensive Modules
              </p>
            </div>

            <div className="syllabus-stack">
              {courseData.syllabus && courseData.syllabus.map((module, modIdx) => (
                <div 
                  key={modIdx} 
                  className={`module-accordion ${activeAccordion === modIdx ? "expanded" : ""}`}
                >
                  <div 
                    className="accordion-header" 
                    onClick={() => toggleAccordion(modIdx)}
                  >
                    <div className="header-left">
                      <span className="mod-count">{modIdx + 1}</span>
                      <span className="mod-name">{module.title}</span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`chev-icon ${activeAccordion === modIdx ? "rotate" : ""}`} 
                    />
                  </div>

                  {activeAccordion === modIdx && (
                    <div className="accordion-content">
                      <div className="content-pad">
                        <ul>
                          {module.content.map((topic, topIdx) => (
                            <li key={topIdx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          {courseData.projects && (
            <section className="practical-projects-card">
              <h2 className="section-heading">
                <Code2 size={22} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--primary)' }} />
                Real-World Capstone Projects
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Build production-ready deliverables designed to demonstrate your practical technical mastery to engineering hiring teams.
              </p>
              <div className="projects-grid-mini">
                {(Array.isArray(courseData.projects) ? courseData.projects : [courseData.projects]).map((proj, pIdx) => (
                  <div key={pIdx} className="project-pill-item">
                    <div className="project-bullet">0{pIdx + 1}</div>
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sticky Sidebar */}
        <div className="course-main-right">
          <div className="career-support-sticky">
            <div className="support-badge">
              <Award size={20} />
              <span>Career Services</span>
            </div>
            <h3>Interview & Industry Ready</h3>
            <p>
              Our curriculum is designed to help you pass technical rounds with confidence,
              focused on modern engineering standards and direct mentor accountability.
            </p>
            <ul className="success-roadmap">
              <li>
                <Target size={16} /> Technical Architecture Drills
              </li>
              <li>
                <Zap size={16} /> Live Coding & System Design
              </li>
              <li>
                <Award size={16} /> Verified Portfolio Capstone
              </li>
            </ul>
            <Link to={enquiryUrl} className="cta-prime-colorful">
              <MessageSquare size={18} style={{ marginRight: '6px' }} />
              Enquire for Batch Details
            </Link>
          </div>

          <div className="prereq-small-box">
            <BookOpen size={18} />
            <div>
              <h4>Prerequisites:</h4>
              <p>{courseData.prerequisites || "Open to all learners"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
