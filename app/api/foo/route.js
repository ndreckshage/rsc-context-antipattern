import { NextResponse } from 'next/server';

let foo = 'bar';

const sleep = ms => new Promise((res) => setTimeout(res, ms))

export async function GET() {
  await sleep(200);
  
  return NextResponse.json({ foo })
}

export async function POST(request) {
  await sleep(200);

  try {
    const res = await request.json();
    foo = res.foo
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ foo })
}
