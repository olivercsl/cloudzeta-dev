import React from 'react';
import { motion } from 'framer-motion';

export const BillingTrends = () => {
  return (
    <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[70%] h-[70%] bg-gradient-to-tr from-purple-50/50 to-blue-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative w-full max-w-md flex flex-col gap-6">
        
        {/* 1. Floating Spend Graph */}
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl p-6"
        >
           <div className="flex justify-between items-center mb-4">
              <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase">Monthly Cloud Spend</div>
                 <div className="text-sm font-bold text-gray-900">Optimization Impact</div>
              </div>
              <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">
                 -35%
              </div>
           </div>
           
           {/* Trend Chart: Up then Down */}
           <div className="relative h-24 w-full flex items-end gap-1.5">
              {/* Rising (Before) */}
              {[40, 45, 55, 65, 80, 95].map((h, i) => (
                 <div key={`rise-${i}`} className="flex-1 bg-red-100 rounded-t-sm relative group">
                    <div className="absolute bottom-0 w-full bg-red-200 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                 </div>
              ))}
              {/* Optimization Event Line */}
              <div className="w-[1px] h-full bg-indigo-500 border-l border-dashed border-indigo-300 relative">
                 <div className="absolute -top-6 -left-10 bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                    Review & Savings Plans
                 </div>
              </div>
              {/* Falling (After) */}
              {[70, 60, 50, 45, 42, 40].map((h, i) => (
                 <div key={`fall-${i}`} className="flex-1 bg-green-100 rounded-t-sm relative group">
                    <div className="absolute bottom-0 w-full bg-green-400 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                 </div>
              ))}
           </div>
        </motion.div>

        {/* 2. Floating Invoice Summary (Borderless look) */}
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="flex justify-between items-center bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl p-4"
        >
           <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-6 w-6 rounded-full bg-white border border-gray-100 p-1 object-contain" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" className="h-6 w-6 rounded-full bg-white border border-gray-100 p-1 object-contain" />
                 <img src="https://cloudzeta.solutions/assets/alibaba_l.png" className="h-6 w-6 rounded-full bg-white border border-gray-100 p-1 object-contain" />
              </div>
              <span className="text-xs font-semibold text-gray-600">Consolidated Invoice</span>
           </div>
           <div className="text-right">
              <div className="text-lg font-bold text-gray-900">$8,200</div>
              <div className="text-[10px] text-green-600">Paid • Net 30</div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};
