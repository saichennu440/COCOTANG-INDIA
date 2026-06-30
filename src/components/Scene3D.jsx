import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial, Sphere, Torus, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// The main 3D bottle mockup
function BottleMockup() {
  const groupRef = useRef()
  const liquidRef = useRef()
  const shineRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.25
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.08
    }
    if (liquidRef.current) {
      liquidRef.current.rotation.y = t * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Bottle body */}
      <Cylinder args={[0.38, 0.44, 2.6, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.92}
          roughness={0.05}
          metalness={0}
          ior={1.5}
          thickness={0.3}
          transparent
          opacity={0.25}
        />
      </Cylinder>

      {/* Bottle neck */}
      <Cylinder args={[0.18, 0.36, 0.5, 32]} position={[0, 1.55, 0]}>
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.92}
          roughness={0.05}
          transparent
          opacity={0.2}
        />
      </Cylinder>

      {/* Cap */}
      <Cylinder args={[0.2, 0.2, 0.2, 32]} position={[0, 1.9, 0]}>
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.6} />
      </Cylinder>

      {/* Liquid inside */}
      <Cylinder args={[0.34, 0.4, 2.3, 32]} position={[0, -0.1, 0]} ref={liquidRef}>
        <meshPhysicalMaterial
          color="#D42B2B"
          transmission={0.4}
          roughness={0.1}
          emissive="#8B0000"
          emissiveIntensity={0.3}
          transparent
          opacity={0.85}
        />
      </Cylinder>

      {/* Label */}
      <Cylinder args={[0.385, 0.445, 0.9, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#D42B2B" roughness={0.5} />
      </Cylinder>

      {/* Shine streak */}
      <Cylinder args={[0.01, 0.01, 2.2, 8]} position={[0.3, 0, 0.2]} ref={shineRef}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </Cylinder>
    </group>
  )
}

// Floating bubbles
function Bubbles() {
  const bubbles = useMemo(() => (
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      pos: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3 - 2,
      ],
      scale: Math.random() * 0.18 + 0.04,
      speed: Math.random() * 0.4 + 0.2,
      offset: Math.random() * Math.PI * 2,
    }))
  ), [])

  return (
    <>
      {bubbles.map((b) => (
        <FloatingBubble key={b.id} {...b} />
      ))}
    </>
  )
}

function FloatingBubble({ pos, scale, speed, offset }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.position.y = pos[1] + Math.sin(t * speed + offset) * 0.5
      ref.current.position.x = pos[0] + Math.cos(t * speed * 0.5 + offset) * 0.15
    }
  })
  return (
    <Sphere args={[scale, 16, 16]} ref={ref} position={pos}>
      <meshPhysicalMaterial
        color="#D42B2B"
        transmission={0.6}
        roughness={0.1}
        metalness={0.1}
        transparent
        opacity={0.55}
        emissive="#440000"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

// Spinning golden ring
function GoldenRing() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.3
      ref.current.rotation.z = t * 0.15
      ref.current.position.y = Math.sin(t * 0.4) * 0.2
    }
  })
  return (
    <Torus args={[1.8, 0.02, 16, 80]} ref={ref} position={[0, 0, -1.5]}>
      <meshStandardMaterial
        color="#F5A623"
        emissive="#F5A623"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.1}
      />
    </Torus>
  )
}

// Outer ambient sphere
function AmbientGlow() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.y = t * 0.05
      ref.current.rotation.x = t * 0.03
    }
  })
  return (
    <Sphere args={[4, 32, 32]} ref={ref}>
      <MeshDistortMaterial
        color="#D42B2B"
        distort={0.3}
        speed={0.5}
        transparent
        opacity={0.04}
        side={THREE.BackSide}
      />
    </Sphere>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-3, -2, -2]} intensity={0.6} color="#D42B2B" />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#F5A623" />
      <pointLight position={[-2, -2, 1]} intensity={0.8} color="#D42B2B" />

      <Environment preset="city" />

      {/* Scene elements */}
      <AmbientGlow />
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <BottleMockup />
      </Float>
      <GoldenRing />
      <Bubbles />
    </Canvas>
  )
}
