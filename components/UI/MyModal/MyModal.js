import { ReactComponent as CloseIcon } from "assets/images/icons/close.svg";
import s from "components/UI/MyModal/MyModal.module.scss";
import { motion } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";

const MyModal = ({
  isOpen,
  setOpen,
  children,
  width,
  contHeight,
  variant,
  ...props
}) => {
  const contentClasses = [
    s.content,
    variant === "small" && s.contentSmall,
  ].join(" ");

  const closeModal = () => setOpen(false);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={s.popup}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={s.wrapper}
              onClick={closeModal}
              {...props}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                onClick={(e) => e.stopPropagation()}
                className={contentClasses}
                style={{ maxWidth: `${width}px`, height: contHeight }}
              >
                <button onClick={closeModal} className={s.closeButton}>
                  <CloseIcon />
                </button>

                <div className={s.popupBody}>{children}</div>
              </motion.div>
            </motion.div>
          </div>,
          document.body
        )}
    </>
  );
};

export default MyModal;
