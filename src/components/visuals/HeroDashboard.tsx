import React from 'react';
import { motion } from 'framer-motion';

export const HeroDashboard = () => {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[80%] h-[80%] bg-gradient-to-tr from-purple-100/40 to-blue-100/40 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Container - Floating Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full p-4 md:p-8 flex items-center justify-center"
      >
        
        {/* Main "Cost vs Performance" Card */}
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="relative bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-6 w-[340px] z-20"
        >
           <div className="flex justify-between items-center mb-6">
              <div>
                 <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Token Cost / 1M</div>
                 <div className="text-lg font-bold text-gray-900">Execution Layer</div>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
           </div>

           {/* Comparison Bars */}
           <div className="space-y-4">
              {/* Competitor */}
              <div>
                 <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                    <span>Claude 3.5 Sonnet</span>
                    <span>$3.00</span>
                 </div>
                 <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gray-300"
                    />
                 </div>
              </div>

              {/* Cloudzeta / Qwen */}
              <div>
                 <div className="flex justify-between text-xs font-medium text-gray-900 mb-1">
                    <span className="text-purple-700 font-bold">Cloudzeta Qwen3</span>
                    <span className="text-purple-700 font-bold">$0.40</span>
                 </div>
                 <div className="h-3 w-full bg-purple-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "13%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    />
                 </div>
              </div>
           </div>

           <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">Savings</span>
              <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">87% Lower Cost</span>
           </div>
        </motion.div>

        {/* Floating "Agent" Badge */}
        <motion.div 
           initial={{ x: 40, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="absolute top-[20%] right-[5%] bg-white/90 backdrop-blur border border-white/60 shadow-lg rounded-xl p-3 flex items-center gap-3 z-10"
        >
           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
           </div>
           <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Agent Logic</div>
              <div className="text-xs font-bold text-gray-900">Qwen3 Powered</div>
           </div>
        </motion.div>

        {/* Floating "Scale" Badge */}
        <motion.div 
           initial={{ x: -40, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="absolute bottom-[20%] left-[5%] bg-white/90 backdrop-blur border border-white/60 shadow-lg rounded-xl p-3 flex items-center gap-3 z-10"
        >
           <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
           </div>
           <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">Throughput</div>
              <div className="text-xs font-bold text-gray-900">1M+ Tokens/s</div>
           </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
