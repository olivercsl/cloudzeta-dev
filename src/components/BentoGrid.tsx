import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Server, Activity, Lock, Cloud } from 'lucide-react';

const tiles = [
  {
    span: "md:col-span-2",
    title: "AWS Cloud Solutions",
    desc: "Full access to AWS services at competitive rates. We handle procurement, account setup, and ongoing local support.",
    icon: Server,
  },
  {
    span: "md:col-span-1",
    title: "Microsoft Licensing",
    desc: "Save on M365 and Azure. Right-fit licensing for your team size.",
    icon: Activity,
  },
  {
    span: "md:col-span-1",
    title: "Cloudflare",
    desc: "Enterprise-grade protection and performance for your web assets.",
    icon: ShieldCheck,
  },
  {
    span: "md:col-span-2",
    title: "China Connect Solution",
    desc: "Deliver digital content and enable smooth collaboration across China. Built with Alibaba Cloud CEN & Tencent AIA.",
    icon: Globe,
  },
  {
    span: "md:col-span-1",
    title: "Fortinet",
    desc: "Secure networking hardware and software licensing.",
    icon: Lock,
  },
  {
    span: "md:col-span-1",
    title: "Alibaba Cloud",
    desc: "Premier partner for China-inclusive cloud architecture.",
    icon: Cloud,
  },
  {
    span: "md:col-span-1",
    title: "Google Cloud",
    desc: "GCP procurement and specialized data workload support.",
    icon: Zap,
  },
];

export const BentoGrid = () => {
  return (
    <section className="px-6 pb-32 max-w-7xl mx-auto bg-surface py-24 rounded-3xl my-24 border border-glass-border">
      <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-4">Our Services.</h2>
         <p className="text-xl text-tx-secondary">Procurement, licensing, and managed solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {tiles.map((tile, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`
              bg-white rounded-2xl p-8 relative overflow-hidden group 
              shadow-sm hover:shadow-xl transition-all duration-500 border border-glass-border
              ${tile.span}
            `}
          >
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-tx-primary">
                    <tile.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-tx-primary">{tile.title}</h3>
                </div>
                <p className="text-tx-secondary text-base leading-relaxed">
                  {tile.desc}
                </p>
              </div>
              
              <div className="mt-6">
                <span className="text-sm font-semibold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1">
                  View details <span>›</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
