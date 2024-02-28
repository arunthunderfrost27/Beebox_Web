import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

export const Model1 = ({ isMobile1 }) => {
  const Model1 = useGLTF("./Model1/scene.gltf");

  return (
    <mesh>
        <Environment background={true} files={"public/spruit_sunrise_8k.exr"} intensity={100}/>
        <ambientLight intensity={30}/>
      <primitive
        object={Model1.scene}
        scale={isMobile1 ? 3 : 6}
        position={isMobile1 ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0.6, 0]}
      />
    </mesh>
  );
};

const ModelsCanvas1 = () => {
  const [isMobile1, setisMobile1] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setisMobile1(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setisMobile1(event.matches);
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
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model1 isMobile1={isMobile1} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelsCanvas1;