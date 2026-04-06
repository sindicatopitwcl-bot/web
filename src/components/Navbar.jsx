import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#sobre',      label: 'Sobre el Sindicato' },
  { href: '#documentos', label: 'Documentos'         },
  { href: '#contacto',   label: 'Contacto'           },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close menu on ESC */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      {/* Skip-to-content */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" aria-label="Inicio — Sindicato">
          <span className="navbar__pi" aria-hidden="true">π</span>
          <span className="navbar__wordmark">Sindicato PI Thoughtworks Chile</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menú móvil">
          <ul role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar__mobile-link"
                  onClick={handleLinkClick}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
