import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Alibaba Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/xa/Alibaba_Cloud_Logo.svg/2560px-Alibaba_Cloud_Logo.svg.png" }, // Using png for better compatibility/size control in this context if svg fails or is complex
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Cloudflare", url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" },
  { name: "Tencent Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tencent_Cloud_logo.svg/2560px-Tencent_Cloud_logo.svg.png" }
];

export const LogoStrip = () => {
  return (
    <section className="py-12 border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-tx-secondary mb-8">Trusted by global enterprises and built on top-tier infrastructure</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {logos.map((logo, i) => (
            <img 
              key={i} 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 md:h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
