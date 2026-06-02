import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { GraduationCap, Sparkles, X } from 'lucide-react';

const BecasMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        Programas de Becas
      </h1>
      <div className="flex gap-12 w-full max-w-4xl">
        <div 
          onClick={() => navigate('beca-18')}
          className="flex-1 glass-panel p-10 cursor-pointer flex flex-col items-center justify-center gap-6 group active:scale-95 transition-transform"
        >
          <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-500">
            <GraduationCap size={40} strokeWidth={1.5} className="text-white" />
          </div>
          <h2 className="text-2xl font-semibold">Beca 18</h2>
        </div>
        <div 
          onClick={() => navigate('excelencia')}
          className="flex-1 glass-panel p-10 cursor-pointer flex flex-col items-center justify-center gap-6 group active:scale-95 transition-transform"
        >
          <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-500">
            <Sparkles size={40} strokeWidth={1.5} className="text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-center">Excelencia</h2>
        </div>
      </div>
    </div>
  );
};

const BecaDetalle: React.FC<{ title: string; desc: string; videoUrl: string }> = ({ title, desc, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
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

      <div className="glass-panel p-12 max-w-4xl w-full text-center flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center shadow-inner border border-white/20">
          {title.includes('18') ? <GraduationCap size={40} className="text-white" /> : <Sparkles size={40} className="text-white" />}
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-medium">{desc}</p>
        <GlassButton variant="primary" showChevron onClick={() => setIsOpen(true)} className="mt-4 !px-10 !py-3 text-sm">
          Ver Testimonio
        </GlassButton>
      </div>

      <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} url={videoUrl} />
    </div>
  );
};

export const Becas: React.FC = () => {
  const { markVisited, unlockAchievement } = useGamificationStore();

  useEffect(() => {
    markVisited('becas');
    unlockAchievement('Buscador de Oportunidades');
  }, [markVisited, unlockAchievement]);

  return (
    <Routes>
      <Route index element={<BecasMenu />} />
      <Route 
        path="beca-18" 
        element={<BecaDetalle 
          title="Beca 18" 
          desc="Oportunidad integral para jóvenes talentos de todo el país. Cubre costos académicos, alimentación, movilidad y materiales de estudio." 
          videoUrl="https://youtu.be/HhZaHf8RP6g" 
        />} 
      />
      <Route 
        path="excelencia" 
        element={<BecaDetalle 
          title="Beca Excelencia" 
          desc="Premia tu esfuerzo académico durante la secundaria con descuentos especiales y beneficios exclusivos en tu carrera profesional." 
          videoUrl="https://youtu.be/HhZaHf8RP6g" 
        />} 
      />
    </Routes>
  );
};
