import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

import { IEpisode } from "../interface";

export interface IMainContext {
  basket: { [key: string]: { product: IEpisode; counter: number } };
  setInBasket?: Dispatch<SetStateAction<{ [key: string]: { product: IEpisode; counter: number } }>>;
  openBasket?: boolean;
  setOpenBasket?: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext<IMainContext>({
  basket: {},
});

export const MainContextProvider = ({ children }: PropsWithChildren<IMainContext>): JSX.Element => {
  const [basket, setInBasket] = useState<{}>({});
  const [openBasket, setOpenBasket] = useState(false);
  return (
    <MainContext.Provider value={{ openBasket, setOpenBasket, basket, setInBasket }}>{children}</MainContext.Provider>
  );
};
