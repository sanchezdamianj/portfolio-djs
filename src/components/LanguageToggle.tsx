import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-zinc-800/50 transition-all text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
    >
      <span className={`font-mono font-medium transition-colors ${isEnglish ? 'text-white' : 'text-zinc-500'}`}>
        EN
      </span>
      <span className="text-zinc-600">/</span>
      <span className={`font-mono font-medium transition-colors ${!isEnglish ? 'text-white' : 'text-zinc-500'}`}>
        ES
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
