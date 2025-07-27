"use client"

import Image from "next/image"
import { Trash2, Minus, Plus } from "lucide-react"
import ButtonFinalizar from "@/components/ButtonFinalizar"
import { useState, useTransition } from "react"

type ItemCarrinho = {
  id: string
  quantidade: number
  produto: {
    imagemUrl: string
    nome: string
    preco: number
    categoria: string
  }
}

type Props = {
  itens: ItemCarrinho[]
}

export default function CarrinhoClient({ itens }: Props) {
  const [isPending, startTransition] = useTransition()
  const [carrinho, setCarrinho] = useState(itens)

  const total = carrinho.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)

  function atualizarCarrinho(id: string, novaQuantidade: number) {
    startTransition(async () => {
      await fetch("/api/carrinho", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: id, quantidade: novaQuantidade }),
      })

      setCarrinho(carrinho.map(item =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      ))
    })
  }

  function removerItem(id: string) {
    startTransition(async () => {
      await fetch(`/api/carrinho?id=${id}`, { method: "DELETE" })
      setCarrinho(carrinho.filter(item => item.id !== id))
    })
  }

  return (
    <main className="mt-30 p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>

      {carrinho.length === 0 ? (
        <p className="text-center text-lg text-neutral-500">O carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-6">
            {carrinho.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4 items-center">
                <Image
                  src={item.produto.imagemUrl}
                  alt={item.produto.nome}
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.produto.nome}</h2>
                  <p className="text-sm text-neutral-600">{item.produto.categoria}</p>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm">Quantidade:</span>
                    <button
                      onClick={() => atualizarCarrinho(item.id, item.quantidade - 1)}
                      disabled={item.quantidade <= 1 || isPending}
                      className="p-1 border rounded cursor-pointer disabled:opacity-30"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 text-center">{item.quantidade}</span>
                    <button
                      onClick={() => atualizarCarrinho(item.id, item.quantidade + 1)}
                      disabled={isPending}
                      className="p-1 border cursor-pointer rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <p className="text-sm mt-2">Preço: R$ {item.produto.preco.toFixed(2)}</p>
                  <p className="text-sm font-medium">
                    Subtotal: R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removerItem(item.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer p-2"
                  disabled={isPending}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-xl font-bold mb-4">Total: R$ {total.toFixed(2)}</p>
            <ButtonFinalizar />
          </div>
        </>
      )}
    </main>
  )
}
