import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    const updateSize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    updateSize();
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create particles
    const particleCount = window.innerWidth < 768 ? 1000 : 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const geometry = new THREE.BufferGeometry();
    const color1 = new THREE.Color(darkMode ? 0x3b82f6 : 0x6366f1);
    const color2 = new THREE.Color(darkMode ? 0x8b5cf6 : 0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Position particles in a spherical pattern
      const radius = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Interpolate between two colors with slight randomization
      const mixRatio = Math.random();
      const mixedColor = new THREE.Color().lerpColors(
        color1,
        color2,
        mixRatio * mixRatio
      );
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 2 + 1;
      speeds[i] = Math.random() * 0.02 + 0.01;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create custom shader material for better particle rendering
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform float pixelRatio;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
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
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Camera positioning
    camera.position.z = 20;

    let lastTime = 0;
    const rotationSpeed = 0.00008;
    const waveSpeed = 0.0003;

    // Animation loop with consistent timing
    const animate = (currentTime: number) => {
      frameRef.current = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (particles && material.uniforms) {
        material.uniforms.time.value = currentTime * 0.001;

        const positions = particles.geometry.attributes.position.array as Float32Array;
        const sizes = particles.geometry.attributes.size.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          const x = positions[i3];
          const y = positions[i3 + 1];
          const z = positions[i3 + 2];

          // Create smooth wave effect
          const time = currentTime * waveSpeed;
          positions[i3 + 1] = y + Math.sin(time + x) * 0.02 * speeds[i];
          positions[i3] = x + Math.cos(time + z) * 0.02 * speeds[i];
          positions[i3 + 2] = z + Math.sin(time + y) * 0.02 * speeds[i];

          // Smooth size pulsing
          sizes[i] = (Math.sin(time * 2 + i) + 2) * speeds[i] * 2;
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.size.needsUpdate = true;

        // Smooth automatic rotation
        particles.rotation.y += rotationSpeed * deltaTime;
        particles.rotation.x += rotationSpeed * deltaTime * 0.3;
      }

      // Gentle camera movement
      if (camera) {
        const camTime = currentTime * 0.0001;
        camera.position.x = Math.sin(camTime) * 2;
        camera.position.y = Math.cos(camTime) * 1.5;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      updateSize();
      if (material.uniforms) {
        material.uniforms.pixelRatio.value = renderer.getPixelRatio();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [darkMode]);

  // Update colors when dark mode changes
  useEffect(() => {
    if (!particlesRef.current) return;

    const particles = particlesRef.current;
    const colors = particles.geometry.attributes.color.array as Float32Array;
    const color1 = new THREE.Color(darkMode ? 0x3b82f6 : 0x6366f1);
    const color2 = new THREE.Color(darkMode ? 0x8b5cf6 : 0xa855f7);

    for (let i = 0; i < colors.length; i += 3) {
      const mixRatio = Math.random();
      const mixedColor = new THREE.Color().lerpColors(
        color1,
        color2,
        mixRatio * mixRatio
      );
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particles.geometry.attributes.color.needsUpdate = true;
  }, [darkMode]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full"
      style={{ 
        opacity: 0.8,
        pointerEvents: 'none',
        userSelect: 'none',
        touchAction: 'none'
      }}
    />
  );
};

export default ThreeScene; 