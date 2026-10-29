import React from 'react';
import { 
  Users, Clock, BookOpen, Award, 
  Briefcase, Headphones, Target, Code 
} from 'lucide-react';
import { FEATURES } from '../data/featuresData';

const iconMap = {
  Users: Users,
  Clock: Clock,
  BookOpen: BookOpen,
  Award: Award,
  Briefcase: Briefcase,
  Headphones: Headphones,
  Target: Target,
  Code: Code
};

export default function Features() {
  return (
    <div className="section container features-section">
      <div className="text-center mb-8">
        <h2 className="section-title">The Code Boomz Advantage</h2>
        <p className="section-subtitle">
          We don't just teach code; we build careers through a premium, result-oriented learning ecosystem.
        </p>
      </div>

      <div className="features-grid">
        {FEATURES.map((item, index) => {
          const IconComponent = iconMap[item.iconName] || Users;
          return (
            <div 
              key={index} 
              className={`feature-card ${item.image ? "feature-card-bg" : ""}`}
            >
              {item.image && (
                <>
                  <div className="feature-bg-overlay"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="feature-bg-image" 
                    loading="lazy" 
                  />
                </>
              )}
              <div className="feature-content-wrapper">
                <div 
                  className="feature-icon" 
                  style={item.image ? { background: "rgba(255, 255, 255, 0.2)" } : {}}
                >
                  <IconComponent size={32} color="#fff" />
                </div>
                <h3 style={item.image ? { color: "white" } : {}}>{item.title}</h3>
                <p style={item.image ? { color: "rgba(255, 255, 255, 0.9)" } : {}}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
