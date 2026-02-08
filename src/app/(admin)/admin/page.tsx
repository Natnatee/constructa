'use client';

import { mockProducts, mockCategories, mockBrands } from '@/lib/mock-data';
import { Package, Tags, Briefcase, Image as ImageIcon, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const stats = [
    { title: 'สินค้าทั้งหมด', value: mockProducts.length, icon: <Package size={24} />, color: 'bg-blue-500' },
    { title: 'หมวดหมู่', value: mockCategories.length, icon: <Tags size={24} />, color: 'bg-purple-500' },
    { title: 'แบรนด์', value: mockBrands.length, icon: <Briefcase size={24} />, color: 'bg-orange-500' },
    { title: 'แบนเนอร์', value: 3, icon: <ImageIcon size={24} />, color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-500">ยินดีต้อนรับ! นี่คือภาพรวมของเว็บไซต์</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border flex items-center gap-4"
          >
            <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            กิจกรรมล่าสุด
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
                    <Package size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold">อัปเดตสินค้า #{i}</p>
                    <p className="text-xs text-gray-500">2 ชั่วโมงที่ผ่านมา</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-600 rounded-full">สำเร็จ</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
          <Users size={28} className="mb-4 opacity-70" />
          <h3 className="text-lg font-bold mb-2">เคล็ดลับ</h3>
          <p className="text-sm opacity-80">
            การใส่รูปภาพคมชัดและคำบรรยายที่ดีจะช่วยให้เว็บไซต์ดูเป็นมืออาชีพมากขึ้น
          </p>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
