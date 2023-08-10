"use client";
import React, { useReducer } from "react";

type StateT = {
  reload: boolean;
};
type ActionT = {
  type: "Realod";
  payload?: boolean;
};

const INITIAL_STATE = {
  reload: false,
};

export const ThemeContext = React.createContext<{
  state: StateT;
  dispatch: React.Dispatch<ActionT>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case "Realod":
      return {
        ...state,
        reload: !state.reload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
