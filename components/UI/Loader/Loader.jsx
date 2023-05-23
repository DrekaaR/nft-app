import React from 'react';
import {ReactComponent as LoadingIcon} from "assets/images/icons/status/loader.svg";
import s from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={s.loader}>
      <LoadingIcon/>
    </div>
  );
};

export default Loader;