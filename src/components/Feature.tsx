import * as THREE from 'three';
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Center, Float } from '@react-three/drei';

function FeatureText(props: JSX.IntrinsicElements['mesh']) {
  return (
    <React.Suspense fallback={null}>
      <Center>
        <Float rotationIntensity={0.5} floatIntensity={1} speed={0.5}>
          <Text
            font='/fonts/OpenSans-ExtraBold.woff'
            fontSize={12}
            maxWidth={100}
            lineHeight={1}
            anchorX='center'
            anchorY='middle'
            textAlign='center'
          >
            <meshBasicMaterial side={THREE.DoubleSide} />
            WELCOME TO HERMAN'S ONLINE RESUME
          </Text>
        </Float>
      </Center>
    </React.Suspense>
  );
}

export default function Feature() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 30], near: 0.1, far: 1000, fov: 75 }}>
        <FeatureText />
        <OrbitControls />
      </Canvas>
    </>
  );
}
