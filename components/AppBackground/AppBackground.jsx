import s from "components/AppBackground/AppBackground.module.scss";
import React, { useContext } from "react";
import { MouseParallax } from "react-just-parallax";
import { Store } from "store/store-reducer";

const AppBackground = () => {
  const { state } = useContext(Store);
  return (
    <div className={s.body}>
      <MouseParallax strength={0.03} lerpEase={0.08} isAbsolutelyPositioned>
        <div className={s.video}>
          <video
            id="bg-video"
            preload="true"
            src={state.appBackground}
            loop
            muted
            playsInline
            autoPlay
          />
        </div>
      </MouseParallax>
    </div>
  );
};

export default AppBackground;
