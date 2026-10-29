import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COURSES } from '../data/coursesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  };

  const toggleCoursesDropdown = (e) => {
    e.preventDefault();
    setCoursesDropdownOpen(!coursesDropdownOpen);
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');
  const isCoursesActive = location.pathname.startsWith('/courses') ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Code Boomz" className="nav-logo-img" />
          <span>Code Boomz</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>
            About Us
          </Link>
          
          <div 
            className={`dropdown courses-dropdown-parent ${coursesDropdownOpen ? 'is-open' : ''}`}
            ref={dropdownRef}
          >
            <button 
              type="button"
              className={`dropdown-btn ${isCoursesActive}`}
              onClick={toggleCoursesDropdown}
            >
              Courses
            </button>
            <div className={`dropdown-content courses-megamenu ${coursesDropdownOpen ? 'dropdown-visible' : ''}`}>
              {COURSES.map((course) => (
                <Link
                  key={course.id}
                  to={course.link}
                  className="megamenu-course-card"
                  onClick={closeMobileMenu}
                >
                  <span className="course-icon">
                    {course.icon && (
                      <img src={course.icon} alt={course.title} />
                    )}
                  </span>
                  <span className="course-name">{course.name || course.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>
            Contact
          </Link>

          <Link to="/courses" className="btn btn-primary" onClick={closeMobileMenu}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
