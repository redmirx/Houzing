import React, { createContext } from "react";
import PropertiesProvider from "./properties";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <PropertiesProvider>
      <Root.Provider>{children}</Root.Provider>;
    </PropertiesProvider>
  );
};

export default RootContext;
