'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, History, Target, ShieldCheck, Truck, Star } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'ประสบการณ์ธุรกิจ', value: '20+', icon: <History className="w-6 h-6" /> },
    { label: 'แบรนด์ชั้นนำ', value: '15+', icon: <Star className="w-6 h-6" /> },
    { label: 'พนักงานผู้เชี่ยวชาญ', value: '30+', icon: <Users className="w-6 h-6" /> },
    { label: 'จัดส่งรวดเร็วทั่วไทย', value: '100%', icon: <Truck className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container-custom">
        {/* Section 1: Hero & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-8 leading-tight">
              โชติพิพัฒน์ค้าไม้ <br />
              <span className="text-primary text-3xl md:text-5xl">เพื่อนคู่คิดงานก่อสร้าง</span>
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>โชติพิพัฒน์ค้าไม้ จำกัด</strong> เริ่มต้นจากการเป็นร้านจำหน่ายไม้แปรรูปขนาดเล็กในย่านบางเขน ด้วยความมุ่งมั่นที่จะส่งมอบวัสดุก่อสร้างคุณภาพดีในราคาที่ยุติธรรมให้กับช่างและเจ้าของบ้านในพื้นที่
              </p>
              <p>
                ตลอดหลายทศวรรษที่ผ่านมา เราได้ขยายไลน์สินค้าให้ครอบคลุมทุกความต้องการของงานก่อสร้าง ทั้งแผ่นยิปซั่ม โครงคร่าว ปูน อุปกรณ์ฮาร์ดแวร์ และเคมีภัณฑ์ โดยร่วมมือกับแบรนด์พาร์ทเนอร์ระดับสากลอย่าง SCG, Shera, TOA และ DOS 
              </p>
              <p>
                เราไม่ได้แค่ขายสินค้า แต่เราคือ <strong>"พันธมิตร"</strong> ที่พร้อมให้คำปรึกษาและซัพพอร์ตโปรเจกต์ของคุณให้สำเร็จลุล่วงด้วยคุณภาพที่ได้มาตรฐานสูงสุด
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-blue-50 relative aspect-[4/3]">
              <Image 
                src="/icon/ภาพปก.jpg"
                alt="หน้าโชติพิพัฒน์ค้าไม้ จำกัด"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 hidden md:block max-w-xs">
              <p className="text-3xl font-black text-primary mb-1 italic">20+ ปี</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">แห่งความไว้วางใจ</p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50/50 p-8 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-sm text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-blue-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Values & Vision */}
        <div className="bg-blue-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 italic underline underline-offset-8 decoration-primary">
                <Target className="text-primary w-10 h-10" />
                วิสัยทัศน์ของเรา
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                “มุ่งมั่นเป็นอันดับหนึ่งในใจลูกค้าด้านการบริการและจำหน่ายวัสดุก่อสร้างที่ครบวงจรที่สุด โดยยึดหลักความซื่อสัตย์ คุณภาพมาตรฐาน และส่งมอบงานที่รวดเร็วทันใจ”
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">✓</div>
                  <p className="text-lg">คัดเลือกสินค้าเกรด A เท่านั้น</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">✓</div>
                  <p className="text-lg">ราคาที่ยุติธรรมสำหรับลูกค้าทุกระดับ</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold">✓</div>
                  <p className="text-lg">การบริการที่เป็นกันเองเปรียบเสมือนครอบครัว</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">คุณภาพที่พิสูจน์ได้</h4>
                  <p className="opacity-70 text-lg">เราตรวจสอบสินค้าทุกชิ้นก่อนส่งมอบ เพื่อให้มั่นใจว่าโครงการของคุณจะไม่มีวันสะดุดเพราะวัสดุที่ไม่ได้มาตรฐาน</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">ระบบจัดส่งที่ทรงพลัง</h4>
                  <p className="opacity-70 text-lg">ด้วยฝูงรถขนส่งที่เป็นของเราเอง เรารับประกันการส่งมอบที่ตรงเวลา ทันต่อการใช้งานหน้างาน ไม่ว่าจะเป็นงานโครงการหรือบ้านพักอาศัย</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
