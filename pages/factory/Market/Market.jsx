import { ReactComponent as UsdcIcon } from "assets/images/icons/chains/usdc.svg";
import React from "react";
import s from "./Market.module.scss";

const Market = () => {
  return (
    <>
      <h2 className={s.title}>Swap nfo tokens</h2>
      <div className={s.grid}>
        <UsdcIcon />
        <div>Net Cost (est.) 1 USDC</div>
        <a href="https://uniswap.org/" target="_blank" className={s.button}>
          to uniswap
        </a>
      </div>
    </>
  );
};

export default Market;
