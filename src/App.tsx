import React from 'react';

export default function App() {
  const WHATSAPP_URL = 'https://wa.me/5555991082555';
  const INSTAGRAM_URL = 'https://www.instagram.com/bahcarsm/';

  return (
    <main className="min-h-screen min-h-[100dvh] w-full bg-[#050505] text-white flex flex-col items-center justify-center px-4 py-8 sm:p-6 relative overflow-hidden select-none">
      {/* Sutil brilho de iluminação no fundo com a cor da marca */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#B8FF00]/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Logo Oficial da BahCar */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/bahcar-logo-white.png"
            alt="BahCar Logo"
            className="h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105"
          />
          <span
            className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-400 mt-2 font-['Montserrat',sans-serif]"
          >
            MOBILIDADE URBANA GAÚCHA
          </span>
        </div>

        {/* Texto solicitado */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-['Montserrat',sans-serif]">
          Site em desenvolvimento
        </h1>
        
        <p className="mt-3 text-base sm:text-lg text-neutral-400 font-normal">
          Em breve será lançado.
        </p>

        {/* Botões do WhatsApp e Instagram (idênticos ao design do site) */}
        <div className="flex items-center justify-center gap-5 mt-10">
          {/* Botão do Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram oficial BahCar"
            title="Instagram @bahcarsm"
            className="text-[#B8FF00] hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(184,255,0,0.65)] flex items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#B8FF00]/40 cursor-pointer active:scale-95 shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* Botão do WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp oficial BahCar"
            title="Conversar no WhatsApp"
            className="text-[#B8FF00] hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(184,255,0,0.65)] flex items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#B8FF00]/40 cursor-pointer active:scale-95 shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
