import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamificationStore } from '../store/useGamificationStore';
import { Info, GraduationCap, Building2, Globe, Map, Trophy, Briefcase } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { visitedSections, markVisited, unlockAchievement } = useGamificationStore();

  useEffect(() => {
    markVisited('home');
  }, [markVisited]);

  useEffect(() => {
    const mainSections = ['quienes-somos', 'becas', 'carreras', 'internacionalizacion', 'ruta-continental', 'empleabilidad'];
    const allVisited = mainSections.every(sec => visitedSections.includes(sec));
    if (allVisited) {
      unlockAchievement('Explorador Experto');
    }
  }, [visitedSections, unlockAchievement]);

  const menuItems = [
    { path: '/quienes-somos', label: 'Conócenos', icon: Info },
    { path: '/becas', label: 'Becas', icon: GraduationCap },
    { path: '/carreras', label: 'Carreras', icon: Building2 },
    { path: '/internacionalizacion', label: 'Global', icon: Globe },
    { path: '/ruta-continental', label: 'La Ruta', icon: Map },
    { path: '/empleabilidad', label: 'Empleabilidad', icon: Briefcase },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative z-10">
      
      {/* Logo Continental Minimalista */}
      <div className="mb-8 md:mb-10 shrink-0">
        <img 
          src="https://icontinental.edu.pe/wp-content/uploads/2026/01/ic-logo-png2@2x.png" 
          alt="Instituto Continental" 
          className="h-16 object-contain opacity-100 drop-shadow-2xl"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-3xl shrink-0">
        {/* 
          En pantallas pequeñas (vertical): Grid de 2 columnas (iconos cuadrados).
          En pantallas md/grandes (horizontal): Grid de 3 columnas (3x2).
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 place-items-center w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-[22.5%] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-transform duration-300 active:scale-95 group-active:opacity-70 shadow-sm hover:bg-white/15">
                  <Icon size={40} strokeWidth={1.5} className="text-white" />
                </div>
                <span className="text-sm font-medium text-white/90 tracking-wide text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progreso con iconos de trofeo */}
      <div className="mt-8 flex flex-col items-center gap-2 shrink-0">
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60">
          Progreso
        </span>
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, i) => {
            const progreso = Math.max(0, visitedSections.length - 1);
            const isCompleted = i < progreso;
            return (
              <div 
                key={i} 
                className={`transition-all duration-700 ${isCompleted ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110' : 'text-white/20'}`}
              >
                <Trophy size={20} strokeWidth={2} />
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  );
};
