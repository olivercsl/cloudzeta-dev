import React from 'react';
import { motion } from 'framer-motion';

export const FeatureSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-6">Global Performance</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-6">China Connectivity, <br/>Solved.</h2>
            <p className="text-xl text-tx-secondary leading-relaxed mb-8">Ensure your global platforms—trading apps, exam portals, and SaaS tools—perform flawlessly for users in Mainland China.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Very low packet loss</li>
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Low latency routing</li>
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Regulatory compliance</li>
            </ul>
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">Check Coverage & Latency →</a>
          </div>
          <div className="relative h-[500px] bg-surface rounded-3xl overflow-hidden shadow-2xl border border-black/5" style={{ opacity: 0, transform: 'scale(0.9)' }}>
            <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] bg-gradient-to-tr from-blue-50/50 to-emerald-50/50 rounded-full blur-3xl opacity-60"></div>
              </div>
              <div className="relative w-full max-w-lg flex flex-col gap-4" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <div className="h-14 flex items-center justify-between px-6 bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-200">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none mb-0.5">CEN Status</div>
                      <div className="text-sm font-bold text-gray-900 leading-none">Global Acceleration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-emerald-600">Operational</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="group flex items-center justify-between p-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-28">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">US East</span>
                      </div>
                      <div className="flex flex-col items-center w-8 opacity-30 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">Shanghai</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">Premium</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-center justify-between p-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-28">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">Tokyo</span>
                      </div>
                      <div className="flex flex-col items-center w-8 opacity-30 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">Shanghai</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">Premium</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-center justify-between p-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-28">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">Singapore</span>
                      </div>
                      <div className="flex flex-col items-center w-8 opacity-30 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">Shenzhen</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">Premium</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-center justify-between p-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-28">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">London</span>
                      </div>
                      <div className="flex flex-col items-center w-8 opacity-30 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">Beijing</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">Premium</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-center justify-between p-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl hover:bg-white/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-28">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="text-sm font-medium text-gray-700">Sydney</span>
                      </div>
                      <div className="flex flex-col items-center w-8 opacity-30 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-gray-700">Guangzhou</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wider">Premium</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl">
                  <div className="mb-3 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Network Utilization</span>
                    <div className="flex gap-3">
                      <span className="text-[10px] text-gray-500 font-medium">Load: <span className="text-gray-900 font-bold">Balanced</span></span>
                    </div>
                  </div>
                  <div className="relative h-12 w-full overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="usageGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0 40 L0 30 C10 25 20 35 30 20 C40 5 50 15 60 25 C70 35 80 10 90 15 L100 20 L100 40 Z" fill="url(#usageGrad)"></path>
                      <path d="M0 30 C10 25 20 35 30 20 C40 5 50 15 60 25 C70 35 80 10 90 15 L100 20" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 relative h-[500px] bg-surface rounded-3xl overflow-hidden shadow-2xl border border-black/5" style={{ opacity: 0, transform: 'scale(0.9)' }}>
            <div className="relative w-full aspect-video md:h-[500px] md:aspect-auto flex items-center justify-center overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] bg-gradient-to-tr from-purple-50/50 to-blue-50/50 rounded-full blur-3xl opacity-60"></div>
              </div>
              <div className="relative w-full max-w-md flex flex-col gap-6">
                {/* Top: 6-month declining cost chart */}
                <div className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6 relative overflow-hidden" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cloud Spend Trend</div>
                      <div className="text-sm font-bold text-gray-900">Optimization Impact</div>
                    </div>
                    <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-200">-35%</div>
                  </div>
                  <div className="relative h-32 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="spendGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#f87171" stopOpacity="0.2"></stop>
                          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="#34d399" stopOpacity="0.2"></stop>
                        </linearGradient>
                        <linearGradient id="spendLine" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ef4444"></stop>
                          <stop offset="50%" stopColor="#6366f1"></stop>
                          <stop offset="100%" stopColor="#10b981"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0 50 L0 10 C 20 10, 30 15, 40 30 C 50 45, 60 40, 100 45 L 100 50 Z" fill="url(#spendGrad)"></path>
                      <path d="M0 10 C 20 10, 30 15, 40 30 C 50 45, 60 40, 100 45" fill="none" stroke="url(#spendLine)" strokeWidth="3" strokeLinecap="round"></path>
                      <circle cx="40" cy="30" r="3" fill="#6366f1" stroke="white" strokeWidth="2"></circle>
                    </svg>
                    <div className="absolute top-[40%] left-[32%] bg-indigo-600 text-white text-[9px] px-2 py-1 rounded shadow-lg transform -translate-y-full">
                      Architecture Review
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom: Unified invoice */}
                <div className="flex justify-between items-center bg-white/80 backdrop-blur-md border border-white/60 shadow-lg rounded-xl p-4" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-30">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-4 w-auto"/>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-20">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" className="h-4 w-auto"/>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-10">
                        <img src="/assets/alibaba_l.png" className="h-4 w-auto grayscale opacity-60"/>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Unified Invoice</div>
                      <div className="text-[10px] text-gray-500">3 Providers • 1 Bill</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">$10,500</div>
                    <div className="text-[10px] text-emerald-600 font-medium">Net 30 Terms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2" style={{ opacity: 0, transform: 'translateX(50px)' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-6">Operational Efficiency</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-tx-primary mb-6">Unified Cloud Procurement.</h2>
            <p className="text-xl text-tx-secondary leading-relaxed mb-8">Consolidate your AWS, Azure, and Alibaba Cloud spend. We handle the complexity of multi-vendor billing so you get a single, clear invoice with expert support.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Single currency invoice</li>
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Expert support</li>
              <li className="flex items-center gap-3 text-tx-primary font-medium">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>Cost visibility</li>
            </ul>
            <a href="#contact" className="text-indigo-600 font-semibold hover:underline">Get a Cost Audit →</a>
          </div>
        </div>
      </div>
    </section>
  );
};