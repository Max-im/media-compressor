'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const screenshots = [
  { id: 1, alt: 'Media Compressor main window with file list', label: 'File list' },
  { id: 2, alt: 'Compression settings and quality options', label: 'Settings' },
  { id: 3, alt: 'Export and progress view', label: 'Progress' },
];

export function Screenshots() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="screenshots-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              See it in action
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              Simple drag-and-drop interface. No learning curve.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={staggerMedium}
        >
          {screenshots.map((shot) => (
            <StaggerItem key={shot.id}>
              <motion.div
                className="overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-lg"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
              >
                <div
                  className="aspect-video flex flex-col items-center justify-center text-[hsl(var(--foreground))]/50 text-sm p-4"
                  role="img"
                  aria-label={shot.alt}
                >
                  <div className="flex gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--foreground))]/20" />
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--foreground))]/20" />
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--foreground))]/20" />
                  </div>
                  <span>{shot.label}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
