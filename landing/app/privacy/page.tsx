import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Media Compressor',
  description: 'Privacy policy for Media Compressor. Your files stay on your device; we do not collect or store your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            className="text-lg font-semibold text-[hsl(var(--foreground))] hover:opacity-80"
          >
            Media Compressor
          </Link>
          <Link
            href="/"
            className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))]"
          >
            ← Home
          </Link>
        </div>
      </header>
      <main className="flex-1 px-6 py-12 sm:px-8">
        <article className="mx-auto max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[hsl(var(--foreground))]/60 mt-1">
            Last updated: March 2025
          </p>

          <div className="mt-8 space-y-6 text-[hsl(var(--foreground))]/80">
            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                1. Overview
              </h2>
              <p>
                Media Compressor is a desktop application that compresses videos, images, and audio on your device. This privacy policy explains how we handle information in relation to the application and this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                2. Your Files Stay on Your Device
              </h2>
              <p>
                All compression performed by Media Compressor happens locally on your computer. Your media files are never uploaded to our servers or any third party. We do not have access to, collect, or store the content you compress.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                3. Data We Do Not Collect
              </h2>
              <p>
                The Media Compressor desktop application does not collect personal data, usage analytics, or telemetry. We do not require an account or login to use the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                4. This Website
              </h2>
              <p>
                This website (the landing page and any linked pages) may be hosted on services that collect standard server logs (e.g., IP address, browser type, pages visited). We do not use cookies or tracking scripts for advertising or profiling. If we use analytics in the future, we will update this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                5. Open Source and Third-Party Code
              </h2>
              <p>
                Media Compressor is open source. Its dependencies are listed in the project repository. We are not responsible for the privacy practices of third-party libraries; refer to their respective documentation and licenses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                6. Changes
              </h2>
              <p>
                We may update this privacy policy from time to time. The “Last updated” date at the top will be revised when changes are made. Continued use of the app or website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                7. Contact
              </h2>
              <p>
                For questions about this privacy policy or Media Compressor, please open an issue or discussion on the{' '}
                <a
                  href="https://github.com/max-im/media-compressor"
                  className="text-[hsl(var(--accent))] underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <footer className="border-t border-[hsl(var(--border))] px-6 py-6 sm:px-8">
        <div className="mx-auto max-w-3xl flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[hsl(var(--foreground))]/60">
            © {new Date().getFullYear()} Media Compressor
          </p>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
