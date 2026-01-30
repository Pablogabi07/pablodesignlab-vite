import useFadeIn from "../hooks/useFadeIn";

export default function Servicios() {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="servicios"
      ref={ref}
      className={`servicios fade-in ${visible ? "visible" : ""}`}
      style={{ position: "relative" }}
    >
      <h2 className="section-title">Servicios</h2>

      {/* Texto SEO */}
      <p className="seo-texto">
        En Pablo Design Lab ofrezco soluciones de diseño web pensadas para
        emprendedores, marcas personales y negocios que buscan una presencia
        digital sólida. Creo landing pages, sitios completos y tiendas online
        con diseño moderno, responsive y optimizado para generar resultados
        reales. Cada proyecto se adapta a tus objetivos, con identidad visual
        profesional, experiencia de usuario fluida y compatibilidad total con
        dispositivos móviles.
      </p>

      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Diseño Web</h3>
          <p>Landing pages, sitios completos y diseños modernos.</p>
        </div>

        <div className="servicio-card">
          <h3>Responsive Design</h3>
          <p>Tu sitio se adapta perfectamente a cualquier dispositivo.</p>
        </div>

        <div className="servicio-card">
          <h3>Branding</h3>
          <p>Identidad visual, colores, tipografías y estilo profesional.</p>
        </div>

        <div className="servicio-card">
          <h3>Optimización UX</h3>
          <p>Experiencias fluidas, intuitivas y centradas en el usuario.</p>
        </div>
      </div>
    </section>
  );
}
