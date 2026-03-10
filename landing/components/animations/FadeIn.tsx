'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  defaultTransition,
  reducedMotion,
  reducedMotionTransition,
} from './motion-config';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  distance?: number;
  once?: boolean;
  viewportMargin?: string;
};

const directionOffset = { up: 20, down: -20, none: 0 };

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 20,
  once = true,
  viewportMargin = '-8%',
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const y = direction === 'none' ? 0 : directionOffset[direction] ?? distance;

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? reducedMotion
          : { opacity: 0, y: direction !== 'none' ? y : undefined }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              transition: { ...defaultTransition, delay },
            }
      }
      viewport={{ once, margin: viewportMargin }}
      transition={
        prefersReducedMotion
          ? reducedMotionTransition
          : { ...defaultTransition, delay }
      }
    >
      {children}
    </motion.div>
  );
}
