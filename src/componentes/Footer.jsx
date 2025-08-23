export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              EL TENTADERO
            </h3>
            <p className="text-gray-300">
              Cocina tradicional ibérica en el corazón de Peñíscola
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contacto</h4>
            <p className="text-gray-300 mb-2">Av. del Dr. Don Marcelino Roca, 12598 Peniscola, Castellón</p>
            <p className="text-gray-300">📞 964 138 843</p>
            <p className="text-gray-300">📞 +34 622 346 594</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/el.tentadero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 text-white hover:text-red-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.346 3.608 1.32.975.975 1.259 2.242 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.346 2.633-1.32 3.608-.975.975-2.242 1.259-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.346-3.608-1.32-.975-.975-1.259-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.346-2.633 1.32-3.608.975-.975 2.242-1.259 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.127 4.602.404 3.635 1.37c-.967.967-1.243 2.147-1.3 3.417C2.012 6.668 2 7.078 2 10.337v3.326c0 3.259.012 3.669.07 4.949.057 1.27.333 2.45 1.3 3.417.967.967 2.147 1.243 3.417 1.3 1.28.058 1.689.07 4.949.07s3.669-.012 4.949-.07c1.27-.057 2.45-.333 3.417-1.3.967-.967 1.243-2.147 1.3-3.417.058-1.28.07-1.689.07-4.949v-3.326c0-3.259-.012-3.669-.07-4.949-.057-1.27-.333-2.45-1.3-3.417-.967-.967-2.147-1.243-3.417-1.3C15.669.012 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
              </div>

            </div>
            <h4 className="text-lg font-semibold text-red-400 mt-5">Horario</h4>
            <p className="text-gray-300">Lunes a Domigo: 12:00h - 16:00h y 19:00h - 01:00h</p>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 El Tentadero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}