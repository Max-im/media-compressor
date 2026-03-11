'use client';

import { FadeIn } from '@/components/animations';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function Demo() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28 bg-[hsl(var(--muted))]/50"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2
            id="demo-heading"
            className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
          >
            See how simple it is
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[hsl(var(--foreground))]/70 text-lg">
            Watch a quick demo of compressing files with Media Compressor.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-lg">
            <video
              className="w-full aspect-video"
              width={800}
              height={450}
              controls
              preload="metadata"
              aria-label="Demo of Media Compressor app"
            >
              <source src={`${basePath}/demo.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
