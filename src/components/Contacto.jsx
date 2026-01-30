import NubiContacto from "../assets/nubicelular.png";
import { sendEvent } from "../analytics";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2 className="section-title">Contacto</h2>

      {/* Texto SEO */}
      <p className="seo-texto">
        ¿Querés empezar tu proyecto o tenés dudas sobre nuestros servicios?
        En Pablo Design Lab te ofrezco múltiples formas de contacto: WhatsApp,
        Instagram o email. Trabajo con pocos proyectos a la vez para asegurar
        calidad, atención real y resultados. Tu marca merece una web que la
        represente.
      </p>

      <div className="nubi-contacto-wrapper">
        <img src={NubiContacto} alt="Nubi contacto" className="nubi-contacto" />
      </div>

      <div className="contacto-grid">

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="contacto-card"
          onClick={() =>
            sendEvent("click_instagram", {
              origen: "seccion_contacto",
              accion: "abrir_instagram"
            })
          }
        >
          Instagram
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5491162348510"
          target="_blank"
          className="contacto-card"
          onClick={() =>
            sendEvent("click_whatsapp", {
              origen: "seccion_contacto",
              accion: "abrir_whatsapp"
            })
          }
        >
          WhatsApp
        </a>

        {/* Email */}
        <a
          href="mailto:pablodesignlab@gmail.com"
          className="contacto-card"
          onClick={() =>
            sendEvent("click_email", {
              origen: "seccion_contacto",
              accion: "enviar_email"
            })
          }
        >
          Email
        </a>

      </div>
    </section>
  );
}
