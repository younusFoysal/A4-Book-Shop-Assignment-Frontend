import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from "three";

const Model = ({ fileUrl, scale = [1, 1, 1], position = [0, 0, 0] }) => {
    const { scene } = useGLTF(fileUrl);
    const modelRef = useRef<THREE.Object3D>(null);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive object={scene} scale={scale} position={position} />;
};

const GltfViewerHome = ({ fileUrl, scale, position }) => {
    return (
        <div className="relative" style={{ width: '100%', height: '500px' }}>
            <Canvas camera={{
                position: [0, 0, 5],
                fov: 50,
                near: 0.1,
                far: 1000
            }}>


                {/* Ambient Light for Base Illumination */}
                <ambientLight intensity={2} />

                 Hemisphere Light for Soft Illumination
                <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.7} />

                 Directional Light for Strong Highlights
                <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

                 Spot Light for Extra Reflection Highlights
                {/*<SpotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={3} distance={10} />*/}

                {/* Environment Light for Realistic Reflections */}
                <Environment preset="sunset" />

                {/* Adding Lightformer for Soft Light Source */}
                {/*<Lightformer form="circle" intensity={0.5} position={[0, 5, 0]} scale={2} />*/}

                {/* 3D Model */}
                <Model fileUrl={fileUrl} scale={scale} position={position} />

                {/* Controls */}
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enablePan={false}
                    enableZoom={true}
                    minDistance={1}
                    maxDistance={20}
                    zoomSpeed={1.0}
                />

            </Canvas>
        </div>
    );
};

export default GltfViewerHome;
