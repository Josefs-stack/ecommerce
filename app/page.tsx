
import React from "react"
import { prisma } from "@/lib/prisma"
import Carrosel from "@/components/Carrosel"
import GridCategorias from "@/components/GridCategorias"
import HorizontalProductList from "@/components/HorizontalProductList"
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti"

export default async function Home() {

  const ultimosProdutos = await prisma.produto.findMany({
    orderBy: { criadoEm: "desc" },
    take: 10,
  })

  const maisVendidos = await prisma.produto.findMany({
    orderBy: { vendas: "desc" }, // considere adicionar esse campo na tabela
    take: 10,
  })

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <Carrosel />
      <HorizontalProductList
        titulo="Lançamentos"
        produtos={ultimosProdutos}
      />
      <GridCategorias />
      <HorizontalProductList
        titulo="Mais Vendidos"
        produtos={maisVendidos}
      />
      <div className='w-full h-56 flex flex-col justify-center items-center'>
        <h1 className="w-1/3 h-14 font-extrabold flex justify-center items-center">
          SIGA @SEMIJOIAS
        </h1>
        <ul className="w-1/3 h-42 flex justify-around items-center space-x-4 mt-4">
          <li className="cursor-pointer hover:scale-120 transition-all"><TiSocialInstagram size={32} /></li>
          <li className="cursor-pointer hover:scale-120 transition-all"><TiSocialFacebook size={32} /></li>
          <li className="cursor-pointer hover:scale-120 transition-all"><TiSocialTwitter size={32} /></li>
        </ul>
      </div>
    </div>
  )
}