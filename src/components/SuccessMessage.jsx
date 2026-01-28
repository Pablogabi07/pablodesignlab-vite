export default function SuccessMessage({ onClose }) {
  return (
    <div className="success-overlay">
      <div className="success-box">
        <div className="success-icon">✔</div>
        <h3>¡Formulario enviado!</h3>
        <p>Gracias por tu consulta. Te voy a responder a la brevedad.</p>

        <button className="btn-success-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
