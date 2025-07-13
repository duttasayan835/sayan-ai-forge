
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Simple fallback component for Three.js errors
const LoadingFallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Simplified 3D scene without complex geometry
const LoadingScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <motion.group
        animate={{ rotateY: Math.PI * 2 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {/* Simple wireframe sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#00D9FF" wireframe />
        </mesh>
        
        {/* Simple colored cubes */}
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
        
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshBasicMaterial color="#FF0080" />
        </mesh>
      </motion.group>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
        >
          <div className="text-center">
            {/* 3D Loading Scene with error boundary */}
            <div className="w-64 h-64 mx-auto mb-8">
              <Suspense fallback={<LoadingFallback />}>
                <Canvas 
                  camera={{ position: [0, 0, 5] }}
                  onCreated={({ gl }) => {
                    gl.setClearColor('#0a0a0a', 0);
                  }}
                >
                  <LoadingScene />
                </Canvas>
              </Suspense>
            </div>

            {/* Loading Text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gradient mb-4"
            >
              Loading Portfolio
            </motion.h2>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground"
            >
              {progress < 100 ? `${Math.round(progress)}%` : 'Ready!'}
            </motion.p>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
