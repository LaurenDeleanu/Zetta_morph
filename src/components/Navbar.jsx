import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="assets/ChatGPT Image 6 jun 2026, 02_20_09 p.m..png" 
          alt="ZettaMorph Logo"
          style={{ height: '100px', display: 'block' }} 
        />
      </div>
      <div className="nav-links">
        <a href="#solucion">Solución</a>
        <a href="#caracteristicas">Características</a>
        <a href="#casos">Casos de Uso</a>
        <a href="#roi">ROI</a>
        <a href="#cta" className="btn btn-outline">Empezar</a>
      </div>
    </nav>
  )
}

export default Navbar
