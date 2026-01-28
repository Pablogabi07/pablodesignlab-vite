import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Logo + descripción */}
        <div className="footer-col">
          <img src={logo} alt="Pablo Design Lab" className="footer-logo" />
          <p className="footer-desc">
            Diseño web moderno, responsive y orientado a resultados.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h4>Menú</h4>
          <ul>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="mailto:tuemail@gmail.com">pablodesignlab@gmail.com</a>
            </li>

            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>

        {/* Columna 4: Redes */}
        <div className="footer-col">
          <h4>Redes</h4>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Pablo Design Lab © {new Date().getFullYear()} — Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
}
