import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <Differentials />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App