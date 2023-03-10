import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  console.log("MIDDLEWARE req.url:", url);
  const response = NextResponse.next();
  response.headers.set("x-request-url", url);
  response.headers.set("x-request-pathname", req.nextUrl.pathname);
  response.headers.set("x-request-search", req.nextUrl.search);
  response.headers.set("x-request-href", req.nextUrl.href);
  return response;
}
