'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionWrapper = ({ children, className = '', id, delay = 0 }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-20 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
