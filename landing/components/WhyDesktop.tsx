'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const reasons = [
  {
    title: 'Enhanced security',
    description:
      'Your data stays private without relying on the cloud. Files never leave your machine.',
    icon: '🔒',
  },
  {
    title: 'Superior performance',
    description:
      'Optimized for your desktop’s processing power. No shared servers, no throttling.',
    icon: '⚡',
  },
  {
    title: 'Offline access',
    description:
      'Use the app anytime, even without an internet connection. No account required.',
    icon: '📴',
  },
];

export function WhyDesktop() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28 bg-[hsl(var(--muted))]/50"
      aria-labelledby="why-desktop-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="why-desktop-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              Why choose a desktop app?
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              More control, better performance, and real privacy — all on your terms.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="mt-16 grid gap-8 sm:grid-cols-3"
          staggerDelay={staggerMedium}
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                className="flex h-full flex-col rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm transition-[box-shadow,border-color] hover:border-[hsl(var(--accent))]/30 hover:shadow-md"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--muted))] text-2xl"
                  aria-hidden
                >
                  {reason.icon}
                </span>
                <h3 className="mt-4 text-lg font-medium text-[hsl(var(--foreground))]">
                  {reason.title}
                </h3>
                <p className="mt-2 flex-1 text-[hsl(var(--foreground))]/70">
                  {reason.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
