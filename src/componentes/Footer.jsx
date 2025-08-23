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
              <p className="text-gray-300 mb-2">Calle Mayor 12, Peñíscola, España</p>
              <p className="text-gray-300">📞 +34 964 00 00 00</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Síguenos</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <span className="text-2xl hover:text-red-400 transition-colors cursor-pointer">📘</span>
                <span className="text-2xl hover:text-red-400 transition-colors cursor-pointer">📷</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 El Tentadero. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }