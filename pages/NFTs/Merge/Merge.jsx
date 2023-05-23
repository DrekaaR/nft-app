import { ReactComponent as SuccessIcon } from "assets/images/icons/success.svg";
import MyButton from "components/UI/MyButton/MyButton";
import MyButtonLink from "components/UI/MyButton/MyButtonLink";
import { MergeContext } from "contexts/MergeContext";
import StepOne from "pages/NFTs/Merge/StepOne/StepOne";
import StepThree from "pages/NFTs/Merge/StepThree/StepThree";
import StepTwo from "pages/NFTs/Merge/StepTwo/StepTwo";
import s from "pages/NFTs/NFTs.module.scss";
import React, { memo, useContext, useEffect } from "react";
import { updateLoader } from "store/actions";
import { Store } from "store/store-reducer";
import mainStyles from "./Merge.module.scss";

const Merge = memo(() => {
  const { dispatch } = useContext(Store);
  const { mergeState, setMergeState } = useContext(MergeContext);

  const steps = [<StepOne />, <StepTwo />, <StepThree />];

  const closeSuccessScreen = () => {
    setMergeState({ ...mergeState, isSuccess: false });
  };

  useEffect(() => {
    if (mergeState.video) {
      recordDoneHandler();
    }
  }, [mergeState.video]);

  const prevClickHandler = () => {
    setMergeState({ ...mergeState, mergeStep: mergeState.mergeStep - 1 });
  };
  const nextClickHandler = () => {
    setMergeState({ ...mergeState, mergeStep: mergeState.mergeStep + 1 });
  };
  const printClickHandler = () => {
    setMergeState({ ...mergeState, isPrinting: true });
    updateLoader(dispatch, {
      text: "Recording a video for your custom NFT...",
      status: "loading",
    });
  };

  const recordDoneHandler = () => {
    updateLoader(dispatch, {
      text: "The video recording was successful!",
      status: "success",
    });
    setMergeState({
      mergeStep: 0,
      selectedNFT: null,
      video: null,
      screenshot: null,
      isSuccess: true,
      isPrinting: false,
    });
  };

  return (
    <>
      {mergeState.isSuccess ? (
        // Success screen
        <>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <MyButtonLink backArrow isButton onClick={closeSuccessScreen}>
              back to Merge
            </MyButtonLink>
          </div>

          <div className={s.successScreen}>
            <SuccessIcon />
            <div className={s.successTitle}>Merge was successful</div>
            <div className={s.successText}>
              <div>Transaction ID:</div>
              <a target="_blank" href="">
                2dWD89AsdDF8021LJ24wqwkm2941
              </a>
            </div>
            <MyButton href="https://www.youtube.com/">
              your nft details
            </MyButton>
          </div>
        </>
      ) : (
        <>
          {steps[mergeState.mergeStep]}
          {/* Steps Switcher - start */}
          <div className={mainStyles.stepsButtons}>
            {mergeState.mergeStep === 0 && (
              <MyButton
                disabled={!mergeState.selectedNFT}
                onClick={nextClickHandler}
              >
                Next
              </MyButton>
            )}
            {mergeState.mergeStep === 1 && (
              <>
                <MyButton onClick={prevClickHandler}>Back</MyButton>
                <MyButton onClick={nextClickHandler}>Next</MyButton>
              </>
            )}
            {mergeState.mergeStep === 2 && (
              <>
                <MyButton onClick={prevClickHandler}>Back</MyButton>
                <MyButton
                  onClick={!mergeState.isPrinting ? printClickHandler : null}
                >
                  {mergeState.isPrinting ? "Printing..." : "Print"}
                </MyButton>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default Merge;
