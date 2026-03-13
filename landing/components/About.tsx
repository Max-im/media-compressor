'use client';

import { useRef, useState, useEffect } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageInView, setImageInView] = useState(false);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageInView(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28 gradient-mesh"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 flex-shrink-0 relative min-h-[200px] lg:min-h-[280px]"
          >
            <img
              src="/blob.svg"
              alt=""
              aria-hidden
              className={`w-full ${imageInView ? 'about-blob in-view' : 'about-blob'}`}
            />
            <img
              src="/character.svg"
              alt="Team working together"
              className={imageInView ? 'about-character in-view' : 'about-character'}
            />
          </div>
          <div className="w-full lg:w-1/2 mx-auto max-w-3xl lg:max-w-none">
            <StaggerContainer className="space-y-6" staggerDelay={staggerMedium}>
              <StaggerItem>
                <h2
                  id="about-heading"
                  className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center lg:text-left"
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
      </div>
    </section>
  );
}
