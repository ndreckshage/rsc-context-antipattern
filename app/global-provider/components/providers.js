"use client";

import {
  createContext,
  useReducer,
  useState,
  useEffect,
  useContext,
} from "react";
import deepmerge from "deepmerge";
import { v4 as uuidV4 } from "uuid";

export const RootReducerContext = createContext({});

export const withProviderData = (Component) => (props) => {
  const [globalState, globalDispatch] = useContext(RootReducerContext);
  const [uuid] = useState(uuidV4());

  useEffect(() => {
    globalDispatch({ type: "initialize", payload: { data: props.data, uuid } });
  }, []);

  const stateToUse =
    globalState && globalState.__initialized && globalState.__uuids.has(uuid)
      ? globalState
      : props.data;

  return <Component {...stateToUse} />;
};

export default function Providers(props) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "initialize": {
          const newState = deepmerge(state, action.payload.data);
          newState.__initialized = true;
          newState.__uuids = state.__uuids.add(action.payload.uuid);
          return newState;
        }

        case "update-foo": {
          return { ...state, foo: action.payload.foo };
        }

        default: {
          return state;
        }
      }
    },
    { __initialized: false, __uuids: new Set() }
  );

  return (
    <RootReducerContext.Provider value={[state, dispatch]}>
      {props.children}
    </RootReducerContext.Provider>
  );
}
