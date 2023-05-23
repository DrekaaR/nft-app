import { createContext, useReducer } from "react";
import mainBgVideo from "assets/videos/main-scene.webm";
import metaverseSticker from "assets/images/header-stickers/metaverse-sticker.png";

const initialState = {
  // UI state - start
  appBackground: mainBgVideo,
  headerSticker: {
    src: metaverseSticker,
    active: false,
  },
  loader:{
    text: "",
    status: ""
  }
  // UI state - end
};

const reducer = (state, action) => {
  switch (action.type) {
    case "APP_BACKGROUND_UPDATED":
      return { ...state, appBackground: action.payload };
    case "HEADER_STICKER_UPDATED":
      return { ...state, headerSticker: action.payload };
    case "LOADER_UPDATED":
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
