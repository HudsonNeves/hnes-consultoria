import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforme seu negócio com <span className="highlight">soluções digitais</span> que realmente funcionam
          </h1>
          <p className="hero-subtitle">
            A HNES Consultoria ajuda pequenas empresas a crescerem com sites profissionais, sistemas sob medida e treinamentos personalizados. Simples, eficiente e com resultados reais.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn-primary">
              Quero Crescer Meu Negócio
            </button>
            <button className="btn-secondary">
              Conheça Nossos Serviços
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Clientes Atendidos</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfação</span>
            </div>
            <div className="stat">
              <span className="stat-number">3x</span>
              <span className="stat-label">Mais Eficiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero