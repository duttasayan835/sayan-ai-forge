
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-primary border border-primary/20 mb-6">
            AI/LLM Builder & Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">Builder of</span>
          <span className="block text-gradient">AI Agents &</span>
          <span className="block text-gradient">Automation Tools</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          3rd-year CSE student passionate about LLMs, AI automation, and building intelligent systems 
          that solve real-world problems. Currently developing Savitr-AI and exploring the frontiers of artificial intelligence.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="text-lg px-8 py-3 glow-effect group">
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            View Resume
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 glass-effect hover:bg-primary/10">
            <Github className="mr-2 h-5 w-5" />
            GitHub Profile
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-6"
        >
          <a
            href="https://github.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:sayan@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow-effect"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-blue rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-neon-pink rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default HeroSection;
