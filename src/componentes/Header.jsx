import useScrollAnimation from "../hooks/useScrollAnimation.js";


export default function Header() {
  const scrollY = useScrollAnimation();
  const isScrolled = scrollY > 50;
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      
      ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-2xl py-2 translate-y-0'
        : 'bg-transparent py-0 -translate-y-full'
      }`}>
      
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        <div className="flex items-center md:gap-4 gap-2">
      <img src="icono.jpeg" alt="icono" className="w-10 h-10 md:w-14 md:h-14 rounded-xl" />
        <h1 className={`underline font-bold transition-all duration-500 ${
          isScrolled ? 'md:text-xl text-gray-800' : 'text-2xl text-white drop-shadow-lg'
        }`}>
          
          EL TENTADERO
        </h1>
        </div>
        <nav className="md:space-x-6 space-x-3">
        <a 
            href="#reseñas" 
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-300 drop-shadow-md'
            }`}
          >
            Reseñas
          </a>
          <a 
            href="#menu" 
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-300 drop-shadow-md'
            }`}
          >
            Menú
          </a>
          <a 
            href="#reservas" 
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-300 drop-shadow-md'
            }`}
          >
            Reservas
          </a>
        </nav>
      </div>
    </header>
  );
}