import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { approach } from '../data/portfolio';
import { fadeInUp } from './variants';

const Approach: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'es';
  
  return (
    <section id="approach" className="section-padding bg-zinc-950 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px]" />
      
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
            <span className="font-mono text-emerald-500 text-sm">03</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest">{approach.subtitle[lang]}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {approach.title[lang]}
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
        </motion.div>
        
        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-8">
          {approach.phases.map((phase, index) => (
            <motion.div
              key={index}
              className="card p-8 relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              {/* Phase number */}
              <div className="absolute -top-4 left-6 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
                <span className="text-sm font-mono text-emerald-500">{phase.number}</span>
              </div>
              
              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {phase.title[lang]}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {phase.description[lang]}
                </p>
              </div>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
