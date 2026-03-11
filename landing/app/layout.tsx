import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Media Compressor — Compress videos, images & audio on your computer',
  description:
    'Compress videos, images, and audio in seconds — right on your computer. Fast, private, offline. No uploads, no limits.',
  keywords: [
    'video compressor',
    'image compressor',
    'audio compressor',
    'compress files',
    'offline compression',
    'privacy',
    'desktop app',
  ],
  authors: [{ name: 'Media Compressor' }],
  openGraph: {
    title: 'Media Compressor — Compress videos, images & audio locally',
    description:
      'Compress videos, images, and audio in seconds. Fast, private, works offline. Free desktop app.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Compressor',
    description: 'Compress videos, images, and audio — right on your computer. Fast, private, offline.',
  },
  robots: 'index, follow',
  metadataBase: new URL('https://max-im.github.io/media-compressor'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[hsl(var(--accent))] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
