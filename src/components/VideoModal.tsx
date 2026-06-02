import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string; // Ya no usamos la URL de youtube embebida porque YT bloquea. Usamos MP4 directo.
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Video local/CDN para asegurar la reproducción sin políticas de terceros
  const demoVideoMp4 = "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-2xl">
      {/* Botón de volver movido a la derecha */}
      <div className="fixed top-10 right-10 z-[300]">
        <button 
          onClick={onClose}
          className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center gap-3 transition-colors border border-white/20 text-white font-medium active:scale-95 shadow-lg"
        >
          <span>Cerrar</span>
          <X size={20} strokeWidth={2} />
        </button>
      </div>
      
      <div className="w-full max-w-6xl aspect-video glass-panel overflow-hidden shadow-2xl p-2 bg-white/5 border border-white/10">
        <div className="w-full h-full rounded-[24px] overflow-hidden bg-black relative shadow-inner">
          {/* Reproductor HTML5 Nativo. 100% confiable, sin políticas de origen cruzado de YT */}
          <video 
            className="w-full h-full object-cover"
            src={demoVideoMp4}
            controls={true}
            autoPlay={false} // A petición del usuario, sin autoplay
            playsInline
            poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
          >
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </div>
    </div>
  );
};
