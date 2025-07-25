'use client'

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton() {

  return (
    <Link href="/Carrinho" className="relative w-16 h-full flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors">
      <FaShoppingCart size={24} />
    </Link>
  );
}