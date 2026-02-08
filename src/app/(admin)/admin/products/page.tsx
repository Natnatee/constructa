'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockProducts, mockCategories, mockBrands, Product } from '@/lib/mock-data';
import { Plus, Pencil, Trash2, Search, X, Star, StarOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: 0,
    imageUrls: [''],
    categoryId: '',
    brandId: '',
    isFeatured: false,
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filterCategory || product.categoryId === filterCategory;
    const matchesBrand = !filterBrand || product.brandId === filterBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price || 0,
        imageUrls: product.imageUrls.length > 0 ? product.imageUrls : [''],
        categoryId: product.categoryId,
        brandId: product.brandId,
        isFeatured: product.isFeatured,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '', slug: '', description: '', price: 0, imageUrls: [''],
        categoryId: '', brandId: '', isFeatured: false,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cleanedImageUrls = formData.imageUrls.filter(url => url.trim() !== '');
    
    if (editingProduct) {
      setProducts(prev => prev.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, imageUrls: cleanedImageUrls, specifications: p.specifications }
          : p
      ));
    } else {
      const newProduct: Product = {
        id: `p-${Date.now()}`,
        ...formData,
        imageUrls: cleanedImageUrls,
        specifications: {},
      };
      setProducts(prev => [...prev, newProduct]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('ต้องการลบสินค้านี้หรือไม่?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const toggleFeatured = (id: string) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, isFeatured: !p.isFeatured } : p
    ));
  };

  const getCategoryName = (id: string) => mockCategories.find(c => c.id === id)?.name || '-';
  const getBrandName = (id: string) => mockBrands.find(b => b.id === id)?.name || '-';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">จัดการสินค้า</h1>
          <p className="text-gray-500">จัดการสินค้าทั้งหมด ({products.length} รายการ)</p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
        >
          <Plus size={20} />
          เพิ่มสินค้าใหม่
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
        >
          <option value="">ทุกหมวดหมู่</option>
          {mockCategories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          value={filterBrand}
          onChange={(e) => setFilterBrand(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
        >
          <option value="">ทุกแบรนด์</option>
          {mockBrands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 font-bold text-gray-700">รูปภาพ</th>
                <th className="text-left px-6 py-4 font-bold text-gray-700">ชื่อสินค้า</th>
                <th className="text-left px-6 py-4 font-bold text-gray-700 hidden md:table-cell">หมวดหมู่</th>
                <th className="text-left px-6 py-4 font-bold text-gray-700 hidden lg:table-cell">แบรนด์</th>
                <th className="text-left px-6 py-4 font-bold text-gray-700 hidden sm:table-cell">ราคา</th>
                <th className="text-center px-6 py-4 font-bold text-gray-700">แนะนำ</th>
                <th className="text-right px-6 py-4 font-bold text-gray-700">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 bg-gray-100 rounded-lg overflow-hidden relative">
                      {product.imageUrls[0] && (
                        <Image
                          src={product.imageUrls[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900 line-clamp-1">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.slug}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{getCategoryName(product.categoryId)}</td>
                  <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">{getBrandName(product.brandId)}</td>
                  <td className="px-6 py-4 font-semibold hidden sm:table-cell">
                    {product.price ? `฿${product.price.toLocaleString()}` : '-'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleFeatured(product.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        product.isFeatured 
                          ? 'text-yellow-500 hover:bg-yellow-50' 
                          : 'text-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {product.isFeatured ? <Star size={20} fill="currentColor" /> : <StarOff size={20} />}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openModal(product)}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            ไม่พบสินค้าที่ค้นหา
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {editingProduct ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ชื่อสินค้า *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">คำอธิบาย *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ราคา (บาท)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">หมวดหมู่ *</label>
                    <select
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      required
                    >
                      <option value="">-- เลือกหมวดหมู่ --</option>
                      {mockCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">แบรนด์ *</label>
                    <select
                      value={formData.brandId}
                      onChange={(e) => setFormData({ ...formData, brandId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      required
                    >
                      <option value="">-- เลือกแบรนด์ --</option>
                      {mockBrands.map(brand => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL รูปภาพ (หลายรูปได้)</label>
                  {formData.imageUrls.map((url, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => {
                          const updated = [...formData.imageUrls];
                          updated[idx] = e.target.value;
                          setFormData({ ...formData, imageUrls: updated });
                        }}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="/products/image.jpg"
                      />
                      {formData.imageUrls.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.imageUrls.filter((_, i) => i !== idx);
                            setFormData({ ...formData, imageUrls: updated });
                          }}
                          className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <X size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, imageUrls: [...formData.imageUrls, ''] })}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    + เพิ่มรูปภาพ
                  </button>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="isFeatured" className="font-medium text-gray-700">แสดงในสินค้าแนะนำ</label>
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
                    {editingProduct ? 'บันทึกการแก้ไข' : 'เพิ่มสินค้า'}
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
