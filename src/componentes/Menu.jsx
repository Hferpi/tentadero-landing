import useIntersectionObserver from "../hooks/useIterssectioObserver";

export default function Menu() {
    const [ref, isVisible] = useIntersectionObserver();
    
    const platos = [
      { 
        nombre: "Nuestras tablas", 
        desc: "Embutidos y quesos de origen, calidad y sabor.",
        icon: "🥓"
      },
      { 
        nombre: "Hamburguesas", 
        desc: "Hamburguesas de cecina toro y vaca morucha de 200 gramos, acompañadas de patatas.",
        icon: "🍔"
      },
    
      { 
        nombre: "Del mar", 
        desc: "Pulpo tierno, zamburiñas, boquerones, calamares, mejillones al vapor.",
        icon: "🐙"
      },
      { 
        nombre: "Bebidas", 
        desc: "Tenemso una gama amplia de vinos selectos, sabrosos e intensos. Y cerevezas bien frias",
        icon: "🍷"
      }
    ];
  
    return (
      <section 
        id="menu" 
        ref={ref}
        className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent mb-4">
              Nuestros platos estrella
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platos.map((plato, i) => (
              <div
                key={i}
                className={`group relative text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Gradiente de fondo al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {plato.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors duration-300">
                    {plato.nombre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {plato.desc}
                  </p>
                </div>
                
                {/* Efecto de brillo */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }