import React from 'react'

function Solution() {
  return (
    <section id="solucion" className="section problem-solution">
      <div className="section-header">
        <h2>El software tradicional de RRHH fue construido para <span className="highlight">un mundo que ya no existe.</span></h2>
      </div>
      <div className="pain-points-grid">
        <div className="card glass">
          <h3>Flujos de trabajo rígidos</h3>
          <p>Tu organigrama cambió el martes pasado; tu plataforma se pondrá al día en el tercer trimestre.</p>
          <div className="cost"><strong>Costo:</strong> Semanas de desajuste.</div>
        </div>
        <div className="card glass">
          <h3>Dispersión de integraciones</h3>
          <p>Nóminas aquí, cumplimiento allá. Cada costura es una fuga de datos y una reconciliación manual.</p>
          <div className="cost"><strong>Costo:</strong> Carga administrativa innecesaria, credenciales de uso dispersas.</div>
        </div>
        <div className="card glass">
          <h3>Solución única para todos</h3>
          <p>La "configuración" que pagaste es la configuración de alguien más. Esperas tickets y consultores.</p>
          <div className="cost"><strong>Costo:</strong> $80K-$250K anuales en implementación.</div>
        </div>
        <div className="card glass">
          <h3>Inteligencia estática</h3>
          <p>Los paneles te dicen qué pasó, pero no qué hacer a continuación. No pueden actuar.</p>
          <div className="cost"><strong>Costo:</strong> Decisiones reactivas con días de retraso.</div>
        </div>
      </div>

      <div className="solution-box glass glow-border">
        <h3>La Solución: Una plataforma que piensa, se adapta y se reconstruye a sí misma.</h3>
        <p>ZettaMorph no parchea el modelo antiguo — lo reemplaza por completo.</p>
        <p>
          Imagina que en el ecosistema de tu negocio <strong>los agentes de IA que tú creas</strong> pueden leer
          las señales en tiempo real de tu organización —un aumento en la contratación, un cambio normativo, una
          reestructuración— y <strong>reconfigurar flujos de trabajo, interfaces y políticas de forma
            autónoma</strong> antes de que tu equipo abra un ticket.
        </p>
        <p className="vision">
          Esto no es automatización sobre software heredado. Es una <strong>arquitectura
            viva</strong> donde la frontera entre "lo que hace el sistema" y "lo que necesitas que haga" se
          disuelve por completo.
        </p>
        <a href="#caracteristicas" className="btn btn-secondary">Ver la arquitectura en acción &rarr;</a>
      </div>
    </section>
  )
}

export default Solution
