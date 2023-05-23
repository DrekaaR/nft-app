import { ReactComponent as MixIcon } from "assets/images/icons/mix.svg";
import s from "components/3DModel/Scene/Scene.module.scss";
import { MergeContext } from "contexts/MergeContext";
import React, { useContext } from "react";
import { colors } from "config/colorsForNft";

const PartPicker = ({ paintRandomly }) => {
  const { mergeState, setMergeState } = useContext(MergeContext);
  const partsAndColors = Object.entries(mergeState.model.items);

  const selectPartHandler = (e) => {
    setMergeState({
      ...mergeState,
      model: {
        ...mergeState.model,
        current: e.target.value,
      },
    });
  };

  return (
    <div className={s.partPicker}>
      {partsAndColors.map(([name, color]) => (
        <button
          value={name}
          onClick={(e) => selectPartHandler(e)}
          key={name}
          className={
            mergeState.model.current === name
              ? [s.partPickerButton, s.active].join(" ")
              : s.partPickerButton
          }
        >
          {name}
          <span
            className={s.partPickerColor}
            style={{ backgroundColor: mergeState.model.items[name] }}
          />
        </button>
      ))}
      <button
        className={s.partPickerButton}
        onClick={() => paintRandomly(colors)}
      >
        <MixIcon />
      </button>
    </div>
  );
};

export default PartPicker;
