import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  const response = NextResponse.next();
  response.headers.set("x-request-url", url);
  return response;
}
