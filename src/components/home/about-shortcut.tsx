'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutShortcut() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Slides in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
              <Image 
                src="/icon/ภาพปก.jpg"
                alt="หน้าโชติพิพัฒน์ค้าไม้"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-900/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Text Side - Slides in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full w-fit">
              <span className="text-sm font-bold uppercase tracking-wider">รู้จักเรา</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
              โชติพิพัฒน์ค้าไม้ <br />
              <span className="text-primary text-3xl md:text-4xl">วัสดุก่อสร้างครบวงจร ย่านสุขาภิบาล 5</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              เราคือผู้นำด้านวัสดุก่อสร้างและไม้แปรรูปที่มีประสบการณ์ยาวนานกว่า 20 ปี พร้อมให้บริการช่างและผู้รับเหมาด้วยสินค้าคุณภาพเกรด A และบริการที่อบอุ่นเป็นกันเอง
            </p>

            <ul className="space-y-4 mb-4">
              {[
                'ตัวแทนจำหน่ายแบรนด์ชั้นนำ SCG, Shera, TOA, DOS',
                'มีสต็อกสินค้าพร้อมส่ง รวดเร็ว ทันใจหน้างาน',
                'บริการประเมินราคาและให้คำปรึกษาฟรี โดยผู้เชี่ยวชาญ',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all active:scale-95 group w-fit"
            >
              อ่านเรื่องราวของเรา
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
