export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2 className="section-title">Contacto</h2>

      <div className="contacto-grid">
        <a
          href="https://instagram.com"
          target="_blank"
          className="contacto-card"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5491162348510"
          target="_blank"
          className="contacto-card"
        >
          WhatsApp
        </a>
        <a href="mailto:tuemail@gmail.com" className="contacto-card">
          Email
        </a>
      </div>
    </section>
  );
}
