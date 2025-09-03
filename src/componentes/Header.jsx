import useScrollAnimation from "../hooks/useScrollAnimation.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const scrollY = useScrollAnimation();
  const isScrolled = scrollY > 50;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-2xl py-2 translate-y-0"
          : "bg-transparent py-0 -translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center md:gap-4 gap-2 cursor-pointer">
          <img
            src="icono.jpeg"
            alt="icono"
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl"
          />
          <h1
            className={`underline font-bold transition-all duration-500 ${
              isScrolled
                ? "md:text-xl text-gray-800"
                : "text-2xl text-white drop-shadow-lg"
            }`}
          >
            EL TENTADERO
          </h1>
        </div>

        {/* Menú normal en desktop */}
        <nav className="hidden md:flex md:space-x-6 space-x-3">
          <a
            href="#reseñas"
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? "text-gray-700 hover:text-red-600"
                : "text-white hover:text-red-300 drop-shadow-md"
            }`}
          >
            Reseñas
          </a>
          <a
            href="#menu"
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? "text-gray-700 hover:text-red-600"
                : "text-white hover:text-red-300 drop-shadow-md"
            }`}
          >
            Menú
          </a>
          <a
            href="#vinos"
            className={`font-medium transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? "text-gray-700 hover:text-red-600"
                : "text-white hover:text-red-300 drop-shadow-md"
            }`}
          >
            Vinos
          </a>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-4 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md text-gray-700"
              : "bg-black/80 text-white"
          }`}
        >
          <a
            href="#reseñas"
            className="font-medium hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Reseñas
          </a>
          <a
            href="#menu"
            className="font-medium hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Menú
          </a>
          <a
            href="#vinos"
            className="font-medium hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Vinos
          </a>
        </div>
      )}
    </header>
  );
}