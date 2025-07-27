'use client';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const messages = [
  {
    text: 'Fale conosco no WhatsApp',
    href: 'https://wa.me/5500000000000',
  },
  {
    text: 'Frete grátis retirando na loja',
    href: '#frete-gratis',
  },
  {
    text: '10% de desconto na 1ª compra',
    href: '#desconto',
  },
  {
    text: 'Troca fácil em até 30 dias',
    href: '#troca-facil',
  },
];

export default function TopBarCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-neutral-900 text-white z-50 flex items-center justify-center px-4">
      <button onClick={prev} className="mr-3 text-neutral-500 hover:text-neutral-50 cursor-pointer">
        <FaChevronLeft size={14} />
      </button>
      <a
        href={messages[current].href}
        className="w-[300px] Rock text-[14px] text-center hover:underline transition-all"
      >
        {messages[current].text}
      </a>
      <button onClick={next} className="ml-3 text-neutral-500 hover:text-neutral-50 cursor-pointer">
        <FaChevronRight size={14} />
      </button>
    </div>
  );
}
