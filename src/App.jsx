import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Menu from "./componentes/Menu";
import Reservas from "./componentes/Reservas";
import Footer from "./componentes/Footer";
import Reseñas from "./componentes/Reseñas";



function App() {
  return (
    <div className="min-h-screen">
    <Header />
    <Hero />
    <Reseñas />
    <Menu />
    <Reservas />
    <Footer />
   
  </div>
  );
}

export default App;
