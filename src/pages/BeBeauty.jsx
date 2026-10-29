import React from 'react';

// BE BEAUTY Logo Vector
const BeBeautyLogo = ({ size = 200, color = "#c5a059" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))" }}
  >
    <path
      d={`M30 20 
         C 30 20, 35 15, 40 15 
         C 50 15, 55 25, 55 35 
         C 55 45, 45 50, 30 50
         C 45 50, 60 55, 60 70 
         C 60 85, 50 85, 40 85
         C 35 85, 30 80, 30 80
         L 30 20`}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d={`M55 35
         C 65 35, 75 35, 75 35
         M55 50
         C 70 50, 80 50, 80 53
         C 85 55, 85 60, 82 62
         C 80 64, 75 65, 60 65
         M50 80
         C 65 80, 75 80, 75 80`}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function BeBeauty() {
  return (
    <div className="brand-showcase">
      <header className="brand-header">
        <h1 className="brand-title">BE BEAUTY</h1>
        <p className="brand-tagline">Holistic Spa & Aesthetic Clinic</p>
      </header>

      <section className="logo-display">
        <div className="logo-container">
          <BeBeautyLogo size={400} />
        </div>
      </section>

      <div className="brand-concept">
        <h2 className="concept-title">Visible Transformation. Holistic Care.</h2>
        <p>
          BE Beauty represents the intersection of clinical precision and boutique wellness.
          Our identity is centered on the fluid connection between the body (B) and the facial
          profile (E), symbolizing a complete transformation. Designed for both men and women
          who seek professional, solution-based skin and hair care.
        </p>

        <div className="color-palette">
          <div
            className="color-swatch"
            style={{ backgroundColor: "#c5a059" }}
            title="Champagne Gold"
          ></div>
          <div
            className="color-swatch"
            style={{ backgroundColor: "#f5f5f0" }}
            title="Off White / Sand"
          ></div>
          <div
            className="color-swatch"
            style={{ backgroundColor: "#e8e2d9" }}
            title="Warm Nude"
          ></div>
          <div
            className="color-swatch"
            style={{ backgroundColor: "#2c2c2c" }}
            title="Deep Charcoal"
          ></div>
        </div>
      </div>

      <div className="mockup-grid">
        <div className="mockup-item">
          <BeBeautyLogo size={150} color="#2c2c2c" />
          <div className="mockup-overlay">Packaging Direction</div>
        </div>

        <div className="mockup-item" style={{ backgroundColor: "#c5a059" }}>
          <BeBeautyLogo size={150} color="#fff" />
          <div className="mockup-overlay" style={{ color: "#fff" }}>
            Metallic Gold Variant
          </div>
        </div>

        <div className="mockup-item">
          <div style={{ textAlign: "center" }}>
            <BeBeautyLogo size={80} />
            <p style={{ marginTop: "10px", fontSize: "12px", letterSpacing: "2px" }}>
              SPA STATIONERY
            </p>
          </div>
          <div className="mockup-overlay">Minimalist Collateral</div>
        </div>
      </div>
    </div>
  );
}
