import React from 'react';
import { useGLTF } from "@react-three/drei";


const Astronaut = () => {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/GatewayCore.glb");

  return (
    <primitive 
        object={scene}
        position={[6, -1, 0]}
        rotation={[0.6, -0.6, 0.1]}
        scale={0.5}
    />
  );
};

export default Astronaut;

useGLTF.preload(`${import.meta.env.BASE_URL}models/GatewayCore.glb`);