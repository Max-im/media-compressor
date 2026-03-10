import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions — Media Compressor',
  description: 'Terms and conditions for using Media Compressor desktop application and this website.',
};

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-sm text-[hsl(var(--foreground))]/60 mt-1">
            Last updated: March 2025
          </p>

          <div className="mt-8 space-y-6 text-[hsl(var(--foreground))]/80">
            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using Media Compressor (“the Software”) or by accessing this website, you agree to these Terms and Conditions. If you do not agree, do not use the Software or this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                2. License
              </h2>
              <p>
                Media Compressor is provided under the MIT License. You may use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the terms of the MIT License. The full license text is available in the{' '}
                <a
                  href="https://github.com/max-im/media-compressor/blob/main/LICENSE"
                  className="text-[hsl(var(--accent))] underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  project repository
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                3. No Warranty
              </h2>
              <p>
                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS, BE ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. USE AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE AUTHORS AND COPYRIGHT HOLDERS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, LOSS OF REVENUE, OR BUSINESS INTERRUPTION) ARISING FROM THE USE OR INABILITY TO USE THE SOFTWARE OR THIS WEBSITE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                5. Your Use of the Software
              </h2>
              <p>
                You are responsible for how you use Media Compressor. Do not use it to process content in violation of any applicable laws or third-party rights. Ensure you have the right to compress and modify any files you process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                6. Backups
              </h2>
              <p>
                Compression can alter or overwrite files. We recommend keeping backups of important media before compressing. We are not responsible for any data loss resulting from use of the Software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                7. Changes to Terms
              </h2>
              <p>
                We may update these Terms and Conditions from time to time. The “Last updated” date at the top will be revised when changes are made. Continued use of the Software or website after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[hsl(var(--foreground))] mt-8 mb-2">
                8. Contact
              </h2>
              <p>
                For questions about these terms, please open an issue or discussion on the{' '}
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
                <Link href="/privacy" className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
