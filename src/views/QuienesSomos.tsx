import React, { useState, useEffect } from 'react';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { PlayCircle, Award } from 'lucide-react';

export const QuienesSomos: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { markVisited } = useGamificationStore();

  useEffect(() => {
    markVisited('quienes-somos');
  }, [markVisited]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        Conócenos
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-5xl w-full">
        <div className="flex-1 glass-panel p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20">
            <PlayCircle size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Video Institucional</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">Conoce al Instituto Continental. Descubre por qué somos tu mejor opción.</p>
          </div>
          <GlassButton variant="primary" showChevron onClick={() => setVideoUrl('https://youtu.be/f_TunHaKeUY')} className="w-full max-w-sm mt-2 !py-3 text-sm">
            Reproducir Video
          </GlassButton>
        </div>

        <div className="flex-1 glass-panel p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20">
            <Award size={32} strokeWidth={1.5} className="text-white md:w-10 md:h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Somos parte de CIE</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">Continental International Education es la unión de las mejores experiencias en licenciaturas, carreras técnicas, associate degrees, posgrados, educación continua e idiomas.</p>
          </div>
          <GlassButton variant="primary" showChevron onClick={() => setVideoUrl('https://youtu.be/55w101CL1u0')} className="w-full max-w-sm mt-2 !py-3 text-sm">
            Reproducir Video
          </GlassButton>
        </div>
      </div>

      <VideoModal
        isOpen={!!videoUrl}
        onClose={() => setVideoUrl(null)}
        url={videoUrl || ''}
      />
    </div>
  );
};
