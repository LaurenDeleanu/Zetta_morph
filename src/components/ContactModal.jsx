import React, { useState, useEffect } from 'react'

function ContactModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose()
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div 
      id="contactModal" 
      className={`modal-overlay ${isOpen ? 'open' : ''}`} 
      onClick={handleOverlayClick}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="modal-box glass">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {!isSubmitted ? (
          <div id="modalForm">
            <h2 className="modal-title">Habla con nuestro equipo</h2>
            <p className="modal-subtitle">Te contactaremos en menos de 24 horas.</p>
            <form id="contactForm" onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="fullName">Nombre y Apellidos</label>
                <input type="text" id="fullName" placeholder="Ej. María García López" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" placeholder="tu@empresa.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Número de Teléfono</label>
                <input type="tel" id="phone" placeholder="+34 600 000 000" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Enviar &rarr;
              </button>
            </form>
          </div>
        ) : (
          <div id="modalSuccess" className="modal-success">
            <div className="success-icon">✓</div>
            <h2>¡Recibido!</h2>
            <p>Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo muy pronto.</p>
            <button onClick={onClose} className="btn btn-primary" style={{ marginTop: '24px' }}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactModal
