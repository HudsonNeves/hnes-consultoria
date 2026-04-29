import React, { useState } from 'react'
import './CTA.css'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você integraria com um serviço de email ou API
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre as soluções da HNES Consultoria."
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Pronto para transformar seu negócio?</h2>
          <p>Fale com um especialista e descubra como podemos ajudar sua empresa a crescer com soluções digitais eficientes.</p>
          
          <div className="cta-options">
            <div className="cta-card">
              <div className="cta-icon">💬</div>
              <h3>WhatsApp Rápido</h3>
              <p>Resposta em até 1 hora útil</p>
              <button onClick={openWhatsApp} className="btn-whatsapp">
                Falar no WhatsApp
              </button>
            </div>
            
            <div className="cta-card">
              <div className="cta-icon">📧</div>
              <h3>Formulário Online</h3>
              <p>Respondemos em até 24h</p>
              <form onSubmit={handleSubmit} className="cta-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Conte sobre seu projeto..."
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="btn-submit">
                  Enviar Mensagem
                </button>
              </form>
              {isSubmitted && (
                <div className="success-message">
                  Mensagem enviada! Entraremos em contato em breve.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA