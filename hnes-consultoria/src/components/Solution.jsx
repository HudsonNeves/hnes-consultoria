import React from 'react'
import './Solution.css'

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="solution-content">
          <h2 className="solution-title">A HNES é a parceira que seu negócio precisa</h2>
          <div className="solution-features">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <div>
                <h3>Estratégia Personalizada</h3>
                <p>Cada negócio é único. Criamos soluções sob medida para seus desafios específicos.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div>
                <h3>Resultados Rápidos</h3>
                <p>Metodologia comprovada que entrega resultados tangíveis em menos de 30 dias.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">💡</div>
              <div>
                <h3>Tecnologia Acessível</h3>
                <p>Soluções profissionais com preços justos para pequenas empresas.</p>
              </div>
            </div>
          </div>
          <div className="solution-quote">
            <p>"Não vendemos tecnologia, vendemos crescimento. Nossa missão é fazer seu negócio decolar com o poder das soluções digitais."</p>
            <span>- Hudson, Fundador da HNES</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution