"use client"

import { ReactNode, createContext } from "react";

export const WeatherContext = createContext({} as WeatherState);

type providerProps = {
  children: ReactNode;
};

export const WeatherProvider = ({ children }:providerProps) => {
  return (
    <WeatherContext.Provider
      value={{
        property: false,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};
