'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockBrands } from '@/lib/mock-data';

export default function BrandsSlider() {
  // Double the brands array for seamless infinite scroll
  const duplicatedBrands = [...mockBrands, ...mockBrands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          พันธมิตรแบรนด์ชั้นนำ
        </h2>
        <p className="text-gray-500 text-center">
          ตัวแทนจำหน่ายสินค้าจากผู้ผลิตวัสดุก่อสร้างระดับสากล
        </p>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Slider Track */}
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <Link
              key={`${brand.id}-${index}`}
              href={`/products?brand=${brand.id}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-40 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:scale-110 border border-transparent group-hover:border-primary/20">
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-full transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All Brands Link */}
      <div className="text-center mt-10">
        <Link 
          href="/brands"
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4"
        >
          ดูแบรนด์ทั้งหมด →
        </Link>
      </div>
    </section>
  );
}
