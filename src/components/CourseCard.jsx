import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CourseCard({ course }) {
  if (!course) return null;

  const {
    slug,
    title,
    description,
    category,
    technologies = [],
    coverImage,
    badge,
    flagship = false,
    workflowSteps = []
  } = course;

  const curriculumLink = `/courses/${slug}`;
  const enquiryLink = `/contact?course=${encodeURIComponent(title)}`;

  return (
    <div className={`new-course-card ${flagship ? 'flagship-card' : ''}`}>
      {/* Card Header Media */}
      <div className="card-media-wrapper">
        <img src={coverImage} alt={title} className="card-media-img" loading="lazy" />
        <div className="card-media-overlay"></div>
        {badge && (
          <span className={`card-badge-pill ${flagship ? 'flagship-badge' : ''}`}>
            {flagship && <Sparkles size={13} style={{ marginRight: '4px' }} />}
            {badge}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-content-area">
        <span className="card-category-label">{category}</span>
        <h3 className="card-heading">{title}</h3>
        <p className="card-summary">{description}</p>

        {/* Flagship 7-Step Workflow Box */}
        {flagship && workflowSteps.length > 0 && (
          <div className="flagship-workflow-banner">
            <div className="workflow-title">
              <CheckCircle2 size={15} color="#ec4899" />
              <span>Includes 7-Step Deployment Architecture:</span>
            </div>
            <div className="workflow-steps-pills">
              {workflowSteps.map((s) => (
                <span key={s.step} className="workflow-step-pill">
                  <strong>{s.step}.</strong> {s.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technology Tags (3-6 pills) */}
        <div className="tech-tags-container">
          {technologies.slice(0, 6).map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Dual Actions: View Curriculum & Enquire Now */}
        <div className="card-action-bar">
          <Link to={curriculumLink} className="action-btn view-curriculum-btn">
            View Curriculum <ArrowRight size={16} />
          </Link>
          <Link to={enquiryLink} className="action-btn enquire-now-btn" title={`Enquire about ${title}`}>
            <MessageSquare size={16} /> Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
