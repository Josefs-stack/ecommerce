import Link from "next/link";
import Image from "next/image";
import CartButton from "./CartButton";
import UserGreeting from "./UserInfo";
import Logo from '@/public/assets/produtos/produto1.jpg'

export default function Header() {
  return (
    <header className=" fixed top-8 h-16 w-full bg-neutral-100/50 flex items-center justify-around shadow-md z-50">
      <div className="w-1/3 h-full flex items-center gap-4">
        <Link href="/" className="h-16 w-32 flex items-center justify-center">
          <Image src={Logo} alt="Logo" width={64} height={128} />
        </Link>
      </div>

      <nav className="w-1/3 h-full flex justify-around items-center gap-6 font-medium text-neutral-700">
        <Link href="/Categoria/anel" className="hover:text-black transition-colors">
          Anéis
        </Link>
        <Link href="/Categoria/colar" className="hover:text-black transition-colors">
          Colares
        </Link>
        <Link href="/Categoria/brinco" className="hover:text-black transition-colors">
          Brincos
        </Link>
        <Link href="/Categoria/pulseira" className="hover:text-black transition-colors">
          Pulseiras
        </Link>
        <Link href="/Categoria/alianca" className="hover:text-black transition-colors">
          Alianças
        </Link>
      </nav>

      <div className="w-1/3 h-8 flex justify-center items-center divide-x-2  gap-4 ">
        <CartButton />
        <UserGreeting />
      </div>
    </header>
  );
}
