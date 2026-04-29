import React from 'react'
import './Differentials.css'

const Differentials = () => {
  const differentials = [
    {
      icon: '🤝',
      title: 'Atendimento Personalizado',
      description: 'Você não é só mais um número. Trabalhamos junto com você em cada etapa do processo.',
      color: '#3498DB'
    },
    {
      icon: '📈',
      title: 'Foco em Resultado',
      description: 'Medimos o que importa: crescimento real do seu negócio, não apenas entregas técnicas.',
      color: '#2ECC71'
    },
    {
      icon: '🎨',
      title: 'Soluções Sob Medida',
      description: 'Nada de soluções prontas. Criamos exatamente o que seu negócio precisa.',
      color: '#E74C3C'
    }
  ]

  return (
    <section className="differentials">
      <div className="container">
        <h2>Por que escolher a HNES?</h2>
        <div className="differentials-grid">
          {differentials.map((item, index) => (
            <div key={index} className="differential-card">
              <div className="differential-icon" style={{ background: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials