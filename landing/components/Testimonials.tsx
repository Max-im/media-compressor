'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const testimonials = [
  {
    quote:
      'Finally a compressor that doesn’t make me upload gigs to the cloud. I compressed a 2-hour screen recording in minutes. Zero hassle.',
    author: 'Alex K.',
    context: 'Content creator',
  },
  {
    quote:
      'I use it for batch compressing photos before backing them up. Simple presets, runs offline, and my files never leave my machine. Exactly what I wanted.',
    author: 'Jordan M.',
    context: 'Photographer',
  },
  {
    quote:
      'Needed something lightweight for old family videos. This did the job without watermarks or sign-ups. The privacy angle really matters to me.',
    author: 'Sam R.',
    context: 'Personal use',
  },
  {
    quote:
      'Replaced our previous workflow with this. Fast, predictable, and no server costs. Team uses it on Windows and Mac without issues.',
    author: 'Taylor L.',
    context: 'Small team',
  },
];

export function Testimonials() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28 bg-[hsl(var(--muted))]/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="testimonials-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              What people say
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
              Real users compressing videos, images, and audio on their own terms.
            </p>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={staggerMedium}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <blockquote className="flex h-full flex-col rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm">
                <p className="flex-1 text-[hsl(var(--foreground))]/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-[hsl(var(--border))] pt-4">
                  <cite className="not-italic">
                    <span className="font-medium text-[hsl(var(--foreground))]">
                      {testimonial.author}
                    </span>
                    {testimonial.context && (
                      <span className="block text-sm text-[hsl(var(--foreground))]/60">
                        {testimonial.context}
                      </span>
                    )}
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
