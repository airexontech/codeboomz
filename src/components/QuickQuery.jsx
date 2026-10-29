import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function QuickQuery() {
  const phone = "918328083619";

  return (
    <section className="quick-query-section">
      <div className="container">
        <div className="query-card">
          <div className="query-content">
            <div className="query-badge">Instant Support</div>
            <h2>
              Have a <span className="highlight">Quick Query?</span>
            </h2>
            <p>
              Don't wait! Get your doubts cleared instantly through WhatsApp or a direct call.
              We are here to help you choose the right path.
            </p>
            <div className="query-actions">
              <a
                href={`https://api.whatsapp.com/send?phone=${phone}&text=Hi Code Boomz! I have a query regarding the courses.`}
                className="query-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a href={`tel:+${phone}`} className="query-btn call">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          <div className="query-visual">
            <div className="pulse-container">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-icon">
                <MessageCircle size={40} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
