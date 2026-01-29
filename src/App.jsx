import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Portfolio from "./components/Portfolio";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ServiciosDetallados from "./components/ServiciosDetallados";
import NubiWhatsAppButton from "./components/NubiWhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios /> {/* sección corta de servicios */}
      <ServiciosDetallados />
      {/* sección detallada con paquetes */}
      <Portfolio />
      <SobreMi />
      <Contacto />
      <Footer />
      <NubiWhatsAppButton/>
    </>
  );
}
