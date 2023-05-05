'use client';

import { useContext } from "react";
import { ClientRootReducerContext } from "./client-root-reducer-context";

export default function FooDisplay(props) {
  const {globalState} = useContext(ClientRootReducerContext);

  return <div>Foo Display: {globalState.foo || props.foo}</div>
}