import React from 'react';
import { motion } from 'framer-motion';

export const HeroDashboard = () => {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      
      {/* Background Glows (instead of a box) */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[80%] h-[80%] bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Container - Floating Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full p-4 md:p-8"
      >
        
        {/* 1. Top Center: AWS/Cloud Badge */}
        <motion.div 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-white backdrop-blur-xl border border-white/50 shadow-xl shadow-indigo-100/50 rounded-2xl p-4 flex items-center gap-4 z-20"
        >
           <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-8 w-auto" alt="AWS" />
           <div className="h-8 w-[1px] bg-gray-100"></div>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-600">Systems Healthy</span>
           </div>
        </motion.div>

        {/* 2. Left Floating Card: Cost Savings */}
        <motion.div 
           initial={{ x: -40, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="absolute top-[35%] left-[5%] md:left-[10%] bg-white/90 backdrop-blur border border-white/60 shadow-lg rounded-2xl p-5 w-48 z-10"
        >
           <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                 </svg>
              </div>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">-24%</span>
           </div>
           <div className="text-[10px] text-gray-400 font-semibold uppercase">Cloud Spend</div>
           <div className="text-2xl font-bold text-gray-900">$12.4k</div>
           {/* Tiny Trend Line */}
           <div className="h-1 w-full bg-gray-100 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[70%]"></div>
           </div>
        </motion.div>

        {/* 3. Right Floating Card: Security Checklist */}
        <motion.div 
           initial={{ x: 40, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="absolute top-[30%] right-[0%] md:right-[5%] bg-white/90 backdrop-blur border border-white/60 shadow-lg rounded-2xl p-5 w-56 z-10"
        >
           <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <span className="text-xs font-bold text-gray-900">Security Audit</span>
           </div>
           <div className="space-y-2">
              {[
                 { label: 'Well-Architected', status: 'Pass' },
                 { label: 'Data Encryption', status: 'Pass' },
                 { label: 'IAM Policies', status: 'Pass' },
              ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{item.label}</span>
                    <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                       <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                 </div>
              ))}
           </div>
        </motion.div>

        {/* 4. Bottom Floating Card: Connectivity */}
        <motion.div 
           initial={{ y: 40, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="absolute bottom-[10%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-white/60 shadow-lg rounded-2xl p-4 w-[90%] md:w-[80%] flex items-center justify-between z-20"
        >
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <div>
                 <div className="text-[10px] font-bold text-gray-400 uppercase">Latency</div>
                 <div className="text-sm font-bold text-gray-900">China Optimized</div>
              </div>
           </div>
           
           <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                 Stable
              </span>
           </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
