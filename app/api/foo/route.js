import { NextResponse } from 'next/server';

const fooStore = {};

const sleep = ms => new Promise((res) => setTimeout(res, ms))

export async function GET(request) {
  await sleep(500);
  const { searchParams } = new URL(request.url);
  const deviceUuid = searchParams.get('deviceUuid');

  return NextResponse.json({ foo: fooStore[deviceUuid] ?? 'foo' })
}

export async function POST(request) {
  await sleep(500);
  
  try {
    const res = await request.json();
    fooStore[res.deviceUuid] = res.foo;
    return NextResponse.json({ foo: res.foo });
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ foo: 'foo' })
}
