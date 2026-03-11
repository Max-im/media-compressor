'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const formatGroups = [
  {
    category: 'Video',
    formats: ['MP4', 'MOV', 'MKV'],
  },
  {
    category: 'Images',
    formats: ['JPG', 'PNG', 'WebP'],
  },
  {
    category: 'Audio',
    formats: ['MP3', 'WAV', 'AAC'],
  },
];

export function SupportedFormats() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28 bg-[hsl(var(--muted))]/50"
      aria-labelledby="formats-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="formats-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              Supported formats
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              Common formats supported out of the box.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16" staggerDelay={staggerMedium}>
          {formatGroups.map((group) => (
            <StaggerItem key={group.category}>
              <div className="text-center">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[hsl(var(--foreground))]/60">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap justify-center gap-2" role="list">
                  {group.formats.map((format) => (
                    <li key={format}>
                      <span className="inline-flex rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))]">
                        {format}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
