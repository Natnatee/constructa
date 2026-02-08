import Hero from "@/components/home/hero";
import FeaturedCategories from "@/components/home/featured-categories";
import FeaturedProducts from "@/components/home/featured-products";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'คุณภาพมาตรฐาน', desc: 'คัดสรรวัสดุจากแบรนด์ชั้นนำ ได้รับการรับรองตามมาตรฐานสากล' },
              { title: 'ราคาเป็นธรรม', desc: 'ราคาโปร่งใส คุ้มค่า ทั้งปลีกและส่ง พร้อมข้อเสนอพิเศษสำหรับโครงการ' },
              { title: 'บริการจัดส่ง', desc: 'รวดเร็ว ตรงเวลา พร้อมทีมงานมืออาชีพดูแลการขนส่งทั่วประเทศ' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

