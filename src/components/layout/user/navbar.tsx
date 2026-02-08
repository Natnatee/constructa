'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-1' 
        : 'bg-white/90 backdrop-blur-md py-2'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-36 sm:w-40 transition-transform hover:scale-105">
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
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] lg:text-[16px] font-bold text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="tel:0926566264"
              className="flex items-center gap-2 bg-primary text-white px-5 lg:px-6 py-2 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
            >
              <Phone size={18} />
              <span className="text-base lg:text-lg font-black tracking-wider">092-656-6264</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="tel:0926566264"
              className="flex items-center gap-1 bg-primary text-white px-3 py-2 rounded-full text-sm font-bold"
            >
              <Phone size={16} />
              <span className="hidden xs:inline">โทร</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-base font-bold text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="tel:0926566264"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>โทร 092-656-6264</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
