import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import Steps from '../components/Steps';
import QuickQuery from '../components/QuickQuery';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <Steps />
      <QuickQuery />
      <Testimonials />
    </main>
  );
}
