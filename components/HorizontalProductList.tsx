"use client"

import { Produto } from "@prisma/client"
import { useState } from "react"

type Props = {
  titulo: string
  produtos: Produto[]
}

export default function HorizontalProductList({ titulo, produtos }: Props) {

  const produtosLimitados = produtos.slice(0, 5)

  return (
    <section className="w-full px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center uppercase">{titulo}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {produtosLimitados.map((produto) => (
          <div
            key={produto.id}
            className="relative group h-80 min-w-[240px] rounded-xl shadow-lg overflow-hidden flex-shrink-0"
            style={{
              backgroundImage: `url(${produto.imagemUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <div className="relative z-20 w-full h-full flex flex-col items-center uppercase justify-around text-neutral-950 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="w-1/3 flex justify-center items-center text-center text-xl font-semibold">{produto.nome}</h3>
              <p className="text-md text-neutral-200">{produto.descricao}</p>
              <p className="text-2xl font-bold mt-1">
                R$ {produto.preco.toFixed(2)}
              </p>

              <button
                className="mt-4 w-full h-12 bg-white text-black text-lg uppercase font-semibold hover:bg-neutral-200 cursor-pointer transition"
                onClick={async () => {
                  await fetch("/api/carrinho", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ produtoId: produto.id }),
                  })
                  alert("Produto adicionado ao carrinho!")
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
