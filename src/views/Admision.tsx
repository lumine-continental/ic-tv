import React, { useEffect } from 'react';
import { useGamificationStore } from '../store/useGamificationStore';

export const Admision: React.FC = () => {
  const { markVisited } = useGamificationStore();

  useEffect(() => {
    markVisited('admision');
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-y-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg text-center mt-8 md:mt-0">
        Admisión
      </h1>
      
      <div className="w-full max-w-2xl glass-panel p-8 md:p-12 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">Inscripciones – Selección Previa</h2>
        
        <ul className="space-y-6 mb-10">
          <li className="flex flex-col">
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Dirigido a</span>
            <span className="text-lg text-white font-medium">Exclusivo para estudiantes de 5.° de secundaria</span>
          </li>
          <li className="flex flex-col">
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Fecha</span>
            <span className="text-xl text-white font-bold">5 de julio</span>
          </li>
          <li className="flex flex-col">
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Beneficio</span>
            <span className="text-xl text-[#F0223A] font-bold">Ahorra S/ 100 en inscripción y matrícula.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">Inicio general de clases</h2>
        <div className="text-xl text-white font-bold">
          7 de septiembre.
        </div>
      </div>
    </div>
  );
};
