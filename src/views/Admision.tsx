import React, { useEffect } from 'react';
import { useGamificationStore } from '../store/useGamificationStore';
import { Calendar, Gift, UserCheck, BookOpen, ArrowRight } from 'lucide-react';

export const Admision: React.FC = () => {
  const { markVisited } = useGamificationStore();

  useEffect(() => {
    markVisited('admision');
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-y-auto">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 drop-shadow-lg text-center mt-8 md:mt-0">
        Ruta de Admisión
      </h1>
      <p className="text-white/60 mb-10 text-center font-medium tracking-wide">Tu futuro comienza aquí. Sigue estos pasos clave.</p>
      
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        
        {/* Paso 1: Selección Previa */}
        <div className="glass-panel p-8 md:p-10 flex flex-col relative group hover:bg-white/10 transition-colors border-t-4 border-t-[#F0223A] shadow-2xl">
          <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#F0223A] text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-black/50">
            1
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Selección Previa</h2>
          <div className="flex items-center gap-2 mb-8 text-[#F0223A] font-medium text-sm">
            <UserCheck size={18} />
            <span>Exclusivo para estudiantes de 5.° de secundaria</span>
          </div>
          
          <div className="space-y-6 mb-8 flex-1">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Calendar className="text-white/80" size={24} />
              </div>
              <div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Cierre de Inscripciones</div>
                <div className="text-xl text-white font-bold">5 de julio</div>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-gradient-to-br from-[#F0223A]/20 to-[#F0223A]/5 border border-[#F0223A]/30 p-5 rounded-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(240,34,58,0.15)] relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(240,34,58,0.25)] transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0223A] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <Gift className="text-[#F0223A] shrink-0 mt-1" size={28} />
            <div>
              <div className="text-[#F0223A] text-xs font-black uppercase tracking-widest mb-1">Beneficio Exclusivo</div>
              <div className="text-lg text-white font-bold leading-tight">
                Ahorra <span className="text-[#F0223A] text-2xl font-black">S/ 100</span><br />
                <span className="text-white/80 font-medium text-sm">en inscripción y matrícula.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador Visual (Arrow) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-2xl text-black">
          <ArrowRight size={24} strokeWidth={3} />
        </div>

        {/* Paso 2: Inicio de Clases */}
        <div className="glass-panel p-8 md:p-10 flex flex-col relative group hover:bg-white/10 transition-colors border-t-4 border-t-emerald-500 shadow-2xl">
          <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl shadow-lg border-4 border-black/50">
            2
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Inicio General</h2>
          <div className="flex items-center gap-2 mb-8 text-emerald-400 font-medium text-sm">
            <BookOpen size={18} />
            <span>El comienzo de tu vida universitaria</span>
          </div>

          <div className="flex flex-col items-center justify-center bg-black/40 p-8 rounded-3xl border border-white/5 text-center flex-1 my-auto shadow-inner">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
              <Calendar className="text-emerald-400" size={36} />
            </div>
            <div className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-2">Inicio de clases</div>
            <div className="text-4xl text-white font-black tracking-tight drop-shadow-md">7 de septiembre</div>
          </div>
        </div>

      </div>
    </div>
  );
};
