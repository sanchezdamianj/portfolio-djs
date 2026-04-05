import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { aboutContent, skills } from '../data/portfolio';
import type { SkillBadgeColor } from '../data/portfolio';
import { techIcons } from './icons/techIcons';
import { fadeInUp, staggerContainer, staggerTags } from './variants';
import { useCountUp } from '../hooks/useCountUp';

const badgeColors: Record<SkillBadgeColor, { bg: string; text: string; border: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30'
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/30'
  },
  rose: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    border: 'border-rose-500/30'
  }
};

// Category icons as inline SVGs
const categoryIcons: Record<SkillBadgeColor, React.ReactNode> = {
  emerald: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  blue: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  purple: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  amber: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  rose: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
};

// Generic dot for technologies without specific icons
const GenericDot: React.FC<{ color: string }> = ({ color }) => (
  <span 
    className="w-2 h-2 rounded-full flex-shrink-0" 
    style={{ backgroundColor: color }}
  />
);

// Animated counter using useCountUp hook
const AnimatedCounter: React.FC<{ 
  end: number; 
  duration?: number;
}> = ({ end, duration = 2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const count = useCountUp(end, (duration || 2) * 1000, 0, isInView);
  
  return <span ref={ref}>{count}</span>;
};

const StatCard: React.FC<{
  value: number;
  label: string;
  suffix?: string;
  accent?: boolean;
  delay: number;
}> = ({ value, label, suffix, accent, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`card p-5 text-center group ${
        accent 
          ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent' 
          : 'hover:border-emerald-500/30'
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${accent ? 'text-emerald-400' : 'text-gradient-green'}`}>
        <AnimatedCounter end={value} />{suffix}
      </div>
      <div className="text-sm text-zinc-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'es';
  
  return (
    <section id="about" className="section-padding bg-zinc-950 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/3 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-emerald-500 text-sm">01</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest">{t('nav.about')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('about.title')}
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Bio */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="card p-8 relative overflow-hidden group"
              variants={fadeInUp}
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-2 mb-6">
                <span className="terminal-dot" />
                <span className="text-zinc-500 text-sm font-mono">{t('about.bio')}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed whitespace-pre-line text-base">
                {aboutContent[lang]}
              </p>
            </motion.div>
            
            {/* Quick stats with counter animation */}
            <div id="about-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value={10} label={t('about.years')} suffix="+" delay={0} />
              <StatCard value={6} label={t('about.companies')} suffix="+" delay={0.1} />
              <StatCard value={1} label={t('about.users')} suffix="M+" delay={0.2} />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="card p-5 text-center group border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-emerald-400">FS</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider">{t('about.fullstack')}</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <span className="text-emerald-500 font-mono">//</span> 
              {t('about.techStack')}
              <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4" />
            </h3>
            
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
            >
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  className={`card p-5 group border-l-2 ${badgeColors[skillGroup.color].border}`}
                  variants={fadeInUp}
                  whileHover={{ borderColor: badgeColors[skillGroup.color].border.replace('/30', '/50') }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badgeColors[skillGroup.color].bg} ${badgeColors[skillGroup.color].text} border ${badgeColors[skillGroup.color].border}`}>
                      {categoryIcons[skillGroup.color]}
                      {skillGroup.category[lang]}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={staggerTags}
                  >
                    {skillGroup.items.map((skill, skillIndex) => {
                      const techInfo = techIcons[skill];
                      const dotColor = techInfo ? techInfo.color : badgeColors[skillGroup.color].text.replace('text-', '').replace('-400', '-500');
                      
                      return (
                        <motion.span 
                          key={skillIndex}
                          className="tag flex items-center gap-1.5"
                          variants={staggerTags}
                          whileHover={{ scale: 1.05 }}
                        >
                          {techInfo ? (
                            <span style={{ color: techInfo.color }}>{techInfo.icon}</span>
                          ) : (
                            <GenericDot color={dotColor.includes('-') ? `rgb(var(--${dotColor}))` : dotColor} />
                          )}
                          {skill}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
