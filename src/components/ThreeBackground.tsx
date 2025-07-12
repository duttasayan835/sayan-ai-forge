
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1500 * 3); // Reduced particle count
    const colors = new Float32Array(1500 * 3);
    
    for (let i = 0; i < 1500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
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
    if (ref.current && ref.current.geometry && ref.current.geometry.attributes.position) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.015) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.8}
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
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 1;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.5;
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.4}
          distort={0.2}
          speed={1}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      const time = state.clock.elapsedTime;
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.15;
      torusRef.current.rotation.z = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <mesh ref={torusRef} position={[-6, 2, -10]}>
      <torusGeometry args={[1.5, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.5}
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  );
}

function InteractiveCamera() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    if (camera && mouse) {
      camera.position.x += (mouse.x * 1 - camera.position.x) * 0.01;
      camera.position.y += (mouse.y * 1 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);
    }
  });
  
  return null;
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#00D9FF" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
          <pointLight position={[0, 10, 5]} color="#FF0080" intensity={0.3} />
          
          <ParticleField />
          <FloatingOrb position={[4, 1, -6]} color="#00D9FF" scale={1.2} />
          <FloatingOrb position={[-5, -2, -8]} color="#FF0080" scale={1} />
          <FloatingOrb position={[2, -3, -4]} color="#00FF88" scale={0.6} />
          <AnimatedTorus />
          
          <InteractiveCamera />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
