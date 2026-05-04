import { useState, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIterssectioObserver";
import { products } from "./featured-products";

export default function Menu() {
    const [ref, isVisible] = useIntersectionObserver();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Bloquear scroll del cuerpo cuando el modal está abierto
    useEffect(() => {
      if (selectedCategory) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      // Limpieza al desmontar el componente
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [selectedCategory]);
    
    const platos = [
      { 
        nombre: "Nuestras tablas", 
        desc: "Embutidos y quesos de origen, calidad y sabor.",
        icon: "🥓",
        keywords: ["Tabla"]
      },
      { 
        nombre: "Hamburguesas", 
        desc: "Hamburguesas de cecina toro y vaca morucha de 200 gramos, acompañadas de patatas.",
        icon: "🍔",
        keywords: ["Hamburgesa"]
      },
    
      { 
        nombre: "Del mar", 
        desc: "Pulpo tierno, zamburiñas, boquerones, calamares, mejillones al vapor.",
        icon: "🐙",
        keywords: ["Boquerones",  "Calamares", "Mejillones", "Pulpo", ]
      },
      { 
        nombre: "Tapas", 
        desc: "Variedad de tapas tradicionales y creativas para compartir.",
        icon: "🍤",
        keywords: ["Bravas","Huevos", "Torreznos"]
      }
    ];

    const getFilteredProducts = (keywords) => {
      if (keywords.length === 0) return [];
      return products.filter(product => 
        keywords.some(keyword => product.name.includes(keyword))
      );
    };
  
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
                onClick={() => plato.keywords.length > 0 && setSelectedCategory(plato)}
                className={`group relative text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
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

        {/* Modal Bonito */}
        {selectedCategory && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedCategory(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl transform animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCategory.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedCategory.nombre}</h3>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Contenido Modal */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {getFilteredProducts(selectedCategory.keywords).map((product) => (
                    <div key={product.id} className="group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
                        {product.description && (
                          <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {getFilteredProducts(selectedCategory.keywords).length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <p>Cargando información del menú...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }