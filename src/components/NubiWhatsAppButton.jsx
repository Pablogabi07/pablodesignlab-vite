import { useState } from "react";
import NubiCara from "../assets/Nubicara2.png";


import "./NubiWhatsAppButton.css";

export default function NubiWhatsAppButton() {
  const [show, setShow] = useState(false);

  const numero = "5491162348510";
  const mensaje = encodeURIComponent(
    "Hola! Estoy interesado en trabajar con Pablo Design Lab."
  );

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      className="nubi-whatsapp"
      onClick={() => setShow(!show)}
    >
      <div
        className="nubi-whatsapp-globo"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(10px)",
        }}
      >
        Mandame tu consulta
      </div>

      <img src={NubiCara} alt="Nubi WhatsApp" className="nubi-whatsapp-img" />
    </a>
  );
}
