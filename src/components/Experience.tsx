import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/portfolio';
import { fadeInUp, slideInLeft, slideInRight } from './variants';

const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'es';
  
  return (
    <section id="experience" className="section-padding bg-zinc-900/50 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Decorative */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-[150px]" />
      
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
            <span className="text-zinc-500 text-sm uppercase tracking-widest">{t('nav.experience')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('experience.title')}
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
        </motion.div>
        
        {/* Timeline */}
        <div className="max-w-4xl">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id} 
                className="relative pl-8 pb-10 last:pb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? slideInLeft : slideInRight}
              >
                {/* Timeline line */}
                <div className="absolute left-[11px] top-6 w-px h-[calc(100%-1.5rem)] bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center">
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                </div>
                
                {/* Content */}
                <motion.div 
                  className="card p-6 ml-4 group"
                  whileHover={{ 
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    boxShadow: '0 0 40px rgba(16, 185, 129, 0.1)'
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.title[lang]}
                      </h3>
                      <p className="text-emerald-500 font-medium mt-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description[lang].map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-3 text-zinc-400 text-base group-hover:text-zinc-300 transition-colors">
                        <span className="text-emerald-500 mt-1 flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
