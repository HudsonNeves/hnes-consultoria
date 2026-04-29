import React from 'react'
import './Problems.css'

const Problems = () => {
  const problems = [
    {
      icon: '📱',
      title: 'Sem presença digital profissional',
      description: 'Seu negócio não é encontrado online ou tem um site que não gera resultados?'
    },
    {
      icon: '⚙️',
      title: 'Processos manuais e ineficientes',
      description: 'Perde tempo com tarefas repetitivas que poderiam ser automatizadas?'
    },
    {
      icon: '📊',
      title: 'Dificuldade em gerenciar informações',
      description: 'Dados importantes se perdem em planilhas e documentos desconectados?'
    },
    {
      icon: '🎯',
      title: 'Sem equipe de tecnologia',
      description: 'Não tem quem cuide da parte digital do seu negócio?'
    }
  ]

  return (
    <section id="problems" className="problems">
      <div className="container">
        <h2 className="section-title">Seu negócio enfrenta esses desafios?</h2>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems