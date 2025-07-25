// app/Categorias/[categoria]/page.tsx
import { prisma } from "@/lib/prisma"
import ProductList from "@/components/ProductList"

type Props = {
  params: { categoria: string }
}

export default async function CategoriaPage({ params }: Props) {
  const categoria = decodeURIComponent(params.categoria).toUpperCase() 

  const produtos = await prisma.produto.findMany({
    where: {
      categoria,
    },
  })

  return (
    <main className="mt-24 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        {categoria}
      </h1>
      <ProductList produtos={produtos} />
    </main>
  )
}
