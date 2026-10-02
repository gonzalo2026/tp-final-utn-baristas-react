import useContactForm from '../hooks/useContactForm.js';
import '../styles/Contact.css';

function Contact() {
  const { formData, submitted, handleChange, handleSubmit, handleReset } = useContactForm();

  return (
    <section className="container contact-page">
      <h2 className="heading-1">Escribinos</h2>

      <form className="escribinos" onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <fieldset>
          <legend className="title-footer">Contactános</legend>

          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="name"
            required
            placeholder="nombre"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="email"
            required
            placeholder="tu correo"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="phone"
            required
            placeholder="ej: 011 5555-5555"
            pattern="[0-9 +-]{6,15}"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="motivo">Motivo de contacto:</label>
          <select id="motivo" name="motivo" required value={formData.motivo} onChange={handleChange}>
            <option value="" disabled>Elegí una opción</option>
            <option value="consulta">Consulta general</option>
            <option value="pedido">Estado de un pedido</option>
            <option value="reclamo">Reclamo</option>
            <option value="sugerencia">Sugerencia</option>
          </select>

          <span className="field-group-label">¿Cómo preferís que te contactemos?</span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="contact-preference"
                value="email"
                checked={formData['contact-preference'] === 'email'}
                onChange={handleChange}
              />
              Email
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="contact-preference"
                value="telefono"
                checked={formData['contact-preference'] === 'telefono'}
                onChange={handleChange}
              />
              Teléfono
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="contact-preference"
                value="whatsapp"
                checked={formData['contact-preference'] === 'whatsapp'}
                onChange={handleChange}
              />
              WhatsApp
            </label>
          </div>

          <label htmlFor="mensaje">Tu mensaje:</label>
          <textarea
            id="mensaje"
            name="message"
            required
            placeholder="Escribe tu mensaje aquí.."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <label className="checkbox-option">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Quiero recibir novedades y ofertas por correo
          </label>

          <div className="form-actions">
            <button type="submit">Enviar</button>
            <button type="reset">Limpiar</button>
          </div>

          {submitted && <p className="form-success">¡Gracias! Recibimos tu mensaje.</p>}
        </fieldset>
      </form>
    </section>
  );
}

export default Contact;
