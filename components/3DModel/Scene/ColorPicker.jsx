import { colors } from "config/colorsForNft";
import { MergeContext } from "contexts/MergeContext";
import React, { useContext } from "react";
import s from "components/3DModel/Scene/Scene.module.scss"

const ColorPicker = () => {
  const { mergeState, setMergeState } = useContext(MergeContext);

  const pickColorHandler = (e) => {
    if (mergeState.model.items.hasOwnProperty(mergeState.model.current)) {
      const updatedItems = {
        ...mergeState.model.items,
        [mergeState.model.current]: e.target.value,
      };
      setMergeState({
        ...mergeState,
        model: {
          ...mergeState.model,
          items: updatedItems,
        },
      });
    }
  };

  return (
    <div className={s.colorPicker}>
      {colors.map((color) => (
        <button
          onClick={pickColorHandler}
          key={color.hex}
          value={color.hex}
          style={{ backgroundColor: color.hex }}
          className={s.colorPickerButton}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
