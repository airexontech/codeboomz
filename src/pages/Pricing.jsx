import React from 'react';
import { Link } from 'react-router-dom';
import { Check, BookOpen, Zap, Award } from 'lucide-react';
import { PRICING_PLANS } from '../data/pricingData';

const pricingIconMap = {
  BookOpen: BookOpen,
  Zap: Zap,
  Award: Award
};

export default function Pricing() {
  return (
    <div className="section container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="text-center mb-12">
        <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Simple, Transparent <span style={{ color: "var(--primary)" }}>Pricing</span>
        </h1>
        <p className="lead text-muted" style={{ maxWidth: "700px", margin: "0 auto", color: "var(--text-secondary)" }}>
          Choose the perfect plan for your learning journey. No hidden fees.
        </p>
      </div>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
          padding: "1rem 0"
        }}
      >
        {PRICING_PLANS.map((plan, index) => {
          const IconComp = pricingIconMap[plan.iconName] || BookOpen;
          return (
            <div
              key={index}
              style={{
                position: "relative",
                background: "var(--bg-card)",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                border: plan.highlight ? "2px solid var(--primary)" : "1px solid #e2e8f0",
                boxShadow: plan.highlight 
                  ? "0 25px 50px -12px rgba(124, 58, 237, 0.25)" 
                  : "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                transform: plan.highlight ? "scale(1.02)" : "none",
                zIndex: plan.highlight ? 10 : 1,
                transition: "transform 0.3s ease"
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "var(--primary)",
                    color: "white",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "2rem",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.4)",
                    whiteSpace: "nowrap"
                  }}
                >
                  {plan.tag}
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: plan.highlight ? "var(--primary)" : "rgba(124, 58, 237, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}
                >
                  <IconComp size={24} color={plan.highlight ? "#fff" : "#7c3aed"} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                  {plan.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", minHeight: "48px" }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--text-primary)" }}>
                  ₹{plan.price}
                </span>
              </div>

              <ul style={{ marginBottom: "2.5rem", flex: 1, listStyle: "none", padding: 0 }}>
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      color: "var(--text-secondary)"
                    }}
                  >
                    <Check
                      size={18}
                      color={plan.highlight ? "var(--primary)" : "var(--text-secondary)"}
                      style={{ marginTop: "3px", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: "0.95rem" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?plan=${encodeURIComponent(plan.title)}`}
                className={plan.highlight ? "btn btn-primary" : "btn btn-outline"}
                style={{ width: "100%", padding: "1rem", textAlign: "center", textDecoration: "none" }}
              >
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
