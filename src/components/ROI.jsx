import React from 'react'

function ROI({ openModal }) {
  return (
    <>
      <section id="roi" className="section roi">
        <div className="section-header text-center">
          <h2>El ROI de una plataforma que <span className="highlight">nunca deja de mejorar.</span></h2>
        </div>

        <div className="roi-content">
          <table className="roi-table glass">
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Stack de RRHH Tradicional</th>
                <th>Con ZettaMorph</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiempo para desplegar nuevo flujo</td>
                <td>4–12 semanas</td>
                <td className="highlight-cell">Minutos a horas</td>
              </tr>
              <tr>
                <td>Gasto anual en integración/consultoría</td>
                <td>$80K–$250K+</td>
                <td className="highlight-cell">Casi cero</td>
              </tr>
              <tr>
                <td>Carga admin. de RRHH por empleado</td>
                <td>1 FTE por cada 50–80 emp.</td>
                <td className="highlight-cell">1 FTE por cada 150–200 emp.</td>
              </tr>
              <tr>
                <td>Tiempo de preparación (nuevo país)</td>
                <td>3–6 meses</td>
                <td className="highlight-cell">48–72 horas</td>
              </tr>
              <tr>
                <td>Errores de conciliación de datos</td>
                <td>5–15% (sincronización multi-sistema)</td>
                <td className="highlight-cell">&lt; 0.1% (tejido de datos único)</td>
              </tr>
            </tbody>
          </table>

          <div className="value-pillars">
            <div className="value-item">
              <h4>⚡ Agilidad</h4>
              <p>ZettaMorph traduce decisiones estratégicas en realidad operativa en tiempo real. Sin tickets de soporte.</p>
            </div>
            <div className="value-item">
              <h4>🛡️ A Prueba de Futuro</h4>
              <p>La arquitectura evoluciona con tu organización. Es la última migración de plataforma que harás.</p>
            </div>
            <div className="value-item">
              <h4>📊 Inteligencia Compuesta</h4>
              <p>Cada interacción retroalimenta al sistema. Se vuelve más inteligente y entiende tus patrones cada día.</p>
            </div>
            <div className="value-item">
              <h4>💰 Menor Costo Total (TCO)</h4>
              <p>Consolida de 8-12 soluciones a una sola. Elimina middleware de integración y dependencia de consultores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Conversion */}
      <section id="cta" className="section final-cta glass glow-border text-center">
        <h2>Hacia aquí se dirigía la tecnología de RRHH.<br />Nosotros llegamos primero.</h2>
        <p className="final-text">
          Tu competencia sigue enviando tickets de soporte para cambiar un menú desplegable.
          <strong> Tú podrías estar desplegando agentes que rediseñan flujos completos de la noche a la mañana.</strong>
        </p>

        <div className="cta-group center">
          <button onClick={openModal} className="btn btn-primary pulse">Comienza a Construir Tu Plataforma &rarr;</button>
        </div>
      </section>
    </>
  )
}

export default ROI
