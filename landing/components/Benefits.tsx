'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const benefits = [
  {
    title: 'No upload limits',
    description:
      'Online tools cap file size. With Media Compressor, your only limit is your disk.',
  },
  {
    title: 'Faster processing',
    description:
      'Local processing uses your CPU at full speed. No waiting on slow uploads or shared servers.',
  },
  {
    title: 'Works offline',
    description:
      'Use it on a plane, in a basement, or anywhere without internet.',
  },
  {
    title: 'Better privacy',
    description:
      'Your media never touches our servers. No accounts, no tracking, no data retention.',
  },
];

export function Benefits() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="benefits-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              Why Media Compressor
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              Simple, private, and fast compression on your device.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={staggerMedium}
        >
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm">
                <h3 className="text-lg font-medium text-[hsl(var(--foreground))]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[hsl(var(--foreground))]/70">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
