import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "components/3DModel/NikeAirForce";
import Loader from "components/UI/Loader/Loader";
import { colors } from "config/colorsForNft";
import { MergeContext } from "contexts/MergeContext";
import { usePaintRandomly } from "hooks/usePaintRandomly";
import React, {
  memo,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "components/ModelPreview/ModelPreview.module.scss";

const ModelPreview = memo(({ ...props }) => {
  const ref = useRef();
  const { mergeState } = useContext(MergeContext);
  const [isPainted, setIsPainted] = useState(false);
  const { paintRandomly } = usePaintRandomly();

  useEffect(() => {
    isShoePainted();
    isPainted && paintRandomly(colors);
  }, [isPainted]);

  const isShoePainted = () => {
    let items = [];

    Object.entries(mergeState.model.items).forEach(([part, color]) => {
      if (color === "#ffffff") {
        items.push(false);
      } else {
        items.push(true);
      }
    });

    !items.includes(true) && setIsPainted(true);
  };

  return (
    <>
      <div {...props} className={s.canvasBlock}>
        {mergeState.isPrinting ? (
          <Loader />
        ) : (
          <Canvas camera={{ fov: 20 }} shadows>
            <Suspense>
              <Stage intensity={0.2} environment="city">
                <Model />
              </Stage>
            </Suspense>
            <OrbitControls
              enableZoom={false}
              ref={ref}
              autoRotate
              autoRotateSpeed={2}
              enableRotate={false}
            />
          </Canvas>
        )}
      </div>
    </>
  );
});

export default ModelPreview;
