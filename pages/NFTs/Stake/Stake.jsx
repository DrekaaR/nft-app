import coin from "assets/images/coin.gif";
import ShapeSlider from "components/ShapeSlider/ShapeSlider";
import Counter from "components/UI/Counter/Counter";
import MyButton from "components/UI/MyButton/MyButton";
import MyInput from "components/UI/MyInput/MyInput";
import { motion } from "framer-motion";
import useInput from "hooks/useInput";
import React, { useState } from "react";
import { RxUpdate as UpdateIcon } from "react-icons/rx";
import s from "./Stake.module.scss";
import { ReactComponent as NfoTokenIcon } from "assets/images/icons/balances/nfo-token.svg";
import { ReactComponent as ShapeIcon } from "assets/images/icons/balances/shapes.svg";

const Stake = () => {
  const [counterAmount, setCounterAmount] = useState(0);
  const [reward, setReward] = useState(12335);
  const rewardInput = useInput("", { isEmpty: true });

  const maxBtnClickHandler = () => rewardInput.setValue(reward);

  return (
    <div className={s.wrapper}>
      {/* Stake Balances*/}
      <div className={s.item}>
        <div className={s.title}>Shapes Balance</div>
        <div className={s.value}>
          <ShapeIcon /> 6
        </div>
      </div>

      <div className={s.item}>
        <div className={s.title}>Shapes Staked</div>
        <div className={s.value}>
          <ShapeIcon /> 3
        </div>
      </div>

      <div className={s.item}>
        <div className={s.title}>Pending reward</div>
        <div className={s.value}>
          <NfoTokenIcon /> {reward}
          <div className={s.itemButton}>
            <motion.button whileTap={{ scale: 0.9 }}>
              <UpdateIcon />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stake Shape */}
      <div className={`${s.item} ${s.itemLarge}`}>
        <div className={s.title}>Stake Shape</div>
        <div className={s.stakeShapeBody}>
          <ShapeSlider />
          <Counter value={counterAmount} setValue={setCounterAmount} />
          <div className={s.stakeShapeActions}>
            <MyButton disabled={counterAmount < 1} style={{ fontSize: "18px" }}>
              Stake
            </MyButton>
            <MyButton disabled={counterAmount < 1} style={{ fontSize: "18px" }}>
              Withdraw
            </MyButton>
          </div>
        </div>
      </div>

      {/* Claim Reward */}
      <div className={[s.item, s.itemLarge].join(" ")}>
        <div className={s.title}>Claim Reward</div>
        <div className={s.rewardWrapper}>
          <div className={s.rewardImage}>
            <img src={coin} alt="rotating coin" />
          </div>
          <MyInput
            type="number"
            placeholder={0}
            value={rewardInput.value}
            onChange={rewardInput.onChange}
          >
            <button className={s.rewardMaxButton} onClick={maxBtnClickHandler}>
              MAX
            </button>
          </MyInput>
          <MyButton
            disabled={!rewardInput.inputValid}
            style={{ fontSize: "24px" }}
          >
            Claim
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Stake;
