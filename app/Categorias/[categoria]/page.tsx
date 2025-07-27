import { prisma } from "@/lib/prisma"
import ProductList from "@/components/ProductList"

interface CategoriaPageProps {
  params: {
    categoria: string
  }
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const categoria = decodeURIComponent(params.categoria).toUpperCase()

  const produtos = await prisma.produto.findMany({
    where: { categoria },
  })

  return (
    <main className="mt-30 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold uppercase mb-4">{categoria}</h1>
      <ProductList produtos={produtos} />
    </main>
  )
}
