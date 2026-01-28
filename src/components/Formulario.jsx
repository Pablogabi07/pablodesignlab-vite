import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

export default function Formulario({ servicio, paquete, onClose }) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarga o redirección

    const form = e.target;

    // Enviar usando FormSubmit manualmente
    fetch("https://formsubmit.co/pablodesignlab@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setSuccess(true); // mostrar mensaje de éxito
      })
      .catch(() => {
        alert("Hubo un error al enviar el formulario.");
      });
  };

  return (
    <>
      <div className="form-overlay">
        <div className="form-box">
          <button className="close-btn" onClick={onClose}>
            X
          </button>

          <h2>Formulario de consulta</h2>
          <p>
            <strong>Servicio:</strong> {servicio}
          </p>

          <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu email" required />
            <textarea name="idea" placeholder="Contame tu idea" required />

            {/* Campos ocultos */}
            <input type="hidden" name="servicio" value={servicio} />
            <input type="hidden" name="paquete" value={paquete} />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn-enviar">
              Enviar consulta
            </button>
          </form>
        </div>
      </div>

      {success && <SuccessMessage onClose={onClose} />}
    </>
  );
}
