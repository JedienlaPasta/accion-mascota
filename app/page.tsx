import { CampaignsPreview } from './ui/home/CampaignsPreview';
import { CTASection } from './ui/home/CTASection';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';
import { HeroSection } from './ui/home/HeroSection';
import { ServicesPreview } from './ui/home/ServicesPreview';
import { InfoCards } from './ui/home/InfoCards';
import AdoptionSection from './ui/home/AdoptionSection';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesPreview />
          <CampaignsPreview />
          <AdoptionSection />
          <InfoCards />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
