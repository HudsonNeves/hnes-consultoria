import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>HNES</h1>
          <span>Consultoria</span>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('hero')}>Início</button></li>
            <li><button onClick={() => scrollToSection('services')}>Serviços</button></li>
            <li><button onClick={() => scrollToSection('process')}>Processo</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
          </ul>
          <button className="nav-cta" onClick={() => scrollToSection('contact')}>
            Falar com Especialista
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header