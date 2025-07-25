import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { email, senha, nome } = await req.json()

    if (!email || !senha) {
      return NextResponse.json({ error: "Email e senha obrigatórios" }, { status: 400 })
    }

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) {
      return NextResponse.json({ error: "Usuário já existe" }, { status: 400 })
    }

    const hashed = await bcrypt.hash(senha, 10)

    const novoUsuario = await prisma.user.create({
      data: {
        email,
        senha: hashed,
        name: nome.trim(),
      },
    })

    const { senha: _, ...userSemSenha } = novoUsuario
    return NextResponse.json(userSemSenha, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Erro ao registrar usuário" }, { status: 500 })
  }
}

