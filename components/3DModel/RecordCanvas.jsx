import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import background from "assets/images/bg3dmodel.png";
import { Model } from "components/3DModel/NikeAirForce";
import { useCanvasRecorder } from "hooks/useCanvasRecorder";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";

const RecordCanvas = (props) => {
  const ref = useRef();
  const [canvasDom, setCanvasDom] = useState(false);
  const { startRecording, isRecording } = useCanvasRecorder();

  useEffect(() => {
    if (canvasDom) {
      setTimeout(() => {
        startRecording(canvasDom);
      }, 1000);
    }
  }, [canvasDom]);

  const onCreated = (state) => {
    // Add html canvas to state
    const canvasDom = state.gl.domElement;
    setCanvasDom(canvasDom);

    // Add bg texture for recording
    const bgTexture = new THREE.TextureLoader().load(background);
    bgTexture.encoding = THREE.sRGBEncoding;
    state.scene.background = bgTexture;
  };

  return createPortal(
    <div {...props} className="canvas-for-record">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        onCreated={onCreated}
        camera={{ fov: 20 }}
        shadows
      >
        <Suspense>
          <Stage intensity={0.2} environment="city">
            <Model record />
          </Stage>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          ref={ref}
          autoRotate
          autoRotateSpeed={3}
          enableRotate={false}
        />
      </Canvas>
    </div>,
    document.body
  );
};

export default RecordCanvas;