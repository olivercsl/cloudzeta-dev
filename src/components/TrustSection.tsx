import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "Uptime Guaranteed", value: "99.99%" },
  { label: "Global PoPs", value: "280+" },
  { label: "Support Response", value: "<15min" },
  { label: "Years Experience", value: "10+" },
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-surface-hover border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-tx-primary mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-sm font-medium text-tx-secondary uppercase tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications (Visual Placeholders for "Badge Density") */}
        <div className="text-center">
          <p className="text-sm font-medium text-tx-secondary mb-8">Certified for Enterprise Security & Compliance</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale">
             {/* AWS Certified */}
             <div className="h-16 w-32 bg-white rounded-lg border border-black/5 shadow-sm flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">AWS Certified</span>
             </div>
             {/* ISO 27001 Placeholder */}
             <div className="h-16 w-32 bg-white rounded-lg border border-black/5 shadow-sm flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">ISO 27001</span>
             </div>
             {/* Microsoft Gold */}
             <div className="h-16 w-32 bg-white rounded-lg border border-black/5 shadow-sm flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">Microsoft Gold</span>
             </div>
             {/* Cyber Essentials */}
             <div className="h-16 w-32 bg-white rounded-lg border border-black/5 shadow-sm flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">Cyber Safe</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
