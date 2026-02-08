'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { mockProducts, mockCategories, mockBrands, Product } from '@/lib/mock-data';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, ShoppingCart, Check, Package, Truck, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = useMemo(() => {
    return mockProducts.find((p) => p.slug === slug);
  }, [slug]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  const category = mockCategories.find(c => c.id === product.categoryId);
  const brand = mockBrands.find(b => b.id === product.brandId);
  
  // Get related products (same category, exclude current)
  const relatedProducts = mockProducts
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">หน้าแรก</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-primary transition-colors">สินค้าทั้งหมด</Link>
          <ChevronRight size={14} />
          {category && (
            <>
              <Link href={`/products?category=${category.id}`} className="hover:text-primary transition-colors">
                {category.name}
              </Link>
              <ChevronRight size={14} />
            </>
          )}
          <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.imageUrls[selectedImageIndex]}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              {product.imageUrls.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Featured Badge */}
              {product.isFeatured && (
                <span className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  สินค้าแนะนำ
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.imageUrls.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.imageUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === index 
                        ? 'border-primary ring-2 ring-primary/30' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            {/* Brand */}
            {brand && (
              <Link 
                href={`/products?brand=${brand.id}`}
                className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full w-fit mb-4 hover:bg-gray-200 transition-colors"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white">
                  <Image src={brand.logoUrl} alt={brand.name} fill className="object-contain p-1" />
                </div>
                <span className="text-sm font-bold text-gray-700">{brand.name}</span>
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Category Tag */}
            {category && (
              <Link 
                href={`/products?category=${category.id}`}
                className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-6 hover:bg-primary/20 transition-colors"
              >
                {category.name}
              </Link>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              {product.price ? (
                <>
                  <span className="text-4xl font-black text-primary">฿{product.price.toLocaleString()}</span>
                  <span className="text-gray-500">/ชิ้น</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary">สอบถามราคา</span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Package size={20} className="text-primary" />
                  ข้อมูลจำเพาะ
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-gray-500">{key}</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-3 bg-blue-50 rounded-xl">
                <ShieldCheck size={24} className="text-primary mb-2" />
                <span className="text-xs font-medium text-gray-600">สินค้าแท้ 100%</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-green-50 rounded-xl">
                <Truck size={24} className="text-green-600 mb-2" />
                <span className="text-xs font-medium text-gray-600">จัดส่งทั่วไทย</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-amber-50 rounded-xl">
                <Check size={24} className="text-amber-600 mb-2" />
                <span className="text-xs font-medium text-gray-600">มีสต็อกพร้อม</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://line.me/ti/p/@ccpwood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                <MessageCircle size={22} />
                สอบถามทาง LINE
              </a>
              <a 
                href="tel:0926566264"
                className="flex-1 flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                <Phone size={22} />
                โทรสั่งซื้อ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">สินค้าที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                    <div className="relative aspect-square bg-gray-100">
                      <Image
                        src={rp.imageUrls[0]}
                        alt={rp.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                        {rp.name}
                      </h3>
                      {rp.price && (
                        <p className="text-primary font-bold mt-2">฿{rp.price.toLocaleString()}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
