import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="assets/ChatGPT Image 6 jun 2026, 02_20_09 p.m..png" 
            alt="ZettaMorph Logo"
            style={{ height: '100px', display: 'block' }} 
          />
        </div>
        <p>&copy; 2026 ZettaMorph. Una plataforma de SaaS viva.</p>
      </div>
    </footer>
  )
}

export default Footer
