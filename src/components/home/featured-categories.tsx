import Image from 'next/image';
import Link from 'next/link';
import { mockCategories } from '@/lib/mock-data';

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">หมวดหมู่สินค้าแนะนำ</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mockCategories.map((cat) => (
            <Link 
              href={`/products?cat=${cat.slug}`} 
              key={cat.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square"
            >
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
