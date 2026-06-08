import React from 'react'

function UseCases() {
  return (
    <section id="casos" className="section use-cases">
      <div className="section-header text-center">
        <h2>Una Plataforma. Cada Escenario. <span className="highlight">Siempre Actualizada.</span></h2>
      </div>
      <div className="cases-grid">
        <div className="case-card glass">
          <div className="case-icon"></div>
          <h3>Hipercrecimiento</h3>
          <p><strong>El Reto:</strong> Escalar de 200 a 2,000 empleados en 4 geografías en 18 meses.</p>
          <p><strong>Cómo ZettaMorph se adapta:</strong> El agente de expansión aprovisiona entidades locales,
             políticas y flujos de onboarding en idiomas específicos sin requerir proyectos de implementación.
          </p>
          <div className="case-result"><strong>Resultado:</strong> Cada país operativo en 48 horas, no 6 meses.</div>
        </div>
        <div className="case-card glass">
          <div className="case-icon"></div>
          <h3>Integración Post-Fusión</h3>
          <p><strong>El Reto:</strong> Integrar dos culturas y arquitecturas de puestos diferentes de una empresa adquirida.</p>
          <p><strong>Cómo ZettaMorph se adapta:</strong> El agente de mapeo propone un marco unificado. El agente
             de armonización modela escenarios salariales. La plataforma misma se reestructura uniendo organigramas.</p>
          <div className="case-result"><strong>Resultado:</strong> Lista para el día 1 en 30 días. Integración manejada desde la plataforma.</div>
        </div>
        <div className="case-card glass">
          <div className="case-icon"></div>
          <h3>Choque de Cumplimiento</h3>
          <p><strong>El Reto:</strong> Nueva legislación de privacidad con fecha límite de 90 días.</p>
          <p><strong>Cómo ZettaMorph se adapta:</strong> Inteligencia regulatoria genera flujos de consentimiento
             y modifica la plataforma para auditar controles de acceso. Un dashboard de cumplimiento se auto-ensambla.</p>
          <div className="case-result"><strong>Resultado:</strong> Cumplimiento total en 45 días. Cero consultoría externa.</div>
        </div>
        <div className="case-card glass">
          <div className="case-icon"></div>
          <h3>Cambio a Trabajo Distribuido</h3>
          <p><strong>El Reto:</strong> Transición de un modelo centrado en la oficina a uno remoto permanentemente.</p>
          <p><strong>Cómo ZettaMorph se adapta:</strong> Se ajustan modelos de políticas de oficina, las métricas
             de encuestas mutan a "efectividad asíncrona", y las evaluaciones de rendimiento priorizan el output.
          </p>
          <div className="case-result"><strong>Resultado:</strong> El sistema es un espejo continuo del modelo operativo.</div>
        </div>
      </div>
    </section>
  )
}

export default UseCases
