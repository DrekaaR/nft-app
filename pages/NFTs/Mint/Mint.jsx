import ShapeSlider from "components/ShapeSlider/ShapeSlider";
import Counter from "components/UI/Counter/Counter";
import MyButton from "components/UI/MyButton/MyButton";
import MyButtonLink from "components/UI/MyButton/MyButtonLink";
import React, { useState } from "react";
import { ReactComponent as SuccessIcon } from "assets/images/icons/success.svg";
import s from "./Mint.module.scss";

const Mint = ({ setTab }) => {
  const [isSuccess, setIsSuccess] = useState(true);
  const [counterAmount, setCounterAmount] = useState(0);

  const closeSuccessScreen = () => setIsSuccess(false);
  const setTabMerge = () => setTab(2);
  const setTabStake = () => setTab(1);

  return (
    <>
      {isSuccess ? (
        // Success screen
        <>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <MyButtonLink backArrow isButton onClick={closeSuccessScreen}>
              back to Mint
            </MyButtonLink>
          </div>
          <div className={s.successScreen}>
            <SuccessIcon />
            <div className={s.successTitle}>Mint was successful</div>
            <div className={s.successText}>
              <div>Transaction ID:</div>
              <div>2dWD89AsdDF8021LJ24wqwkm2941</div>
            </div>
            <MyButton onClick={setTabMerge}>Merge</MyButton>
            <MyButton onClick={setTabStake}>Stake</MyButton>
          </div>
        </>
      ) : (
        <div>
          <div className={s.wrapper}>
            <div className={s.leftSide}>
              <div className={s.item}>
                <div className={s.label}>Price</div>
                <div className={s.value}>1 SOL</div>
              </div>

              <div className={s.item}>
                <div className={s.label}>Balance</div>
                <div className={s.value}>12 SOL</div>
              </div>

              <div className={s.item}>
                <div className={s.label} style={{ marginBottom: "10px" }}>
                  Amount to Mint
                </div>

                <Counter
                  value={counterAmount}
                  setValue={setCounterAmount}
                  style={{ marginBottom: "10px" }}
                />

                <div className={s.text}>
                  Enter the number of NFTs you would like to mint
                </div>

                <div className={s.cost}>Net Cost (est.) 1 SOL</div>

                <MyButton style={{ width: "100%" }}>Mint</MyButton>
              </div>
            </div>

            <div className={s.item}>
              <div className={s.sliderLabel}>Nfo Shape</div>
              <ShapeSlider />
            </div>
          </div>

          <div className={s.actions}>
            <MyButton style={{ testTransform: "uppercase", margin: "0 auto" }}>
              CONNECT WALLET
            </MyButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Mint;
