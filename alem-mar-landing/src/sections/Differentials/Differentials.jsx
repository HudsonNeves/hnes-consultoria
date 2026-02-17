// src/sections/Differentials/Differentials.jsx
import React from 'react';
import Container from '../../components/Container/Container';
import './Differentials.css';

const DifferentialCard = ({ icon, title, description }) => (
  <div className="differential-card">
    <div className="differential-icon">{icon}</div>
    <h3 className="differential-title">{title}</h3>
    <p className="differential-description">{description}</p>
  </div>
);

const Differentials = () => {
  const differentials = [
    {
      icon: "🏖️",
      title: "Roteiros Personalizados",
      description: "Criamos experiências únicas baseadas no seu estilo de viagem, desde aventura até relaxamento."
    },
    {
      icon: "🌴",
      title: "Destinos Exclusivos",
      description: "Acesso a praias secretas, pousadas charmosas e experiências autênticas no litoral nordestino."
    },
    {
      icon: "🍽️",
      title: "Gastronomia Local",
      description: "Incluímos experiências gastronômicas com o melhor da culinária baiana, cearense e pernambucana."
    },
    {
      icon: "🚗",
      title: "Transfer Premium",
      describe: "Transporte confortável e seguro, com veículos preparados para explorar o litoral."
    },
    {
      icon: "📸",
      title: "Fotos Profissionais",
      description: "Sessão de fotos inclusa para registrar seus melhores momentos à beira-mar."
    },
    {
      icon: "🎯",
      title: "Atendimento Local",
      description: "Suporte 24h com guias locais que conhecem cada cantinho do Nordeste."
    }
  ];

  return (
    <section id="differentials" className="differentials">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Por que viajar com a Alem Mar?</h2>
          <p className="section-subtitle">
            Mais de 10 anos explorando o litoral nordestino para oferecer o melhor da região
          </p>
        </div>

        <div className="differentials-grid">
          {differentials.map((diff, index) => (
            <DifferentialCard key={index} {...diff} />
          ))}
        </div>

        <div className="stats-banner">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Praias Paradisíacas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Viajantes Felizes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Estados Nordestinos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Anos de Experiência</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Differentials;