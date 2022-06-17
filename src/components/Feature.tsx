import * as THREE from 'three';
import * as React from 'react';
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Canvas, useFrame, createRoot, extend } from '@react-three/fiber';
import { OrbitControls, OrbitControlsProps } from '@react-three/drei';

const args = {
  enableDamping: true,
  enablePan: true,
  nableRotate: true,
  enableZoom: true,
  reverseOrbit: false,
};

export const OrbitControlsStory = (props: OrbitControlsProps) => (
  <>
    <OrbitControls {...props} />
    <Box>
      <meshBasicMaterial wireframe />
    </Box>
  </>
);

OrbitControlsStory.args = args;
OrbitControlsStory.storyName = 'Default';

function Cube(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.001));

  return (
    <mesh {...props} ref={ref} scale={1}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color='orange' wireframe={true} />
    </mesh>
  );
}

export default function Feature() {
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, -1] }}
      dpr={[1, 1]}
    >
      <Cube position={[0, 0, 1]} />
    </Canvas>
  );
}
