import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, Search, MessageSquare, ArrowDown, 
  Sparkles, Layers, Shield, Cpu, Database, Cloud 
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { COURSES, CATEGORIES } from '../data/coursesData';

const categoryIcons = {
  "software-development": <Layers size={18} />,
  "ai-machine-learning": <Cpu size={18} />,
  "data-analytics": <Database size={18} />,
  "cloud-devops": <Cloud size={18} />,
  "cybersecurity-quality": <Shield size={18} />
};

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const catalogRef = useRef(null);

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter logic
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.technologies && course.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesCategory = 
      selectedCategory === 'all' || course.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="courses-page-redesign">
      {/* Premium Hero Section */}
      <section className="courses-hero-premium">
        <div className="courses-hero-glow"></div>
        <div className="container courses-hero-inner">
          <span className="hero-badge-pill">
            <Sparkles size={14} style={{ marginRight: '6px' }} />
            New Industry Curriculum 2026
          </span>
          <h1 className="courses-hero-headline">
            Build the Skills. <br />
            <span className="highlight-gradient">Create the Future.</span>
          </h1>
          <p className="courses-hero-subtext">
            Industry-focused technology programs in Full Stack Development, AI,
            Data Science, Cloud, and Cybersecurity.
          </p>

          <div className="courses-hero-cta-row">
            <button 
              type="button" 
              onClick={scrollToCatalog}
              className="btn btn-primary"
            >
              Explore Courses <ArrowDown size={18} style={{ marginLeft: '8px' }} />
            </button>
            <Link to="/contact" className="btn btn-outline">
              <MessageSquare size={18} style={{ marginRight: '8px' }} />
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog Main Body */}
      <div className="container catalog-main-body" ref={catalogRef}>
        {/* Search & Category Filter Navigation */}
        <div className="catalog-toolbar">
          <div className="catalog-search-wrapper">
            <Search size={18} className="search-icon-left" />
            <input
              type="text"
              placeholder="Search by technology (e.g. Python, Docker, Spring Boot, RAG)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="catalog-search-input"
            />
            {searchTerm && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>

          <div className="category-tabs-row">
            <button
              type="button"
              className={`cat-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Programs ({COURSES.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = COURSES.filter(c => c.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`cat-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {categoryIcons[cat.id]}
                  <span>{cat.name} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Grouped by Categories (When viewing All and no search) */}
        {selectedCategory === 'all' && !searchTerm ? (
          <div className="categories-sections-stack">
            {CATEGORIES.map((category) => {
              const catCourses = COURSES.filter((c) => c.categoryId === category.id);
              if (catCourses.length === 0) return null;

              return (
                <section key={category.id} className="category-course-section">
                  <div className="category-section-header">
                    <div className="cat-header-icon-wrapper">
                      {categoryIcons[category.id]}
                    </div>
                    <div>
                      <h2 className="cat-section-heading">{category.heading}</h2>
                      <p className="cat-section-intro">{category.intro}</p>
                    </div>
                  </div>

                  <div className="courses-cards-grid">
                    {catCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* Display Filtered / Searched Grid */
          <div className="filtered-results-container">
            {filteredCourses.length > 0 ? (
              <div className="courses-cards-grid">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="no-courses-found">
                <h3>No courses found matching "{searchTerm}"</h3>
                <p>Try searching for a different keyword or reset the category filter.</p>
                <button
                  type="button"
                  onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                  className="btn btn-outline"
                  style={{ marginTop: '1rem' }}
                >
                  View All Programs
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Advisory Banner */}
      <section className="courses-consultation-banner">
        <div className="container consultation-inner">
          <div className="consultation-text">
            <h3>Not sure which program matches your goals?</h3>
            <p>
              Schedule a 1-on-1 counseling session with our senior engineering mentors. We will review your
              background and design a customized learning roadmap.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Book Career Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
