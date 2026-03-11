'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

export function About() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28 gradient-mesh"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <StaggerContainer className="space-y-6" staggerDelay={staggerMedium}>
            <StaggerItem>
              <h2
                id="about-heading"
                className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
              >
                Who we are
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
                <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]/90">
                  Media Compressor is built by developers who care about fast, efficient media
                  management. We focus on quality and privacy so you can simplify your workflow
                  and save time without compromising your data.
                </p>
                <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]/80">
                  Since our launch in 2024, we&apos;ve helped thousands of users streamline their
                  media storage — and we&apos;re just getting started.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
