import React, { createContext, useReducer, useState } from "react";

// dont change the name

export const AppContext = createContext();

// dont change the name
export const appReducer = () => {
  // write code
};

function AppContextProvider({ children }) {
  const [state, setState] = useState({ isAuth: false, token: null });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAut: false,
      token: null
    });
  }

  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider
      value={{ state, handleLogin, handleLogout, count, setCount }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
