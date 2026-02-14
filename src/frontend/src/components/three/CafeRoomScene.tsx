import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

export default function CafeRoomScene() {
  const steamRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Animate steam and light
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (steamRef.current) {
      steamRef.current.position.y = 1.2 + Math.sin(time * 0.5) * 0.1;
      steamRef.current.rotation.y = time * 0.2;
    }
    
    if (lightRef.current) {
      lightRef.current.intensity = 0.8 + Math.sin(time * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1.6, 5]} fov={60} />
      
      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={10}
        maxPolarAngle={Math.PI / 2}
        target={[0, 1, 0]}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} castShadow />
      <pointLight ref={lightRef} position={[0, 2.5, 0]} intensity={0.8} color="#f4a460" />
      
      {/* Environment for reflections */}
      <Environment preset="apartment" />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 2, -5]} receiveShadow>
        <boxGeometry args={[20, 4, 0.2]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.9} />
      </mesh>
      
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.9} />
      </mesh>

      {/* Counter */}
      <group position={[0, 0, -3]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[4, 1, 1]} />
          <meshStandardMaterial color="#654321" roughness={0.6} metalness={0.2} />
        </mesh>
        <mesh position={[0, 1.1, 0]} castShadow>
          <boxGeometry args={[4.2, 0.1, 1.2]} />
          <meshStandardMaterial color="#8B4513" roughness={0.3} metalness={0.4} />
        </mesh>
      </group>

      {/* Coffee Machine */}
      <group position={[-1, 1.15, -3]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.8, 0.4]} />
          <meshStandardMaterial color="#2C2C2C" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Steam effect */}
        <group ref={steamRef} position={[0, 0.5, 0]}>
          <mesh>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
          </mesh>
        </group>
      </group>

      {/* Table 1 */}
      <group position={[2, 0, 0]}>
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
          <meshStandardMaterial color="#654321" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.4} />
        </mesh>
      </group>

      {/* Chair 1 */}
      <group position={[2.8, 0, 0]}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#654321" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.6, -0.15]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.1]} />
          <meshStandardMaterial color="#654321" roughness={0.7} />
        </mesh>
      </group>

      {/* Table 2 */}
      <group position={[-2, 0, 1]}>
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
          <meshStandardMaterial color="#654321" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.4} />
        </mesh>
      </group>

      {/* Chair 2 */}
      <group position={[-2.8, 0, 1]}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#654321" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.6, -0.15]} castShadow>
          <boxGeometry args={[0.4, 0.5, 0.1]} />
          <meshStandardMaterial color="#654321" roughness={0.7} />
        </mesh>
      </group>

      {/* Decorative plant */}
      <group position={[3, 0.8, -2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.3, 8]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.25, 8, 8]} />
          <meshStandardMaterial color="#228B22" roughness={0.9} />
        </mesh>
      </group>

      {/* Pendant light */}
      <group position={[0, 2.8, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.4, 0.3, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFA500" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </>
  );
}
