import React from 'react';
import { motion } from 'framer-motion';

export const ChinaDashboard = () => {
  return (
    <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[80%] h-[80%] bg-gradient-to-tr from-blue-50/50 to-emerald-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Main Dashboard Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Live Status</div>
                <div className="text-sm font-bold text-gray-900 leading-none">Global Acceleration</div>
              </div>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-xs font-semibold text-emerald-600">Active</span>
           </div>
        </div>

        {/* Route Table */}
        <div className="p-2">
           <div className="space-y-1">
              <RouteRow from="US East" to="Shanghai" ms="135ms" flag1="🇺🇸" flag2="🇨🇳" />
              <RouteRow from="Tokyo" to="Shanghai" ms="28ms" flag1="🇯🇵" flag2="🇨🇳" />
              <RouteRow from="Singapore" to="Shenzhen" ms="35ms" flag1="🇸🇬" flag2="🇨🇳" />
              <RouteRow from="London" to="Beijing" ms="145ms" flag1="🇬🇧" flag2="🇨🇳" />
              <RouteRow from="Sydney" to="Guangzhou" ms="120ms" flag1="🇦🇺" flag2="🇨🇳" />
           </div>
        </div>

        {/* Footer Stats */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Packet Loss</span>
              <span className="text-xs font-bold text-gray-900">0.02% (Avg)</span>
           </div>
           <div className="h-6 w-[1px] bg-gray-200"></div>
           <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Throughput</span>
              <span className="text-xs font-bold text-gray-900">10 Gbps</span>
           </div>
        </div>

      </motion.div>
    </div>
  );
};

const RouteRow = ({ from, to, ms, flag1, flag2 }: { from: string, to: string, ms: string, flag1: string, flag2: string }) => (
  <div className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
     <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 w-28">
           <span className="text-lg">{flag1}</span>
           <span className="text-sm font-medium text-gray-700">{from}</span>
        </div>
        
        {/* Animated Arrow */}
        <div className="flex flex-col items-center w-12 opacity-30 group-hover:opacity-100 transition-opacity">
           <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
           </svg>
        </div>

        <div className="flex items-center gap-2">
           <span className="text-lg">{flag2}</span>
           <span className="text-sm font-medium text-gray-700">{to}</span>
        </div>
     </div>

     <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-gray-900 font-mono">{ms}</span>
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
           <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </div>
     </div>
  </div>
);
