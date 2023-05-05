import ClientRootReducerContext from "./components/client-root-reducer-context";
import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";
import Link from "next/link";

export default async function Page() {
  return (
    <ClientRootReducerContext>
      <p style={{ color: "gray" }}>
        This is an anti-pattern with React Server Components because each server
        component is responsible for fetching their own data, but then we
        attempt to use global state (global reducers / Apollo client / etc) in
        an attempt to manage data client side between independent server
        component roots.
        <br />
        <br />
        Either, we need to (1) hoist data fetch to root server component & set
        up context underneath; (2) do not attempt to sync state between
        independent roots; (3) use{" "}
        <Link href="/root-refresh">root refresh pattern</Link>.
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </ClientRootReducerContext>
  );
}
