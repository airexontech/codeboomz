import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';

export default function Testimonials() {
  const renderStars = (rating, color) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full" style={{ color }}>
          ★
        </span>
      );
    }
    if (half) {
      stars.push(
        <span
          key="half"
          className="star half"
          style={{
            background: `linear-gradient(90deg, ${color} 50%, #e2e8f0 50%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          ★
        </span>
      );
    }
    const empty = 5 - Math.ceil(rating);
    for (let i = 0; i < empty; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty" style={{ color: "#e2e8f0" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="section" style={{ background: "var(--bg-secondary)", padding: "2rem 0 4rem" }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Student Success Stories</h2>
          <p className="section-subtitle">
            Hear what our learners have to say about their experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{ "--accent-color": item.color }}
            >
              <div className="card-border-animation"></div>
              <div className="quote-icon" style={{ color: item.color, opacity: 0.2 }}>
                “
              </div>
              <p className="testimonial-text">{item.content}</p>
              <div className="stars-container">
                {renderStars(item.rating, item.color)}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: item.color }}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: item.color }}>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
