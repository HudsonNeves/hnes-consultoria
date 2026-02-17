// src/sections/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Ana Paula Santos",
      location: "Salvador - BA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Minha lua de mel em Jericoacoara foi simplesmente perfeita! A Alem Mar cuidou de cada detalhe, desde o transfer até o jantar romântico na duna. Voltamos com fotos incríveis e histórias para contar.",
      rating: 5,
      destination: "Jericoacoara - CE",
      date: "Janeiro/2026"
    },
    {
      id: 2,
      name: "Carlos Eduardo Menezes",
      location: "Recife - PE",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Viajar com a Alem Mar pelo Delta do Parnaíba foi uma experiência única. Conhecemos lugares que nem os guias tradicionais mostram. O passeio de barco ao pôr do sol é inesquecível!",
      rating: 5,
      destination: "Delta do Parnaíba - PI",
      date: "Dezembro/2025"
    },
    {
      id: 3,
      name: "Mariana Costa",
      location: "Fortaleza - CE",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Já viajei para Porto de Galinhas algumas vezes, mas com o roteiro personalizado da Alem Mar foi totalmente diferente. Conheci piscinas naturais secretas e restaurantes incríveis que só os locais conhecem.",
      rating: 5,
      destination: "Porto de Galinhas - PE",
      date: "Fevereiro/2026"
    },
    {
      id: 4,
      name: "Roberto Almeida",
      location: "São Paulo - SP",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "Minha família inteira se apaixonou por Morro de São Paulo. As crianças adoraram a tirolesa e nós aproveitamos cada pôr do sol na Quarta Praia. A equipe da Alem Mar nos acompanhou em tudo, com muito cuidado e atenção.",
      rating: 5,
      destination: "Morro de São Paulo - BA",
      date: "Outubro/2025"
    },
    {
      id: 5,
      name: "Juliana Fernandes",
      location: "Belo Horizonte - MG",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Fizemos um roteiro combinando Canoa Quebrada e Jericoacoara. A organização foi impecável! As pousadas escolhidas eram charmosas e bem localizadas. Com certeza viajarei mais vezes com eles.",
      rating: 5,
      destination: "Ceará",
      date: "Novembro/2025"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Quem viaja, volta com histórias</h2>
          <p className="section-subtitle">
            Mais de 1000 viajantes já vivenciaram o melhor do litoral nordestino com a gente
          </p>
        </div>

        <div className="testimonials-carousel">
          <button 
            className="carousel-arrow prev" 
            onClick={handlePrev}
            aria-label="Depoimento anterior"
          >
            ←
          </button>

          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  opacity: index === activeIndex ? 1 : 0,
                  visibility: index === activeIndex ? 'visible' : 'hidden'
                }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                      loading="lazy"
                    />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-location">{testimonial.location}</p>
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-quote">
                    <span className="quote-mark">"</span>
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                  
                  <div className="testimonial-footer">
                    <span className="testimonial-destination">
                      🌊 {testimonial.destination}
                    </span>
                    <span className="testimonial-date">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-arrow next" 
            onClick={handleNext}
            aria-label="Próximo depoimento"
          >
            →
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-cta">
          <p className="cta-text">Junte-se a quem já viveu essa experiência</p>
          <Button variant="primary" size="large">
            Ver todos os depoimentos
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;