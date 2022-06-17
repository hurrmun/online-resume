import * as THREE from 'three';
import * as React from 'react';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  OrbitControls,
  Sphere,
  Text,
  Center,
  Float,
} from '@react-three/drei';
import { position } from '@chakra-ui/react';

// const args = {
//   enableDamping: true,
//   enablePan: true,
//   nableRotate: true,
//   enableZoom: true,
//   reverseOrbit: false,
// };

function Cube(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  //   const ref = useRef<THREE.Mesh>(null!);
  // Rotate mesh every frame, this is outside of React without overhead
  //   useFrame((state, delta) => (ref.current.rotation.x += 0.001));

  //   return (
  //     <mesh {...props} ref={ref} scale={1}>
  //       <sphereGeometry args={[1, 16, 16]} />
  //       <meshStandardMaterial color='white' />
  //     </mesh>
  //   );

  return (
    <React.Suspense fallback={null}>
      <Center>
        <Float rotationIntensity={0.2} floatIntensity={1} speed={0.5}>
          <Text
            font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
            fontSize={12}
            maxWidth={100}
            anchorX='center'
            anchorY='middle'
            textAlign='center'
          >
            <meshBasicMaterial />
            WELCOME TO HERMAN'S ONLINE RESUME
          </Text>
        </Float>
      </Center>
    </React.Suspense>
  );
}

export default function Feature() {
  return (
    <Canvas camera={{ position: [0, 0, 30], near: 0.1, far: 1000, fov: 75 }}>
      {/* <PerspectiveCamera
        makeDefault
        position={[0, 0, 0]}
        near={0.1}
        far={100}
        fov={75}
        aspect={2 / 1}
      > */}
      <Cube />
      {/* </PerspectiveCamera> */}
      <OrbitControls />
    </Canvas>
  );
}
