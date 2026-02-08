export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'สินค้าทั้งหมด', value: '124', color: 'bg-blue-500' },
          { label: 'หมวดหมู่', value: '12', color: 'bg-green-500' },
          { label: 'แบรนด์', value: '8', color: 'bg-purple-500' },
          { label: 'แบนเนอร์', value: '3', color: 'bg-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
