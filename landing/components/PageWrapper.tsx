'use client';

import { PageEntrance } from '@/components/animations';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return <PageEntrance className="min-h-screen">{children}</PageEntrance>;
}
