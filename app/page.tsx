import { AuthProvider } from './_lib/AuthContext';
import { CampaignsPreview } from './ui/home/CampaignsPreview';
import { CTASection } from './ui/home/CTASection';
import { Footer } from './ui/Footer';
import { Header } from './ui/Header';
import { HeroSection } from './ui/home/HeroSection';
import { ServicesPreview } from './ui/home/ServicesPreview';
import { InfoCards } from './ui/home/InfoCards';
import AdoptionSection from './ui/home/AdoptionSection';

export default function Home() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}
