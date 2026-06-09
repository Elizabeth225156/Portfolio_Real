import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import Astronaut from "../components/Astronaut";
import { OrbitControls } from '@react-three/drei';

const Hero = () => {
    return (
        <section className="flex items-start justify-center md:items-start
        md:justify-start min-h-screen overflow-hidden c-space relative z-10">
            <HeroText />
            <ParallaxBackground />
            <figure className='absolute inset-0'>
                <Canvas 
                    className="absolute inset-0 z-0" 
                    style={{ width: "100vw", height: "100vh" }} 
                    camera={{ position: [0, 2, 15] }}
                    >
                    <ambientLight intensity={2} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <Suspense fallback={
                        <mesh position={[6, -3, 0]}>
                            <sphereGeometry args={[0.5, 16, 16]} />
                            <meshStandardMaterial color="#888" wireframe />
                        </mesh>
                    }>
                        <Astronaut />
                    </Suspense>
                    <OrbitControls 
                        enableZoom={false}
                        enablePan={false}
                    />
                </Canvas>
            </figure>
            <p className="absolute bottom-4 right-4 text-xs text-neutral-500 z-10">
                3D model: NASA Gateway Lunar Space Station
            </p>
        </section>
        
    );
};

export default Hero;