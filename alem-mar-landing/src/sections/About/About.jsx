// src/sections/About/About.jsx
import React from 'react';
import Container from '../../components/Container/Container';
import './About.css';
import FrotaImage from '../../assets/fronta.png'; // Importando a imagem da frota

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <span className="about-badge">Nossa História</span>
            <h2 className="about-title">
              Mais de uma década<br />
              <span>explorando o litoral nordestino</span>
            </h2>
            
            <div className="about-description">
              <p>
                Nascemos do amor pelas praias brasileiras e da vontade de mostrar 
                ao mundo os tesouros escondidos no litoral do Nordeste. Cada vila 
                de pescadores, cada coqueiral, cada pôr do sol nas dunas - tudo isso 
                faz parte da nossa história.
              </p>
              <p>
                Hoje, somos especialistas em criar roteiros personalizados na 
                <strong> Bahia, Ceará, Piauí e Pernambuco</strong>. Conhecemos cada 
                estrada de terra, cada pousada charmosa e cada cantinho paradisíaco 
                que só quem é da região conhece.
              </p>
              <p>
                <em>"Cada destino, uma história"</em> não é apenas um slogan. É o 
                nosso compromisso de transformar sua viagem em uma experiência única, 
                com o calor humano e a autenticidade que só o Nordeste tem.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🌊</span>
                <div>
                  <h4>Guardiões do Litoral</h4>
                  <p>Trabalhamos com turismo sustentável, preservando as belezas naturais</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <div>
                  <h4>Conexão Local</h4>
                  <p>Parceria com comunidades locais para experiências autênticas</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🚌</span>
                <div>
                  <h4>Frota Própria</h4>
                  <p>Contamos com frota própria de vans e ônibus de turismo padrão executivo para garantir conforto e segurança em sua viagem.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={FrotaImage} alt="Frota" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;