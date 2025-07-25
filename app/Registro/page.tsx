'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegistroPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")
  const [nome, setNome] = useState("")
  const [error, setError] = useState("")

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    setError("")

    // Validação: senhas iguais?
    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem.")
      return
    }

    // 1. Registra usuário via API
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha, nome }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || "Erro no registro")
      return
    }

    // 2. Redireciona para a página de login
    router.push("/LoginPage")
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Registrar
        </button>
      </form>
    </main>
  )
}
