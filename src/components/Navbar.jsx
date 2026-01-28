import logo from "../assets/logo.png";
import useNavbarShrink from "../hooks/useNavbarShrink";
import { useState } from "react";

export default function Navbar() {
  const shrink = useNavbarShrink();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${shrink ? "shrink" : ""}`}>
      <div className="navbar-container">
        <img src={logo} alt="Pablo Design Lab" className="logo-img" />

        {/* Botón hamburguesa */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#servicios" onClick={() => setOpen(false)}>
            Servicios
          </a>
          <a href="#portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </a>
          <a href="#contacto" onClick={() => setOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
