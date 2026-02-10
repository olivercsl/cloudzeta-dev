import React from 'react';
import { motion } from 'framer-motion';

export const GlobalMapVisual = () => {
  return (
    <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex flex-col md:block items-center justify-center overflow-visible">
      
      {/* 1. Map Container (Scales with width) */}
      <div className="relative w-full h-full min-h-[250px] md:min-h-[300px]">
          {/* Map SVG */}
          <svg className="w-full h-full text-slate-300" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             {/* Map Paths */}
             <path d="M150,100 C150,100 100,120 100,150 C100,180 150,200 150,250 C150,300 200,400 250,450 C250,450 300,350 300,300 C300,250 250,250 250,200 C250,150 350,100 350,100" />
             <path d="M450,150 C450,150 450,250 480,300 C510,350 550,400 550,400 C550,400 600,300 600,250 C600,200 550,200 550,150 C550,100 450,100 450,150" />
             <path d="M650,150 C650,150 700,200 750,200 C800,200 850,150 850,150 C850,150 800,100 750,100 C700,100 650,150 650,150" />
             <path d="M800,350 C800,350 820,380 850,380 C880,380 900,350 900,350 C900,350 850,330 800,350" />
             <path d="M350,100 C400,80 450,100 450,100" opacity="0.5" strokeDasharray="4 4" />
             <path d="M600,150 C620,150 650,150 650,150" opacity="0.5" strokeDasharray="4 4" />
          </svg>

          {/* Connection Lines (Overlay SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
              </linearGradient>
            </defs>
            <RoutePath start={{x: 250, y: 200}} end={{x: 750, y: 150}} delay={0} />
            <RoutePath start={{x: 480, y: 150}} end={{x: 750, y: 150}} delay={1} />
            <RoutePath start={{x: 850, y: 350}} end={{x: 750, y: 150}} delay={2} />
            <RoutePath start={{x: 850, y: 150}} end={{x: 750, y: 150}} delay={0.5} />
          </svg>

          {/* Floating Nodes (Absolute positioned %) */}
          {/* China Hub */}
          <div className="absolute top-[30%] right-[25%] z-10 flex flex-col items-center">
             <div className="relative">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10 relative"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
             </div>
             <div className="mt-2 px-2 py-0.5 md:px-3 md:py-1 bg-white/90 backdrop-blur border border-blue-100 rounded-full shadow-sm">
                <span className="text-[10px] md:text-xs font-bold text-blue-700">China Backbone</span>
             </div>
          </div>

          <SourceNode label="US" x="25%" y="40%" />
          <SourceNode label="UK" x="48%" y="30%" />
          <SourceNode label="AUS" x="85%" y="70%" />
          <SourceNode label="JP" x="85%" y="30%" />
      </div>

      {/* 5. Metrics Card (Floating, responsive) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative md:absolute md:bottom-4 md:left-4 mt-4 md:mt-0 w-full md:w-auto bg-white/90 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-4 flex justify-between md:justify-start gap-4 md:gap-6"
      >
         <div className="text-center md:text-left">
            <div className="text-[10px] uppercase font-bold text-gray-400">Packet Loss</div>
            <div className="text-sm font-bold text-gray-900">Very Low</div>
         </div>
         <div className="w-[1px] h-8 bg-gray-200"></div>
         <div className="text-center md:text-left">
            <div className="text-[10px] uppercase font-bold text-gray-400">Connection</div>
            <div className="text-sm font-bold text-emerald-600">Stable</div>
         </div>
      </motion.div>

    </div>
  );
};

const RoutePath = ({ start, end, delay }: { start: {x: number, y: number}, end: {x: number, y: number}, delay: number }) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50; 
  const path = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

  return (
    <>
      <path d={path} stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <circle r="3" fill="#3b82f6">
        <animateMotion dur="3s" repeatCount="indefinite" path={path} begin={delay} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
      </circle>
    </>
  );
};

const SourceNode = ({ label, x, y }: { label: string, x: string, y: string }) => (
  <div className="absolute w-2 h-2 bg-gray-300 rounded-full" style={{ left: x, top: y }}>
     <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-medium text-gray-400">{label}</span>
  </div>
);
