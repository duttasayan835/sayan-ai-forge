
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import ParticleSystem from '@/components/ParticleSystem';
import ThemeToggle from '@/components/ThemeToggle';
import CursorFollowEffect from '@/components/CursorFollowEffect';
import LoadingAnimation from '@/components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Loading Animation */}
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {/* Background Effects */}
      <ThreeBackground />
      
      {/* Cursor Effects */}
      <CursorFollowEffect />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
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
