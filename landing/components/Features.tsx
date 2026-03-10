'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerFast } from '@/components/animations/motion-config';

const features = [
  {
    title: 'Video compression',
    description:
      'Shrink MP4, MOV, MKV and more. Reduce file size dramatically while keeping quality high.',
    icon: '▶',
  },
  {
    title: 'Image compression',
    description:
      'Compress JPG, PNG, WebP with smart settings. Perfect for photos and graphics.',
    icon: '🖼',
  },
  {
    title: 'Audio compression',
    description:
      'Optimize MP3, WAV, AAC and other formats. Smaller files, same clarity.',
    icon: '♪',
  },
  {
    title: 'Offline processing',
    description:
      'Everything runs on your machine. No internet required after download.',
    icon: '📴',
  },
  {
    title: 'Privacy-first',
    description:
      'Your files never leave your computer. No cloud uploads, no data collection.',
    icon: '🔒',
  },
  {
    title: 'Fast performance',
    description:
      'Built for speed. Leverage your desktop power for quick compression.',
    icon: '⚡',
  },
];

export function Features() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer
          className="space-y-3"
          staggerDelay={staggerFast}
        >
          <StaggerItem>
            <h2
              id="features-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              Everything you need
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              One app for videos, images, and audio. Simple, fast, and private.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={staggerFast}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.article
                className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm transition-[box-shadow,border-color] hover:border-[hsl(var(--accent))]/30 hover:shadow-md"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -6, transition: { duration: 0.2 } }
                }
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                <motion.span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--muted))] text-lg"
                  aria-hidden
                  whileHover={
                    prefersReducedMotion ? undefined : { scale: 1.08 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.span>
                <h3 className="mt-4 text-lg font-medium text-[hsl(var(--foreground))]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[hsl(var(--foreground))]/70">
                  {feature.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
