import Link from "next/link";
import Image from "next/image";
import CartButton from "./CartButton";
import UserGreeting from "./UserInfo";
import Logo from '@/public/assets/Logo.png'

export default function Header() {
  return (
    <header className=" fixed top-8 h-22 w-full bg-neutral-100/50 flex items-center justify-around shadow-md z-50">
      <div className="w-1/3 h-full flex items-center gap-4">
        <Link href="/" className="h-22 w-32 flex items-center justify-center">
          <Image src={Logo} alt="Logo" width={88} height={128} />
        </Link>
      </div>

      <nav className="w-1/3 h-full flex justify-center items-center text-lg uppercase gap-6 font-bold text-neutral-700">
        <Link href="/Categorias/aneis" className="hover:text-black transition-colors">
          Anéis
        </Link>

        <Link href="/Categorias/brincos" className="hover:text-black transition-colors">
          Brincos
        </Link>

      </nav>

      <div className="w-1/3 h-8 flex justify-end items-center divide-x-2  gap-4 ">
        <CartButton />
        <UserGreeting />
      </div>
    </header>
  );
}
