import Providers from "./components/providers";
import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";

export default async function Page() {
  return (
    <Providers>
      <p style={{ color: "gray", maxWidth: 700, lineHeight: 1.4 }}>
        Each server component is responsible for fetching their own data (✅),
        but then we sync that data to a root context provider (global reducers /
        Apollo client / etc) in a <code>useEffect</code> and shift data
        management responsibilities to client components (❌). This is an
        anti-pattern, as multiple leaf nodes independently seed the root store,
        and doesn't utilize server components for data refreshes.
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </Providers>
  );
}
