import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { education } from '../data/portfolio';
import { fadeInUp } from './variants';

const Education: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'es';
  
  return (
    <section id="education" className="section-padding bg-zinc-900/50 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-emerald-500 text-sm">04</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest">
              {lang === 'en' ? 'Education' : 'Educación'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {lang === 'en' ? 'Education' : 'Educación'}
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
        </motion.div>
        
        {/* Education card */}
        <motion.div
          className="card p-8 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">
                {education.degree[lang]}
              </h3>
              <p className="text-emerald-500 font-medium mb-2">
                {education.institution[lang]}
              </p>
              <p className="text-zinc-500 text-sm font-mono">
                {education.period[lang]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
