// src/sections/Destinations/Destinations.jsx
import React from 'react';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import './Destinations.css';
import CostaDosCoqueiros from '../../assets/Costa dos Coqueiros - BA.webp';
import Imbassai from '../../assets/Imbassai-BA.jpg'; // Importando a imagem de Imbassaí
import ArembepeBahia from '../../assets/aerembepe-bahia.webp'; // Importando a imagem de Arembepe
import PortoDeGalinhas from '../../assets/Porto de Galinhas - PE.webp';
import CanoaQuebrada from '../../assets/Canoa Quebrada - CE.jpg';
import CasaDeCampo from '../../assets/casadecampo.png'; // Revertendo para a imagem anterior

const destinations = [
  {
    id: 1,
    name: 'Praia de Santo Antônio - BA', // Adicionado o estado BA ao nome
    description: 'Praias paradisíacas, coqueirais e piscinas naturais.',
    fullDescription: 'Um paraíso entre Salvador e o litoral norte, com águas cristalinas e muita cultura baiana.',
    image: CostaDosCoqueiros,
    price: 'Confira valores personalizados',
    state: 'Bahia',
    highlights: ['Piscinas naturais', 'Coqueirais', 'Culinária típica']
  },
  {
    id: 2,
    name: 'Imbassaí - BA',
    description: 'O paraíso entre o rio e o mar.',
    fullDescription: 'Um destino encantador na Bahia, onde o rio encontra o mar, cercado por belezas naturais.',
    image: Imbassai,
    price: 'Confira valores personalizados',
    state: 'Bahia', // Adicionado o estado BA
    highlights: ['Encontro do rio com o mar', 'Belezas naturais', 'Tranquilidade']
  },
  {
    id: 3,
    name: 'Casa de Temporada Praia de Arembepe - BA', // Alterado de Jericoacoara - CE
    description: 'Uma experiência única em uma casa de temporada à beira-mar.',
    fullDescription: 'Desfrute de momentos inesquecíveis em Arembepe, com conforto e vista para o mar.',
    image: CasaDeCampo, // Revertendo a imagem para a anterior
    price: 'Confira valores personalizados',
    state: 'Bahia',
    highlights: ['Vista para o mar', 'Conforto', 'Privacidade']
  },
  {
    id: 4,
    name: 'Porto de Galinhas - PE',
    description: 'Piscinas naturais e águas transparentes.',
    fullDescription: 'Famosa pelas piscinas naturais formadas entre corais, um espetáculo da natureza.',
    image: PortoDeGalinhas,
    price: 'Confira valores personalizados',
    state: 'Pernambuco',
    highlights: ['Piscinas naturais', 'Buggy', 'Estrutura completa']
  },
  {
    id: 5,
    name: 'Praia de Arembepe - BA', // Substituindo Morro de São Paulo por Arembepe
    description: 'Um refúgio encantador com praias paradisíacas.',
    fullDescription: 'Arembepe é um destino único na Bahia, conhecido por suas praias tranquilas e beleza natural.',
    image: ArembepeBahia, // Imagem de Arembepe
    price: 'Confira valores personalizados',
    state: 'Bahia',
    highlights: ['Praias tranquilas', 'Belezas naturais', 'Cultura local']
  },
  {
    id: 6,
    name: 'Canoa Quebrada - CE',
    description: 'Falésias coloridas e mar azul turquesa.',
    fullDescription: 'Um destino único no Ceará, com paisagens de tirar o fôlego e muita tranquilidade.',
    image: CanoaQuebrada,
    price: 'Confira valores personalizados',
    state: 'Ceará',
    highlights: ['Falésias', 'Passeios de buggy', 'Vida noturna']
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="destinations">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Litoral Nordestino</h2>
          <p className="section-subtitle">
            De norte a sul, descubra as praias mais deslumbrantes do Brasil
          </p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <div className="card-image">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  loading="lazy"
                />
                <span className="card-state">{dest.state}</span>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{dest.name}</h3>
                <p className="card-description">{dest.description}</p>
                
                <div className="card-highlights">
                  {dest.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">✓ {highlight}</span>
                  ))}
                </div>
                
                <div className="card-footer">
                  <div className="card-price">
                    <span className="price-label">Pacotes a partir de</span>
                    <span className="price-value">{dest.price}</span>
                  </div>
                  <Button variant="primary" size="small">Ver ofertas</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="destinations-cta">
          <Button variant="secondary" size="large">Ver todos os destinos</Button>
        </div>
      </Container>
    </section>
  );
};

export default Destinations;