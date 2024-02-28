import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

export const Models = ({ isMobile }) => {
  const Model = useGLTF("./model1/scene.gltf");

  return (
    <mesh>
        <Environment background={false} files={"/spruit_sunrise_8k.exr"} intensity={100}/>
        <ambientLight intensity={50}/>
      <primitive
        object={Model.scene}
        scale={isMobile ? 3 : 6}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0.6, 0]}
      />
    </mesh>
  );
};

const ModelsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Models isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelsCanvas;
