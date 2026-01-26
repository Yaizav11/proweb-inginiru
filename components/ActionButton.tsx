
import React, { useState } from 'react';
import { MessageCircle, HardHat, Globe, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINKS } from '../constants';

interface ActionButtonProps {
  label: string;
  className?: string;
  isFullWidth?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, className = "", isFullWidth = false }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={`relative inline-flex flex-col gap-3 ${isFullWidth ? 'w-full' : ''}`}>
      {!showOptions ? (
        <button
          onClick={() => setShowOptions(true)}
          className={`${className} flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 group shadow-xl`}
        >
          <MessageCircle size={24} />
          <span>{label}</span>
          <ChevronDown size={20} className="opacity-50 group-hover:translate-y-1 transition-transform" />
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href={WHATSAPP_LINKS.ENGINEERING}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-950 text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:brightness-125 transition-all transform hover:scale-105 font-bold uppercase text-sm tracking-wider border border-white/10 shadow-lg flex-1"
          >
            <HardHat size={20} />
            Ingeniería
          </a>
          <a
            href={WHATSAPP_LINKS.WEB}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 transition-all transform hover:scale-105 font-bold uppercase text-sm tracking-wider shadow-lg flex-1"
          >
            <Globe size={20} />
            Páginas Web
          </a>
          <button 
            onClick={() => setShowOptions(false)}
            className="bg-slate-200 text-slate-500 p-5 rounded-2xl hover:bg-slate-300 transition-colors sm:aspect-square flex items-center justify-center"
            title="Cancelar"
          >
            <span className="sm:hidden font-bold uppercase text-xs">Cerrar</span>
            <span className="hidden sm:inline">✕</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
