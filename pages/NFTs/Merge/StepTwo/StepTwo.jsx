import Scene from "components/3DModel/Scene/Scene";
import MyModal from "components/UI/MyModal/MyModal";
import ScrollBar from "components/UI/Scrollbar/ScrollBar";
import ModelPreview from "components/ModelPreview/ModelPreview";
import { colors } from "config/colorsForNft";
import React, { memo, useState } from "react";
import { getTextColor } from "utils/getTextColor";
import s from "./StepTwo.module.scss";
import mainStyles from "../Merge.module.scss";

const StepTwo = memo(() => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const openModal = () => {
    setShowModelPopup(true);
  };

  return (
    <>
      <MyModal
        width={1500}
        isOpen={showModelPopup}
        setOpen={setShowModelPopup}
        contHeight="80vh"
      >
        <Scene />
      </MyModal>

      <div>
        <div className={mainStyles.title}>step 2</div>
        <div className={mainStyles.body}>
          <div className={s.stepTwoContainer}>
            <ModelPreview onClick={openModal} />

            {/* Color List */}
            <div className={mainStyles.item}>
              <div className={mainStyles.itemTitle}>Colors</div>
              <ScrollBar noPadding height={300}>
                {colors.map((color, index) => (
                  <div
                    style={{
                      backgroundColor: color.hex,
                      color: getTextColor(color.hex),
                    }}
                    key={color + index}
                    className={s.colorItem}
                  >
                    <span>{color.name}</span>
                    <span>{color.hex}</span>
                  </div>
                ))}
              </ScrollBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default StepTwo;
