import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value

  const url = request.nextUrl.clone()

  // Se tentar acessar carrinho sem token, redirecione para login
  if (
    url.pathname.startsWith("/Carrinho") &&
    !token
  ) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // Permite continuar normalmente
  return NextResponse.next()
}

// Quais rotas o middleware deve rodar:
export const config = {
  matcher: ["/Carrinho/:path*"],
}
