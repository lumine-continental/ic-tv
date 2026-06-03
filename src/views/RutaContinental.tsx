import React, { useState, useEffect } from 'react';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { GraduationCap, BookOpen, Globe2 } from 'lucide-react';

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

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 px-4">

        {/* Step 1 */}
        <div className="glass-panel p-6 flex flex-col h-full hover:bg-white/5 transition-all border-t-4 border-t-[#F0223A]">
          <div className="text-3xl font-black text-[#F0223A] mb-1 tracking-tighter">2 años</div>
          <h2 className="text-xl font-bold text-white mb-2">Bachiller Técnico</h2>
          <div className="flex items-center gap-2 mb-4 text-white/80 font-medium text-sm">
            <BookOpen size={18} className="text-[#F0223A]" />
            <span>Instituto Continental</span>
          </div>

          <div className="bg-black/30 text-white/90 text-xs px-3 py-2 rounded-lg mb-4 border border-white/5">
            Grado a nombre de la Nación registrado en Minedu.
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">Presencial</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">Semipresencial</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">A Distancia</span>
          </div>

          <p className="text-white/60 text-xs mt-auto leading-relaxed">
            Domina habilidades prácticas de alto impacto y consolida tu perfil con tres años de experiencia real en el mercado laboral.
          </p>
        </div>

        {/* Step 2 */}
        <div className="glass-panel p-6 flex flex-col h-full hover:bg-white/5 transition-all border-t-4 border-t-[#F0223A]">
          <div className="text-3xl font-black text-[#F0223A] mb-1 tracking-tighter">+1 año</div>
          <h2 className="text-xl font-bold text-white mb-2">Bachiller Profesional</h2>
          <div className="flex items-center gap-2 mb-4 text-white/80 font-medium text-sm">
            <GraduationCap size={18} className="text-[#F0223A]" />
            <span>Escuela Superior Continental</span>
          </div>

          <div className="bg-black/30 text-white/90 text-xs px-3 py-2 rounded-lg mb-4 border border-white/5">
            Grado a nombre de la Nación registrado en Sunedu.
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">Semipresencial</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">A Distancia</span>
          </div>

          <p className="text-white/60 text-xs mt-auto leading-relaxed">
            Potencia tu perfil técnico con capacidades de investigación e innovación y amplía tu visión hacia nuevos mercados.
          </p>
        </div>

        {/* Step 3 */}
        <div className="glass-panel p-6 flex flex-col h-full hover:bg-white/5 transition-all border-t-4 border-t-[#F0223A]">
          <div className="text-3xl font-black text-[#F0223A] mb-1 tracking-tighter">+1 año</div>
          <h2 className="text-xl font-bold text-white mb-2">Maestría Internacional</h2>
          <div className="flex items-center gap-2 mb-4 text-white/80 font-medium text-sm">
            <Globe2 size={18} className="text-[#F0223A]" />
            <span>EE.UU. y España</span>
          </div>

          <div className="bg-black/30 text-white/90 text-xs px-3 py-2 rounded-lg mb-4 border border-white/5">
            Reconocible en Sunedu.
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white font-medium">A Distancia</span>
          </div>

          <p className="text-white/60 text-xs mt-auto leading-relaxed">
            Especialízate y expande tus horizontes profesionales con nuestra red de universidades aliadas en Estados Unidos y España.
          </p>
        </div>

      </div>

      <GlassButton variant="primary" showChevron className="!px-8 !py-3 text-sm mb-8 md:mb-0" onClick={() => setVideoUrl('https://youtu.be/O6dp2FGI-aY')}>
        Ver Explicación
      </GlassButton>

      <VideoModal isOpen={!!videoUrl} onClose={() => setVideoUrl(null)} url={videoUrl || ''} />
    </div>
  );
};
