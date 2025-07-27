'use client'

import Link from 'next/link'
import Image from 'next/image'
import ANEL from '@/public/assets/Anel.jpg'
import BRINCO from '@/public/assets/Brinco.jpg'

export default function CategoriasGrid() {
  return (
    <div className="h-[80vh] w-5/6 flex lg:flex-row flex-col justify-around items-center gap-2 p-2 overflow-hidden">
      <Link
        href="/Categorias/aneis"
        className="relative lg:h-5/6 h-[45%] lg:w-[45%] group w-5/6 bg-amber-300 flex items-center justify-center text-xl rounded-2xl font-bold hover:scale-105 transition-all"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <Image
          width={500}
          height={500}
          src={ANEL}
          alt="Anéis"
          className="absolute top-0 left-0 inset-0 w-full h-full object-cover rounded-2xl"
        />
        <h1 className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 text-white text-5xl font-bold">ANÉIS</h1>
      </Link>

      <Link
        href="/Categorias/brincos"
        className="relative lg:h-5/6 h-[45%] lg:w-[45%] w-5/6 bg-amber-300 flex items-center group justify-center text-xl rounded-2xl font-bold hover:scale-105 transition-all"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <Image
          width={500}
          height={500}
          src={BRINCO}
          alt="Brincos"
          className="absolute top-0 left-0 inset-0 w-full h-full object-cover rounded-2xl"
        />
        <h1 className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 text-white text-5xl font-bold">BRINCOS</h1>
      </Link>
    </div>
  )
}
