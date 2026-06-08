import React, { useState, useEffect } from 'react'

const slides = [
  'assets/Saas_1.png',
  'assets/Saas_2.png',
  'assets/Saas_3.png',
  'assets/Saas_4.png',
  'assets/Saas_5.png',
]

function Hero({ openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>
          Tu plataforma de RRHH no debería solo seguirte el ritmo.<br />
          <span className="highlight">Debería evolucionar.</span>
        </h1>
        <p className="subtitle">
          Construye, despliega y orquesta agentes de IA que no solo usan tu sistema SaaS — lo
          rediseñan en tiempo real. ZettaMorph es la primera plataforma SaaS 360 grados que se reconfigura
          según las necesidades cambiantes de tu empresa. ZettaMorph no es solo un sistema, es el corazón de tu
          negocio. Autoeditable y autogestionable
        </p>
        <div className="cta-group">
          <button onClick={openModal} className="btn btn-primary">
            Lanza Tu Plataforma Viva &rarr;
          </button>
        </div>
      </div>
      <div className="hero-carousel">
        <div className="carousel-track">
          {slides.map((src, index) => (
            <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={src} alt={`ZettaMorph SaaS ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <div className="glow-effect"></div>
      </div>
    </header>
  )
}

export default Hero
