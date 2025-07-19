
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoBackground from '@/components/VideoBackground';
import ImmersiveHero from '@/components/ImmersiveHero';
import EnhancedPortfolioAnalytics from '@/components/EnhancedPortfolioAnalytics';
import LoadingAnimation from '@/components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      {/* Analytics Tracking */}
      <EnhancedPortfolioAnalytics />
      
      {/* Loading Animation */}
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {/* Enhanced Video Background */}
      <VideoBackground />
      
      {/* Main Content */}
      <Navbar />
      <main className="relative z-10 min-h-screen">
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
