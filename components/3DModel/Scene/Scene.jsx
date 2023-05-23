import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "components/3DModel/NikeAirForce";
import ColorPicker from "components/3DModel/Scene/ColorPicker";
import PartPicker from "components/3DModel/Scene/PartPicker";
import s from "components/3DModel/Scene/Scene.module.scss";
import { usePaintRandomly } from "hooks/usePaintRandomly";
import React, { Suspense, useRef, useState } from "react";

const Scene = () => {
  const [isRotate, setIsRotate] = useState(true);
  const ref = useRef();

  const { paintRandomly } = usePaintRandomly();

  const start = () => {
    setIsRotate(false);
  };

  const stop = () => {
    const currentRotateState = isRotate;
    const timeout = setTimeout(() => {
      if (isRotate === currentRotateState) {
        setIsRotate(true);
      }
    }, 15000);
    if (isRotate !== currentRotateState) {
      clearTimeout(timeout);
    }
  };

  return (
    <>
      <PartPicker paintRandomly={paintRandomly} />

      <div className={s.canvasBody}>
        <Canvas shadows camera={{ fov: 20 }}>
          <Suspense>
            <Stage intensity={0.2} environment="city">
              <Model />
            </Stage>
          </Suspense>

          <OrbitControls
            ref={ref}
            onStart={start}
            onEnd={stop}
            autoRotate={isRotate}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI - Math.PI / 2}
            maxDistance={1}
            minDistance={0.5}
          />
        </Canvas>
      </div>

      <ColorPicker />
    </>
  );
};

export default Scene;
