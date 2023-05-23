import React from "react";
import s from "components/UI/MyButton/MyButton.module.scss";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as ArrowBack } from "assets/images/icons/arrow-back.svg";

const MyButtonLink = ({ icon, children, to, backArrow, isButton, ...props }) => {
  function IsNavlink() {
    if (to) {
      return (
        <Link {...props} to={to} className={s.buttonLink}>
          {backArrow && <ArrowBack />}
          {children}
        </Link>
      );
    } else if (isButton) {
      return (
        <motion.button
          whileTap={{ scale: 0.9 }}
          {...props}
          type="button"
          className={s.buttonLink}
        >
          {backArrow && <ArrowBack />}
          {children}
        </motion.button>
      );
    } else {
      return (
        <a {...props} target="_blank" className={s.buttonLink}>
          {backArrow && <ArrowBack />}
          {children}
        </a>
      );
    }
  }

  return <IsNavlink />;
};

export default MyButtonLink;
