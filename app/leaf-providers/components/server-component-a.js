import FooDisplay from "./foo-display";
import { cookies } from "next/headers";
import Providers from "./providers";

export default async function ServerComponentA() {
  const cookieStore = cookies();
  const deviceUuid = cookieStore.get("device-uuid")?.["value"];
  const { foo } = await (
    await fetch(`http://localhost:3000/api/foo?deviceUuid=${deviceUuid}`)
  ).json();

  return (
    <Providers data={{ foo }}>
      <FooDisplay />
    </Providers>
  );
}
