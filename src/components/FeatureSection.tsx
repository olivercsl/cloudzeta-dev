import React from 'react';
import { motion } from 'framer-motion';

import { ChinaMap } from './visuals/ChinaMap';

export const FeatureSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Feature 1: China Connectivity */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-6">
              Global Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-6">
              China Connectivity, <br/>Solved.
            </h2>
            <p className="text-xl text-tx-secondary leading-relaxed mb-8">
              Ensure your global platforms—trading apps, exam portals, and SaaS tools—perform flawlessly for users in Mainland China. 
            </p>
            <ul className="space-y-4 mb-8">
              {['Very low packet loss', 'Low latency routing', 'Regulatory compliance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-tx-primary font-medium">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#china" className="text-blue-600 font-semibold hover:underline">Learn more about connectivity →</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-surface rounded-3xl overflow-hidden shadow-2xl border border-black/5"
          >
             <ChinaMap />
          </motion.div>
        </div>

        {/* Feature 2: Unified Procurement */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative h-[500px] bg-surface rounded-3xl overflow-hidden shadow-2xl border border-black/5"
          >
             {/* Abstract Billing Visual */}
             <div className="absolute inset-0 bg-gradient-to-bl from-gray-50 to-white"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Stacked Cards representing invoices */}
                <div className="relative w-64 h-80 bg-white rounded-xl shadow-xl border border-gray-100 p-6 transform rotate-6 translate-x-4"></div>
                <div className="relative w-64 h-80 bg-white rounded-xl shadow-xl border border-gray-100 p-6 transform -rotate-3 -translate-x-4 -translate-y-4 absolute top-1/2 left-1/2 -ml-32 -mt-40 flex flex-col justify-between">
                   <div className="space-y-4">
                     <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                     <div className="h-2 w-full bg-gray-100 rounded"></div>
                     <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                   </div>
                   <div className="space-y-2">
                     <div className="flex justify-between">
                       <div className="h-2 w-16 bg-gray-100 rounded"></div>
                       <div className="h-2 w-10 bg-green-100 rounded"></div>
                     </div>
                     <div className="h-10 w-full bg-tx-primary rounded-lg flex items-center justify-center text-white text-sm font-medium">Consolidated</div>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
              Operational Efficiency
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-6">
              Unified Cloud Procurement.
            </h2>
            <p className="text-xl text-tx-secondary leading-relaxed mb-8">
              Consolidate your AWS, Azure, and Alibaba Cloud spend. We handle the complexity of multi-vendor billing so you get a single, clear invoice with local support.
            </p>
            <ul className="space-y-4 mb-8">
              {['Single currency invoice', 'Local support team', 'Cost visibility'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-tx-primary font-medium">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#billing" className="text-indigo-600 font-semibold hover:underline">Streamline your billing →</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
