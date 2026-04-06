import './Footer.css';

const FOOTER_LINKS = [
  { label: 'Sobre el Sindicato', href: '#sobre'      },
  { label: 'Documentos',        href: '#documentos' },
  { label: 'Contacto',          href: '#contacto'   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top wave */}
      <svg className="footer__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" fill="var(--color-primary-dark)" />
      </svg>

      <div className="footer__inner container">
        {/* Brand column */}
        <div className="footer__brand">
          <a href="#hero" className="footer__logo" aria-label="Sindicato Número Pi de Thoughtworks — Ir al inicio">
            <span className="footer__logo-pi" aria-hidden="true">π</span>
            <span className="footer__logo-name">SINDICATO π</span>
          </a>
          <p className="footer__tagline">
            Sindicato Número Pi de Thoughtworks.<br />
            Av. Providencia 1760, Of. 1601<br />
            Providencia, Santiago, Chile.
          </p>
        </div>

        {/* Nav column */}
        <nav className="footer__nav" aria-label="Mapa del sitio">
          <p className="footer__nav-title">Secciones</p>
          <ul role="list">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal column */}
        <div className="footer__legal-col">
          <p className="footer__nav-title">Legal</p>
          <ul role="list">
            <li><a href="#" className="footer__nav-link" rel="noopener noreferrer">Política de privacidad</a></li>
            <li><a href="#" className="footer__nav-link" rel="noopener noreferrer">Términos de uso</a></li>
            <li><a href="#" className="footer__nav-link" rel="noopener noreferrer">Accesibilidad</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Sindicato Número Pi de Thoughtworks. Todos los derechos reservados.
          </p>
          <p className="footer__powered">
            Sitio realizado por y para los trabajadores.
          </p>
        </div>
      </div>
    </footer>
  );
}
