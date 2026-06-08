import React from 'react'

function Features() {
  return (
    <section id="caracteristicas" className="section features">
      <div className="section-header text-center">
        <h2>Tres Pilares. <span className="highlight">Una Capa de Inteligencia Unificada.</span></h2>
      </div>

      {/* Pillar 1 */}
      <div className="feature-pillar" style={{ flexDirection: 'column', gap: '40px' }}>
        <div className="pillar-text" style={{ width: '100%', textAlign: 'left' }}>
          <h3>1. Gestión de RRHH 360°</h3>
          <p className="tagline">Cada dimensión de las operaciones de personal. Un único centro gravitacional.</p>
          <p>La capa principal SaaS de ZettaMorph cubre el ciclo de vida completo: no como módulos añadidos, sino
             como un <strong>tejido de datos unificado</strong> donde cada acción informa inmediatamente a las demás.</p>
          <ul className="feature-list" style={{ marginTop: '30px' }}>
            <li>Adquisición de Talento &amp; Onboarding</li>
            <li>Administración de Fuerza Laboral</li>
            <li>Nóminas y Compensación</li>
            <li>Rendimiento y Crecimiento</li>
            <li>Aprendizaje y Desarrollo</li>
            <li>Cumplimiento y Riesgo</li>
          </ul>
          <div className="alert alert-important">
            <strong>Unificado por diseño, no por adquisición:</strong> Todos los módulos comparten un modelo de
            datos, una capa de permisos y una ventana de contexto de IA. Lo que convierte la gestión de personal
            en un servicio completo, no solo en un software.
          </div>
        </div>
        <div style={{ width: '65%', margin: '0 auto', borderRadius: '20px', overflow: 'hidden' }}>
          <img src="assets/SaaS_4.png" alt="Gestión de RRHH ZettaMorph"
               style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }} />
        </div>
      </div>

      {/* Pillar 2 */}
      <div className="feature-pillar" style={{ flexDirection: 'column', gap: '40px' }}>
        <div className="pillar-text" style={{ width: '100%', textAlign: 'left' }}>
          <h3>2. Creación y Orquestación de Agentes IA</h3>
          <p className="tagline">Tus reglas. Tu lógica. Tus agentes. Sin doctorado en ML requerido.</p>
          <p>El "Agent Studio" de ZettaMorph permite a cualquiera diseñar, entrenar y desplegar agentes de IA que
             operan <em>dentro</em> de la plataforma con los mismos permisos y capacidades que un operador humano.</p>
          <ul className="feature-list" style={{ marginTop: '30px' }}>
            <li><strong>Leer e Interpretar:</strong> Consumen datos estructurados y señales no estructuradas en tiempo real.</li>
            <li><strong>Decidir y Actuar:</strong> Aprueban permisos, redactan ofertas, cambian flujos autónomamente.</li>
            <li><strong>Colaborar:</strong> Los agentes se comunican entre sí para ejecutar cadenas de decisiones complejas.</li>
          </ul>
          <div className="alert alert-caution">
            <strong>Gobernanza y Seguridad:</strong> Permisos limitados por roles, aprobación humana obligatoria
            para operaciones sensibles, rastro de auditoría completo y botón de pánico.
          </div>
        </div>
        <div style={{ width: '65%', margin: '0 auto', borderRadius: '20px', overflow: 'hidden' }}>
          <img src="assets/Flujos.png" alt="Agent Studio Flujos ZettaMorph"
               style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }} />
        </div>
      </div>

      {/* Pillar 3 */}
      <div className="feature-pillar" style={{ flexDirection: 'column', gap: '40px' }}>
        <div className="pillar-text" style={{ width: '100%', textAlign: 'left' }}>
          <h3>3. Evolución de la Plataforma en Tiempo Real</h3>
          <p className="tagline">La plataforma que se reconstruye a sí misma mientras duermes.</p>
          <p>Lo que separa a ZettaMorph del resto: Los agentes de IA no solo operan en la plataforma, la
             <strong> modifican</strong>. Flujos de trabajo, campos de formularios, cadenas de aprobación y
             paneles se reconfiguran en respuesta a señales de la organización.
          </p>
          <div className="mutation-table" style={{ marginTop: '20px' }}>
            <div className="mutation-row">
              <strong>Señal:</strong> Nueva ley de cumplimiento (ej. IA Act UE).
              <br /><strong>Mutación:</strong> Agente legal genera flujos de consentimiento, adapta roles y encola módulos de entrenamiento.
            </div>
            <div className="mutation-row">
              <strong>Señal:</strong> Encuesta revela agotamiento en Ingeniería.
              <br /><strong>Mutación:</strong> Agente de bienestar actualiza los dashboards directivos con indicadores y cambia frecuencias de encuestas de pulso.
            </div>
          </div>
        </div>
        <div style={{ width: '65%', margin: '0 auto', borderRadius: '20px', overflow: 'hidden' }}>
          <img src="assets/Codig_Lab.png" alt="Evolución de la Plataforma ZettaMorph"
               style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }} />
        </div>
      </div>
    </section>
  )
}

export default Features
