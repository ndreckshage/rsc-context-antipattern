import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";

export default async function Page() {
  return (
    <>
      <p style={{ color: "gray" }}>
        This is the correct way to manage data with server components! To be
        updated with React Server Actions...
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </>
  );
}
