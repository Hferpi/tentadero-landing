import useIntersectionObserver from "../hooks/useIterssectioObserver";
import { vinos } from "../enums/vinos";

export default function SeccionVinos() {
  const todosLosVinos = vinos;
  const [ref, isVisible] = useIntersectionObserver();

  const getTipoColor = (tipo) => {
    switch (tipo.toLowerCase()) {
      case 'tinto': return 'from-red-400 to-red-700 via-red-600';
      case 'blanco': return 'from-yellow-400 to-yellow-600';
      case 'rosado': return 'from-pink-400 to-pink-600';
      default: return 'from-purple-500 to-purple-700';
    }
  };
  return (
    <section
      id="vinos"
      ref={ref}
      className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-red-700 via-red-800 to-black text-white relative overflow-hidden"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Grid vinos */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {todosLosVinos.map((vino, index) => (
          <div
            key={index}
            className={`group relative transform transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
                <img 
                  src={vino.imagen} 
                  alt={vino.nombre}
                  className="w-full rounded-3xl h-full object-cover transition-transform duration-500 border-2 border-white"
                />
                
          
                
                
                {/* Badge del tipo de vino */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTipoColor(vino.tipo)} shadow-lg`}>
                  {vino.tipo}
                </div>
              </div>
            <div className="bg-stone-950/90 rounded-3xl mt-4 p-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                {vino.nombreVino}
              </h3>
              <div className="flex flex-wrap justify-between gap-2 mt-3 text-sm sm:text-base">
              
                <p>{vino.maduración}</p>
                <p>{vino.año}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
