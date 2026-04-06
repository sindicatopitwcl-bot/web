import { useEffect, useRef } from 'react';
import './DocumentViewer.css';

/**
 * Modal con vista previa de PDF embebido.
 * Se cierra con Escape, clic en backdrop o botón cerrar.
 * El foco queda atrapado dentro del modal mientras está abierto.
 */
export default function DocumentViewer({ doc, onClose }) {
  const dialogRef = useRef(null);
  const closeRef  = useRef(null);

  /* Foco al abrir */
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  /* Cerrar con Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  /* Bloquear scroll del body */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* Cerrar al hacer clic en backdrop */
  function handleBackdropClick(e) {
    if (e.target === dialogRef.current) onClose();
  }

  return (
    <div
      ref={dialogRef}
      className="dv-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista previa: ${doc.title}`}
      onClick={handleBackdropClick}
    >
      <div className="dv-panel">
        {/* Header */}
        <div className="dv-header">
          <div className="dv-header-info">
            <span className="dv-category">{doc.category}</span>
            <h2 className="dv-title">{doc.title}</h2>
          </div>

          <div className="dv-actions">
            <a
              href={doc.href}
              download
              className="btn btn-primary dv-btn-download"
              aria-label={`Descargar ${doc.title}`}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar
            </a>

            <button
              ref={closeRef}
              className="dv-close"
              onClick={onClose}
              aria-label="Cerrar vista previa"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6"  x2="6"  y2="18" />
                <line x1="6"  y1="6"  x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="dv-body">
          <iframe
            src={`${doc.href}#toolbar=1&navpanes=0`}
            title={`Vista previa del documento: ${doc.title}`}
            className="dv-iframe"
            loading="lazy"
          />

          {/* Fallback para navegadores que bloquean iframes de PDF */}
          <div className="dv-fallback" aria-hidden="true">
            <p>
              Tu navegador no puede mostrar el PDF en línea.{' '}
              <a href={doc.href} download className="dv-fallback-link">
                Descargarlo directamente
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
