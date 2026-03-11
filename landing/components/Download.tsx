'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium, springTransition } from '@/components/animations/motion-config';

const DOWNLOAD_BASE = 'https://github.com/max-im/media-compressor/releases';

const platforms = [
  { name: 'macOS', slug: 'macos', icon: '🍎' },
  { name: 'Windows', slug: 'windows', icon: '🪟' },
  { name: 'Linux', slug: 'linux', icon: '🐧' },
];

export function Download() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative px-6 py-20 sm:px-8 lg:px-12 lg:py-28 overflow-hidden"
      aria-labelledby="download-heading"
    >
      <div className="absolute inset-0 bg-[hsl(var(--muted))]/50 download-section-bg" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="download-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl"
            >
              Download Media Compressor
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[hsl(var(--foreground))]/70 text-lg">
              Free for macOS, Windows, and Linux. No account required.
            </p>
          </StaggerItem>
          <StaggerItem className="mt-10 flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <motion.a
                key={platform.slug}
                href={DOWNLOAD_BASE}
                className="inline-flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-6 py-4 text-base font-medium text-[hsl(var(--foreground))] shadow-sm transition-colors hover:border-[hsl(var(--accent))]/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.05,
                        boxShadow: '0 10px 40px -10px hsl(263 70% 65% / 0.25)',
                        transition: { duration: 0.2 },
                      }
                }
                whileTap={
                  prefersReducedMotion ? undefined : { scale: 0.98 }
                }
                transition={springTransition}
              >
                <span aria-hidden>{platform.icon}</span>
                {platform.name}
              </motion.a>
            ))}
          </StaggerItem>
          <StaggerItem>
            <motion.a
              href={DOWNLOAD_BASE}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[hsl(var(--accent))] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[hsl(var(--accent))]/25"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      boxShadow: '0 20px 40px -15px hsl(263 70% 65% / 0.4)',
                      transition: { duration: 0.2 },
                    }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              transition={springTransition}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      boxShadow: [
                        '0 10px 30px -10px hsl(263 70% 65% / 0.25)',
                        '0 10px 40px -10px hsl(263 70% 65% / 0.35)',
                        '0 10px 30px -10px hsl(263 70% 65% / 0.25)',
                      ],
                      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                    }
              }
            >
              Download for free
            </motion.a>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-sm text-[hsl(var(--foreground))]/50">
              Get the latest release from{' '}
              <a
                href={DOWNLOAD_BASE}
                className="underline hover:text-[hsl(var(--accent))]"
              >
                GitHub Releases
              </a>
              .
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
