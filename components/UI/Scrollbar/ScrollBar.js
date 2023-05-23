import React from "react";
import s from "./ScrollBar.module.scss";
import { Scrollbars } from "react-custom-scrollbars-2";

const ScrollBar = ({ children, height, noPadding }) => {
  const thumbClasses = noPadding
    ? "thumb-vertical _no-padding"
    : "thumb-vertical";
  const trackClasses = noPadding
    ? "track-vertical _no-padding"
    : "track-vertical";

  return (
    <Scrollbars
      renderThumbVertical={(props) => (
        <div {...props} className={thumbClasses} />
      )}
      renderTrackVertical={(props) => (
        <div {...props} className={trackClasses} />
      )}
      style={{ width: "100%", height: height + "px" }}
    >
      <div style={noPadding && { paddingRight: "15px" }} className={s.block}>
        {children}
      </div>
    </Scrollbars>
  );
};

export default ScrollBar;
