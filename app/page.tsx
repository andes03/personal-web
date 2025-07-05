// HomePage.tsx
'use client';

import React from 'react';
import Header from '@/app/components/Header';
import HomeSection from '@/app/components/HomeSection';
import AboutMe from '@/app/components/AboutMe';
import Skills from '@/app/components/Skills';
import Portfolio from '@/app/components/Portfolio';
import Certificate from '@/app/components/Certificate';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen text-white scroll-smooth">
      {/* Header dengan fixed positioning */}
      <Header />

      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="certificate">
          <Certificate />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}