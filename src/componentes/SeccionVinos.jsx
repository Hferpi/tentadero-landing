import useIntersectionObserver from "../hooks/useIterssectioObserver";
import { vinos } from "../enums/vinos";

export default function SeccionVinos() {
  const todosLosVinos = vinos;

  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section id="vinos" ref={ref} className="py-20 px-8 bg-gradient-to-br from-red-700 via-red-800 to-black text-white relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className=" absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center max-w-7xl mx-auto ">
        {todosLosVinos.map((vinos, index) => (
          <div key={index} className={`group relative transform transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: `${index * 150}ms`}}>
            <img src={vinos.imagen} alt={vinos.nombre} className="hover:scale-103 hover:border-2 rounded-3xl border-1 border-white " />
            <div className=" bg-stone-950 rounded-3xl mt-4 p-2"><h3 className="text-xl md:text-2xl font-bold text-center mt-2
            ">{vinos.nombreVino}</h3>
              <div className="flex justify-between gap-2 m-2"> <p>{vinos.tipo}</p>
                <p>{vinos.maduración}</p>
                <p>{vinos.año}</p></div></div>
          </div>
        ))}
      </div>

    </section>
  );
}