import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import CarrinhoClient from "./CarrinhoClient"

export default async function CarrinhoPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    redirect("/LoginPage")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      carrinho: {
        include: { produto: true },
      },
    },
  })

  return <CarrinhoClient itens={user?.carrinho ?? []} />
}
