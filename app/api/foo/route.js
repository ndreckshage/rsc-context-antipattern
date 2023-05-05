import { NextResponse } from "next/server";

const upstash = async (action) =>
  await fetch(`${process.env.UPSTASH_REDIS_REST_URL}${action}`, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    },
  });

const defaultFoo = "bar";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const deviceUuid = searchParams.get("deviceUuid");

  const k = `foo-${deviceUuid}`;
  try {
    const foo =
      (await (await upstash(`/get/${k}`)).json()).result ?? defaultFoo;

    return NextResponse.json({ foo });
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ foo: "error!" });
}

export async function POST(request) {
  try {
    const res = await request.json();
    const k = `foo-${res.deviceUuid}`;
    const v = res.foo;
    await upstash(`/set/${k}/${v}`);
    return NextResponse.json({ foo: v });
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ foo: "error!" });
}
