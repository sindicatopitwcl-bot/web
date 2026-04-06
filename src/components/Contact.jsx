import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const TOPICS = [
  'Consulta general',
  'Afiliación',
  'Asesoramiento laboral',
  'Denuncias y conflictos',
  'Documentación',
  'Otro',
];

export default function Contact() {
  const ref = useScrollReveal();

  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = 'El nombre es obligatorio.';
    if (!form.email.trim())   e.email   = 'El correo electrónico es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingresá un correo válido.';
    if (!form.topic)          e.topic   = 'Seleccioná un motivo de consulta.';
    if (!form.message.trim()) e.message = 'El mensaje no puede estar vacío.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      /* focus first error */
      const first = Object.keys(errs)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    /* Build mailto link — no backend required */
    const subject = encodeURIComponent(`[Sindicato] ${form.topic} — ${form.name}`);
    const body    = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nMotivo: ${form.topic}\n\n${form.message}`,
    );
    window.location.href = `mailto:contacto@sindicato.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="contact section" aria-labelledby="contact-title">
      <div className="container" ref={ref}>
        <div className="contact__layout">
          {/* Sidebar info */}
          <aside className="contact__info fade-in" aria-label="Información de contacto">
            <p className="section-label">Contacto</p>
            <h2 id="contact-title" className="contact__title">
              Estamos para ti
            </h2>
            <p className="contact__tagline">
              Nuestro equipo responde consultas de lunes a viernes, de 9 a 17 hs.
              También podés acercarte a nuestra sede.
            </p>

            <ul className="contact__channels" role="list">
              <li className="contact__channel">
                <span className="contact__channel-icon" aria-hidden="true">📬</span>
                <div>
                  <strong>Correo electrónico</strong>
                  <a href="mailto:sindicatopitwcl@gmail.com" className="contact__channel-link">
                    sindicatopitwcl@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact__channel">
                <span className="contact__channel-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <a href="tel:+56995504256" className="contact__channel-link">
                    (+56) 9 9559-4256
                  </a>
                </div>
              </li>
              <li className="contact__channel">
                <span className="contact__channel-icon" aria-hidden="true">📍</span>
                <div>
                  <strong>Sede</strong>
                  <address className="contact__address">
                    Santiago<br />
                    Chile
                  </address>
                </div>
              </li>
            </ul>
          </aside>

          {/* Form */}
          <div className="contact__form-wrap fade-in">
            {submitted ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <span className="contact__success-icon" aria-hidden="true">✓</span>
                <h3>Consulta enviada</h3>
                <p>
                  Se abrió tu cliente de correo con el mensaje. Si no se abrió,
                  escribinos directamente a{' '}
                  <a href="mailto:contacto@sindicato.org">contacto@sindicato.org</a>.
                </p>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
              >
                {/* Name */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-name">
                    Nombre completo <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`field__input${errors.name ? ' field__input--error' : ''}`}
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="err-name" className="field__error" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-email">
                    Correo electrónico <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`field__input${errors.email ? ' field__input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="err-email" className="field__error" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Topic */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-topic">
                    Motivo de consulta <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    className={`field__input field__select${errors.topic ? ' field__input--error' : ''}`}
                    value={form.topic}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.topic ? 'err-topic' : undefined}
                    aria-invalid={!!errors.topic}
                  >
                    <option value="">Seleccioná una opción</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p id="err-topic" className="field__error" role="alert">{errors.topic}</p>
                  )}
                </div>

                {/* Message */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-message">
                    Mensaje <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={`field__input field__textarea${errors.message ? ' field__input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="err-message" className="field__error" role="alert">{errors.message}</p>
                  )}
                </div>

                <p className="contact__required-note">
                  <span aria-hidden="true">*</span> Campos obligatorios
                </p>

                <button type="submit" className="btn btn-primary contact__submit">
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
