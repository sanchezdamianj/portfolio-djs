import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#projects', labelKey: 'nav.projects' },
];

// Logo: djs.dev
const Logo = (
  <div className="flex items-center gap-1">
    <span className="text-lg font-bold text-white">d</span>
    <span className="text-lg font-bold text-emerald-400">js</span>
    <span className="text-lg text-zinc-600">.dev</span>
  </div>
);

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            {Logo}
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(link.labelKey)}
                <motion.span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500"
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <LanguageToggle />
              <motion.a 
                href={`mailto:${personalInfo.email}?subject=Dev%20Opportunity%20-%20Portfolio%20Contact`}
                className="px-5 py-2.5 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-emerald-500/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('nav.contact')}
              </motion.a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.svg 
                  key="close"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg 
                  key="menu"
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/5 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-zinc-400 hover:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {t(link.labelKey)}
                </motion.a>
              ))}
              <motion.a 
                href={`mailto:${personalInfo.email}?subject=Dev%20Opportunity%20-%20Portfolio%20Contact`}
                className="block mx-4 mt-2 px-4 py-3 bg-white text-zinc-900 rounded-lg font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('nav.contact')}
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
