import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamificationStore } from '../store/useGamificationStore';
import { Briefcase, Percent, FileCheck, X } from 'lucide-react';

export const Empleabilidad: React.FC = () => {
  const navigate = useNavigate();
  const { markVisited, unlockAchievement } = useGamificationStore();

  useEffect(() => {
    markVisited('empleabilidad');
    unlockAchievement('Visionario Profesional');
  }, [markVisited, unlockAchievement]);

  const items = [
    { icon: Briefcase, text: '9 de cada 10 egresados están trabajando actualmente' },
    { icon: Percent, text: '+85% de nuestros estudiantes trabajan antes de terminar su carrera' },
    { icon: FileCheck, text: 'Contamos con una plataforma para evaluar tu CV' }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <div className="fixed top-10 right-10 z-[100]">
        <button
          onClick={() => navigate('..')}
          className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-3 transition-colors border border-white/20 text-white font-medium active:scale-95 shadow-lg"
        >
          <span>Atrás</span>
          <X size={20} strokeWidth={2} />
        </button>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 drop-shadow-lg">Empleabilidad</h1>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full px-4 items-stretch justify-center">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex-1 glass-panel p-8 md:p-10 text-center flex flex-col items-center justify-center gap-6 group hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <Icon size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-semibold">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
