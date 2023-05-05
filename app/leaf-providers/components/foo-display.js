"use client";

import { useContext } from "react";
import { RootReducerContext } from "./providers";

export default function FooDisplay() {
  const [providerLevelState] = useContext(RootReducerContext);
  return <div style={{ marginBottom: 10 }}>Foo Display: {providerLevelState.foo}</div>;
}
