import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Palette } from 'lucide-react';
import GlassMorphism from './GlassMorphism';
import WaterDroplets from './WaterDroplets';
import ParticleSystem from './ParticleSystem';
import { HoverButton } from './SimplifiedMicroInteractions';

const ImmersiveHero: React.FC = () => {
  const features = [
    { 
      icon: Palette, 
      title: "Creative Design", 
      description: "Beautiful and functional user interfaces that captivate your audience.",
      delay: 0.8
    },
    { 
      icon: Sparkles, 
      title: "Immersive 3D", 
      description: "Interactive 3D elements that bring your website to life.",
      delay: 1.0
    },
    { 
      icon: Zap, 
      title: "Micro-interactions", 
      description: "Delightful animations and effects that enhance user experience.",
      delay: 1.2
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
      {/* Enhanced background with grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <ParticleSystem />
      </div>
      
      {/* Water droplet effect overlay */}
      <WaterDroplets className="z-10" count={8} />

      {/* Hero content */}
      <div className="container relative z-20 mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        
        {/* Main heading section */}
        <motion.div 
          className="text-center mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-effect rounded-full text-sm font-medium text-foreground/90"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Next-Generation Web Experiences
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient animate-gradient-x">
              Creating Digital
            </span>
            <br />
            <span className="text-foreground">
              Experiences
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Immersive, intuitive, and memorable websites with stunning visual effects, 
            seamless interactions, and cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <HoverButton className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </HoverButton>
            
            <motion.button
              className="px-8 py-4 text-lg font-medium text-foreground glass-effect hover:bg-card/70 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <GlassMorphism className="h-full p-8 text-center hover-tilt glow-effect group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center glow-effect">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassMorphism>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">
              Scroll to explore
            </p>
            <div className="w-6 h-10 rounded-full border-2 border-border/50 group-hover:border-primary/50 flex justify-center transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-primary rounded-full mt-2 animate-glow"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmersiveHero;