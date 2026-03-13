'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  defaultTransition,
  reducedMotion,
  reducedMotionTransition,
  springTransition,
} from '@/components/animations/motion-config';

const GITHUB_URL = 'https://github.com/max-im/media-compressor';
const DOWNLOAD_URL = 'https://github.com/max-im/media-compressor/releases';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? reducedMotion
    : { opacity: 0, y: 24 };
  const fadeUpEnd = prefersReducedMotion
    ? reducedMotion
    : { opacity: 1, y: 0 };
  const trans = prefersReducedMotion ? reducedMotionTransition : defaultTransition;

  return (
    <section
      className="relative flex min-h-screen min-h-[100dvh] flex-col justify-center overflow-hidden gradient-mesh px-6 pt-16 pb-24 sm:px-8 lg:px-12 lg:pt-24 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <motion.h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl"
              initial={fadeUp}
              animate={fadeUpEnd}
              transition={{ ...trans, duration: 0.5 }}
            >
              Media Compressor
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-[hsl(var(--foreground))]/80 sm:text-xl max-w-xl"
              initial={fadeUp}
              animate={fadeUpEnd}
              transition={{ ...trans, delay: 0.1, duration: 0.5 }}
            >
              Compress videos, images, and audio in seconds — right on your
              computer.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={prefersReducedMotion ? reducedMotion : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...trans, delay: 0.2, duration: 0.4 }}
            >
              <motion.a
                href={DOWNLOAD_URL}
                className="inline-flex items-center justify-center rounded-lg bg-[hsl(var(--accent))] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[hsl(var(--accent))]/25 transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={springTransition}
              >
                Download for free
              </motion.a>
              <motion.a
                href={GITHUB_URL}
                className="inline-flex items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-transparent px-6 py-3 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--border))] focus:ring-offset-2"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={springTransition}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? reducedMotion : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...trans, delay: 0.25, duration: 0.5 }}
          >
            <motion.div
              className="relative aspect-video overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] shadow-2xl"
              role="img"
              aria-label="Media Compressor application window showing drag-and-drop interface"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                    y: [0, -8, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }
              }
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="flex gap-2 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--foreground))]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--foreground))]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--foreground))]/20" />
                </div>
                <div className="flex flex-1 items-center justify-center p-8">
                  <div className="rounded-lg border-2 border-dashed border-[hsl(var(--foreground))]/20 bg-[hsl(var(--background))]/50 px-8 py-6 text-center text-[hsl(var(--foreground))]/50 text-sm">
                    Check out the demo video below
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
