import wpLogo from "../assets/WhatsApp.png";

export default function WhatsAppButton() {
  const numero = "5491162348510"; // tu número real
  const mensaje = encodeURIComponent(
    "Hola! Estoy interesado en trabajar con Pablo Design Lab."
  );

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      className="whatsapp-btn"
    >
      <img src={wpLogo} alt="WhatsApp" className="wp-icon" />
    </a>
  );
}
