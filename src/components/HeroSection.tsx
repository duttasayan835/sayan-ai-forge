
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const stats = [
    { icon: Users, value: "10+", label: "AI Projects" },
    { icon: Zap, value: "3+", label: "Years Experience" },
    { icon: Star, value: "50K+", label: "Lines of Code" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Announcement Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            🚀 Available for AI/LLM Development Opportunities
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">Hi, I'm Sayan Dutta</span>
          <span className="block text-gradient">AI/LLM Builder</span>
          <span className="block">& CSE Student</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Passionate about automating workflows and deploying real-world AI systems. 
          Currently developing Savitr-AI — an intelligent delivery system.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="text-lg px-8 py-4 h-auto group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group border-border hover:bg-accent/50">
            <Play className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Currently Working On</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {["Savitr-AI", "LangChain", "OpenAI API", "RAG Systems", "AI Agents"].map((tech) => (
              <div key={tech} className="text-muted-foreground font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-xl glass-effect border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-6 mt-12"
        >
          <a
            href="https://github.com/duttasayan835"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dutta-sayan835/"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:duttasayan835@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/5"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default HeroSection;
