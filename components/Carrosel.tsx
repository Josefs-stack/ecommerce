'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/assets/banners/banner1.png',
    alt: 'Banner 1',
  },
  {
    id: 2,
    image: '/assets/banners/banner2.png',
    alt: 'Banner 2',
  },
  {
    id: 3,
    image: '/assets/banners/banner3.png',
    alt: 'Banner 3',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-24 w-full overflow-hidden xl:h-[600px] lg:h-100 md:h-80 sm:h-72 h-52">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-16 h-2 rounded-full transition-all duration-300 ${
              current === index ? 'bg-neutral-50' : 'bg-neutral-50/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
