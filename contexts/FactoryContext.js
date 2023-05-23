import React from "react";
import { createContext, useState } from "react";

export const FactoryContext = createContext();

const initialState = {
  orderModalVisible: false,
  selectedToken: null,
};

const FactoryContextProvider = (props) => {
  const [factoryState, setFactoryState] = useState(initialState);

  return (
    <FactoryContext.Provider value={{ factoryState, setFactoryState }}>
      {props.children}
    </FactoryContext.Provider>
  );
};

export default FactoryContextProvider;