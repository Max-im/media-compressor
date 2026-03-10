import Link from 'next/link';

const GITHUB_URL = 'https://github.com/max-im/media-compressor';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[hsl(var(--border))] px-6 py-12 sm:px-8 lg:px-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-[hsl(var(--foreground))]/60">
          © {year} Media Compressor. MIT License.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`${GITHUB_URL}/blob/main/LICENSE`}
                className="text-sm text-[hsl(var(--foreground))]/70 hover:text-[hsl(var(--foreground))] underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded"
              >
                License
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
