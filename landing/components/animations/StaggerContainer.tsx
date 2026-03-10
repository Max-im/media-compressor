'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  defaultTransition,
  reducedMotion,
  reducedMotionTransition,
  staggerMedium,
} from './motion-config';

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  viewportMargin?: string;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = staggerMedium,
  once = true,
  viewportMargin = '-5%',
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={
        prefersReducedMotion
          ? { hidden: {}, visible: {} }
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: staggerDelay,
                  staggerDirection: 1,
                },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        prefersReducedMotion
          ? { hidden: reducedMotion, visible: { ...reducedMotion, transition: reducedMotionTransition } }
          : {
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: defaultTransition,
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
