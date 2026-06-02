import React from 'react';
import { GlassButton } from '../components/GlassButton';
import { useNavigate } from 'react-router-dom';
import { useGamificationStore } from '../store/useGamificationStore';
import { RefreshCcw } from 'lucide-react';

export const QrCode: React.FC = () => {
  const navigate = useNavigate();
  const { reset } = useGamificationStore();

  const handleRestart = () => {
    reset();
    navigate('/');
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 z-10 relative">
      <h1 className="text-5xl font-bold tracking-tight text-white mb-12 drop-shadow-lg text-center">
        Da el Siguiente Paso
      </h1>

      <div className="glass-panel p-16 max-w-md w-full flex flex-col items-center text-center gap-8 shadow-2xl">
        <p className="text-xl text-white/80 font-medium">Escanea este código para acceder a beneficios exclusivos e información detallada.</p>
        
        <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center shadow-inner overflow-hidden p-4">
          {/* Placeholder del código QR real */}
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://icontinental.edu.pe/" 
            alt="Código QR Continental" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <GlassButton variant="transparent" onClick={handleRestart} className="mt-8 flex items-center gap-2">
          <RefreshCcw size={18} />
          <span>Volver al Inicio</span>
        </GlassButton>
      </div>
    </div>
  );
};
