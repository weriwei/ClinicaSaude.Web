import React, { useState, createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const getActiveStep = () => {
    if (!authenticated) return 1;
  };

  return (
    <Context.Provider
      value={{
        authenticated,
        getActiveStep,
        setAuthenticated,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
