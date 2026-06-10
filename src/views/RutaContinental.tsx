import React, { useState, useEffect } from 'react';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';

export const RutaContinental: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { markVisited } = useGamificationStore();

  useEffect(() => {
    markVisited('ruta-continental');
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 z-10 relative overflow-y-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 drop-shadow-lg text-center mt-8 md:mt-0">
        La Ruta Continental
      </h1>
      <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl font-medium mb-6 md:mb-8 text-center px-4">
        El camino de formación continua e internacionalización que te permite obtener grados académicos de alto nivel, empezando desde una formación técnica hasta alcanzar una maestría internacional.
      </p>

      <div className="w-full max-w-5xl aspect-[16/10] glass-panel overflow-hidden shadow-2xl p-2 bg-white/5 border border-white/10 mb-8 px-4 md:px-2">
        <div className="w-full h-full rounded-[24px] overflow-hidden bg-black/50 relative shadow-inner flex items-center justify-center">
          <img 
            src="/imagen-ruta.jpg" 
            alt="Ruta Continental" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <GlassButton variant="primary" showChevron className="!px-8 !py-3 text-sm mb-8 md:mb-0" onClick={() => setVideoUrl('https://www.youtube.com/watch?v=f_TunHaKeUY')}>
        Ver testimonio EC
      </GlassButton>

      <VideoModal isOpen={!!videoUrl} onClose={() => setVideoUrl(null)} url={videoUrl || ''} />
    </div>
  );
};
