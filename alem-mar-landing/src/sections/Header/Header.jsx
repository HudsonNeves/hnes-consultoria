// src/sections/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import './Header.css';
import logo from '../../assets/1000346127.png'; // Corrigindo o caminho da logo para o arquivo correto

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="Alem Mar Logo" className="logo-image" />
          </div>

          <button 
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')} className="nav-link">Quem Somos</button></li>
              <li><button onClick={() => scrollToSection('destinations')} className="nav-link">Destinos</button></li>
              <li><button onClick={() => scrollToSection('differentials')} className="nav-link">Diferenciais</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="nav-link">Depoimentos</button></li>
              <li>
                <Button 
                  size="small" 
                  onClick={() => scrollToSection('cta')}
                >
                  Falar com especialista
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;