import './Footer.css';

const SOCIALS = [
  {
    name: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

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
          <nav aria-label="Redes sociales">
            <ul className="footer__socials" role="list">
              {SOCIALS.map(({ name, href, icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="footer__social-link"
                    aria-label={`Seguinos en ${name}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
