'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { defaultTransition, reducedMotion, reducedMotionTransition } from './motion-config';

type PageEntranceProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageEntrance({ children, className }: PageEntranceProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? reducedMotion
          : { opacity: 0, y: 10 }
      }
      animate={
        prefersReducedMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      transition={
        prefersReducedMotion
          ? reducedMotionTransition
          : { ...defaultTransition, duration: 0.5 }
      }
    >
      {children}
    </motion.div>
  );
}
