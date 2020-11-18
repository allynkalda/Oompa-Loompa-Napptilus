import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';


const StateContext = createContext();

const initialState = {
  oompas: [],
  oompa: {}
};

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducers, initialState)}>
    {children}
  </StateContext.Provider>
);

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };