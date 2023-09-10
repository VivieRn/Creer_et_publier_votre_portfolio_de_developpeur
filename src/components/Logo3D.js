import React, { useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../styles/Logo3D.css";

function Logo3D() {
  const gltf = useLoader(GLTFLoader, "/logo.glb");

  const meshRef = React.useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return gltf ? (
    <primitive
      object={gltf.scene}
      scale={[1, 1, 1]}
      ref={meshRef}
      className="Logo3D"
    />
  ) : null;
}

function ThreeDLogo() {
  const [size] = useState(1);

  return (
    <div className="ThreeDLogo">
      <Canvas className="Canvas">
        <ambientLight />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <camera position={[0, 0, 5]} />
        <Logo3D size={size} />
      </Canvas>
    </div>
  );
}

export default ThreeDLogo;
