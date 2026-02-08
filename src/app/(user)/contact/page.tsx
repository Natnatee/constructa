'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" />,
      title: 'เบอร์โทรศัพท์ติดต่อ',
      details: ['092-656-6264', '094-159-1465', '093-964-5956'],
      href: 'tel:0926566264',
    },
    {
      icon: <Printer className="text-primary" />,
      title: 'เบอร์สำนักงาน / แฟกซ์',
      details: ['Office: 02-948-0411', 'Fax: 02-948-0415'],
      href: 'tel:029480411',
    },
    {
      icon: <MessageCircle className="text-primary" />,
      title: 'LINE Official',
      details: ['ID: @ccpwood'],
      href: 'https://line.me/ti/p/@ccpwood',
    },
    {
      icon: <MapPin className="text-primary" />,
      title: 'ที่อยู่หน้าร้าน',
      details: ['332 ถนนสุขาภิบาล 5 แขวงท่าแร้ง เขตบางเขน กรุงเทพฯ 10220'],
      href: 'https://www.google.com/maps/search/?api=1&query=13.882121,100.652269',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            ติดต่อเรา
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            ยินดีให้บริการและให้คำปรึกษาเรื่องวัสดุก่อสร้างทุกชนิด สอบถามราคา สั่งตัด หรือขอใบเสนอราคาได้ทุกช่องทางครับ
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">ข้อมูลการติดต่อ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 italic text-gray-500 flex items-start gap-3 text-sm">
                <Clock size={18} className="text-primary shrink-0" />
                <p>เวลาทำการ: ทุกวัน จันทร์ - เสาร์ (8:00 - 17:00 น.) <br />ทางเรายินดีให้บริการจัดส่งทั่วประเทศ 🚛</p>
              </div>
            </div>

            {/* Additional Info / CTA */}
            <div className="bg-primary rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 italic">สั่งผลิตหรือขอใบเสนอราคา</h3>
                <p className="opacity-90 mb-6 font-medium">
                  เพียงแอดไลน์ @ccpwood หรือโทรสอบถามโดยตรง <br />
                  เรามีทีมงานคุณภาพพร้อมประเมินราคาและให้คำแนะนำฟรี!
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://line.me/ti/p/@ccpwood"
                    className="bg-[#06C755] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={20} />
                    แอดไลน์สอบถาม
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Contact Image & Form Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-full"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white group relative aspect-[16/10] bg-gray-50">
              <Image 
                src="/contact/contact.jpg"
                alt="ติดต่อโชติพิพัฒน์ค้าไม้"
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white h-1/3">
                <p className="text-lg font-bold italic tracking-wide">“ ใส่ใจคุณภาพ รวดเร็ว บริการจัดส่งทั่วประเทศ ”</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <MapPin className="text-primary shrink-0" />
                แผนที่มายังหน้าร้าน
              </h2>
              <p className="text-gray-500 mt-2 font-medium">332 ถ.สุขาภิบาล 5 แขวงท่าแร้ง เขตบางเขน กรุงเทพฯ</p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=13.882121,100.652269"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 active:scale-95"
            >
              <Send size={20} />
              นำทางด้วย Google Maps
            </a>
          </div>
          <div className="h-[450px] w-full bg-gray-100 relative">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3873.7915570000003!2d100.652269!3d13.882121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDUyJzU1LjYiTiAxMDDCsDM5JzA4LjIiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Chotipipat Map"
               className="w-full h-full transition-all duration-300"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
