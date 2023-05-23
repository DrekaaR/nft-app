import React, { useEffect } from "react";
import s from "components/CursorCustomizer/CursorCustomizer.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorCustomizer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorScale = useMotionValue(1);

  const springScale = useSpring(cursorScale, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 7.5);
      cursorY.set(e.clientY - 7.5);
      e.target.closest("button, a, input, textarea") ? cursorScale.set(1.5) : cursorScale.set(1);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", () => cursorScale.set(0.9));
    window.addEventListener("mouseup", (e) => {
      e.target.closest("button, a, input, textarea")
        ? cursorScale.set(1.5)
        : cursorScale.set(1);
    });
  });

  return (
    <motion.div
      className={s.cursor}
      style={{
        scale: springScale,
        left: cursorX,
        top: cursorY,
      }}
    />
  );
};

export default CursorCustomizer;