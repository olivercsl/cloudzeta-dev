import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Alibaba Cloud", url: "https://cloudzeta.solutions/assets/alibaba_l.png" }, 
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Cloudflare", url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" },
  { name: "Tencent Cloud", url: "https://cloudzeta.solutions/assets/tencent_l.png" }
];

export const LogoStrip = () => {
  return (
    <section className="py-12 border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-tx-secondary mb-8">Trusted by global enterprises and built on top-tier infrastructure</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, i) => (
            <img 
              key={i} 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-125 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
