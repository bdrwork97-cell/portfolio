import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useScrollPosition } from '../hooks/useScroll';

function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return mouse;
}

function NetworkCluster({
  scrollY,
  mouse,
}: {
  scrollY: number;
  mouse: { x: number; y: number };
}) {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < 14; i += 1) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 7 - 3
        )
      );
    }
    return positions;
  }, []);

  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        if (nodes[i].distanceTo(nodes[j]) < 5.5) {
          points.push(nodes[i], nodes[j]);
        }
      }
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.015 + mouse.x * 0.025;
    groupRef.current.rotation.x = mouse.y * 0.012;
    groupRef.current.position.y = -scrollY * 0.0006;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#50e6ff" transparent opacity={0.12} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          {i % 3 === 0 ? (
            <boxGeometry args={[0.32, 0.32, 0.32]} />
          ) : (
            <sphereGeometry args={[0.11, 8, 8]} />
          )}
          <meshBasicMaterial
            color={i % 3 === 0 ? '#0078d4' : '#50e6ff'}
            transparent
            opacity={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField({ scrollY }: { scrollY: number }) {
  const ref = useRef<THREE.Points>(null);
  const count = 120;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    ref.current.position.y = -scrollY * 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#50e6ff" size={0.04} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

function GridFloor({ scrollY }: { scrollY: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.y = -3.5 - scrollY * 0.0003;
  });

  return (
    <group ref={ref}>
      <gridHelper args={[28, 28, '#0078d4', '#003966']} position={[0, 0, 0]} />
    </group>
  );
}

function DataFlowParticles() {
  const ref = useRef<THREE.Group>(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        start: new THREE.Vector3(-6 + i * 1.5, (Math.random() - 0.5) * 4, -2),
        end: new THREE.Vector3(6 - i * 1.2, (Math.random() - 0.5) * 4, 1),
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random(),
      })),
    []
  );

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const p = particles[i];
      const t = ((state.clock.elapsedTime * p.speed + p.offset) % 1);
      child.position.lerpVectors(p.start, p.end, t);
    });
  });

  return (
    <group ref={ref}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshBasicMaterial color="#50e6ff" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent({ scrollY, mouse }: { scrollY: number; mouse: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 4, 6]} intensity={0.4} color="#50e6ff" />
      <NetworkCluster scrollY={scrollY} mouse={mouse} />
      <ParticleField scrollY={scrollY} />
      <GridFloor scrollY={scrollY} />
      <DataFlowParticles />
    </>
  );
}

function CssFallbackBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#eef6fc]" aria-hidden="true">
      <div className="absolute inset-0 mesh-gradient-light opacity-80" />
      <div className="absolute inset-0 holo-grid opacity-30" />
    </div>
  );
}

export default function ImmersiveScene() {
  const reduced = useReducedMotion() ?? false;
  const scrollY = useScrollPosition();
  const mouse = useMouseParallax();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  if (reduced) return <CssFallbackBackground />;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#eef6fc]" aria-hidden="true">
        <div className="absolute inset-0 mesh-gradient-light opacity-80" />
        <div className="absolute inset-0 holo-grid opacity-25" />
        <Canvas
          camera={{ position: [0, 0, 10], fov: 55 }}
          dpr={[1, 1.25]}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          style={{ opacity: 0.22 }}
        >
          <Suspense fallback={null}>
            <ParticleField scrollY={scrollY} />
          </Suspense>
        </Canvas>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#eef6fc]" />
      <div className="absolute inset-0 mesh-gradient-light opacity-70" />
      <Canvas
        camera={{ position: [0, 1, 9], fov: 58 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ opacity: 0.28 }}
      >
        <fog attach="fog" args={['#eef6fc', 10, 24]} />
        <Suspense fallback={null}>
          <SceneContent scrollY={scrollY} mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
