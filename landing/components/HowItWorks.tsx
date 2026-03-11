'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';

const steps = [
  {
    number: '1',
    title: 'Drag and drop your files',
    description:
      'Add videos, images, or audio files. Batch processing supported.',
  },
  {
    number: '2',
    title: 'Choose compression settings',
    description:
      'Adjust quality and compression options. Presets for common use cases.',
  },
  {
    number: '3',
    title: 'Export optimized files',
    description:
      'Save compressed files to your chosen folder. Done.',
  },
];

export function HowItWorks() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28 bg-[hsl(var(--muted))]/50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3">
          <StaggerItem>
            <h2
              id="how-it-works-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              How it works
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              Three steps to smaller files.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="text-center">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-[hsl(var(--accent))] bg-[hsl(var(--background))] text-lg font-semibold text-[hsl(var(--accent))]"
                  aria-hidden
                >
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-medium text-[hsl(var(--foreground))]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[hsl(var(--foreground))]/70">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
