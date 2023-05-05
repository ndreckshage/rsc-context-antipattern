import { NextResponse } from 'next/server';

const fooStore = {};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const deviceUuid = searchParams.get('deviceUuid');
  return NextResponse.json({ foo: fooStore[deviceUuid] ?? 'foo' })
}

export async function POST(request) {
  try {
    const res = await request.json();
    fooStore[res.deviceUuid] = res.foo;
    return NextResponse.json({ foo: res.foo });
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ foo: 'foo' })
}
