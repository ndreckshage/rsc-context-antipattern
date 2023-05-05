import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";

export default async function Page() {
  return (
    <>
      <p style={{ color: "gray", maxWidth: 700, lineHeight: 1.4 }}>
        This reduces complexity in the provider, and does not attempt to hoist &
        sync data between distinct server component roots (✅). However, it
        resembles a setup with multiple React roots, and does not streamline
        communication between components as context is not shared (❌). Notice
        the data does not stay in sync (no custom event bus is implemented).
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </>
  );
}
