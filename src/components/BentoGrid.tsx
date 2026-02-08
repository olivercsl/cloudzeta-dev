import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Server, Activity } from 'lucide-react';

const tiles = [
  {
    span: "md:col-span-2",
    title: "China Connect Solution",
    desc: "Deliver digital content and enable smooth collaboration across the Great Firewall. Reliable, high-performance architecture built with top-tier vendors (Alibaba, Tencent) to keep your distributed teams connected.",
    icon: Globe,
  },
  {
    span: "md:col-span-1",
    title: "AWS Consolidated Billing",
    desc: "Improve cash flow with unified procurement. Access competitive rates and simplified account management.",
    icon: Activity,
  },
  {
    span: "md:col-span-1",
    title: "Financial Security",
    desc: "Unwavering focus on compliance and data protection for financial services.",
    icon: ShieldCheck,
  },
  {
    span: "md:col-span-2",
    title: "Multi-Cloud Partnership",
    desc: "Certified experts for AWS, Microsoft Azure, Google Cloud, and Cloudflare. We handle the complexity of multi-vendor environments so you don't have to.",
    icon: Server,
  },
];

export const BentoGrid = () => {
  return (
    <section className="px-6 pb-32 max-w-7xl mx-auto bg-surface py-24 rounded-3xl my-24">
      <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-4">Capabilities.</h2>
         <p className="text-xl text-tx-secondary">Everything you need to ship.</p>
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
              bg-white rounded-3xl p-8 relative overflow-hidden group 
              shadow-sm hover:shadow-xl transition-all duration-500
              ${tile.span}
            `}
          >
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <tile.icon className="w-8 h-8 text-tx-primary mb-4" />
                <h3 className="text-2xl font-semibold text-tx-primary mb-2">{tile.title}</h3>
                <p className="text-tx-secondary text-lg font-medium leading-relaxed">
                  {tile.desc}
                </p>
              </div>
              
              <div className="mt-8">
                <span className="text-sm font-semibold text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1">
                  Learn more <span>›</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
