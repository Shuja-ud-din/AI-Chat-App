import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("session");
  const { pathname } = request.nextUrl;

  const isAppRoute = pathname.startsWith("/app");
  const isAuthRoute = pathname === "/";

  if (isAppRoute && !session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/app/:path*"],
};
