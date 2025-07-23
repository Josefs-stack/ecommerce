import { prisma } from "@/lib/prisma"

export default async function Home() {
  const produtos = await prisma.produto.findMany({
    orderBy: { criadoEm: "desc" },
  })

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={produto.imagemUrl}
              alt={produto.nome}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{produto.nome}</h2>
            <p className="text-sm text-neutral-600">{produto.categoria}</p>
            <p className="text-lg font-bold mt-1">
              R$ {produto.preco.toFixed(2)}
            </p>
            <p className="text-sm mt-2">{produto.descricao}</p>
            <button className="mt-4 w-full bg-neutral-900 text-white py-2 rounded hover:bg-neutral-700">
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
