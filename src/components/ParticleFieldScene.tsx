import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Function to create a texture from a symbol
const createSymbolTexture = (symbol: string, color: string) => {
  const canvas = document.createElement('canvas');
  const size = 64; // Keep original texture size
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return new THREE.CanvasTexture(canvas);

  context.clearRect(0, 0, size, size);
  context.fillStyle = color;
  context.font = `bold ${size * 0.7}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(symbol, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = false; // Prevent unnecessary updates
  return texture;
};

const ParticleFieldScene = ({ darkMode }: { darkMode: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  const particleCount = 800; // Slightly reduced for better performance
  const particleSpread = 100;

  const symbols = useMemo(() => [
  '→', // arrow, flow
  '0', // menu, equality
  '1',
  '∑', // summation
  'λ', // lambda
  '∞', // infinity
  '</>', // command symbol
  '⇌', // reversible
  '✓', // check
  '✦', // section
], []);


  const particles = useMemo(() => {
    const tempParticles: THREE.Sprite[] = [];
    const particleData: { sprite: THREE.Sprite; speed: number; initialPosition: THREE.Vector3; }[] = [];

    const particleColor = darkMode ? '#888888' : '#cccccc';
    
    // Create a shared material for each symbol to reduce GPU memory usage
    const materialMap = new Map<string, THREE.SpriteMaterial>();
    
    for (let i = 0; i < particleCount; i++) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      // Reuse material if it exists for this symbol
      let material = materialMap.get(symbol);
      if (!material) {
        const texture = createSymbolTexture(symbol, particleColor);
        material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        materialMap.set(symbol, material);
      }
      
      const sprite = new THREE.Sprite(material);

      const initialPosition = new THREE.Vector3(
        (Math.random() - 0.5) * particleSpread,
        (Math.random() - 0.5) * particleSpread,
        (Math.random() - 0.5) * particleSpread
      );
      sprite.position.copy(initialPosition);
      sprite.scale.set(1, 1, 1).multiplyScalar(Math.random() * 0.5 + 0.5);

      tempParticles.push(sprite);
      particleData.push({ sprite, speed: Math.random() * 0.04 + 0.02, initialPosition });
    }
    return particleData;
  }, [darkMode, particleCount, symbols]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle rotation of the entire particle field group
    groupRef.current.rotation.y = time * 0.01;
    groupRef.current.rotation.x = time * 0.005;

    // Animate particles in batches for better performance
    const batchSize = 100;
    for (let i = 0; i < particles.length; i += batchSize) {
      const endIdx = Math.min(i + batchSize, particles.length);
      for (let j = i; j < endIdx; j++) {
        const { sprite, speed, initialPosition } = particles[j];
        
        // Simple oscillating movement
        sprite.position.x = initialPosition.x + Math.sin(time * speed + initialPosition.y) * 5;
        sprite.position.y = initialPosition.y + Math.cos(time * speed + initialPosition.z) * 5;
        sprite.position.z = initialPosition.z + Math.sin(time * speed + initialPosition.x) * 5;

        // Subtle scaling
        sprite.scale.set(1, 1, 1).multiplyScalar(Math.sin(time * 2 + initialPosition.x) * 0.2 + 0.8);
      }
    }

    // Subtle camera movement
    state.camera.position.x = Math.sin(time * 0.01) * 10;
    state.camera.position.y = Math.cos(time * 0.015) * 10;
    state.camera.position.z = 50 + Math.sin(time * 0.008) * 5;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, index) => (
        <primitive key={index} object={p.sprite} />
      ))}
    </group>
  );
};

export default ParticleFieldScene;
