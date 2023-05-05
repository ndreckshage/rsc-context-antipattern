"use client";

import { withProviderData } from "./providers";

function FooDisplay(props) {
  return <div style={{ marginBottom: 10 }}>Foo Display: {props.foo}</div>;
}

export default withProviderData(FooDisplay);
