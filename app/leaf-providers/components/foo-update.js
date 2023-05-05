"use client";

import { useState, useContext } from "react";
import { RootReducerContext } from "./providers";

export default function FooUpdate() {
  const [providerLevelState, providerLevelDispatch] =
    useContext(RootReducerContext);
  const [foo, setFoo] = useState(providerLevelState.foo);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <form
      style={{opacity: isFetching ? 0.5 : 1}}
      onSubmit={(e) => {
        e.preventDefault();
        setIsFetching(true);
        fetch("/api/foo", {
          method: "POST",
          body: JSON.stringify({
            foo,
            deviceUuid: providerLevelState.deviceUuid,
          }),
        })
          .then((r) => r.json())
          .then((data) => {
            setIsFetching(false);
            providerLevelDispatch({
              type: "update-foo",
              payload: { foo: data.foo },
            });
          });
      }}
    >
      <span>Foo Update: </span>
      <input type="text" value={foo} onChange={(e) => setFoo(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}
