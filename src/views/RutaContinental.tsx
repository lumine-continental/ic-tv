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
      <div className="w-full max-w-7xl aspect-video md:aspect-[21/9] glass-panel overflow-hidden shadow-2xl p-0 bg-transparent border-0 mb-8 mt-4">
        <div className="w-full h-full rounded-[24px] overflow-hidden bg-transparent relative flex items-center justify-center">
          <img 
            src="/imagen-ruta.jpg" 
            alt="Ruta Continental" 
            className="w-full h-full object-cover md:object-contain drop-shadow-2xl scale-105"
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
