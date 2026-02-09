import React from 'react';
import { motion } from 'framer-motion';

export const GlobalMapVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
      
      {/* 1. Standard Dot Map (Directly on section background) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
         {/* Simple World Map Silhouette Placeholder - Using an SVG map for clarity */}
         <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-900 fill-current">
            <path d="M150,120 Q200,100 250,150 T300,350" stroke="currentColor" strokeWidth="20" strokeLinecap="round" opacity="0.5" /> {/* Americas */}
            <path d="M450,120 Q500,100 550,150 T550,300" stroke="currentColor" strokeWidth="20" strokeLinecap="round" opacity="0.5" /> {/* EMEA */}
            <path d="M650,120 Q750,100 850,150" stroke="currentColor" strokeWidth="20" strokeLinecap="round" opacity="0.5" /> {/* Asia */}
            <path d="M800,350 L850,380" stroke="currentColor" strokeWidth="20" strokeLinecap="round" opacity="0.5" /> {/* AUS */}
         </svg>
      </div>

      {/* 2. Connection Arcs (The Focus) */}
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* US -> China */}
        <NetworkArc start={{x: 200, y: 150}} end={{x: 750, y: 180}} />
        {/* UK -> China */}
        <NetworkArc start={{x: 480, y: 130}} end={{x: 750, y: 180}} delay={0.5} />
        {/* AUS -> China */}
        <NetworkArc start={{x: 850, y: 350}} end={{x: 750, y: 180}} delay={1.0} />
      </svg>

      {/* 3. Destination Node (China) */}
      <div className="absolute top-[36%] right-[25%] z-10 flex flex-col items-center">
         <div className="relative">
            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-500/50 z-10 relative"></div>
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
         </div>
         <div className="mt-2 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-md">
            <span className="text-xs font-bold text-gray-900">China Gateway</span>
         </div>
      </div>

      {/* 4. Origin Nodes */}
      <OriginNode label="New York" x="20%" y="30%" />
      <OriginNode label="London" x="48%" y="26%" />
      <OriginNode label="Sydney" x="85%" y="70%" />

      {/* 5. Metrics Card (Floating) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-4 flex gap-6"
      >
         <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">Packet Loss</div>
            <div className="text-sm font-bold text-gray-900">Very Low</div>
         </div>
         <div className="w-[1px] h-8 bg-gray-200"></div>
         <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">Connection</div>
            <div className="text-sm font-bold text-emerald-600">Stable</div>
         </div>
      </motion.div>

    </div>
  );
};

const NetworkArc = ({ start, end, delay = 0 }: { start: {x: number, y: number}, end: {x: number, y: number}, delay?: number }) => {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 80; // Arc height
  const path = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

  return (
    <>
      <path d={path} stroke="#cbd5e1" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      <path d={path} stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="opacity-50" />
      <circle r="3" fill="#2563eb">
        <animateMotion 
          dur="2s" 
          repeatCount="indefinite"
          path={path}
          begin={delay}
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
        />
      </circle>
    </>
  );
};

const OriginNode = ({ label, x, y }: { label: string, x: string, y: string }) => (
  <div className="absolute w-2 h-2 bg-slate-400 rounded-full" style={{ left: x, top: y }}>
     <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-500 whitespace-nowrap">{label}</span>
  </div>
);
