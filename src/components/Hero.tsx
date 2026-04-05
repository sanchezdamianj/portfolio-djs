import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-animated opacity-40" />
      
      {/* Gradient orbs - subtle matrix green */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      
      {/* Subtle scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(16,185,129,0.015)_50%)] bg-[length:100%_4px] pointer-events-none" />
      
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal-style header */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-zinc-400 font-mono">{t('hero.available')}</span>
          </div>
          
          {/* Profile image with glow */}
          <div className="mb-8">
            <div className="relative inline-block group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-2 ring-white/10 group-hover:ring-emerald-500/30 transition-all duration-300">
                <img 
                  src="/profile-img.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-zinc-800 flex items-center justify-center hidden">
                  <span className="text-3xl md:text-4xl font-bold text-white/80">
                    DS
                  </span>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-full">
                <span className="text-xs font-mono text-emerald-400">10+ yrs</span>
              </div>
            </div>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">Damian Javier</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Sanchez
            </span>
          </h1>
          
          {/* Title */}
          <div className="mb-6 space-y-1">
            <p className="text-lg md:text-xl text-zinc-400 font-medium">
              {t('hero.senior')}
            </p>
            <p className="text-sm md:text-base text-emerald-500/80 font-mono">
              {t('hero.architect')}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                {t('hero.linkedin')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border border-white/10 rounded-lg font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/[0.02] text-sm"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {t('hero.github')}
              </span>
            </a>
            <a 
              href="/Damian Sanchez - Resume-1.pdf"
              download="Damian Sanchez - Resume.pdf"
              className="group px-6 py-3 border border-emerald-500/30 rounded-lg font-medium text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 text-sm"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('hero.resume')}
              </span>
            </a>
            <a 
              href={`mailto:${personalInfo.email}?subject=Dev%20Opportunity%20-%20Portfolio%20Contact`}
              className="group px-6 py-3 border border-emerald-500/30 rounded-lg font-medium text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 text-sm"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('hero.contact')}
              </span>
            </a>
          </div>
          
          {/* Stats / Quick info */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-mono">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-500">▸</span>
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-500">▸</span>
              <span>{t('hero.remote')}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-500">▸</span>
              <span>{t('hero.stack')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{t('hero.scroll')}</span>
          <div className="relative w-6 h-10 rounded-full border-2 border-zinc-700/50 bg-zinc-900/30">
            {/* Mouse wheel */}
            <motion.div 
              className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Scroll lines */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col gap-1">
              <motion.div 
                className="w-2 h-0.5 bg-emerald-500/30 rounded-full"
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-0.5 bg-emerald-500/50 rounded-full"
                animate={{ scaleX: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
