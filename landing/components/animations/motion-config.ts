/**
 * Shared motion config: reduced motion and performance-friendly defaults.
 * Use these in Framer Motion variants so animations respect user preferences.
 */

export const reducedMotion = { opacity: 0 };
export const reducedMotionTransition = { duration: 0.01 };

export const defaultTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.4,
} as const;

export const springTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
} as const;

export const staggerFast = 0.05;
export const staggerMedium = 0.08;
export const staggerSlow = 0.12;
