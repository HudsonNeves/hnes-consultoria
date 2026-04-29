import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Presença Digital',
      description: 'Sites profissionais, landing pages e estratégias para seu negócio ser encontrado online.',
      features: ['Sites responsivos', 'Otimização SEO', 'Landing pages de alta conversão']
    },
    {
      icon: '💻',
      title: 'Sistemas Sob Medida',
      description: 'Aplicações web e sistemas customizados para automatizar seus processos.',
      features: ['Sistemas personalizados', 'Automação de processos', 'Dashboards gerenciais']
    },
    {
      icon: '📚',
      title: 'Treinamentos Personalizados',
      description: 'Capacitação prática para sua equipe usar tecnologia a favor do negócio.',
      features: ['Treinamentos in company', 'Workshops práticos', 'Mentoria contínua']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Soluções Completas Para Seu Negócio</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="service-btn">Saiba Mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services