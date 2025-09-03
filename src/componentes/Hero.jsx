import useScrollAnimation from "../hooks/useScrollAnimation.js";
import { products } from "./featured-products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import RandomPings from "./radom-pings"

export default function Hero() {
  const scrollY = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center py-10 text-center overflow-hidden">
      {/* Fondos con múltiples capas y efectos parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-black"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradiente secundario con movimiento */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-800/30 to-orange-600/40"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.2}deg)`,
        }}
      />

      {/* Overlay con múltiples patrones */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Patrón de puntos animado */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.6) 1px, transparent 1px),
            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px',
          transform: `translateX(${scrollY * 0.1}px) translateY(${scrollY * 0.05}px)`,
        }}
      />

      {/* Efectos de luz flotantes */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-red-500/20 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.001})`,
        }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-24 h-24 md:w-36 md:h-36 bg-orange-400/30 rounded-full blur-2xl"
        style={{
          transform: `translateY(${scrollY * 0.6}px) scale(${1 + scrollY * 0.0015})`,
        }}
      />

      {/* Contenido principal */}
      <div
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        {/* Título con efectos mejorados */}
        <div className=" lg:mb-8 md:mb-20 sm:mb-7 ">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-black text-white lg:m-6 md:m-5 sm:m-8">
            <span className=" inline-block mb-5">
              <span className="bg-gradient-to-r from-white via-red-100 via-white via-red-200 to-white bg-clip-text text-transparent animate-pulse bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                EL TENTADERO
              </span>
              {/* Efecto de brillo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/20 via-white/30 to-orange-400/20 blur-xl opacity-75 animate-pulse" />
            </span>
          </h1>
          
          
        </div>

        {/* Descripción mejorada */}
        <div className="lg:m-8 md:m-12 sm:m-4">
          <p className="sm:text-xl md:text-2xl lg:text-2xl text-white/95 max-w-4xl mx-auto mb-4 leading-relaxed font-light">
            Gastronomia ibérica en el corazón de Peñíscola🍷
          </p>
          <p className="text-base sm:text-lg md:text-xl text-red-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Disfruta de tablas auténticas con embutidos ibericos de primera calidad.
          </p>
        </div>

        {/* Botón mejorado */}
       
      </div>

      {/* Carousel mejorado con mejor responsive */}
      <div className="relative z-10 w-full  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10">
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem 
                  key={product.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"  
                >
                  <div className="group relative">
                    {/* Contenedor de imagen con efectos */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 sm:h-48 md:h-56 lg:h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Contenido de texto mejorado */}
                    <div className="mt-3 md:mt-4 text-left">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {product.description && (
                        <p className="mt-1 md:mt-2 text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      )}
                      
                      {/* Indicador de precio o categoría */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs text-red-400 font-medium">Especialidad</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
 
            {/* Controles mejorados */}
            <div className="hidden sm:block">
              <CarouselPrevious className="left-2 md:left-4 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all duration-300" />
              <CarouselNext className="right-2 md:right-4 bg-black/50 border-white/20 text-white hover:bg-black/70 hover:border-white/40 transition-all duration-300" />
            </div>
          </Carousel>
          
          
          {/* Indicadores de control para móvil */}
          <div className="flex sm:hidden justify-center mt-4 gap-2">
            <div className="text-xs text-white/60">Desliza para ver más →</div>
          </div>
        </div>
        
      </div>
      <div className="text-center m-8">
          <h3 className="text-2xl font-bold color-black">Ven a vernos</h3>
        </div>

      {/* Indicador de scroll mejorado */}
      <div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer group"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.01)
        }}
      >
        <div className="relative">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/80 rounded-full flex justify-center group-hover:border-red-300 transition-colors duration-300">
            <div className="w-1 h-2 md:h-3 bg-white/80 rounded-full mt-1.5 md:mt-2 animate-pulse group-hover:bg-red-300 transition-colors duration-300" />
          </div>
          <div className="absolute -inset-2 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </div>
        <p className="text-xs mt-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">Scroll</p>
      </div>

      {/* Partículas flotantes decorativas */}
      
<RandomPings />
    
    </section>
  );
}