import { MergeContext } from "contexts/MergeContext";
import { useContext } from "react";

export const usePaintRandomly = () => {
  const { mergeState, setMergeState } = useContext(MergeContext);

  const paintRandomly = (colors) => {
    const updatedItems = {};
    Object.keys(mergeState.model.items).forEach((part) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      updatedItems[part] = randomColor.hex;
    });
    setMergeState({
      ...mergeState,
      model: {
        ...mergeState.model,
        items: updatedItems,
      },
    });
  };

  return { paintRandomly };
};