'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { springTransition } from './motion-config';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-4%' }}
      transition={{ ...springTransition, delay }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.2 },
            }
      }
      style={{
        willChange: prefersReducedMotion ? 'auto' : 'transform',
      }}
    >
      {children}
    </motion.article>
  );
}
