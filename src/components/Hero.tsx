import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Apple-style Product Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-tx-primary mb-6"
        >
          Secure Cloud. <br />
          <span className="text-tx-secondary">Built for Finance.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl font-medium text-tx-primary mb-10 text-balance max-w-2xl mx-auto"
        >
          High-performance connectivity for China and streamlined cloud procurement.
        </motion.p>
        
        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-6 text-lg md:text-xl font-medium"
        >
          <a href="#contact" className="text-accent hover:underline flex items-center gap-1">
            Start a project <span className="text-sm">›</span>
          </a>
          <a href="#services" className="text-accent hover:underline flex items-center gap-1">
            View capabilities <span className="text-sm">›</span>
          </a>
        </motion.div>

        {/* Abstract Product Visual (The "Device") */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
           {/* Main "Screen" */}
           <div className="relative aspect-[16/10] bg-surface rounded-2xl overflow-hidden shadow-2xl border border-black/5">
              {/* Abstract UI representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-surface to-white"></div>
              
              {/* Subtle grid lines */}
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1d1d1f 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
              
              {/* "Content" blocks */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-xl shadow-lg border border-black/5 flex items-center justify-center">
                 <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl mb-6 shadow-lg"></div>
                    <div className="h-4 w-48 bg-gray-100 rounded-full mx-auto mb-3"></div>
                    <div className="h-3 w-32 bg-gray-50 rounded-full mx-auto"></div>
                 </div>
              </div>
           </div>
           
           {/* Reflection */}
           <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/5 blur-xl rounded-[50%]"></div>
        </motion.div>

      </div>
    </section>
  );
};
