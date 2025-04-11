
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkoutsSection from '@/components/WorkoutsSection';
import CommunitySection from '@/components/CommunitySection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkoutsSection />
        <CommunitySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
