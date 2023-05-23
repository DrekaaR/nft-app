import RecordCanvas from "components/3DModel/RecordCanvas";
import { colors } from "config/colorsForNft";
import { MergeContext } from "contexts/MergeContext";
import ModelPreview from "components/ModelPreview/ModelPreview";
import s from "./StepThree.module.scss";
import React, { memo, useContext } from "react";
import mainStyles from "../Merge.module.scss";

const StepThree = memo(() => {
  const { mergeState } = useContext(MergeContext);

  return (
    <>
      <div className={mainStyles.title}>step 3</div>
      <div className={mainStyles.body}>
        <div className={s.stepThreeContainer}>
          <ModelPreview />
          <div className={s.colors}>
            <div>
              <div className={s.colorsTitle}>NFT</div>
              <div className={s.colorsImage}>
                <img
                  src={mergeState?.selectedNFT?.image}
                  alt={mergeState?.selectedNFT?.name}
                />
              </div>
            </div>
            <div>
              <div className={s.colorsTitle}>Colors</div>
              <div className={s.colorsGrid}>
                {colors.map((color) => (
                  <div
                    key={color.hex}
                    style={{ backgroundColor: color.hex }}
                    className={s.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* If printing show canvas with 3d model for recording */}
      {mergeState.isPrinting && <RecordCanvas />}
    </>
  );
});

export default StepThree;
