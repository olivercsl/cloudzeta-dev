import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-glass h-12' : 'bg-transparent h-16'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" className="font-semibold text-lg tracking-tight text-tx-primary">
          Cloudzeta
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-tx-primary/80">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#china" className="hover:text-accent transition-colors">China Access</a>
          <a href="#governance" className="hover:text-accent transition-colors">Governance</a>
          <a href="#contact" className="px-3 py-1.5 bg-tx-primary text-white rounded-full hover:bg-tx-primary/90 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
