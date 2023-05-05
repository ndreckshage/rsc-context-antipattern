import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";

export default async function Page() {
  return (
    <>
      <p style={{ color: "gray", maxWidth: 700, lineHeight: 1.4 }}>
        This is the correct way to manage data with server components (✅)! Data
        is fetched in the server component and passed to the client component as
        props, without needing context. We are able to keep state in sync
        between server components by refreshing the root server component.
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </>
  );
}
