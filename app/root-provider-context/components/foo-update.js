"use client";

import { useState, useContext } from "react";
import { ClientRootReducerContext } from "./client-root-reducer-context";

export default function FooDisplay(props) {
  const [foo, setFoo] = useState(props.foo);
  const { globalDispatch } = useContext(ClientRootReducerContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        fetch("/api/foo", {
          method: "POST",
          body: JSON.stringify({ foo }),
        })
          .then((r) => r.json())
          .then((data) => {
            globalDispatch({ type: "update-foo", payload: { foo: data.foo } });
          });
      }}
    >
      <span>Foo Update: </span>
      <input type="text" value={foo} onChange={(e) => setFoo(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}
