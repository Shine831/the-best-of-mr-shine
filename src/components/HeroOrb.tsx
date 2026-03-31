"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    uniforms.time.value = state.clock.elapsedTime;
  });

  return (
    <group>
      {/* Main Glass Sphere without external HDR map */}
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial
          color="#3b82f6"
          transparent
          opacity={0.85}
          roughness={0.15}
          metalness={0.6}
          distort={0.3}
          speed={1.5}
          envMapIntensity={0}
          clearcoat={1}
          clearcoatRoughness={0.2}
          emissive="#2997ff"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.6, 64, 64]}>
        <meshBasicMaterial
          color="#2997ff"
          transparent
          opacity={0.04}
        />
      </Sphere>

      {/* Accent ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.2, 0.008, 32, 128]} />
        <meshBasicMaterial
          color="#2997ff"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.005, 32, 128]} />
        <meshBasicMaterial
          color="#bf5af2"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#f5f5f7" />
      <pointLight position={[-4, 3, -3]} intensity={1.5} color="#2997ff" />
      <pointLight position={[4, -2, 4]} intensity={0.8} color="#bf5af2" />
      <pointLight position={[0, 4, 0]} intensity={0.5} color="#5ac8fa" />
    </group>
  );
}

export default function HeroOrb() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <GlassOrb />
      </Canvas>
    </div>
  );
}
