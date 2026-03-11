import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Benefits } from '@/components/Benefits';
import { SupportedFormats } from '@/components/SupportedFormats';
import { Screenshots } from '@/components/Screenshots';
import { Demo } from '@/components/Demo';
import { Download } from '@/components/Download';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PageWrapper } from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <SupportedFormats />
        <Screenshots />
        <Demo />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </PageWrapper>
  );
}
