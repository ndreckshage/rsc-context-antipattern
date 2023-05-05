import FooUpdate from "./foo-update";
import { cookies } from "next/headers";

export default async function ServerComponentB() {
  const cookieStore = cookies();
  const deviceUuid = cookieStore.get("device-uuid")?.["value"];
  const { foo } = await (
    await fetch(
      `${process.env.PROTOCOL}${process.env.VERCEL_URL}/api/foo?deviceUuid=${deviceUuid}`
    )
  ).json();
  return <FooUpdate data={{ foo, deviceUuid }} />;
}
