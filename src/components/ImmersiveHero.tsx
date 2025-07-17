import React from 'react';
import { motion } from 'framer-motion';
import Advanced3DScene from './Advanced3DScene';
import GlassMorphism from './GlassMorphism';
import WaterDroplets from './WaterDroplets';

const ImmersiveHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Advanced3DScene className="opacity-80" />
      </div>
      
      {/* Water droplet effect overlay */}
      <WaterDroplets className="z-10" />

      {/* Hero content */}
      <div className="container relative z-20 mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Creating Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Immersive, intuitive, and memorable websites with stunning visual effects
            and seamless interactions.
          </p>
        </motion.div>
        
        {/* Glass morphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            { title: "Creative Design", description: "Beautiful and functional user interfaces that captivate your audience." },
            { title: "Immersive 3D", description: "Interactive 3D elements that bring your website to life." },
            { title: "Micro-interactions", description: "Delightful animations and effects that enhance user experience." }
          ].map((card, index) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="h-full"
            >
              <GlassMorphism className="h-full p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-white/80">{card.description}</p>
              </GlassMorphism>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmersiveHero;