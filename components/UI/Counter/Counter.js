import {ReactComponent as MinusIcon} from "assets/images/icons/minus.svg";
import {ReactComponent as PlusIcon} from "assets/images/icons/plus.svg";
import {motion} from "framer-motion";
import React from "react";
import s from "./Counter.module.scss";

const Counter = ({ value, setValue, ...props }) => {
  function decreaseCounterHandler() {
    value >= 1 && setValue(value - 1);
  }

  function increaseCounterHandler() {
    setValue(value + 1);
  }

  return (
    <div className={s.body} {...props}>
      <motion.button whileTap={{ scale: 0.9 }} onClick={decreaseCounterHandler}>
        <MinusIcon />
      </motion.button>

      <input
        readOnly
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <motion.button whileTap={{ scale: 0.9 }} onClick={increaseCounterHandler}>
        <PlusIcon />
      </motion.button>
    </div>
  );
};

export default Counter;
