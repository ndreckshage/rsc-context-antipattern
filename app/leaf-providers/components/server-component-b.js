import FooUpdate from './foo-update'
import { cookies } from "next/headers";
import Providers from "./providers";

export default async function ServerComponentB() {
  const cookieStore = cookies();
  const deviceUuid = cookieStore.get("device-uuid")?.['value'];
  const {foo} = await (await fetch(`http://localhost:3000/api/foo?deviceUuid=${deviceUuid}`)).json();

  return (
    <Providers data={{foo, deviceUuid}}>
      <FooUpdate />
    </Providers>
  );
}