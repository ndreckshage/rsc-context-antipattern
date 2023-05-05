"use client";

import { useState, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";

export default function FooDisplay(props) {
  const [foo, setFoo] = useState(props.foo);
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const inFlight = isFetching || isPending;
  const router = useRouter();

  return (
    <form
      style={{ opacity: inFlight ? 0.5 : 1 }}
      action={props.updateFoo}
      onSubmit={(e) => {
        e.preventDefault();
        setIsFetching(true);
        fetch("/api/foo", {
          method: "POST",
          body: JSON.stringify({ foo, deviceUuid: props.deviceUuid }),
        }).then(() => {
          startTransition(() => {
            setIsFetching(false);
            router.refresh();
          });
        });
      }}
    >
      <span>Foo Update: </span>
      <input type="text" name="foo" value={foo} onChange={(e) => setFoo(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}
