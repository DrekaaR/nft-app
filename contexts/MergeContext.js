import React, { createContext, useState } from "react";

export const MergeContext = createContext();

const initialState = {
  mergeStep: 0,
  selectedNFT: null,
  video: null,
  screenshot: null,
  isSuccess: false,
  isPrinting: false,
  model:{
    current: null,
    items: {
      middle: "#ffffff",
      top: "#ffffff",
      accent: "#ffffff",
      feature: "#ffffff",
      NFT: "#ffffff"
    }
  }
};

const MergeContextProvider = (props) => {
  const [mergeState, setMergeState] = useState(initialState);

  return (
    <MergeContext.Provider value={{ mergeState, setMergeState }}>
      {props.children}
    </MergeContext.Provider>
  );
};

export default MergeContextProvider;