import React from 'react';
import { useGLTF } from "@react-three/drei";

const Astronaut = () => {
  const { scene } = useGLTF("/models/GatewayCore.glb");

  return (
    <primitive 
        object={scene}
        position={[6, -1, 0]}        // further right and lower
        rotation={[0.6, -0.6, 0.1]}
        scale={0.5}                  // smaller
    />
  );
};

export default Astronaut;