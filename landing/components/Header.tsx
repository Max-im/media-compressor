'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GITHUB_URL = 'https://github.com/max-im/media-compressor';
const DOWNLOAD_URL = 'https://github.com/max-im/media-compressor/releases';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b border-[hsl(var(--border))] transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[hsl(var(--background))]/90 backdrop-blur-xl'
          : 'bg-[hsl(var(--background))]/80 backdrop-blur-md'
      }`}
      role="banner"
      initial={prefersReducedMotion ? undefined : { y: -20, opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--foreground))] hover:opacity-80 transition-opacity"
        >
          <Image
            src={`${basePath}/favicon.ico`}
            alt=""
            width={28}
            height={28}
            className="shrink-0"
          />
          <span>Media Compressor</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-4">
            <li>
              <motion.a
                href={DOWNLOAD_URL}
                className="rounded-lg bg-[hsl(var(--accent))] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                Download
              </motion.a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                className="text-sm font-medium text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg sm:hidden text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="sm:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1 px-6 py-4">
                <li>
                  <a
                    href={DOWNLOAD_URL}
                    className="block rounded-lg bg-[hsl(var(--accent))] px-4 py-3 text-sm font-medium text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
                    onClick={() => setMobileOpen(false)}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
