
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import ImmersiveHero from '@/components/ImmersiveHero';

import ThemeToggle from '@/components/ThemeToggle';
import { LikeButton, HoverButton } from '@/components/SimplifiedMicroInteractions';
import LoadingAnimation from '@/components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Loading Animation */}
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {/* Background Effects */}
      <ThreeBackground />
      
      {/* Basic interaction */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-4">
        <ThemeToggle />
        <LikeButton />
      </div>
      
      {/* Main Content */}
      <Navbar />
      <main className="relative z-10 min-h-screen bg-background">
        <ImmersiveHero />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
