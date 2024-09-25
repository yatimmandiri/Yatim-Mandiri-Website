'use client';

import { createContext, useContext } from 'react';

export const AppContext = createContext({
  empty: true,
});

export const UseApp = () => useContext(AppContext);

export const AppProvider = ({ context, children }) => {
  const contextValue = {
    ...context,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
