import React from "react";
import s from "components/UI/Wrapper/Wrapper.module.scss";
import { Scrollbars } from "react-custom-scrollbars-2";

const Wrapper = ({
  width,
  height,
  children,
  variant,
  noScrollBar,
  ...props
}) => {
  const contentClasses =
    variant === "tabs" ? [s.content, s.noTopLine].join(" ") : s.content;

  function ScrollBarBlock() {
    return (
      <Scrollbars
        autoHide={false}
        style={{ width: "100%", height: "100%" }}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
      >
        <div className={s.block}>{children}</div>
      </Scrollbars>
    );
  }

  return (
    <div className={s.wrapBlock} {...props}>
      <div
        className={contentClasses}
        style={{ maxWidth: width + "px", height: height + "px" }}
      >
        {noScrollBar ? (
          <div className={s.block}>{children}</div>
        ) : (
          <ScrollBarBlock />
        )}
      </div>
    </div>
  );
};

export default Wrapper;
