import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ darkMode }: { darkMode: boolean }) => {
  const points = useRef<THREE.Points>(null);
  const particleCount = window.innerWidth < 768 ? 1000 : 2000;

  const [positions, colors, sizes, speeds] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const color1 = new THREE.Color(darkMode ? 0x3b82f6 : 0x6366f1);
    const color2 = new THREE.Color(darkMode ? 0x8b5cf6 : 0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const mixRatio = Math.random();
      const mixedColor = new THREE.Color().lerpColors(
        color1,
        color2,
        mixRatio * mixRatio
      );
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 3 + 2;
      speeds[i] = Math.random() * 0.04 + 0.02;
    }

    return [positions, colors, sizes, speeds];
  }, [darkMode, particleCount]);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    const sizes = points.current.geometry.attributes.size.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      positions[i3 + 1] = y + Math.sin(time + x) * 0.1 * speeds[i];
      positions[i3] = x + Math.cos(time + z) * 0.1 * speeds[i];
      positions[i3 + 2] = z + Math.sin(time + y) * 0.1 * speeds[i];

      sizes[i] = (Math.sin(time * 3 + i) + 3) * speeds[i] * 3;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.geometry.attributes.size.needsUpdate = true;
    points.current.rotation.y += 0.0004;
    points.current.rotation.x += 0.0002;
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
        },
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
            gl_FragColor = vec4(vColor, 1.0);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      }),
    []
  );

  return (
    <points ref={points} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
    </points>
  );
};

const ThreeScene: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full"
      style={{
        opacity: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        touchAction: 'none',
        zIndex: 0
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ParticleField darkMode={darkMode} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;