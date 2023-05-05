import FooUpdate from "./foo-update";
import { cookies } from "next/headers";

async function updateFoo(formData) {
  "use server";

  const cookieStore = cookies();
  const deviceUuid = cookieStore.get("device-uuid")?.["value"];
  const foo = formData.get("foo");


  await fetch("http://localhost:3000/api/foo", {
    method: "POST",
    body: JSON.stringify({ foo, deviceUuid }),
  });
}

export default async function ServerComponentB() {
  const cookieStore = cookies();
  const deviceUuid = cookieStore.get("device-uuid")?.["value"];
  const { foo } = await (
    await fetch(`http://localhost:3000/api/foo?deviceUuid=${deviceUuid}`)
  ).json();
  return <FooUpdate foo={foo} deviceUuid={deviceUuid} updateFoo={updateFoo} />;
}
