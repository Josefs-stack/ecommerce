"use client"

import { Produto } from "@prisma/client"

type Props = {
  produtos: Produto[]
}

export default function ProductList({ produtos }: Props) {
  return (
    <main className="p-8">
      <div className="flex justify-center items-center flex-wrap gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="relative group h-100 min-w-[300px] rounded-xl shadow-lg overflow-hidden flex-shrink-0"
            style={{
              backgroundImage: `url(${produto.imagemUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <div className="relative z-20 w-full h-full flex flex-col items-center justify-around text-neutral-950 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <p className="text-sm text-neutral-200">{produto.categoria}</p>
              <p className="text-md font-bold mt-1">
                R$ {produto.preco.toFixed(2)}
              </p>

              <button
                className="mt-4 w-full h-12 bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition"
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
    </main>
  )
}
