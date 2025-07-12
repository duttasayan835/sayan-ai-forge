
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Interactive scaling
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1, 100, 200]}
        scale={2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#FF0080" : "#00D9FF"}
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedRings() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.1;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={group}>
      {[1, 2, 3].map((ring, index) => (
        <mesh key={ring} rotation={[0, 0, (index * Math.PI) / 3]} scale={ring * 0.8}>
          <torusGeometry args={[3, 0.1, 16, 100]} />
          <meshStandardMaterial
            color={['#00D9FF', '#8B5CF6', '#FF0080'][index]}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

const SplineInspired: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`w-full h-96 relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <InteractiveSphere />
        <AnimatedRings />
        
        <Environment preset="night" />
      </Canvas>
      
      {/* Overlay text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Interactive 3D</h3>
          <p className="text-white/80">Hover to interact</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplineInspired;
