import React from 'react'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Entendemos seu negócio, desafios e objetivos através de uma análise detalhada.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Desenvolvemos uma estratégia personalizada com cronograma e metas claras.',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description: 'Executamos a solução com metodologia ágil e comunicação transparente.',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Entrega e Suporte',
      description: 'Implementamos, treinamos sua equipe e oferecemos suporte contínuo.',
      icon: '🚀'
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <h2>Como Transformamos Seu Negócio</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process