'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockBanners, Banner } from '@/lib/mock-data';
import { Plus, Pencil, Trash2, Eye, EyeOff, X, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BannersManagement() {
  const [banners, setBanners] = useState<Banner[]>(mockBanners);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    link: '',
    isActive: true,
  });

  const openModal = (banner?: Banner) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData({
        title: banner.title,
        imageUrl: banner.imageUrl,
        link: banner.link || '',
        isActive: banner.isActive,
      });
    } else {
      setEditingBanner(null);
      setFormData({ title: '', imageUrl: '', link: '', isActive: true });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBanner(null);
    setFormData({ title: '', imageUrl: '', link: '', isActive: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBanner) {
      setBanners(prev => prev.map(b => 
        b.id === editingBanner.id 
          ? { ...b, ...formData }
          : b
      ));
    } else {
      const newBanner: Banner = {
        id: `banner-${Date.now()}`,
        order: banners.length + 1,
        ...formData,
      };
      setBanners(prev => [...prev, newBanner]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('ต้องการลบแบนเนอร์นี้หรือไม่?')) {
      setBanners(prev => prev.filter(b => b.id !== id));
    }
  };

  const toggleActive = (id: string) => {
    setBanners(prev => prev.map(b => 
      b.id === id ? { ...b, isActive: !b.isActive } : b
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">จัดการแบนเนอร์</h1>
          <p className="text-gray-500">จัดการแบนเนอร์หน้าแรก ({banners.length} รายการ)</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
        >
          <Plus size={20} />
          เพิ่มแบนเนอร์ใหม่
        </button>
      </div>

      {/* Banner Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${!banner.isActive ? 'opacity-60' : ''}`}
          >
            {/* Image Preview */}
            <div className="relative aspect-[16/7] bg-gray-100">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                  #{banner.order}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  banner.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {banner.isActive ? 'แสดง' : 'ซ่อน'}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{banner.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{banner.link || 'ไม่มีลิงก์'}</p>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(banner.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
                    banner.isActive 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      : 'bg-green-50 hover:bg-green-100 text-green-700'
                  }`}
                >
                  {banner.isActive ? <EyeOff size={16} /> : <Eye size={16} />}
                  {banner.isActive ? 'ซ่อน' : 'แสดง'}
                </button>
                <button
                  onClick={() => openModal(banner)}
                  className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(banner.id)}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {banners.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border">
          ยังไม่มีแบนเนอร์ กดปุ่ม "เพิ่มแบนเนอร์ใหม่" เพื่อเริ่มต้น
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {editingBanner ? 'แก้ไขแบนเนอร์' : 'เพิ่มแบนเนอร์ใหม่'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อแบนเนอร์ *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="หัวข้อแบนเนอร์"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL รูปภาพ *</label>
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="/icon/banner.jpg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">ลิงก์เมื่อกด (Optional)</label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="/products"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="isActive" className="font-medium text-gray-700">แสดงแบนเนอร์นี้</label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 font-bold hover:bg-gray-50 transition-colors"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
                  >
                    {editingBanner ? 'บันทึกการแก้ไข' : 'เพิ่มแบนเนอร์'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
