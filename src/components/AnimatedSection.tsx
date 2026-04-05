import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { sectionVariants } from './variants';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
