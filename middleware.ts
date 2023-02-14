import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  console.log("MIDDLEWARE req.url:", url);
  const newReqHeaders = new Headers(req.headers);
  newReqHeaders.set("x-request-url", url);
  const response = NextResponse.next({
    request: { headers: newReqHeaders },
  });
  response.headers.set("x-request-url", url);
  return response;
}
