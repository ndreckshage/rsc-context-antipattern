import { NextResponse } from 'next/server';
import { v4 as uuidV4 } from 'uuid';
 
export function middleware(request) {
  const deviceUuid = request.cookies.get('device-uuid')?.value ?? uuidV4();
  const response = NextResponse.next();
  response.cookies.set('device-uuid', deviceUuid);
  return response;
}