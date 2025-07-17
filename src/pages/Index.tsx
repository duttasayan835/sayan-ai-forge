
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
import EnhancedCursor from '@/components/EnhancedCursor';
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
      
      {/* Enhanced Cursor Effects */}
      <EnhancedCursor />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
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
