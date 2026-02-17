// src/sections/FinalCTA/FinalCTA.jsx
import React from 'react';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import './FinalCTA.css';

const FinalCTA = () => {
  const handleSpecialistClick = () => {
    // Aqui você pode adicionar a lógica para abrir um formulário ou WhatsApp
    window.open('https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20viagens%20para%20o%20Nordeste', '_blank');
  };

  return (
    <section id="cta" className="final-cta">
      <div className="cta-background">
        <div className="cta-overlay"></div>
        <Container>
          <div className="cta-content">
            <h2 className="cta-title">
              Sua próxima história<br />
              <span>começa aqui.</span>
            </h2>
            
            <p className="cta-description">
              Deixe que a gente cuide de todos os detalhes enquanto você<br />
              só precisa se preocupar em fazer as malas e aproveitar.
            </p>

            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Roteiros personalizados</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Melhor preço garantido</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Suporte 24h durante a viagem</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Pagamento facilitado</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Button 
                variant="primary" 
                size="large" 
                onClick={handleSpecialistClick}
                className="cta-button"
              >
                Falar com um especialista
              </Button>
              
              <Button 
                variant="outline" 
                size="large" 
                className="cta-button-secondary"
              >
                Ver pacotes
              </Button>
            </div>

            <div className="cta-guarantee">
              <span className="guarantee-icon">🔒</span>
              <p>Consulta gratuita · Sem compromisso · Atendimento humanizado</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FinalCTA;