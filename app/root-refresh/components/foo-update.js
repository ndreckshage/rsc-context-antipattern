"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function FooDisplay(props) {
  const [foo, setFoo] = useState(props.foo);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        fetch("/api/foo", {
          method: "POST",
          body: JSON.stringify({ foo }),
        })
          .then(() => {
            router.refresh();
          });
      }}
    >
      <span>Foo Update: </span>
      <input type="text" value={foo} onChange={(e) => setFoo(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}
