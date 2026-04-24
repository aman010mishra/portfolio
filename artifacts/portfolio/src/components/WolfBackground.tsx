import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, Sparkles, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const MODEL_URL = `${import.meta.env.BASE_URL}models/wolf.glb`;

function Wolf() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    // Play the "Survey" animation (idle look-around) — falls back to first animation if missing
    const anim = actions[names.find((n) => n.toLowerCase().includes('survey')) ?? names[0]];
    if (anim) {
      anim.reset().fadeIn(0.8).play();
      anim.timeScale = 0.6;
    }
    return () => {
      if (anim) anim.fadeOut(0.4);
    };
  }, [actions, names]);

  useEffect(() => {
    // Apply moody dark material treatment to the wolf
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.color = new THREE.Color('#1a1f3a');
          mat.metalness = 0.45;
          mat.roughness = 0.55;
          mat.emissive = new THREE.Color('#3a2670');
          mat.emissiveIntensity = 0.15;
          mat.needsUpdate = true;
        }
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  // Subtle breathing wobble
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = -1.2 + Math.sin(t * 0.6) * 0.05;
      groupRef.current.rotation.y = -0.35 + Math.sin(t * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, -1.2, 0]} rotation={[0, -0.35, 0]} scale={0.022}>
      <primitive object={scene} />
    </group>
  );
}

function FloatingLeaves() {
  // Small drifting "leaf" planes for atmosphere
  const leaves = Array.from({ length: 14 }, (_, i) => i);
  return (
    <>
      {leaves.map((i) => {
        const x = (Math.random() - 0.5) * 12;
        const y = (Math.random() - 0.3) * 6;
        const z = (Math.random() - 0.5) * 4;
        const rot = Math.random() * Math.PI;
        const speed = 1 + Math.random() * 2;
        return (
          <Float key={i} speed={speed} rotationIntensity={2} floatIntensity={1.5}>
            <mesh position={[x, y, z]} rotation={[rot, rot * 0.7, rot * 0.3]}>
              <planeGeometry args={[0.18, 0.28]} />
              <meshStandardMaterial
                color="#2a3358"
                emissive="#4a5fa8"
                emissiveIntensity={0.35}
                side={THREE.DoubleSide}
                transparent
                opacity={0.55}
              />
            </mesh>
          </Float>
        );
      })}
    </>
  );
}

function Aurora() {
  // Soft purple/teal aurora glow plane behind the wolf
  return (
    <mesh position={[-2, 1, -3]}>
      <planeGeometry args={[14, 8]} />
      <meshBasicMaterial color="#3a1a6a" transparent opacity={0.35} />
    </mesh>
  );
}

export function WolfBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 30% 30%, #1a1340 0%, #060812 70%)' }}
    >
      <Canvas
        camera={{ position: [0, 0.4, 5.5], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#060812', 6, 14]} />

        <ambientLight intensity={0.25} color="#5a4a9a" />
        <directionalLight position={[3, 4, 4]} intensity={1.1} color="#9a7fff" castShadow />
        <pointLight position={[-4, 2, 2]} intensity={1.4} color="#4ae0ff" distance={10} />
        <pointLight position={[4, -1, 1]} intensity={1.0} color="#a64aff" distance={8} />
        <spotLight position={[0, 5, 3]} angle={0.4} penumbra={1} intensity={0.8} color="#ffffff" />

        <Aurora />

        <Suspense fallback={null}>
          <Wolf />
          <Environment preset="night" />
        </Suspense>

        <FloatingLeaves />
        <Sparkles count={120} scale={[12, 6, 4]} size={1.5} speed={0.25} color="#9ad4ff" opacity={0.6} />

        <EffectComposer enableNormalPass={false}>
          <Bloom luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur intensity={0.7} />
          <Vignette eskil={false} offset={0.15} darkness={0.85} />
        </EffectComposer>
      </Canvas>

      {/* Color overlay tint to deepen mood and improve text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(6,8,18,0.55) 0%, rgba(6,8,18,0.35) 40%, rgba(6,8,18,0.75) 100%)',
        }}
      />
    </div>
  );
}

useGLTF.preload(MODEL_URL);
