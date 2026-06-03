import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  // Extraer ID del video para convertirlo en URL de Embed
  const getEmbedUrl = (inputUrl: string) => {
    let videoId = "HhZaHf8RP6g"; // Placeholder por defecto
    if (inputUrl) {
      if (inputUrl.includes('youtube.com/watch?v=')) {
        videoId = inputUrl.split('v=')[1]?.split('&')[0] || videoId;
      } else if (inputUrl.includes('youtu.be/')) {
        videoId = inputUrl.split('youtu.be/')[1]?.split('?')[0] || videoId;
      } else if (inputUrl.includes('youtube.com/shorts/')) {
        videoId = inputUrl.split('youtube.com/shorts/')[1]?.split('?')[0] || videoId;
      } else if (inputUrl.includes('youtube.com/embed/')) {
        return inputUrl; 
      }
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const finalEmbedUrl = getEmbedUrl(url);

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-2xl">
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
          <iframe 
            className="w-full h-full border-0"
            src={finalEmbedUrl}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
