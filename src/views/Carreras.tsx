import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { Building2, Laptop, Factory, HardHat, Briefcase, HeartPulse, BookOpen, X } from 'lucide-react';

const CarrerasMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        Modalidad de Estudio
      </h1>
      <div className="flex gap-12 max-w-md w-full">
        <div 
          onClick={() => navigate('presencial')}
          className="flex-1 glass-panel p-10 cursor-pointer flex flex-col items-center gap-6 active:scale-95 group transition-transform"
        >
          <div className="w-24 h-24 rounded-[32px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-105 transition-transform duration-500">
            <Building2 size={48} strokeWidth={1.5} className="text-white" />
          </div>
          <h2 className="text-2xl font-semibold tracking-wide">Presencial</h2>
        </div>
      </div>
    </div>
  );
};

const AreasMenu: React.FC = () => {
  const navigate = useNavigate();
  const areas = [
    { name: 'Ingeniería', icon: Factory }, 
    { name: 'Negocios', icon: Briefcase }, 
    { name: 'Salud', icon: HeartPulse }, 
    { name: 'Humanidades', icon: BookOpen }
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
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">Áreas Académicas</h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {areas.map(area => {
          const Icon = area.icon;
          return (
            <div 
              key={area.name} 
              onClick={() => navigate(area.name.toLowerCase())}
              className="glass-panel p-8 cursor-pointer flex items-center justify-start gap-6 group active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-[20px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{area.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const CatalogoCarreras: React.FC = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  
  const carreras = [
    { id: 1, nombre: 'Ing. Sistemas', desc: 'Desarrolla el software del futuro.', icon: Laptop },
    { id: 2, nombre: 'Ing. Industrial', desc: 'Optimiza procesos y recursos globalmente.', icon: Factory },
    { id: 3, nombre: 'Ing. Civil', desc: 'Construye la infraestructura del mañana.', icon: HardHat },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden z-10 relative">
      <div className="fixed top-10 right-10 z-[100]">
        <button 
          onClick={() => navigate('..')}
          className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-3 transition-colors border border-white/20 text-white font-medium active:scale-95 shadow-lg"
        >
          <span>Atrás</span>
          <X size={20} strokeWidth={2} />
        </button>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">Catálogo de Carreras</h1>
      
      <div className="flex gap-6 max-w-7xl overflow-x-auto pb-8 snap-x px-4 scrollbar-hide">
        {carreras.map((c) => {
          const Icon = c.icon;
          return (
            <div 
              key={c.id} 
              className="w-[280px] glass-panel p-8 flex flex-col items-center gap-6 snap-center shrink-0"
            >
              <div className="w-20 h-20 rounded-[24px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20">
                <Icon size={36} strokeWidth={1.5} className="text-white" />
              </div>
              <h3 className="text-xl text-center font-bold tracking-tight">{c.nombre}</h3>
              <p className="text-base text-center text-white/70 leading-relaxed font-medium flex-1">{c.desc}</p>
              <GlassButton variant="primary" showChevron onClick={() => setVideoUrl('https://youtu.be/HhZaHf8RP6g')} className="w-full !py-3 text-sm">
                Ver Detalles
              </GlassButton>
            </div>
          );
        })}
      </div>
      <VideoModal isOpen={!!videoUrl} onClose={() => setVideoUrl(null)} url={videoUrl || ''} />
    </div>
  );
};

export const Carreras: React.FC = () => {
  const { markVisited, unlockAchievement } = useGamificationStore();

  useEffect(() => {
    markVisited('carreras');
    unlockAchievement('Descubridor de Carreras');
  }, [markVisited, unlockAchievement]);

  return (
    <Routes>
      <Route index element={<CarrerasMenu />} />
      <Route path="presencial" element={<AreasMenu />} />
      <Route path="presencial/:area" element={<CatalogoCarreras />} />
    </Routes>
  );
};
