import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value

  const url = request.nextUrl.clone()

  if (
    url.pathname.startsWith("/Carrinho") &&
    !token
  ) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/Carrinho/:path*"],
}
