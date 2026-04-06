import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const PILLARS = [
  {
    icon: '⚖️',
    title: 'Comisión de Bienestar y Desarrollo',
    body: 'Velamos por el bienestar integral de los socios: beneficios, prestaciones, prevención de riesgos y mejora de las condiciones de trabajo.',
  },
  {
    icon: '📚',
    title: 'Comisión de Formación Sindical',
    body: 'Promovemos la educación gremial y el conocimiento de derechos laborales para fortalecer la capacidad de acción colectiva de cada asociado.',
  },
  {
    icon: '🤝',
    title: 'Comisión de Género',
    body: 'Trabajamos por la igualdad de trato y oportunidades, previniendo toda forma de discriminación y promoviendo ambientes laborales inclusivos y seguros.',
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="about section" aria-labelledby="about-title">
      {/* Decorative π */}
      <span className="pi-deco about__pi" aria-hidden="true">π</span>

      <div className="container" ref={ref}>
        <div className="about__header">
          <p className="section-label">Quiénes somos</p>
          <h2 id="about-title" className="section-title fade-in">
            Sindicato Número Pi de Thoughtworks
          </h2>
        </div>

        <div className="about__grid">
          {/* Mission */}
          <div className="about__block fade-in">
            <div className="about__block-marker" aria-hidden="true">01</div>
            <h3 className="about__block-title">Quiénes somos</h3>
            <p className="about__block-text">
              Somos el <strong>Sindicato Número Pi de Thoughtworks</strong>, constituido
              el 24 de enero de 2020 en Santiago. Representamos a las personas
              trabajadoras de Thoughtworks Chile SPA, defendiendo sus derechos
              mediante la negociación colectiva, la representación ante organismos
              públicos y el fomento de la acción gremial organizada.
            </p>
          </div>

          {/* Vision */}
          <div className="about__block about__block--alt fade-in">
            <div className="about__block-marker" aria-hidden="true">02</div>
            <h3 className="about__block-title">Nuestros principios</h3>
            <p className="about__block-text">
              Actuamos con transparencia, promovemos la igualdad de trato y
              cultivamos la solidaridad entre socios. Nos guiamos por los
              principios de democracia interna, respeto a la dignidad de las
              personas y compromiso con la mejora continua de las condiciones
              laborales. Cada decisión se toma en asamblea, con la voz de
              todos quienes integramos el sindicato.
            </p>
          </div>

          {/* Pillars */}
          <div className="about__pillars fade-in">
            {PILLARS.map(({ icon, title, body }) => (
              <article key={title} className="about__pillar">
                <span className="about__pillar-icon" aria-hidden="true">{icon}</span>
                <div>
                  <h4 className="about__pillar-title">{title}</h4>
                  <p className="about__pillar-text">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
