// src/sections/Hero/Hero.jsx
import React from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import './Hero.css';

const Hero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <Container>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Cada destino,</span>
            <span className="title-line">uma história.</span>
          </h1>
          <p className="hero-subtitle">
            Transformamos viagens em experiências inesquecíveis.
          </p>
          <Button 
            size="large" 
            onClick={scrollToCTA}
            className="hero-cta"
          >
            Planejar minha viagem
          </Button>
        </div>
      </Container>
      <div className="scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;