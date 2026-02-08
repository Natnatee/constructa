import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, LineChart as LineIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">CONSTRUCTA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              ศูนย์รวมวัสดุก่อสร้างครบวงจร มั่นใจในคุณภาพ บริการประทับใจ พร้อมจัดส่งทั่วประเทศ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">หน้าหลัก</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">หน้าแรก</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">สินค้าทั้งหมด</Link></li>
              <li><Link href="/brands" className="hover:text-white transition-colors">แบรนด์สินค้า</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">สินค้าแนะนำ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/products?cat=cement" className="hover:text-white transition-colors">ปูนและคอนกรีต</Link></li>
              <li><Link href="/products?cat=steel" className="hover:text-white transition-colors">เหล็กและโลหะ</Link></li>
              <li><Link href="/products?cat=wood" className="hover:text-white transition-colors">ไม้และแผ่นพื้น</Link></li>
              <li><Link href="/products?cat=paint" className="hover:text-white transition-colors">สีและเคมีภัณฑ์</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ติดต่อเรา</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>123 ถนนสมมติ แขวงตัวอย่าง เขตทดสอบ กรุงเทพฯ 10xxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>099-999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>contact@constructa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Constructa All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white transition-colors flex items-center gap-1 font-bold">LINE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
