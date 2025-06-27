import { Canvas } from '@react-three/fiber';
import ParticleFieldScene from './ParticleFieldScene';

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
        <ParticleFieldScene darkMode={darkMode} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;