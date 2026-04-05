import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a 
              href="#"
              className="inline-flex items-center gap-2 mb-4 group"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg font-bold text-white">d</span>
              <span className="text-lg font-bold text-emerald-400">js</span>
              <span className="text-lg text-zinc-600">.dev</span>
            </motion.a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Senior Fullstack Engineer. React, Angular, Node.js y arquitecturas escalables.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
              <span className="text-emerald-500 font-mono text-sm">//</span> 
              {t('footer.navigation')}
            </h4>
            <div className="space-y-2">
              <motion.a 
                href="#about"
                className="block text-zinc-400 hover:text-emerald-500 text-sm transition-colors"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t('nav.about')}
              </motion.a>
              <motion.a 
                href="#experience"
                className="block text-zinc-400 hover:text-emerald-500 text-sm transition-colors"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {t('nav.experience')}
              </motion.a>
              <motion.a 
                href="#projects"
                className="block text-zinc-400 hover:text-emerald-500 text-sm transition-colors"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('nav.projects')}
              </motion.a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
              <span className="text-emerald-500 font-mono text-sm">//</span> 
              {t('footer.getInTouch')}
            </h4>
            <div className="space-y-3">
              {[
                { 
                  href: `mailto:${personalInfo.email}?subject=Dev%20Opportunity%20-%20Portfolio%20Contact`,
                  label: personalInfo.email,
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  href: personalInfo.linkedin,
                  label: 'LinkedIn',
                  external: true,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                { 
                  href: personalInfo.github,
                  label: 'GitHub',
                  external: true,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 text-sm transition-colors"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.icon}
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} {personalInfo.name}. {t('footer.rights')}
            </p>
            <p className="text-zinc-600 text-xs font-mono flex items-center gap-2">
              <span className="terminal-dot" />
              {t('footer.builtWith')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
