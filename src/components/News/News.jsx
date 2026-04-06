import { useScrollReveal } from '../../hooks/useScrollReveal';
import './News.css';

const NEWS = [
  {
    id: 1,
    date: '2025-03-20',
    category: 'Negociación',
    headline: 'Acuerdo sobre jornada laboral flexible alcanzado con la dirección',
    excerpt:
      'Tras tres meses de negociaciones, se formalizó un protocolo de trabajo híbrido que beneficia a más de 400 trabajadores del sector.',
    featured: true,
  },
  {
    id: 2,
    date: '2025-03-10',
    category: 'Asamblea',
    headline: 'Convocatoria a Asamblea Ordinaria — 15 de abril',
    excerpt:
      'Se citan a todos los socios a participar de la asamblea ordinaria anual. En el orden del día: rendición de cuentas, elecciones parciales y plan de acción 2025.',
    featured: false,
  },
  {
    id: 3,
    date: '2025-02-28',
    category: 'Derechos',
    headline: 'Guía actualizada sobre licencias y ausencias justificadas',
    excerpt:
      'El departamento jurídico elaboró una guía práctica con los cambios normativos vigentes desde enero 2025 sobre licencias por enfermedad, duelo y maternidad.',
    featured: false,
  },
  {
    id: 4,
    date: '2025-02-12',
    category: 'Formación',
    headline: 'Ciclo de talleres sobre salud mental en el trabajo',
    excerpt:
      'El sindicato lanza un programa de tres talleres gratuitos para socios sobre prevención del burnout y gestión del estrés laboral.',
    featured: false,
  },
  {
    id: 5,
    date: '2025-01-30',
    category: 'Institucional',
    headline: 'Memoria anual 2024 publicada y disponible para descarga',
    excerpt:
      'Publicamos el informe completo de actividades, gestión económica y logros obtenidos durante el año 2024. Transparencia ante todo.',
    featured: false,
  },
];

function formatDate(iso) {
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso + 'T00:00:00'));
}

export default function News() {
  const ref = useScrollReveal();
  const [featured, ...rest] = NEWS;

  return (
    <section id="noticias" className="news section" aria-labelledby="news-title">
      <div className="container" ref={ref}>
        <p className="section-label fade-in">Comunicados</p>
        <h2 id="news-title" className="section-title fade-in">
          Noticias del sindicato
        </h2>

        <div className="news__grid">
          {/* Featured card */}
          <article className="news-card news-card--featured fade-in" aria-label={`Noticia destacada: ${featured.headline}`}>
            <div className="news-card__meta">
              <span className="news-card__category">{featured.category}</span>
              <time className="news-card__date" dateTime={featured.date}>
                {formatDate(featured.date)}
              </time>
            </div>
            <h3 className="news-card__title">{featured.headline}</h3>
            <p className="news-card__excerpt">{featured.excerpt}</p>
            <a href="#noticias" className="news-card__link" aria-label={`Leer más sobre: ${featured.headline}`}>
              Leer comunicado
              <span aria-hidden="true"> →</span>
            </a>
          </article>

          {/* Secondary cards */}
          <div className="news__list">
            {rest.map((item) => (
              <article key={item.id} className="news-card news-card--compact fade-in">
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <time className="news-card__date" dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="news-card__title news-card__title--sm">{item.headline}</h3>
                <p className="news-card__excerpt news-card__excerpt--sm">{item.excerpt}</p>
                <a href="#noticias" className="news-card__link" aria-label={`Leer más sobre: ${item.headline}`}>
                  Leer más <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
