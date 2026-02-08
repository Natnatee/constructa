'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'สินค้า', href: '/products' },
  { name: 'แบรนด์', href: '/brands' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
  { name: 'ติดต่อเรา', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-1' 
        : 'bg-white/20 backdrop-blur-md border-b border-white/10 py-2'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-40 transition-transform hover:scale-105">
                <Image 
                  src="/icon/โชติพิพัฒค้าไม้.png" 
                  alt="โชติพิพัฒน์ค้าไม้ จำกัด" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[16px] font-bold transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-800' : 'text-gray-900 drop-shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="tel:0926566264"
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
            >
              <Phone size={18} />
              <span className="text-lg font-black tracking-wider">092-656-6264</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
