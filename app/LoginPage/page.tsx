'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password: senha,
    })

    if (res?.error) {
      setError('Email ou senha inválidos')
    } else {
      router.push('/')
    }
  }

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/' })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded text-sm">
            {error}
          </p>
        )}

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-neutral-300 rounded px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="senha" className="mb-1 font-medium text-sm">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-neutral-300 rounded px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-900 text-white py-2 rounded hover:bg-neutral-800 transition"
        >
          Entrar
        </button>

        <div className="relative my-4">
          <hr className="border-neutral-300" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-neutral-500">
            ou
          </span>
        </div>

        <button
          type="button"
          onClick={() => signIn('google')}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Entrar com Google
        </button>

        <p className="text-center text-sm text-neutral-600">
          Ainda não tem conta?{' '}
          <a href="/Registro" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </form>
    </main>
  )
}
