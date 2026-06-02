import React, { useState, useEffect } from 'react';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { User, MapPin } from 'lucide-react';

interface CountryInfo {
  id: string;
  name: string;
  x: number;
  y: number;
  student: string;
  career: string;
  videoUrl: string;
}

const countries: CountryInfo[] = [
  { id: 'mx', name: 'México', x: 20, y: 40, student: 'Ana García', career: 'Ing. Sistemas', videoUrl: 'https://www.youtube.com/watch?v=HhZaHf8RP6g' },
  { id: 'co', name: 'Colombia', x: 25, y: 55, student: 'Carlos Ruiz', career: 'Administración', videoUrl: 'https://www.youtube.com/watch?v=HhZaHf8RP6g' },
  { id: 'fr', name: 'Francia', x: 52, y: 26, student: 'Marie Dupont', career: 'Ing. Industrial', videoUrl: 'https://www.youtube.com/watch?v=HhZaHf8RP6g' },
  { id: 'ad', name: 'Andorra', x: 46, y: 34, student: 'Joan Martí', career: 'Turismo', videoUrl: 'https://www.youtube.com/watch?v=HhZaHf8RP6g' },
];

export const Internacionalizacion: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { markVisited, unlockAchievement } = useGamificationStore();

  useEffect(() => {
    markVisited('internacionalizacion');
    unlockAchievement('Viajero Internacional');
  }, [markVisited, unlockAchievement]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        Internacionalización
      </h1>

      <div className="relative w-full max-w-6xl aspect-[21/9] glass-panel overflow-hidden">
        {/* Mapa con filtro de inversión */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover invert brightness-150"></div>

        {countries.map(c => (
          <div
            key={c.id}
            className="absolute flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform z-10"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
            onClick={() => setSelectedCountry(c)}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-white/20 rounded-full animate-ping"></div>
              <div className="w-8 h-8 bg-white/90 rounded-full shadow-lg border border-white flex items-center justify-center z-10">
                <MapPin size={16} color="#000" className="opacity-80" />
              </div>
            </div>
            {/* Tooltip 100% negro con texto blanco 100% visible */}
            <div className="mt-2 px-3 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap shadow-xl bg-black text-white border border-white/20 rounded-md">
              {c.name}
            </div>
          </div>
        ))}

        {selectedCountry && (
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-20">
            <div className="bg-black/85 backdrop-blur-[20px] rounded-[32px] border border-white/20 shadow-2xl p-6 md:p-8 max-w-xl w-full flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">{selectedCountry.name}</h2>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[28px] bg-white/10 border border-white/20 flex items-center justify-center shadow-inner mt-2">
                <User size={40} className="text-white md:w-12 md:h-12" strokeWidth={1} />
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-semibold">{selectedCountry.student}</h3>
                <p className="text-white/70 text-base md:text-lg mt-1 font-medium">{selectedCountry.career}</p>
              </div>
              <div className="flex gap-4 mt-4 w-full justify-center">
                <GlassButton variant="transparent" onClick={() => setSelectedCountry(null)} className="!px-6 !py-3 text-sm">Atrás</GlassButton>
                <GlassButton variant="primary" showChevron onClick={() => setVideoUrl(selectedCountry.videoUrl)} className="!px-6 !py-3 text-sm">Ver Testimonio</GlassButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <VideoModal isOpen={!!videoUrl} onClose={() => setVideoUrl(null)} url={videoUrl || ''} />
    </div>
  );
};
