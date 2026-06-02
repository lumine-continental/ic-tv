import React, { useState, useEffect } from 'react';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { Rocket, BrainCircuit, Target } from 'lucide-react';

export const RutaContinental: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { markVisited } = useGamificationStore();

  useEffect(() => {
    markVisited('ruta-continental');
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        La Ruta Continental
      </h1>

      <div className="w-full max-w-4xl glass-panel p-6 md:p-8 flex flex-col items-center text-center gap-4 md:gap-6">
        <div className="flex items-center justify-between w-full max-w-2xl px-4 md:px-8 my-4 relative">
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 -z-10 rounded-full"></div>
          
          {[
            { num: 1, label: 'Inicio', icon: Rocket },
            { num: 2, label: 'Desarrollo', icon: BrainCircuit },
            { num: 3, label: 'Éxito', icon: Target }
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex flex-col items-center gap-3 md:gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[16px] md:rounded-[20px] bg-white/10 border border-white/20 flex items-center justify-center z-10 shadow-inner">
                  <Icon size={24} className="text-white md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm tracking-widest uppercase text-white/80 font-semibold">{step.label}</span>
              </div>
            )
          })}
        </div>

        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-medium mt-2">
          La Ruta Continental es nuestra metodología probada para acompañarte desde tu primer día de clases hasta tu inserción exitosa en el mundo laboral global.
        </p>

        <GlassButton variant="primary" showChevron className="mt-4 !px-8 !py-3 text-sm" onClick={() => setVideoUrl('https://www.youtube.com/watch?v=HhZaHf8RP6g')}>
          Ver Explicación
        </GlassButton>
      </div>

      <VideoModal isOpen={!!videoUrl} onClose={() => setVideoUrl(null)} url={videoUrl || ''} />
    </div>
  );
};
