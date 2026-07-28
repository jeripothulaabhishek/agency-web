"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

type ShapeProps = {
  kind: "torus" | "ico" | "octa";
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
};

function Shape({ kind, position, scale, color, speed }: ShapeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    mesh.rotation.x = t * 0.18 * speed + mouse.y * 0.18;
    mesh.rotation.y = t * 0.24 * speed + mouse.x * 0.2;
    mesh.position.x = position[0] + mouse.x * 0.28 * speed;
    mesh.position.y = position[1] + Math.sin(t * 0.6 * speed) * 0.08 + mouse.y * 0.18 * speed;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {kind === "torus" ? <torusKnotGeometry args={[0.72, 0.16, 90, 12]} /> : null}
      {kind === "ico" ? <icosahedronGeometry args={[0.95, 1]} /> : null}
      {kind === "octa" ? <octahedronGeometry args={[0.85, 1]} /> : null}
      <meshStandardMaterial color={color} roughness={0.32} metalness={0.08} />
    </mesh>
  );
}

export function FloatingShapes({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reducedMotion) {
    return (
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div className="absolute right-[13%] top-[22%] size-28 rounded-[2rem] bg-accent/10 blur-sm" />
        <div className="absolute bottom-[18%] left-[8%] size-20 rounded-full bg-white shadow-neo" />
      </div>
    );
  }

  return (
    <Canvas
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 5, 4]} intensity={2.6} />
      <directionalLight position={[-4, -2, 4]} intensity={1.1} color="#dbe7ff" />
      <Shape kind="torus" position={[2.45, 1.18, 0]} scale={0.72} color="#ffffff" speed={0.85} />
      <Shape kind="ico" position={[-2.2, -0.9, 0.6]} scale={0.48} color="#2457ff" speed={1.12} />
      <Shape kind="octa" position={[1.6, -1.45, 1.1]} scale={0.36} color="#f5f7fb" speed={1.35} />
    </Canvas>
  );
}
