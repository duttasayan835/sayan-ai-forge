
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      
      const color = new THREE.Color();
      const hue = 0.5 + Math.random() * 0.4;
      color.setHSL(hue, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
      
      // Gentle wave motion
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i] * 0.01) * 0.01;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={1.2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.6}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      
      // Scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      torusRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={torusRef} position={[-8, 3, -15]}>
      <torusGeometry args={[2, 0.6, 16, 100]} />
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.7}
        emissive="#8B5CF6"
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
}

function InteractiveCamera() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} color="#00D9FF" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.7} />
        <pointLight position={[0, 10, 5]} color="#FF0080" intensity={0.5} />
        
        <ParticleField />
        <FloatingOrb position={[5, 2, -8]} color="#00D9FF" scale={1.5} />
        <FloatingOrb position={[-6, -3, -12]} color="#FF0080" scale={1.2} />
        <FloatingOrb position={[3, -5, -6]} color="#00FF88" scale={0.8} />
        <AnimatedTorus />
        
        <InteractiveCamera />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
