import Link from 'next/link';
import { LayoutDashboard, Image as ImageIcon, Tag, Package, Box, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Banners', href: '/admin/banners', icon: ImageIcon },
    { name: 'Categories', href: '/admin/categories', icon: Tag },
    { name: 'Brands', href: '/admin/brands', icon: Box },
    { name: 'Products', href: '/admin/products', icon: Package },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Admin Panel</span>
          </Link>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-primary-light hover:text-primary rounded-lg transition-colors font-medium"
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>กลับสู่หน้าเว็บ</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-gray-800">ระบบจัดการหลังบ้าน</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold">
              AD
            </div>
          </div>
        </header>
        <div className="p-0">
          {children}
        </div>
      </main>
    </div>
  );
}
