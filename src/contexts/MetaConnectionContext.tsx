import React, { createContext, useState } from "react";
interface ContextState {
  setPrice: (price: number) => void;
  price: number;
}
export const MetaConnectionContext = createContext({} as ContextState);

const MetaConnectionContextProvider = (props: any) => {
  const [price, setPrice] = useState<number>(0);
  const value = { setPrice, price }
  return <MetaConnectionContext.Provider value={value}>{props.children}</MetaConnectionContext.Provider>;
};

export default MetaConnectionContextProvider;
