// app/components/CategoriasGrid.tsx

'use client'

import Link from 'next/link'

export default function CategoriasGrid() {
  return (
    <div className="w-5/6 lg:w-full h-[180vh] md:h-[100vh] lg:h-[750px] flex flex-row flex-wrap justify-center items-center grid-cols-none grid-rows-none lg:grid lg:grid-cols-6 lg:grid-rows-2 gap-2 p-2 overflow-hidden">
      <Link
        href="/Categorias/aneis"
        className="lg:h-full h-1/5 md:h-1/3 min-w-[300px] col-span-2 row-start-2 bg-amber-300 flex items-center justify-center text-xl font-bold hover:scale-105 transition-all"
      >
        ANÉIS
      </Link>

      <Link
        href="/Categorias/colares"
        className="lg:h-full h-1/5 md:h-1/3 min-w-[300px] col-span-2 row-span-2 bg-sky-300 flex items-center justify-center text-xl font-bold hover:scale-105 transition-all"
      >
        COLARES
      </Link>

      <Link
        href="/Categorias/aliancas"
        className="lg:h-full h-1/5 md:h-1/3 min-w-[300px] col-span-2 row-span-2 bg-rose-300 flex items-center justify-center text-xl font-bold hover:scale-105 transition-all"
      >
        ALIANÇAS
      </Link>

      <Link
        href="/Categorias/pulseiras"
        className="lg:h-full h-1/5 md:h-1/3 min-w-[300px] 2xl:col-span-3 col-span-2 row-start-1 bg-lime-300 flex items-center justify-center text-xl font-bold hover:scale-105 transition-all"
      >
        PULSEIRAS
      </Link>

      <Link
        href="/Categorias/brincos"
        className="lg:h-full h-1/5 md:h-1/3 min-w-[300px] 2xl:col-span-1 col-span-2 row-start-1 bg-purple-300 flex items-center justify-center text-xl font-bold hover:scale-105 transition-all"
      >
        BRINCOS
      </Link>
    </div>
  )
}
