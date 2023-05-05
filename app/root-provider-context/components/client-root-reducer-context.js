'use client';

import { createContext, useReducer } from 'react';

export const ClientRootReducerContext = createContext({});

export default function ClientRootReducer(props) {
  const [globalState, globalDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'update-foo': {
        return {...state, foo: action.payload.foo};
      };
      
      default: {
        return state;
      }
    }
  }, {});

  return (
    <ClientRootReducerContext.Provider value={{ globalState, globalDispatch }}>
      {props.children}
    </ClientRootReducerContext.Provider>
  );
}
