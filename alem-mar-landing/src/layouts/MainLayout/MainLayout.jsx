// src/layouts/MainLayout/MainLayout.jsx
import React from 'react';
import Header from '../../sections/Header/Header';
import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Destinations from '../../sections/Destinations/Destinations';
import Differentials from '../../sections/Differentials/Differentials';
import Testimonials from '../../sections/Testimonials/Testimonials';
import FinalCTA from '../../sections/FinalCTA/FinalCTA';
import Footer from '../../sections/Footer/Footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Differentials />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;