'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockBrands } from '@/lib/mock-data';
import { ArrowRight, Award, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            แบรนด์พาร์ทเนอร์
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            โชติพิพัฒน์ค้าไม้ จำกัด ร่วมมือกับผู้ผลิตวัสดุก่อสร้างชั้นนำระดับสากล 
            เพื่อให้มั่นใจว่าลูกค้าของเราจะได้รับสินค้าที่มีคุณภาพดีที่สุดและนวัตกรรมที่ทันสมัยอยู่เสมอ
          </motion.p>
        </div>

        {/* Value Proposition Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
              <Award size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">มาตรฐานระดับสากล</h3>
            <p className="text-gray-500">คัดสรรแบรนด์ที่ได้รับการยอมรับและมีมาตรฐานรับรองในระดับสากลเท่านั้น</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
              <ShieldCheck size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">รับประกันคุณภาพ</h3>
            <p className="text-gray-500">สินค้าทุกชิ้นส่งตรงจากโรงงานผู้ผลิต มั่นใจได้ในความถูกต้องและคุณภาพ 100%</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
              <Zap size={30} />
            </div>
            <h3 className="text-xl font-bold mb-2">นวัตกรรมล่าสุด</h3>
            <p className="text-gray-500">อัปเดตเทคโนโลยีวัสดุก่อสร้างใหม่ๆ จากแบรนด์พาร์ทเนอร์อย่างต่อเนื่อง</p>
          </motion.div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center group transition-all duration-300 hover:shadow-xl"
            >
              {/* Logo Container */}
              <div className="relative w-full aspect-[3/2] mb-6 flex items-center justify-center bg-gray-50 rounded-2xl p-4 transition-colors group-hover:bg-white">
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={200}
                  height={120}
                  className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Brand Info */}
              <div className="text-center flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{brand.name}</h2>
                <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                  {brand.description || 'เราเป็นตัวแทนจำหน่ายสินค้าคุณภาพจากแบรนด์ชั้นนำ เพื่อให้ลูกค้าได้รับสิ่งที่ดีที่สุด'}
                </p>
                
                <Link 
                  href={`/products?brand=${brand.id}`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline-offset-4 hover:underline"
                >
                  ดูสินค้าแบรนด์นี้
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">“ มั่นใจในคุณภาพ เลือกแบรนด์ชั้นนำที่โชติพิพัฒน์ค้าไม้ ”</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto font-medium">
              เราคัดสรรสิ่งที่ดีที่สุดเพื่อบ้านและโครงการรับเหมาของคุณ โดยร่วมมือกับพาร์ทเนอร์ระดับสากล
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/products"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 transition-all active:scale-95"
              >
                เลือกซื้อสินค้าทั้งหมด
              </Link>
              <Link 
                href="/contact"
                className="bg-primary-dark border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                ติดต่อขอใบเสนอราคา
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
