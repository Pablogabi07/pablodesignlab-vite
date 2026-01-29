import { useState } from "react";
import Formulario from "./Formulario";


export default function ServiciosDetallados() {
  const [showForm, setShowForm] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  
  const paquetes = [
    {
      nombre: "Landing Page Profesional.",
      ideal: "Ideal para emprendedores, marcas personales y negocios pequeños.",
      incluye: [
        "Diseño moderno y responsive",
        "1 página completa (Onepage)",
        "Secciones: Inicio, Servicios, Sobre mí, Contacto",
        "Integración con WhatsApp",
        "Animaciones suaves",
        "Optimización básica SEO",
        /*"Entrega en 5–7 días",*/
      ],
    },
    {
      nombre: "Sitio Web Completo (3–5 páginas).",
      ideal: "Perfecto para negocios que necesitan presencia sólida.",
      incluye: [
        "Diseño personalizado",
        "3 a 5 páginas",
        "Animaciones premium",
        "Formulario de contacto real",
        "Optimización SEO inicial",
        "Integración con redes sociales",
        "Hosting + dominio (opcional)",
        /*"Entrega en 10–15 días",*/
      ],
    },
    {
      nombre: "Tienda Online / E‑commerce.",
      ideal: "Para marcas que quieren vender online de forma profesional.",
      incluye: [
        "Catálogo de productos",
        "Carrito de compras",
        "Panel de administración",
        "Diseño responsive",
        "SEO para productos",
        "Integración con WhatsApp",
        "Capacitación para usar la tienda",
        /*"Entrega en 15–20 días",*/
      ],
    },
  ];

  return (
    <section id="servicios-detallados" className="servicios-detallados">
      <div className="servicios-detallados-header">
        <h2 className="section-title">Servicios y paquetes</h2>
        <p>
          Trabajo con pocos proyectos a la vez para asegurar calidad, claridad y
          resultados reales para tu marca.
        </p>
      </div>

            

      <div className="paquetes-grid">
        {paquetes.map((p, i) => (
          <div key={i} className="paquete-card">
            <h3>{p.nombre}</h3>
            <p className="paquete-ideal">{p.ideal}</p>

            <ul className="paquete-lista">
              {p.incluye.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button
              className="btn-primary paquete-btn"
              onClick={() => {
                setServicioSeleccionado(p.nombre);
                setShowForm(true);
              }}
            >
              Completar formulario
            </button>
          </div>
        ))}
      </div>

      <div className="servicios-cta">
        <h3>¿Listo para llevar tu marca al siguiente nivel?</h3>
        <p>
          Contame sobre tu proyecto y armamos juntos la mejor opción para tu
          negocio.
        </p>

        <button
          className="btn-primary"
          onClick={() => {
            setServicioSeleccionado("Consulta general");
            setShowForm(true);
          }}
        >
          Completar formulario
        </button>
      </div>

      {showForm && (
        <Formulario
          servicio={servicioSeleccionado}
          paquete="Paquete seleccionado"
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
}
