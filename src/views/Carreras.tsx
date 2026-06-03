import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { GlassButton } from '../components/GlassButton';
import { VideoModal } from '../components/VideoModal';
import { useGamificationStore } from '../store/useGamificationStore';
import { Building2, Laptop, HardHat, Briefcase, HeartPulse, X, Palette, Scissors, Stethoscope, Calculator, ChefHat, Landmark } from 'lucide-react';

const AREAS = [
  { name: 'Gestión y Negocios', slug: 'gestion-negocios', icon: Briefcase },
  { name: 'Diseño y Tecnología', slug: 'diseno-tecnologia', icon: Laptop },
  { name: 'Construcción y Diseño', slug: 'construccion-diseno', icon: HardHat },
  { name: 'Gastronomía', slug: 'gastronomia', icon: ChefHat },
  { name: 'Salud', slug: 'salud', icon: HeartPulse }
];

const ALL_CARRERAS = [
  { id: 1, area: 'gestion-negocios', nombre: 'Administración de Empresas', desc: 'Lidera organizaciones y gestiona recursos para el éxito empresarial global.', icon: Building2, videoUrl: 'https://www.youtube.com/watch?v=cT_W0dHJ-M0' },
  { id: 10, area: 'gestion-negocios', nombre: 'Administración de Negocios Bancarios', desc: 'Gestiona instituciones financieras e impulsa el crecimiento económico del país.', icon: Landmark, videoUrl: 'https://www.youtube.com/watch?v=q1bn8EjGKIM' },
  { id: 2, area: 'gestion-negocios', nombre: 'Contabilidad', desc: 'Domina las finanzas y toma decisiones estratégicas basadas en datos.', icon: Calculator, videoUrl: 'https://youtu.be/cj1pFbDqyYc' },
  { id: 4, area: 'diseno-tecnologia', nombre: 'Diseño de Modas', desc: 'Desarrolla colecciones de moda con visión global y altamente creativa.', icon: Scissors, videoUrl: 'https://www.youtube.com/watch?v=550YHk8FZaE' },
  { id: 5, area: 'diseno-tecnologia', nombre: 'Diseño Gráfico Publicitario', desc: 'Comunica visualmente mensajes estratégicos e impactantes.', icon: Palette, videoUrl: 'https://www.youtube.com/watch?v=SLPrKfNmsb0' },
  { id: 3, area: 'diseno-tecnologia', nombre: 'Desarrollo de Sistemas de Información', desc: 'Crea software, aplicaciones y soluciones tecnológicas del futuro.', icon: Laptop, videoUrl: 'https://www.youtube.com/watch?v=r2G3T7UvBLI' },
  { id: 11, area: 'construccion-diseno', nombre: 'Diseño de Interiores', desc: 'Crea ambientes estéticos y funcionales que mejoran la calidad de vida.', icon: Palette, videoUrl: 'https://www.youtube.com/watch?v=SDLarVZye8A' },
  { id: 6, area: 'construccion-diseno', nombre: 'Gestión de la Construcción', desc: 'Administra y dirige proyectos de infraestructura moderna de alto nivel.', icon: HardHat, videoUrl: 'https://www.youtube.com/watch?v=cMj1-9K1oTM' },
  { id: 9, area: 'gastronomia', nombre: 'Gastronomía', desc: 'Domina las técnicas culinarias y lidera negocios de restaurantes.', icon: ChefHat, videoUrl: 'https://www.youtube.com/watch?v=n3IPGUziV1A' },
  { id: 7, area: 'salud', nombre: 'Enfermería', desc: 'Brinda cuidado integral y humanizado para promover la salud.', icon: Stethoscope, videoUrl: '' },
  { id: 8, area: 'salud', nombre: 'Farmacia', desc: 'Asegura el uso racional de medicamentos y mejora la salud pública.', icon: HeartPulse, videoUrl: '' },
];

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
        {AREAS.map(area => {
          const Icon = area.icon;
          return (
            <div
              key={area.name}
              onClick={() => navigate(area.slug)}
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
  const { area } = useParams<{ area: string }>();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const currentArea = AREAS.find(a => a.slug === area);
  const carrerasFiltradas = ALL_CARRERAS.filter(c => c.area === area);

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
      <h1 className="text-4xl font-bold tracking-tight text-white mb-8 drop-shadow-lg">
        {currentArea ? `Carreras en ${currentArea.name}` : 'Catálogo de Carreras'}
      </h1>

      <div className="flex gap-6 max-w-7xl overflow-x-auto pb-8 snap-x px-4 scrollbar-hide">
        {carrerasFiltradas.length === 0 && (
          <div className="text-white/60 font-medium text-lg">No se encontraron carreras para esta área.</div>
        )}
        {carrerasFiltradas.map((c) => {
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
              {c.videoUrl ? (
                <GlassButton variant="primary" showChevron onClick={() => setVideoUrl(c.videoUrl)} className="w-full !py-3 text-sm">
                  Ver Detalles
                </GlassButton>
              ) : (
                <div className="w-full !py-3 px-6 rounded-full bg-white/5 border border-white/10 text-center text-sm text-white/50 font-medium">
                  Próximamente
                </div>
              )}
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
