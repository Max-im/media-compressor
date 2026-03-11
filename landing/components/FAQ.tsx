'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { staggerMedium } from '@/components/animations/motion-config';

const faqs = [
  {
    question: 'Is Media Compressor free?',
    answer:
      'Yes. Media Compressor is free to download and use. No subscriptions or paid tiers.',
  },
  {
    question: 'Does it upload my files?',
    answer:
      'No. All compression happens on your computer. Your files never leave your device or get sent to any server.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes. After you install the app, you can use it without an internet connection. No account or login required.',
  },
  {
    question: 'What formats are supported?',
    answer:
      'Video: MP4, MOV, MKV. Images: JPG, PNG, WebP. Audio: MP3, WAV, AAC. More formats may be added over time.',
  },
];

export function FAQ() {
  return (
    <section
      className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <StaggerContainer className="space-y-3" staggerDelay={staggerMedium}>
          <StaggerItem>
            <h2
              id="faq-heading"
              className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl text-center"
            >
              Frequently asked questions
            </h2>
          </StaggerItem>
        </StaggerContainer>
        <StaggerContainer className="mt-12 space-y-8" staggerDelay={staggerMedium}>
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-sm">
                <dt className="text-base font-medium text-[hsl(var(--foreground))]">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-[hsl(var(--foreground))]/70">
                  {faq.answer}
                </dd>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
