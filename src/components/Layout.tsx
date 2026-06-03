import React, { useEffect, useState, useMemo } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, Trophy, CheckCircle, RefreshCcw, QrCode, X } from 'lucide-react';
import { GlassButton } from './GlassButton';
import { useGamificationStore } from '../store/useGamificationStore';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { achievements, visitedSections, reset } = useGamificationStore();
  
  const [lastAchievement, setLastAchievement] = useState<string | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    if (achievements.length > 0) {
      const latest = achievements[achievements.length - 1];
      setLastAchievement(latest);
      const timer = setTimeout(() => setLastAchievement(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [achievements]);

  // Verificar si se completó el progreso
  useEffect(() => {
    // Si quitamos el "home", quedan 6 secciones principales
    const mainSections = ['quienes-somos', 'becas', 'carreras', 'internacionalizacion', 'ruta-continental', 'empleabilidad'];
    const allVisited = mainSections.every(sec => visitedSections.includes(sec));
    if (allVisited && location.pathname === '/') {
      setShowCompletionModal(true);
    }
  }, [visitedSections, location.pathname]);

  const handleRestart = () => {
    reset();
    setShowCompletionModal(false);
    navigate('/');
  };

  const handleNextStep = () => {
    setShowCompletionModal(false);
    navigate('/qr');
  };

  const bgImage = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return "url('/bg-main.jpg')";
    if (path.includes('quienes-somos')) return "url('/bg-info.jpg')";
    if (path.includes('becas')) return "url('/bg_glass_1.jpg')";
    if (path.includes('carreras')) return "url('/bg_glass_2.jpg')";
    if (path.includes('internacionalizacion')) return "url('/bg_glass_3.jpg')";
    if (path.includes('ruta-continental')) return "url('/bg_glass_4.jpg')";
    if (path.includes('qr')) return "url('/bg-main.jpg')";
    return "url('/bg-main.jpg')";
  }, [location.pathname]);

  return (
    <div className="w-full h-full text-white overflow-hidden relative font-modern bg-black">
      <AnimatePresence mode="wait">
        <motion.div 
          key={bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: bgImage }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

      {location.pathname !== '/' && (
        <div className="fixed top-10 left-10 z-[100]">
          <button 
            onClick={() => navigate('/')}
            className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-3 transition-colors border border-white/20 text-white font-medium active:scale-95 shadow-lg"
          >
            <Home size={20} strokeWidth={2} />
            <span className="hidden md:inline font-medium">Inicio</span>
          </button>
        </div>
      )}

      <main className="w-full h-full absolute inset-0 z-10 flex flex-col items-center justify-center">
        <Outlet />
      </main>

      <AnimatePresence>
        {lastAchievement && (
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.9 }}
            animate={{ y: 48, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] glass-panel px-6 py-4 flex items-center gap-4 !rounded-[24px] max-w-sm w-full shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-[#e4000b]/20 flex items-center justify-center shrink-0 border border-[#e4000b]/30">
              <Trophy size={24} color="#e4000b" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-white/60 mb-0.5 font-semibold tracking-wider">NUEVO LOGRO</div>
              <div className="text-base font-bold">{lastAchievement}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Finalización */}
      <AnimatePresence>
        {showCompletionModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[200] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-8"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="glass-panel p-8 md:p-12 max-w-lg w-full flex flex-col items-center text-center gap-6 shadow-2xl"
            >
              <div className="absolute top-6 right-6">
                <button 
                  onClick={handleRestart}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20 active:scale-95"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-inner mt-2">
                <CheckCircle size={40} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">¡Exploración Completada!</h2>
                <p className="text-sm md:text-base text-white/70 font-medium">Has descubierto todas las áreas del ecosistema Continental.</p>
              </div>
              <div className="flex flex-col gap-3 w-full mt-2">
                <GlassButton variant="primary" onClick={handleNextStep} className="w-full !py-4 flex items-center justify-center gap-2 text-sm">
                  <QrCode size={20} />
                  <span>Siguiente Paso</span>
                </GlassButton>
                <GlassButton variant="transparent" onClick={handleRestart} className="w-full flex items-center justify-center gap-3">
                  <RefreshCcw size={20} />
                  <span>Reiniciar Exploración</span>
                </GlassButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
