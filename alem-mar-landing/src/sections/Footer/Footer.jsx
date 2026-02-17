// src/sections/Footer/Footer.jsx
import React from 'react';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Aqui você pode adicionar a lógica para salvar o email
    alert(`Obrigado por se inscrever! Enviaremos novidades para ${email}`);
    e.target.reset();
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">Alem Mar</span>
              <span className="logo-slogan">Cada destino, uma história.</span>
            </div>
            <p className="footer-description">
              Especialistas em roteiros personalizados pelo litoral nordestino. 
              Transformamos sua viagem em uma experiência inesquecível.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+5511999999999">(61) 99699-8990</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:contato@alemmar.com">contato@alemmar.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Arembebe - BA</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4 className="links-title">Destinos</h4>
              <ul>
                <li><a href="#destinations">Bahia</a></li>
                <li><a href="#destinations">Ceará</a></li>
                <li><a href="#destinations">Piauí</a></li>
                <li><a href="#destinations">Pernambuco</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-title">Sobre nós</h4>
              <ul>
                <li><a href="#about">Quem somos</a></li>
                <li><a href="#differentials">Diferenciais</a></li>
                <li><a href="#testimonials">Depoimentos</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-title">Suporte</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Políticas de cancelamento</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h4 className="social-title">Siga nossas aventuras</h4>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <span className="social-icon">📸</span>
              <span>@alemmar.viagens</span>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <span className="social-icon">👍</span>
              <span>/alemmar.viagens</span>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <span className="social-icon">▶️</span>
              <span>Alem Mar Viagens</span>
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <span className="social-icon">📱</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Alem Mar Viagens. Todos os direitos reservados.
          </div>
          <div className="footer-payments">
            <span className="payment-icon">💳 Visa</span>
            <span className="payment-icon">💳 Mastercard</span>
            <span className="payment-icon">💳 Amex</span>
            <span className="payment-icon">💳 Pix</span>
            <span className="payment-icon">📱 Parcelamento</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;