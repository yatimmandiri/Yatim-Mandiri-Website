'use client';

import { createContext, useContext } from 'react';

export const AppContext = createContext({ empty: true });

export const UseApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const contextValue = {
    sites: {
      name: 'Graha Yatim Mandiri',
      url: 'https://yatimmandiri.org',
    },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
