import React from 'react';
import { Compass, Zap, Code2, CheckCircle } from 'lucide-react';
import { PATH_STEPS } from '../data/featuresData';

const stepIconMap = {
  Compass: Compass,
  Zap: Zap,
  Code2: Code2,
  CheckCircle: CheckCircle
};

export default function Steps() {
  return (
    <div className="section container">
      <div 
        className="steps-wrapper" 
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "3rem",
          padding: "4rem 3rem",
          border: "1px solid rgba(99, 102, 241, 0.1)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="text-center mb-12">
          <h2 className="section-title">The Path to Mastery</h2>
          <p className="section-subtitle">
            A streamlined 4-step process designed to take you from beginner to professional.
          </p>
        </div>

        <div className="steps-container">
          {PATH_STEPS.map((step, index) => {
            const IconComp = stepIconMap[step.iconName] || Compass;
            return (
              <div 
                key={index} 
                className="step-item" 
                style={{ "--step-color": step.color, "--step-color-soft": step.shadowColor }}
              >
                <div className="step-icon">
                  <IconComp size={40} />
                  <div className="step-number">{index + 1}</div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
