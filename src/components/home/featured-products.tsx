import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

export default function FeaturedProducts() {
  const featured = mockProducts.filter(p => p.isFeatured);

  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">สินค้ามาแรง</h2>
            <p className="text-gray-600">วัสดุก่อสร้างคุณภาพเยี่ยมที่ช่างส่วนใหญ่เลือกใช้</p>
          </div>
          <Link href="/products" className="text-primary font-semibold hover:underline flex items-center gap-2">
            ดูทั้งหมด 
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link href={`/products/${product.slug}`} className="p-3 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <Eye size={20} />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-primary font-bold text-xl">
                    {product.price ? `฿${product.price.toLocaleString()}` : 'ติดต่อเจ้าหน้าที่'}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                    <ShoppingCart size={16} />
                    <span>สั่งซื้อ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
