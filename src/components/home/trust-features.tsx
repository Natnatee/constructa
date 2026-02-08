'use client';

import { ShieldCheck, CircleDollarSign, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'คุณภาพมาตรฐาน',
    desc: 'คัดสรรวัสดุจากแบรนด์ชั้นนำ ได้รับการรับรองตามมาตรฐานสากล มั่นใจได้ในความแข็งแรงและทนทาน',
    icon: <ShieldCheck className="w-10 h-10" />,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'ราคาเป็นธรรม',
    desc: 'ราคาโปร่งใส คุ้มค่า ทั้งปลีกและส่ง พร้อมข้อเสนอพิเศษสำหรับช่างและงานโครงการทั่วประเทศ',
    icon: <CircleDollarSign className="w-10 h-10" />,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'บริการจัดส่ง',
    desc: 'รวดเร็ว ตรงเวลา ด้วยทีมงานมืออาชีพและฝูงรถขนส่งที่พร้อมดูแลวัสดุของคุณถึงหน้างานอย่างปลอดภัย',
    icon: <Truck className="w-10 h-10" />,
    color: 'bg-green-50 text-green-600',
  },
];

export default function TrustFeatures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
    </section>
  );
}
