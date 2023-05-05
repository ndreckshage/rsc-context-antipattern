import ServerComponentA from "./components/server-component-a";
import ServerComponentB from "./components/server-component-b";

export default async function Page() {
  return (
    <>
      <p style={{ color: "gray", maxWidth: 700, lineHeight: 1.4 }}>
        This builds on the refresh root example and adds server actions! Disable
        JavaScript, submit the form, and see the new value persist! 🥇
      </p>
      <ServerComponentA />
      <ServerComponentB />
    </>
  );
}
