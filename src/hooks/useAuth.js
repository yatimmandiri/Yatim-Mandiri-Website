import { createContext, useContext } from 'react';

export const AuthContext = createContext({ empty: true });

export const UseAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const contextValue = {};

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
