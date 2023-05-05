"use client";

import {
  createContext,
  useReducer,
} from "react";

export const RootReducerContext = createContext({});

export default function Providers(props) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "update-foo": {
          return { ...state, foo: action.payload.foo };
        }

        default: {
          return state;
        }
      }
    },
    props.data
  );

  return (
    <RootReducerContext.Provider value={[state, dispatch]}>
      {props.children}
    </RootReducerContext.Provider>
  );
}
