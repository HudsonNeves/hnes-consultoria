import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HNES Consultoria</h3>
            <p>Soluções digitais para pequenas empresas crescerem com tecnologia e estratégia.</p>
          </div>
          
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Início</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Serviços</button></li>
              <li><button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>Processo</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contato</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <p>📧 contato@hnesconsultoria.com</p>
            <p>📱 (61) 99675-0535</p>
            <p>📍 Brasília, DF</p>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} HNES Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer