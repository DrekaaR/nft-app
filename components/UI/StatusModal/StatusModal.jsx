import React, { useContext, useEffect, useState } from "react";
import { updateLoader } from "store/actions";
import { Store } from "store/store-reducer";
import s from "components/UI/StatusModal/StatusModal.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/icons/close.svg";
import { ReactComponent as ErrorIcon } from "assets/images/icons/status/failed.svg";
import { ReactComponent as SuccessIcon } from "assets/images/icons/status/success.svg";
import { ReactComponent as LoaderIcon } from "assets/images/icons/status/loader.svg";
import { motion, AnimatePresence } from "framer-motion";

const iconsMap = {
  loading: <LoaderIcon />,
  success: <SuccessIcon />,
  error: <ErrorIcon />,
};

const colorsMap = {
  loading: "#fff",
  success: "#25B574",
  error: "#F44F4F",
};

const StatusModal = () => {
  const { state, dispatch } = useContext(Store);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (state.loader.status === "loading") {
      setVisible(true);
    }
    if (state.loader.status === "error" || state.loader.status === "success") {
      showLoaderIfHidden().then(() => {
        setTimeout(() => {
          setVisible(false);
          cleanUpLoader();
        }, 3000);
      });
    }
  }, [state.loader]);

  const showLoaderIfHidden = async () => {
    !visible && setVisible(true);
  };

  const cleanUpLoader = () => {
    setTimeout(() => {
      updateLoader(dispatch, {
        text: "",
        status: "",
      });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={s.loader}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className={s.loaderIcon}>
            {iconsMap[state.loader.status] || null}
          </div>

          <div
            style={{ color: colorsMap[state.loader.status] }}
            className={s.loaderText}
          >
            {state.loader.text}
          </div>

          <button
            className={s.loaderCloseBtn}
            onClick={() => setVisible(false)}
          >
            <CloseIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
