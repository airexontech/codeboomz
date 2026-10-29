import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CourseDetailPage from '../components/CourseDetailPage';
import { getCourseBySlug } from '../data/coursesData';

export default function CourseDetail({ courseSlug }) {
  const { slug: paramSlug } = useParams();
  const location = useLocation();

  // Determine slug from prop, param, or pathname
  const activeSlug = 
    courseSlug || 
    paramSlug || 
    location.pathname.replace(/^\/courses\//, '').replace(/\/$/, '');

  const courseData = getCourseBySlug(activeSlug);

  return <CourseDetailPage courseData={courseData} />;
}
