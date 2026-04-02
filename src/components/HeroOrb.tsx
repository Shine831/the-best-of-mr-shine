"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   CUSTOM IRIDESCENT SHADER MATERIAL
   Fresnel-driven color shift + chromatic dispersion
   ───────────────────────────────────────────── */

const IridescentMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uBaseColor: { value: new THREE.Color("#1a1a2e") },
    uFresnelPower: { value: 2.5 },
    uIridescenceIntensity: { value: 0.8 },
  },
  vertexShader: /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewDir;
    varying vec3 vWorldPos;
    varying float vDisplacement;
    uniform float uTime;
    uniform vec2 uMouse;

    // Simplex-like noise for organic distortion
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      // Organic distortion
      float noise = snoise(position * 1.2 + uTime * 0.15) * 0.18;
      float mouseInfluence = smoothstep(2.0, 0.0, length(position.xy - uMouse * 1.5)) * 0.12;
      vDisplacement = noise + mouseInfluence;
      
      vec3 newPos = position + normal * vDisplacement;
      
      vec4 worldPos = modelMatrix * vec4(newPos, 1.0);
      vWorldPos = worldPos.xyz;
      vViewDir = normalize(cameraPosition - worldPos.xyz);
      
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewDir;
    varying vec3 vWorldPos;
    varying float vDisplacement;
    uniform float uTime;
    uniform vec3 uBaseColor;
    uniform float uFresnelPower;
    uniform float uIridescenceIntensity;

    // HSV to RGB conversion
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewDir);
      
      // Fresnel effect — edge glow
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), uFresnelPower);
      
      // Iridescent color shift based on view angle + time
      float angle = dot(normal, viewDir);
      float hue = fract(angle * 0.6 + uTime * 0.03 + vDisplacement * 2.0);
      vec3 iridescentColor = hsv2rgb(vec3(hue, 0.5, 0.9));
      
      // Apple blue/purple/teal palette bias
      vec3 appleBlue = vec3(0.161, 0.592, 1.0);   // #2997ff
      vec3 applePurple = vec3(0.749, 0.353, 0.949); // #bf5af2
      vec3 appleTeal = vec3(0.353, 0.784, 0.980);   // #5ac8fa
      
      float colorShift = fract(angle * 1.5 + uTime * 0.05);
      vec3 appleIridescent = mix(appleBlue, applePurple, smoothstep(0.0, 0.5, colorShift));
      appleIridescent = mix(appleIridescent, appleTeal, smoothstep(0.5, 1.0, colorShift));
      
      // Merge iridescence with base
      vec3 finalIrid = mix(iridescentColor, appleIridescent, 0.7);
      
      // Combine base color with iridescent fresnel
      vec3 color = mix(uBaseColor, finalIrid, fresnel * uIridescenceIntensity);
      
      // Inner glow
      color += appleBlue * 0.06;
      
      // Edge highlight (rim light)
      color += vec3(1.0) * pow(fresnel, 5.0) * 0.3;
      
      // Subtle specular
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 64.0);
      color += vec3(1.0) * spec * 0.4;
      
      // Alpha: more transparent in center, opaque at edges
      float alpha = mix(0.4, 0.95, fresnel);
      
      gl_FragColor = vec4(color, alpha);
    }
  `,
};

/* ─────────────────────────────────────────────
   IRIDESCENT ORB COMPONENT
   ───────────────────────────────────────────── */

function GlassOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uBaseColor: { value: new THREE.Color("#0d0d1a") },
      uFresnelPower: { value: 2.5 },
      uIridescenceIntensity: { value: 0.85 },
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;

    // Smooth mouse tracking
    const { x, y } = state.pointer;
    uniforms.uMouse.value.lerp(
      new THREE.Vector2(x * viewport.width * 0.5, y * viewport.height * 0.5),
      0.05
    );

    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.06;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.09;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
  });

  return (
    <group>
      {/* Main Iridescent Sphere */}
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <shaderMaterial
          attach="material"
          vertexShader={IridescentMaterial.vertexShader}
          fragmentShader={IridescentMaterial.fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </Sphere>

      {/* Inner core glow */}
      <Sphere args={[1.2, 64, 64]}>
        <meshBasicMaterial
          color="#2997ff"
          transparent
          opacity={0.03}
        />
      </Sphere>

      {/* Accent orbital ring 1 */}
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.3, 0.006, 32, 200]} />
        <meshBasicMaterial
          color="#2997ff"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Accent orbital ring 2 */}
      <mesh rotation={[Math.PI / 3.5, Math.PI / 5, 0]}>
        <torusGeometry args={[2.6, 0.004, 32, 200]} />
        <meshBasicMaterial
          color="#bf5af2"
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Lighting rig */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#f5f5f7" />
      <pointLight position={[-4, 3, -3]} intensity={1.2} color="#2997ff" />
      <pointLight position={[4, -2, 4]} intensity={0.6} color="#bf5af2" />
      <pointLight position={[0, 4, 0]} intensity={0.4} color="#5ac8fa" />
    </group>
  );
}

/* ─────────────────────────────────────────────
   CANVAS WRAPPER
   ───────────────────────────────────────────── */

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
