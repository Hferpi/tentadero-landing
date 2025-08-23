import useIntersectionObserver from "../hooks/useIterssectioObserver";
import { useState } from "react";


export default function Reservas() {
    const [ref, isVisible] = useIntersectionObserver();
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      fecha: '',
      comensales: ''
    });
    
    const handleSubmit = () => {
      if (formData.nombre && formData.email && formData.fecha && formData.comensales) {
        alert('¡Reserva enviada! Te contactaremos pronto.');
      } else {
        alert('Por favor, completa todos los campos.');
      }
    };
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <section 
        id="reservas" 
        ref={ref}
        className="py-20 px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white relative overflow-hidden"
      >
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl font-bold mb-4">Reserva tu mesa</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Haz tu reserva con antelación y asegura tu experiencia gastronómica única.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mt-6" />
          </div>
          
          <div className={`max-w-md mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6">
              <div className="group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>
              
              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>
              
              <div className="group">
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>
              
              <div className="group">
                <input
                  type="number"
                  name="comensales"
                  placeholder="Número de comensales"
                  min="1"
                  max="12"
                  value={formData.comensales}
                  onChange={handleChange}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                className="group relative w-full bg-white text-red-700 px-6 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Enviar reserva</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  