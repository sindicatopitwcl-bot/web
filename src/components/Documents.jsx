import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import DocumentViewer from './DocumentViewer';
import './Documents.css';

const DOCS = [
  {
    id: 1,
    category: 'Estatutos',
    title: 'Estatuto del Sindicato',
    description: 'Texto completo del estatuto vigente con las reformas aprobadas en asamblea.',
    date: '2023-11-15',
    pages: null,
    size: '252 KB',
    href: '/documentos/estatutos-sindicato-pi_junio-2020.pdf',
    available: true,
  },
  {
    id: 2,
    category: 'Informativo',
    title: 'Informativo 1 — Sindicato',
    description: 'Convocatoria de Asamblea Ordinaria.',
    date: '2025-11-25',
    pages: null,
    size: '168 KB',
    href: '/documentos/informativo-1-sindicato.pdf',
    available: true,
  },
  {
    id: 3,
    category: 'Newsletter',
    title: 'Newsletter 1 — Enero 2026',
    description: '¿Qué es un Sindicato de Empresa y Cómo Funciona?',
    date: '2026-01-25',
    pages: null,
    size: '155 KB',
    href: '/documentos/newsletter-1-enero-2026.pdf',
    available: true,
  },
  {
    id: 4,
    category: 'Newsletter',
    title: 'Newsletter 2 — Febrero 2026',
    description: 'Vacaciones (feriado anual) e hijos en edad escolar.',
    date: '2026-02-25',
    pages: null,
    size: '159 KB',
    href: '/documentos/newsletter-2-febrero-2026.pdf',
    available: true,
  },
  {
    id: 5,
    category: 'Newsletter',
    title: 'Newsletter 3 — Marzo 2026',
    description: 'Artículo 22 del Código del Trabajo — Jornada Laboral y sus Excepciones.',
    date: '2026-03-25',
    pages: null,
    size: '174 KB',
    href: '/documentos/newsletter-3-marzo-2026.pdf',
    available: true,
  },
];

function formatDate(iso) {
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso + 'T00:00:00'));
}

export default function Documents() {
  const ref = useScrollReveal();
  const [preview, setPreview] = useState(null); // doc abierto en el viewer

  return (
    <section id="documentos" className="documents section" aria-labelledby="documents-title">
      {/* Decorative π */}
      <span className="pi-deco documents__pi" aria-hidden="true">π</span>

      <div className="container" ref={ref}>
        <p className="section-label fade-in">Transparencia</p>
        <h2 id="documents-title" className="section-title fade-in">
          Documentos y normativa
        </h2>
        <p className="documents__intro fade-in">
          Accede a todos los documentos institucionales del sindicato. La transparencia
          es un valor fundamental de nuestra organización.
        </p>

        <ul className="documents__list" role="list">
          {DOCS.map((doc) => (
            <li key={doc.id} className="doc-item fade-in">
              <article>
                <div className="doc-item__main">
                  <div className="doc-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <div className="doc-item__info">
                    <div className="doc-item__badges">
                      <span className="doc-item__category">{doc.category}</span>
                      {!doc.available && (
                        <span className="doc-item__badge-soon">Próximamente</span>
                      )}
                    </div>
                    <h3 className="doc-item__title">{doc.title}</h3>
                    <p className="doc-item__description">{doc.description}</p>
                    <div className="doc-item__meta">
                      <time dateTime={doc.date}>{formatDate(doc.date)}</time>
                      {doc.pages && <span aria-label={`${doc.pages} páginas`}>{doc.pages} pág.</span>}
                      {doc.size && <span aria-label={`Tamaño: ${doc.size}`}>{doc.size}</span>}
                    </div>
                  </div>
                </div>

                <div className="doc-item__actions">
                  {doc.available ? (
                    <>
                      <button
                        className="btn btn-outline doc-item__preview-btn"
                        onClick={() => setPreview(doc)}
                        aria-label={`Ver vista previa de ${doc.title}`}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Vista previa
                      </button>
                      <a
                        href={doc.href}
                        className="btn btn-primary doc-item__download"
                        download
                        aria-label={`Descargar ${doc.title} (PDF)`}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Descargar
                      </a>
                    </>
                  ) : (
                    <span className="doc-item__unavailable" aria-label="Documento no disponible aún">
                      No disponible
                    </span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal de vista previa */}
      {preview && (
        <DocumentViewer
          doc={preview}
          onClose={() => setPreview(null)}
        />
      )}
    </section>
  );
}
