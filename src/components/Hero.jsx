import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero">
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url('/assets/HeroSection-C9gw-Eft.jpg')` }}
      >
        <div className="code-pattern"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Next-Gen Tech Education
          </span>
          <h1>
            Elevate Your Skills with the <br />
            <span className="highlight">Best in Online Education.</span>
          </h1>
          <p>
            At Code Boomz, we provide an unmatched learning experience. Master top
            technologies with flexible online paths designed for your ambition.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">
              Explore Programs <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link to="/about" className="btn btn-outline">
              The Code Boomz Story
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <Code size={32} color="#22d3ee" />
            <div className="card-text">
              <span className="line w-75"></span>
              <span className="line w-50"></span>
            </div>
          </div>

          <div className="floating-card card-2">
            <Terminal size={32} color="#3b82f6" />
            <div className="card-text">
              <span className="line w-75"></span>
              <span className="line w-50"></span>
            </div>
          </div>

          <div className="floating-card card-3">
            <Sparkles size={32} color="#a855f7" />
            <div className="card-text">
              <span className="line w-75"></span>
              <span className="line w-50"></span>
            </div>
          </div>

          <div className="code-block">
            <div className="code-block-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-filename">career.js</span>
            </div>
            <pre>
              <code>
                <span className="keyword">function</span> <span className="function">startCareer</span>() &#123;<br />
                &nbsp;&nbsp;<span className="keyword">const</span> <span className="variable">skills</span> = [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'React'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'Node.js'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'Python'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'Java'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'Sales Force'</span><br />
                &nbsp;&nbsp;];<br />
                &nbsp;&nbsp;<span className="keyword">return</span> <span className="variable">skills</span>.<span className="function">map</span>(<span className="variable">master</span>);<br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
