'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { mockBanners } from '@/lib/mock-data';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const activeBanners = mockBanners.filter(b => b.isActive);

  useEffect(() => {
    if (activeBanners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === activeBanners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [activeBanners.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === activeBanners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? activeBanners.length - 1 : prev - 1));
  };

  if (activeBanners.length === 0) return null;

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-full w-full"
        >
          <Image
            src={activeBanners[current].imageUrl}
            alt={activeBanners[current].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom text-center text-white px-4">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-2xl leading-tight"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
              >
                {activeBanners[current].title}
              </motion.h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link
                  href={activeBanners[current].link || '/products'}
                  className="inline-block rounded-full bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
                >
                  เลือกชมสินค้า
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls - Hidden on very small screens */}
      {activeBanners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:bg-white/40 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {activeBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all ${
                  current === index ? 'w-6 sm:w-8 bg-primary' : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
