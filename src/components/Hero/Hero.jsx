import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      {/* Giant decorative π */}
      <span className="hero__pi-bg" aria-hidden="true">π</span>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__pi-inline" aria-hidden="true">π</span>
            Sindicato Número Pi de Thoughtworks
          </p>

          <h1 id="hero-title" className="hero__title">
            Unidos por<br />
            <em>derechos</em> que<br />
            nos pertenecen.
          </h1>

          <p className="hero__subtitle">
            Representamos a las personas trabajadoras de Thoughtworks Chile SPA
            desde 2020. Negociación colectiva, transparencia y acción gremial
            para condiciones laborales dignas y equitativas.
          </p>

          <div className="hero__actions">
            <a href="#sobre" className="btn btn-primary">
              Conocer el sindicato
            </a>
            <a href="#documentos" className="btn btn-outline">
              Ver documentos
            </a>
          </div>
        </div>

        {/* Decorative sidebar strip */}
        <aside className="hero__strip" aria-hidden="true">
          <div className="hero__strip-line" />
          <span className="hero__strip-text">UNIDAD · FUERZA · DERECHO</span>
          <div className="hero__strip-line" />
        </aside>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">Desplazar</span>
        <div className="hero__scroll-arrow" />
      </div>

      {/* Bottom wave divider */}
      <svg className="hero__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="var(--color-surface)" />
      </svg>
    </section>
  );
}
