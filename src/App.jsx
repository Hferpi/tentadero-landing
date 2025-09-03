import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import Reseñas from "./componentes/Reseñas";
import SeccionVinos from "./componentes/SeccionVinos";



function App() {
  return (
    <div className="min-h-screen">
    <Header />
    <Hero />
    <Reseñas />
    <Menu />
    <SeccionVinos />
    <Footer />
   
  </div>
  );
}

export default App;
