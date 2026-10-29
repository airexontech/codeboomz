import React from 'react';
import { PARTNERS } from '../data/partnersData';

export default function Partners() {
  return (
    <div className="container mb-8">
      <div className="stats-section">
        <h2 className="stats-title">Our Students Work At</h2>
        <p className="stats-subtitle">
          Join a community of achievers. Our graduates are highly sought after and have
          successfully secured positions at over <strong>300+</strong> top-tier tech companies
          globally.
        </p>
        <div className="companies-grid">
          {PARTNERS.map((partner, index) => (
            <div key={index} className="company-logo-wrapper" title={partner.name}>
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
