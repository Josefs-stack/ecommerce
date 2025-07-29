import { prisma } from "@/lib/prisma";
import ProductList from "@/components/ProductList";

export default async function AneisPage() {
  const produtos = await prisma.produto.findMany({
    where: { categoria: "BRINCOS" },
  });

  return (
    <div className="mt-42 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-neutral-950 uppercase">Brincos</h1>
      <ProductList produtos={produtos} />
    </div>
  );
}
