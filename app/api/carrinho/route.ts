// app/api/carrinho/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

// Adicionar item ao carrinho
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
  }

  const { produtoId, quantidade } = await request.json()
  const qtd = typeof quantidade === "number" && quantidade > 0 ? quantidade : 1

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })

  const existing = await prisma.carrinho.findFirst({
    where: { userId: user.id, produtoId },
  })

  if (existing) {
    await prisma.carrinho.update({
      where: { id: existing.id },
      data: { quantidade: existing.quantidade + qtd },
    })
  } else {
    await prisma.carrinho.create({
      data: {
        userId: user.id,
        produtoId,
        quantidade: qtd,
      },
    })
  }

  return NextResponse.json({ success: true })
}

// Atualizar quantidade
export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Não autenticado" }, { status: 401 })

  const { itemId, quantidade } = await request.json()
  if (!itemId || quantidade < 1) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })

  await prisma.carrinho.update({
    where: { id: itemId },
    data: { quantidade },
  })

  return NextResponse.json({ success: true })
}

// Remover item
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 })

  await prisma.carrinho.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
