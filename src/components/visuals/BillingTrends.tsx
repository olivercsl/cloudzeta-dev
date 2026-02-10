import React from 'react';
import { motion } from 'framer-motion';

export const BillingTrends = () => {
  return (
    <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex items-center justify-center overflow-visible">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[70%] h-[70%] bg-gradient-to-tr from-purple-50/50 to-blue-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative w-full max-w-md flex flex-col gap-6">
        
        {/* 1. Spend Graph Card (Floating) */}
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6 relative overflow-hidden"
        >
           <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cloud Spend Trend</div>
                 <div className="text-sm font-bold text-gray-900">Optimization Impact</div>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-200">
                 -35%
              </div>
           </div>
           
           {/* Area Chart: High to Low */}
           <div className="relative h-32 w-full">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="spendGrad" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="#f87171" stopOpacity="0.2" /> {/* Red Start */}
                       <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" /> {/* Transition */}
                       <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" /> {/* Green End */}
                    </linearGradient>
                    <linearGradient id="spendLine" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="#ef4444" />
                       <stop offset="50%" stopColor="#6366f1" />
                       <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                 </defs>
                 
                 {/* Fill Area */}
                 <path d="M0 50 L0 10 C 20 10, 30 15, 40 30 C 50 45, 60 40, 100 45 L 100 50 Z" fill="url(#spendGrad)" />
                 
                 {/* Stroke Line */}
                 <path d="M0 10 C 20 10, 30 15, 40 30 C 50 45, 60 40, 100 45" fill="none" stroke="url(#spendLine)" strokeWidth="3" strokeLinecap="round" />
                 
                 {/* Optimization Point Marker */}
                 <circle cx="40" cy="30" r="3" fill="#6366f1" stroke="white" strokeWidth="2" />
              </svg>

              {/* Annotation Label */}
              <div className="absolute top-[40%] left-[32%] bg-indigo-600 text-white text-[9px] px-2 py-1 rounded shadow-lg transform -translate-y-full">
                 Architecture Review
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
              </div>
           </div>
        </motion.div>

        {/* 2. Consolidated Invoice Summary (Floating) */}
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="flex justify-between items-center bg-white/80 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-4"
        >
           <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                 <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-30">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-4 w-auto" />
                 </div>
                 <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" className="h-4 w-auto" />
                 </div>
                 <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-10">
                    <img src="https://cloudzeta.solutions/assets/alibaba_l.png" className="h-4 w-auto grayscale opacity-60" />
                 </div>
              </div>
              <div>
                 <div className="text-xs font-bold text-gray-900">Unified Invoice</div>
                 <div className="text-[10px] text-gray-500">3 Providers • 1 Bill</div>
              </div>
           </div>
           <div className="text-right">
              <div className="text-lg font-bold text-gray-900">$8,200</div>
              <div className="text-[10px] text-emerald-600 font-medium">Net 30 Terms</div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};
