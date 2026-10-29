import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import BeBeauty from './pages/BeBeauty';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            
            {/* 10 New Programs (with direct route matches) */}
            <Route path="/courses/java-full-stack-ai-cloud" element={<CourseDetail courseSlug="java-full-stack-ai-cloud" />} />
            <Route path="/courses/python-full-stack-ai-ml" element={<CourseDetail courseSlug="python-full-stack-ai-ml" />} />
            <Route path="/courses/ai-powered-software-development" element={<CourseDetail courseSlug="ai-powered-software-development" />} />
            <Route path="/courses/forward-deployed-ai-engineer" element={<CourseDetail courseSlug="forward-deployed-ai-engineer" />} />
            <Route path="/courses/generative-ai-agentic-ai" element={<CourseDetail courseSlug="generative-ai-agentic-ai" />} />
            <Route path="/courses/ai-machine-learning-engineering" element={<CourseDetail courseSlug="ai-machine-learning-engineering" />} />
            <Route path="/courses/data-science-ai-ml" element={<CourseDetail courseSlug="data-science-ai-ml" />} />
            <Route path="/courses/data-analytics-bi" element={<CourseDetail courseSlug="data-analytics-bi" />} />
            <Route path="/courses/cloud-computing-devops" element={<CourseDetail courseSlug="cloud-computing-devops" />} />
            <Route path="/courses/cybersecurity-ethical-hacking" element={<CourseDetail courseSlug="cybersecurity-ethical-hacking" />} />

            {/* Backward-Compatible Route Aliases */}
            <Route path="/courses/java-full-stack" element={<CourseDetail courseSlug="java-full-stack-ai-cloud" />} />
            <Route path="/courses/python-full-stack" element={<CourseDetail courseSlug="python-full-stack-ai-ml" />} />
            <Route path="/courses/genai" element={<CourseDetail courseSlug="generative-ai-agentic-ai" />} />
            <Route path="/courses/data-science" element={<CourseDetail courseSlug="data-science-ai-ml" />} />
            <Route path="/courses/cyber-security" element={<CourseDetail courseSlug="cybersecurity-ethical-hacking" />} />

            {/* Dynamic Route Handler for any slug */}
            <Route path="/courses/:slug" element={<CourseDetail />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/be-beauty" element={<BeBeauty />} />

            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
