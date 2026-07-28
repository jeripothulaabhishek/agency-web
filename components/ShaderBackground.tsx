"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform vec3 uColor;
  uniform float uIntensity;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse;
    float cursor = smoothstep(0.9, 0.0, distance(uv, mouse));
    uv += (uv - mouse) * cursor * 0.035;

    float t = uTime * 0.075;
    float n1 = snoise(uv * 2.2 + vec2(t, -t * 0.7));
    float n2 = snoise(uv * 5.0 + vec2(-t * 1.2, t));
    float silk = smoothstep(-0.35, 0.95, n1 + n2 * 0.25);

    vec3 white = vec3(1.0);
    vec3 mist = vec3(0.955, 0.965, 0.985);
    vec3 color = mix(white, mist, silk * 0.78);
    color = mix(color, uColor, silk * uIntensity);
    color += cursor * uColor * 0.035;

    float vignette = smoothstep(0.85, 0.18, distance(uv, vec2(0.5)));
    color = mix(vec3(1.0), color, vignette + 0.22);
    gl_FragColor = vec4(color, 1.0);
  }
`;

type ShaderBackgroundProps = {
  color?: string;
  intensity?: number;
  mouseReactive?: boolean;
  className?: string;
};

function ShaderPlane({
  color,
  intensity,
  mouseReactive,
  active
}: Required<Omit<ShaderBackgroundProps, "className">> & { active: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0.5, 0.5));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColor: { value: new THREE.Color(color) },
      uIntensity: { value: intensity }
    }),
    []
  );

  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uColor.value = new THREE.Color(color);
    materialRef.current.uniforms.uIntensity.value = intensity;
  }, [color, intensity]);

  useEffect(() => {
    if (!mouseReactive) return;
    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const container = target?.closest(".mesh-fallback") || document.body;
      const rect = container.getBoundingClientRect();
      const x = rect.width ? (event.clientX - rect.left) / rect.width : event.clientX / window.innerWidth;
      const y = rect.height ? 1 - (event.clientY - rect.top) / rect.height : 1 - event.clientY / window.innerHeight;
      pointer.current.set(Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y)));
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [mouseReactive]);

  useFrame((_, delta) => {
    const material = materialRef.current;
    if (!material || !active) return;
    material.uniforms.uTime.value += Math.min(delta, 0.033);
    material.uniforms.uResolution.value.set(size.width, size.height);
    if (mouseReactive) {
      material.uniforms.uMouse.value.lerp(pointer.current, 0.08);
    }
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

export function ShaderBackground({
  color = "#2457FF",
  intensity = 0.18,
  mouseReactive = true,
  className
}: ShaderBackgroundProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || reducedMotion || !mounted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion, mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onVisibilityChange = () => setTabVisible(!document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [mounted]);

  const active = mounted && visible && tabVisible && !reducedMotion;

  return (
    <div ref={rootRef} aria-hidden="true" className={cn("mesh-fallback pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {active ? (
        <Canvas
          className="absolute inset-0"
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
          frameloop="always"
        >
          <ShaderPlane color={color} intensity={intensity} mouseReactive={mouseReactive} active={active} />
        </Canvas>
      ) : null}
    </div>
  );
}
